"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { rotatingTitles } from "@/lib/data";

export default function RotatingTitles() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % rotatingTitles.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={rotatingTitles[i]}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.35 }}
        className="grad-text inline-block"
      >
        {rotatingTitles[i]}
      </motion.span>
    </AnimatePresence>
  );
}
