"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillBars, radarAxes } from "@/lib/data";

/** Pure-SVG radar chart — no chart library, keeps the bundle lean. */
function Radar() {
  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const r = 120;
  const n = radarAxes.length;

  const point = (i: number, scale: number) => {
    const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
    return [cx + Math.cos(angle) * r * scale, cy + Math.sin(angle) * r * scale] as const;
  };

  const rings = [0.25, 0.5, 0.75, 1];
  const dataPath =
    radarAxes
      .map((a, i) => {
        const [x, y] = point(i, a.level);
        return `${i === 0 ? "M" : "L"}${x},${y}`;
      })
      .join(" ") + " Z";

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label="Radar chart of skill areas: apps, automation, AI agents, data, governance, pro-code"
      className="mx-auto w-full max-w-sm"
    >
      {rings.map((s) => (
        <polygon
          key={s}
          points={radarAxes.map((_, i) => point(i, s).join(",")).join(" ")}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
        />
      ))}
      {radarAxes.map((_, i) => {
        const [x, y] = point(i, 1);
        return (
          <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(255,255,255,0.08)" />
        );
      })}
      <motion.path
        d={dataPath}
        fill="rgba(139,92,246,0.22)"
        stroke="#8B5CF6"
        strokeWidth={2}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ transformOrigin: "50% 50%" }}
      />
      {radarAxes.map((a, i) => {
        const [x, y] = point(i, 1.18);
        return (
          <text
            key={a.name}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-body text-[11px] font-medium"
          >
            {a.name}
          </text>
        );
      })}
    </svg>
  );
}

export default function SkillsViz() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="Depth where it matters"
      />
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="glass p-8">
            <Radar />
          </div>
        </Reveal>
        <div className="space-y-5">
          {skillBars.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <div>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span className="font-medium text-bright">{s.name}</span>
                  <span className="text-body">{s.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-violet to-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
