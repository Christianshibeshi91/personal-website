"use client";

import { motion } from "framer-motion";
import { Award, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { certifications, education } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="Credentials" title="Microsoft certifications" />
      <div className="grid gap-5 md:grid-cols-3">
        {certifications.map((c, i) => (
          <motion.div
            key={c.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
            className="glass glass-hover relative cursor-pointer overflow-hidden p-7"
          >
            <div
              aria-hidden
              className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-violet/25 to-cyan/15 blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl font-extrabold text-bright">
                  {c.code}
                </span>
                {c.status === "Certified" ? (
                  <Award className="text-cyan" size={22} />
                ) : (
                  <Loader2 className="animate-spin-slow text-violet" size={22} />
                )}
              </div>
              <p className="mt-3 text-sm leading-snug text-bright/90">{c.name}</p>
              <span
                className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                  c.status === "Certified"
                    ? "border border-cyan/40 bg-cyan/10 text-cyan"
                    : "border border-violet/40 bg-violet/10 text-violet"
                }`}
              >
                {c.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-center text-sm">
        <span className="font-semibold text-bright">{education.degree}</span> · {education.school} · {education.year}
      </p>
    </section>
  );
}
