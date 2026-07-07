"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, DraftingCompass, TrendingUp, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";
import { projects } from "@/lib/data";

type Project = (typeof projects)[number];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Featured work"
        title="Enterprise solutions, real outcomes"
        lead="Selected work from AT&T, Boeing, WSECU, City National Bank, and current enterprise consulting. Click any card for the full case study."
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
            onClick={() => setSelected(p)}
            className="glass glass-hover flex cursor-pointer flex-col p-6 md:p-7"
            role="button"
            tabIndex={0}
            aria-label={`View case study: ${p.title}`}
            onKeyDown={(e) => e.key === "Enter" && setSelected(p)}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="font-display text-lg font-bold text-bright">{p.title}</h3>
              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">
                  {p.tag}
                </span>
                <ExternalLink size={14} className="text-body/40" />
              </div>
            </div>

            <dl className="space-y-3 text-sm leading-relaxed">
              <div>
                <dt className="mb-1 flex items-center gap-1.5 font-semibold text-bright">
                  <Target size={14} className="text-cyan" /> Business challenge
                </dt>
                <dd className="line-clamp-2">{p.challenge}</dd>
              </div>
              <div>
                <dt className="mb-1 flex items-center gap-1.5 font-semibold text-bright">
                  <DraftingCompass size={14} className="text-cyan" /> Architecture
                </dt>
                <dd className="line-clamp-2">{p.architecture}</dd>
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

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
