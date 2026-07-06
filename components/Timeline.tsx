"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { timeline } from "@/lib/data";

export default function Timeline() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Nine years across regulated industries"
      />
      <ol className="relative border-l border-line pl-8">
        {timeline.map((t, i) => (
          <motion.li
            key={t.company}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative pb-12 last:pb-0"
          >
            <span
              aria-hidden
              className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-violet bg-ink shadow-[0_0_16px_rgba(139,92,246,0.7)]"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan/80">
              {t.period}
            </p>
            <h3 className="mt-1 font-display text-xl font-bold text-bright">
              {t.company}
            </h3>
            <p className="text-sm font-medium text-violet">{t.role}</p>
            <p className="mt-2 text-sm leading-relaxed md:text-base">{t.summary}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
