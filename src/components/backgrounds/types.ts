// Shared contract for the site background canvas effect.
// The effect is implemented as an FXRenderer driven by the CanvasFX harness,
// which owns all boilerplate (DPR sizing, RAF loop, pointer tracking,
// reduced-motion + offscreen pausing); the renderer stays pure draw logic.

/** Canvas dimensions in CSS pixels (the 2D context is pre-scaled by dpr). */
export interface FXDims {
  w: number;
  h: number;
  dpr: number;
}

/** Pointer position in CSS pixels relative to the canvas; active=false when the pointer is away. */
export interface FXMouse {
  x: number;
  y: number;
  active: boolean;
}

/** Per-frame context handed to a renderer. */
export interface FXFrame {
  ctx: CanvasRenderingContext2D;
  dims: FXDims;
  /** Seconds since the renderer was set up. */
  t: number;
  /** Seconds since the previous frame, clamped to avoid tab-restore jumps. */
  dt: number;
  mouse: FXMouse;
  reducedMotion: boolean;
}

/**
 * A background effect. `setup` builds state (re-invoked on resize); `frame`
 * draws one frame. Renderers are responsible for clearing/filling each frame
 * (so trail effects are possible). When reducedMotion is true the harness
 * calls `frame` once and stops.
 */
export interface FXRenderer<S = unknown> {
  setup: (dims: FXDims) => S;
  frame: (f: FXFrame, state: S) => void;
}

/** Brand palette resolved from CSS custom properties (HSL triplets). */
export interface FXPalette {
  primary: string; // teal
  secondary: string; // orange
  accent: string; // violet
  success: string; // green
  foreground: string;
  background: string;
  muted: string;
}

/** Reads the design-system HSL tokens off :root and returns hsl()/hsla() helpers. */
export function readPalette(): FXPalette {
  const css = getComputedStyle(document.documentElement);
  const tok = (name: string, fallback: string) => {
    const v = css.getPropertyValue(name).trim();
    return v || fallback;
  };
  return {
    primary: tok('--primary', '173 80% 50%'),
    secondary: tok('--secondary', '25 95% 60%'),
    accent: tok('--accent', '260 60% 65%'),
    success: tok('--success', '152 70% 50%'),
    foreground: tok('--foreground', '210 20% 95%'),
    background: tok('--background', '222 47% 6%'),
    muted: tok('--muted-foreground', '215 20% 55%'),
  };
}

/** Build an hsla() string from a "H S% L%" triplet. */
export function hsla(triplet: string, alpha: number): string {
  return `hsla(${triplet.replace(/\s+/g, ', ')}, ${alpha})`;
}
