"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "about", label: "About" },
  { id: "expertise", label: "Expertise" },
  { id: "copilot", label: "Copilot Studio" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [active, setActive] = useState("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;

      // Show nav only after hero is scrolled past
      setVisible(window.scrollY > 200);

      // Reference line ~40% down the viewport
      const line = window.innerHeight * 0.4;

      // Pick the single section whose top has crossed the line and is closest to it
      let current = "";
      let closest = Infinity;

      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        // Section has entered (top above the line) and is the nearest such section
        if (top <= line) {
          const dist = line - top;
          if (dist < closest) {
            closest = dist;
            current = s.id;
          }
        }
      }

      setActive(current);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
        >
          {sections.map((s) => {
            const isActive = active === s.id;
            const isHovered = hoveredId === s.id;

            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
                aria-label={`Jump to ${s.label}`}
                className="group relative flex cursor-pointer items-center gap-2"
              >
                {/* Label tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.15 }}
                      className="rounded-md border border-line bg-ink/90 px-2.5 py-1 text-xs font-medium text-bright backdrop-blur-sm"
                    >
                      {s.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot */}
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : isHovered ? 0.7 : 0.35,
                    scale: 1,
                    boxShadow: isActive
                      ? "0 0 4px 1px rgba(139,92,246,0.5), 0 0 8px 2px rgba(6,182,212,0.25)"
                      : "none",
                  }}
                  transition={{ duration: 0.3 }}
                  className={`block h-1.5 w-1.5 rounded-full ${
                    isActive ? "bg-white" : "bg-body"
                  }`}
                />
              </button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
