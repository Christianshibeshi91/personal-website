"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Target, DraftingCompass, TrendingUp, ArrowRight } from "lucide-react";
import { person } from "@/lib/data";

type Project = {
  title: string;
  tag: string;
  challenge: string;
  architecture: string;
  outcome: string;
  tech: string[];
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-ink/80 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          {/* Panel */}
          <motion.div
            key="panel"
            role="dialog"
            aria-modal
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
            className="fixed inset-x-4 bottom-4 top-[10vh] z-[80] mx-auto max-w-2xl overflow-y-auto rounded-2xl border border-line bg-surface shadow-2xl md:inset-x-auto md:left-1/2 md:right-auto md:-translate-x-1/2"
          >
            {/* Gradient header accent */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet via-msblue to-cyan"
            />

            <div className="p-7 md:p-10">
              {/* Header */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="mb-2 inline-block rounded-full border border-violet/40 bg-violet/10 px-3 py-1 text-xs font-semibold text-violet">
                    {project.tag}
                  </span>
                  <h2 className="font-display text-2xl font-bold text-bright md:text-3xl">
                    {project.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close project details"
                  className="mt-1 shrink-0 cursor-pointer rounded-lg border border-line p-2 text-body transition-colors hover:border-violet/40 hover:text-bright"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Details */}
              <dl className="space-y-6 text-sm leading-relaxed">
                <div className="glass p-5">
                  <dt className="mb-2 flex items-center gap-2 font-semibold text-bright">
                    <Target size={15} className="text-cyan" /> Business challenge
                  </dt>
                  <dd className="text-body">{project.challenge}</dd>
                </div>
                <div className="glass p-5">
                  <dt className="mb-2 flex items-center gap-2 font-semibold text-bright">
                    <DraftingCompass size={15} className="text-cyan" /> Architecture &amp; approach
                  </dt>
                  <dd className="text-body">{project.architecture}</dd>
                </div>
                <div className="glass p-5">
                  <dt className="mb-2 flex items-center gap-2 font-semibold text-bright">
                    <TrendingUp size={15} className="text-cyan" /> Measurable outcome
                  </dt>
                  <dd className="text-body">{project.outcome}</dd>
                </div>
              </dl>

              {/* Tech stack */}
              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-body/60">
                  Tech stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-violet/30 bg-violet/10 px-3 py-1 text-xs font-medium text-violet"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
                <a href={person.resumeUrl} className="btn-primary">
                  View my resume <ArrowRight size={14} />
                </a>
                <a href={`mailto:${person.email}`} className="btn-ghost">
                  Get in touch
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
