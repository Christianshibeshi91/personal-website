"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Github } from "lucide-react";
import {
  AppWindow,
  Workflow,
  BarChart3,
  Bot,
  Share2,
  Cloud,
  Layers,
} from "lucide-react";
import ParticleField from "./ParticleField";
import RotatingTitles from "./RotatingTitles";
import { person, heroStats } from "@/lib/data";

const orbitIcons = [
  { Icon: AppWindow, label: "Power Apps", className: "left-[-8%] top-[12%]", delay: 0 },
  { Icon: Workflow, label: "Power Automate", className: "right-[-6%] top-[6%]", delay: 0.8 },
  { Icon: Bot, label: "Copilot", className: "left-[-12%] top-[52%]", delay: 1.6 },
  { Icon: BarChart3, label: "Power BI", className: "right-[-10%] top-[46%]", delay: 2.4 },
  { Icon: Share2, label: "SharePoint", className: "left-[2%] bottom-[4%]", delay: 3.2 },
  { Icon: Cloud, label: "Azure", className: "right-[0%] bottom-[10%]", delay: 4.0 },
  { Icon: Layers, label: "OutSystems", className: "right-[26%] top-[-6%]", delay: 4.8 },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <ParticleField />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 md:grid-cols-[1.15fr_0.85fr]">
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
            mission-critical applications, intelligent agents, and governed automation —
            with the architecture and ALM discipline to run them for years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href={person.resumeUrl} className="btn-primary">
              <Download size={16} /> View resume
            </a>
            <a href="#projects" className="btn-ghost">
              View projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} /> Contact me
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Github size={16} /> GitHub
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6"
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

        {/* Portrait with orbiting platform icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-violet/30 via-msblue/20 to-cyan/25 blur-2xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-2">
            <Image
              src="/portrait.png"
              alt={`${person.name}, Power Platform Subject Matter Expert`}
              width={900}
              height={1100}
              priority
              quality={95}
              sizes="(max-width: 768px) 90vw, 480px"
              className="h-auto w-full rounded-[1.6rem] object-cover object-top"
            />
          </div>

          {orbitIcons.map(({ Icon, label, className, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 + delay * 0.08 }}
              className={`glass absolute hidden items-center gap-2 px-3 py-2 text-xs font-medium text-bright shadow-lg md:flex ${className}`}
              style={{ animation: `float 7s ease-in-out ${delay}s infinite` }}
            >
              <Icon size={14} className="text-cyan" /> {label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
