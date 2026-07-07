"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Social proof"
        title="What colleagues say"
        lead="Feedback from engineering directors, VPs, and technology leaders at the organizations I've delivered for."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="glass glass-hover flex flex-col p-7"
          >
            <Quote size={20} className="mb-4 shrink-0 text-violet/60" />
            <blockquote className="flex-1 text-sm leading-relaxed text-body">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet/40 to-cyan/30 text-xs font-bold text-bright">
                {t.initial}
              </div>
              <div>
                <p className="text-sm font-semibold text-bright">{t.name}</p>
                <p className="text-xs text-body">{t.company}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
