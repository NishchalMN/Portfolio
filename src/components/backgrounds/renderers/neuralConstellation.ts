import type { FXRenderer, FXDims, FXFrame } from '../types';
import { readPalette, hsla } from '../types';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface Pulse {
  fromNode: number;
  toNode: number;
  progress: number;
  duration: number;
  color: string;
}

interface State {
  nodes: Node[];
  pulses: Pulse[];
  nextPulseTime: number;
  palette: ReturnType<typeof readPalette>;
  maxEdgeDistance: number;
  mouseAttractRadius: number;
}

function clamp(val: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, val));
}

function randomInRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function distance(x1: number, y1: number, x2: number, y2: number): number {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}

function setup(dims: FXDims): State {
  const area = dims.w * dims.h;
  const isMobile = dims.w < 768;
  
  const nodeCount = isMobile
    ? Math.round(clamp(area / 22000, 18, 34))
    : Math.round(clamp(area / 14000, 28, 70));

  const nodes: Node[] = [];
  for (let i = 0; i < nodeCount; i++) {
    const speedPxPerSec = randomInRange(6, 14);
    const angle = Math.random() * Math.PI * 2;
    
    nodes.push({
      x: Math.random() * dims.w,
      y: Math.random() * dims.h,
      vx: Math.cos(angle) * speedPxPerSec,
      vy: Math.sin(angle) * speedPxPerSec,
      radius: randomInRange(1.2, 2.6),
    });
  }

  const palette = readPalette();
  const maxEdgeDistance = isMobile ? 120 : 150;
  const mouseAttractRadius = 180;

  return {
    nodes,
    pulses: [],
    nextPulseTime: randomInRange(0.6, 1.2),
    palette,
    maxEdgeDistance,
    mouseAttractRadius,
  };
}

