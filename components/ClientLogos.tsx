"use client";

import { motion } from "framer-motion";
import { clientLogos } from "@/lib/data";

export default function ClientLogos() {
  return (
    <section aria-label="Companies I've worked with" className="border-y border-line py-10">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.25em] text-body/60">
          Enterprise clients &amp; platforms
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {clientLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex h-12 items-center rounded-xl border border-line bg-white/[0.04] px-5 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <span
                className="font-display text-sm font-bold tracking-tight transition-all duration-300"
                style={{
                  color: logo.color,
                  textShadow: `0 0 20px ${logo.color}80`,
                }}
              >
                {logo.abbr}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
