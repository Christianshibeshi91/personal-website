"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight ambient particle field on a plain canvas.
 * Deliberately implemented without Three.js to keep the bundle small
 * and the Lighthouse performance score high — visually equivalent for
 * this subtle background use case.
 */
export default function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let h = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    const N = 70;
    const dots = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
      r: (Math.random() * 1.4 + 0.4) * devicePixelRatio,
    }));

    let raf = 0;
    let mx = -9999;
    let my = -9999;

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mx = (e.clientX - rect.left) * devicePixelRatio;
      my = (e.clientY - rect.top) * devicePixelRatio;
    };

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };

    const frame = () => {
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        // Gentle mouse parallax repulsion
        const dx = d.x - mx;
        const dy = d.y - my;
        const dist = Math.hypot(dx, dy);
        if (dist < 120 * devicePixelRatio && dist > 0) {
          d.x += (dx / dist) * 0.6;
          d.y += (dy / dist) * 0.6;
        }
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(139, 92, 246, 0.35)";
        ctx.fill();
      }
      // Connective lines between nearby particles
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const a = dots[i];
          const b = dots[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          const max = 110 * devicePixelRatio;
          if (dist < max) {
            ctx.strokeStyle = `rgba(46, 124, 238, ${(1 - dist / max) * 0.18})`;
            ctx.lineWidth = devicePixelRatio * 0.5;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    };

    if (!reduce) {
      raf = requestAnimationFrame(frame);
      window.addEventListener("mousemove", onMove, { passive: true });
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
