"use client";

import { motion } from "framer-motion";
import { Target, DraftingCompass, TrendingUp } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Featured work"
        title="Enterprise solutions, real outcomes"
        lead="Selected work from AT&T, Boeing, WSECU, City National Bank, and current enterprise consulting. Confidential details are generalized where required."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass glass-hover flex flex-col p-6 md:p-7"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-bright">{p.title}</h3>
              <span className="shrink-0 rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">
                {p.tag}
              </span>
            </div>

            <dl className="space-y-3 text-sm leading-relaxed">
              <div>
                <dt className="mb-1 flex items-center gap-1.5 font-semibold text-bright">
                  <Target size={14} className="text-cyan" /> Business challenge
                </dt>
                <dd>{p.challenge}</dd>
              </div>
              <div>
                <dt className="mb-1 flex items-center gap-1.5 font-semibold text-bright">
                  <DraftingCompass size={14} className="text-cyan" /> Architecture
                </dt>
                <dd>{p.architecture}</dd>
              </div>
              <div>
                <dt className="mb-1 flex items-center gap-1.5 font-semibold text-bright">
                  <TrendingUp size={14} className="text-cyan" /> Outcome
                </dt>
                <dd>{p.outcome}</dd>
              </div>
            </dl>

            <div className="mt-auto flex flex-wrap gap-2 pt-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-white/[0.03] px-2 py-1 text-xs text-body"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
