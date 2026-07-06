"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { expertise } from "@/lib/data";

export default function Expertise() {
  const groups = Array.from(new Set(expertise.map((e) => e.group)));

  return (
    <section id="expertise" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        eyebrow="Expertise"
        title="The full Microsoft business applications stack"
        lead="From canvas apps to Copilot agents to the governance layer that keeps a tenant healthy — plus the pro-code skills to extend past low-code limits."
      />
      <div className="space-y-10">
        {groups.map((group) => (
          <div key={group}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-body">
              {group}
            </h3>
            <div className="flex flex-wrap gap-3">
              {expertise
                .filter((e) => e.group === group)
                .map(({ name, icon: Icon }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    className="glass glass-hover flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-bright"
                  >
                    <Icon size={16} className="text-violet" />
                    {name}
                  </motion.div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
