import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { FXDims, FXMouse, FXRenderer } from './types';

interface CanvasFXProps<S> {
  renderer: FXRenderer<S>;
  className?: string;
}

/**
 * Drives an FXRenderer on a DPR-correct, parent-filling canvas.
 *
 * Responsibilities (so renderers stay pure draw logic):
 *  - sizes the canvas to its parent via ResizeObserver, scaled by devicePixelRatio
 *  - runs a single requestAnimationFrame loop with clamped dt
 *  - tracks the pointer in CSS pixels relative to the canvas
 *  - pauses when the tab is hidden or the canvas scrolls out of view
 *  - honors prefers-reduced-motion (draws one static frame, no loop)
 */
function CanvasFX<S>({ renderer, className }: CanvasFXProps<S>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  // Keep the latest renderer in a ref so swapping variants doesn't tear down
  // the pointer/observer wiring mid-flight.
  const rendererRef = useRef(renderer);
  rendererRef.current = renderer;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const dims: FXDims = { w: 0, h: 0, dpr: Math.min(window.devicePixelRatio || 1, 2) };
    const mouse: FXMouse = { x: 0, y: 0, active: false };

    let state: S = rendererRef.current.setup(dims);
    let raf = 0;
    let running = false;
    let visible = true;
    let onScreen = true;
    let startTs = 0;
    let lastTs = 0;

    const resize = () => {
      const rect = parent.getBoundingClientRect();
      const prev: FXDims = { ...dims };
      dims.w = Math.max(1, Math.round(rect.width));
      dims.h = Math.max(1, Math.round(rect.height));
      dims.dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (dims.w === prev.w && dims.h === prev.h && dims.dpr === prev.dpr) return;
      canvas.width = Math.round(dims.w * dims.dpr);
      canvas.height = Math.round(dims.h * dims.dpr);
      canvas.style.width = `${dims.w}px`;
      canvas.style.height = `${dims.h}px`;
      ctx.setTransform(dims.dpr, 0, 0, dims.dpr, 0, 0);
      // Adapt state to the new size. On the first real measurement (prev was
      // zero-size) there is nothing to adapt, so build fresh. Otherwise prefer
      // the renderer's non-destructive resize so the effect stays continuous
      // (mobile address-bar show/hide must NOT reshuffle the scene).
      const renderer = rendererRef.current;
      if (prev.w <= 1 || prev.h <= 1 || !renderer.resize) {
        state = renderer.setup(dims);
      } else {
        state = renderer.resize(dims, state, prev);
      }
      // Redraw immediately so a paused/reduced canvas never shows a stale buffer.
      drawOnce(lastTs || performance.now());
    };

    const drawOnce = (ts: number) => {
      if (!startTs) startTs = ts;
      const t = (ts - startTs) / 1000;
      rendererRef.current.frame({ ctx, dims, t, dt: 0, mouse, reducedMotion: true }, state);
    };

    const loop = (ts: number) => {
      if (!startTs) startTs = ts;
      if (!lastTs) lastTs = ts;
      const t = (ts - startTs) / 1000;
      const dt = Math.min((ts - lastTs) / 1000, 1 / 20); // clamp to avoid jumps
      lastTs = ts;
      rendererRef.current.frame({ ctx, dims, t, dt, mouse, reducedMotion: false }, state);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduceMotion) return;
      if (!visible || !onScreen) return;
      running = true;
      lastTs = 0;
      raf = requestAnimationFrame(loop);
    };

    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = mouse.x >= 0 && mouse.y >= 0 && mouse.x <= dims.w && mouse.y <= dims.h;
    };
    const onPointerLeave = () => {
      mouse.active = false;
    };
    const onVisibility = () => {
      visible = document.visibilityState === 'visible';
      if (visible) start();
      else stop();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const io = new IntersectionObserver(
      (entries) => {
        onScreen = entries[0]?.isIntersecting ?? true;
        if (onScreen) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibility);

    resize();
    if (reduceMotion) drawOnce(performance.now());
    else start();

    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
    // Re-init when the active renderer identity or motion preference changes.
  }, [renderer, reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
    />
  );
}

export default CanvasFX;