function frame(f: FXFrame, state: State): void {
  const { ctx, dims, t, dt, mouse, reducedMotion } = f;
  const { nodes, pulses, palette, maxEdgeDistance, mouseAttractRadius } = state;

  ctx.clearRect(0, 0, dims.w * dims.dpr, dims.h * dims.dpr);

  if (!reducedMotion) {
    // Update node positions
    for (const node of nodes) {
      // Apply mouse attraction
      if (mouse.active) {
        const distToMouse = distance(node.x, node.y, mouse.x, mouse.y);
        if (distToMouse < mouseAttractRadius) {
          const attractStrength = (1 - distToMouse / mouseAttractRadius) * 50;
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          if (len > 0) {
            node.vx += (dx / len) * attractStrength * dt;
            node.vy += (dy / len) * attractStrength * dt;
          }
        }
      }

      // Clamp velocity
      const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
      const maxSpeed = 40;
      if (speed > maxSpeed) {
        node.vx = (node.vx / speed) * maxSpeed;
        node.vy = (node.vy / speed) * maxSpeed;
      }

      // Update position
      node.x += node.vx * dt;
      node.y += node.vy * dt;

      // Bounce off edges
      if (node.x < 0) {
        node.x = 0;
        node.vx = Math.abs(node.vx);
      } else if (node.x > dims.w) {
        node.x = dims.w;
        node.vx = -Math.abs(node.vx);
      }

      if (node.y < 0) {
        node.y = 0;
        node.vy = Math.abs(node.vy);
      } else if (node.y > dims.h) {
        node.y = dims.h;
        node.vy = -Math.abs(node.vy);
      }
    }

    // Spawn pulses
    if (t >= state.nextPulseTime) {
      const maxPulses = Math.max(3, Math.floor(nodes.length / 3));
      if (pulses.length < maxPulses) {
        // Find a random edge
        const fromIdx = Math.floor(Math.random() * nodes.length);
        const fromNode = nodes[fromIdx];
        
        // Find nearby nodes
        const nearbyIndices: number[] = [];
        for (let i = 0; i < nodes.length; i++) {
          if (i === fromIdx) continue;
          const dist = distance(fromNode.x, fromNode.y, nodes[i].x, nodes[i].y);
          if (dist <= maxEdgeDistance) {
            nearbyIndices.push(i);
          }
        }

        if (nearbyIndices.length > 0) {
          const toIdx = nearbyIndices[Math.floor(Math.random() * nearbyIndices.length)];
          const useViolet = Math.random() > 0.5;
          
          pulses.push({
            fromNode: fromIdx,
            toNode: toIdx,
            progress: 0,
            duration: 0.8,
            color: useViolet ? palette.accent : palette.secondary,
          });
        }
      }
      state.nextPulseTime = t + randomInRange(0.6, 1.2);
    }

    // Update pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      const pulse = pulses[i];
      pulse.progress += dt / pulse.duration;
      if (pulse.progress >= 1) {
        pulses.splice(i, 1);
      }
    }
  }

  // Draw edges
  ctx.lineWidth = 1;
  for (let i = 0; i < nodes.length; i++) {
    const nodeA = nodes[i];
    for (let j = i + 1; j < nodes.length; j++) {
      const nodeB = nodes[j];
      const dist = distance(nodeA.x, nodeA.y, nodeB.x, nodeB.y);
      
      if (dist <= maxEdgeDistance) {
        const alpha = (1 - dist / maxEdgeDistance) * 0.18;
        
        // Check if node is near mouse for brightening
        let brighten = 1;
        if (!reducedMotion && mouse.active) {
          const distAToMouse = distance(nodeA.x, nodeA.y, mouse.x, mouse.y);
          const distBToMouse = distance(nodeB.x, nodeB.y, mouse.x, mouse.y);
          if (distAToMouse < mouseAttractRadius || distBToMouse < mouseAttractRadius) {
            brighten = 1.8;
          }
        }
        
        ctx.strokeStyle = hsla(palette.primary, alpha * brighten);
        ctx.beginPath();
        ctx.moveTo(nodeA.x, nodeA.y);
        ctx.lineTo(nodeB.x, nodeB.y);
        ctx.stroke();
      }
    }
  }

  // Draw mouse interactions
  if (!reducedMotion && mouse.active) {
    // Draw edges from cursor to nearby nodes
    ctx.lineWidth = 1;
    for (const node of nodes) {
      const dist = distance(node.x, node.y, mouse.x, mouse.y);
      if (dist < mouseAttractRadius) {
        const alpha = (1 - dist / mouseAttractRadius) * 0.25;
        ctx.strokeStyle = hsla(palette.primary, alpha);
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        ctx.lineTo(node.x, node.y);
        ctx.stroke();
      }
    }

    // Draw cursor glow
    ctx.globalCompositeOperation = 'lighter';
    const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 40);
    gradient.addColorStop(0, hsla(palette.primary, 0.3));
    gradient.addColorStop(0.5, hsla(palette.primary, 0.1));
    gradient.addColorStop(1, hsla(palette.primary, 0));
    ctx.fillStyle = gradient;
    ctx.fillRect(mouse.x - 40, mouse.y - 40, 80, 80);
    ctx.globalCompositeOperation = 'source-over';
  }

  // Draw nodes
  for (const node of nodes) {
    let alpha = 0.8;
    let useGlow = false;
    
    if (!reducedMotion && mouse.active) {
      const distToMouse = distance(node.x, node.y, mouse.x, mouse.y);
      if (distToMouse < mouseAttractRadius) {
        alpha = 1;
        useGlow = true;
      }
    }

    if (useGlow || node.radius > 2.2) {
      ctx.globalCompositeOperation = 'lighter';
      const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
      glowGradient.addColorStop(0, hsla(palette.primary, alpha * 0.4));
      glowGradient.addColorStop(0.5, hsla(palette.primary, alpha * 0.15));
      glowGradient.addColorStop(1, hsla(palette.primary, 0));
      ctx.fillStyle = glowGradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
    }

    ctx.fillStyle = hsla(palette.primary, alpha);
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  // Draw pulses
  if (!reducedMotion) {
    for (const pulse of pulses) {
      const fromNode = nodes[pulse.fromNode];
      const toNode = nodes[pulse.toNode];
      const t = pulse.progress;
      
      const x = fromNode.x + (toNode.x - fromNode.x) * t;
      const y = fromNode.y + (toNode.y - fromNode.y) * t;
      
      // Draw pulse glow
      ctx.globalCompositeOperation = 'lighter';
      const pulseGradient = ctx.createRadialGradient(x, y, 0, x, y, 6);
      pulseGradient.addColorStop(0, hsla(pulse.color, 0.8));
      pulseGradient.addColorStop(0.5, hsla(pulse.color, 0.3));
      pulseGradient.addColorStop(1, hsla(pulse.color, 0));
      ctx.fillStyle = pulseGradient;
      ctx.beginPath();
      ctx.arc(x, y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';
      
      // Draw pulse core
      ctx.fillStyle = hsla(pulse.color, 1);
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

/**
 * Adapt the existing scene to a new canvas size without re-randomizing it.
 * Node positions are scaled proportionally (and clamped), so a resize — e.g.
 * the mobile address bar collapsing on scroll — shifts the mesh smoothly
 * instead of snapping to a fresh layout. Only a full rebuild happens when the
 * mobile/desktop breakpoint is crossed (the node-count target changes there).
 */
function resize(dims: FXDims, state: State, prev: FXDims): State {
  if (prev.w < 768 !== dims.w < 768) return setup(dims);
  const sx = prev.w > 0 ? dims.w / prev.w : 1;
  const sy = prev.h > 0 ? dims.h / prev.h : 1;
  for (const node of state.nodes) {
    node.x = clamp(node.x * sx, 0, dims.w);
    node.y = clamp(node.y * sy, 0, dims.h);
  }
  return state;
}

export const neuralConstellation: FXRenderer<State> = { setup, frame, resize };
