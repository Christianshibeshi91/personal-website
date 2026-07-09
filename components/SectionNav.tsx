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
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.25, rootMargin: "-80px 0px -50% 0px" }
    );

    els.forEach((el) => observer.observe(el));

    // Show nav after hero scrolled past
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
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
                    width: isActive ? 20 : 6,
                    opacity: isActive ? 1 : isHovered ? 0.7 : 0.35,
                  }}
                  transition={{ duration: 0.2 }}
                  className={`block h-1.5 rounded-full ${
                    isActive
                      ? "bg-gradient-to-r from-violet to-cyan"
                      : "bg-body"
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
