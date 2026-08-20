"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import ParticleField from "./ParticleField";
import RequestResumeButton from "./RequestResumeButton";
import RotatingTitles from "./RotatingTitles";
import { person, heroStats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <ParticleField />

      <div className="relative mx-auto max-w-3xl px-6 pb-24 text-center">
        {/* Copy */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {person.location} · Enterprise low-code & AI agents
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 font-display text-4xl font-extrabold leading-[1.08] text-bright md:text-6xl"
          >
            {person.name.split(" ")[0]}{" "}
            <span className="grad-text">{person.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 h-9 font-display text-lg font-semibold text-bright/90 md:text-2xl"
          >
            <RotatingTitles />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 max-w-xl text-base leading-relaxed md:text-lg"
          >
            I help enterprises turn Microsoft Power Platform and Copilot Studio into
            mission-critical applications, intelligent agents, and governed automation,
            with the architecture and ALM discipline to run them for years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <RequestResumeButton className="btn-primary" />
            <a href="#projects" className="btn-ghost">
              View projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} /> Contact me
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mx-auto mt-12 grid max-w-lg grid-cols-3 gap-6"
          >
            {heroStats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-bright md:text-3xl">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
