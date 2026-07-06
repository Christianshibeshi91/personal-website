"use client";

import { motion } from "framer-motion";
import { GitBranch, Boxes, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { architecturePillars } from "@/lib/data";

const pipeline = [
  { Icon: GitBranch, label: "Git / Azure DevOps" },
  { Icon: Boxes, label: "Dev → Test (managed)" },
  { Icon: Rocket, label: "Production" },
];

export default function PlatformArchitecture() {
  return (
    <section id="architecture" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Power Platform architecture"
        title="Low-code, engineered like software"
        lead="The difference between an app that demos well and a platform an enterprise can rely on is architecture, ALM, and governance. This is how I build."
      />

      {/* Deployment pipeline strip */}
      <Reveal className="mb-12">
        <div className="glass flex flex-col items-stretch gap-3 p-5 md:flex-row md:items-center md:justify-between md:gap-0 md:p-6">
          {pipeline.map(({ Icon, label }, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="glass flex w-full items-center justify-center gap-2.5 px-4 py-3 text-sm font-semibold text-bright md:w-auto md:flex-1">
                <Icon size={16} className="text-cyan" /> {label}
              </div>
              {i < pipeline.length - 1 ? (
                <div className="relative mx-1 hidden h-px flex-1 overflow-hidden bg-line md:block">
                  <motion.span
                    aria-hidden
                    className="absolute top-1/2 h-[3px] w-8 -translate-y-1/2 rounded-full bg-gradient-to-r from-transparent via-cyan to-transparent"
                    animate={{ left: ["-15%", "110%"] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {architecturePillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="glass glass-hover h-full p-6">
              <h3 className="font-display text-base font-semibold text-bright">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
