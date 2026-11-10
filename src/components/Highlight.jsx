"use client";

import { motion, useReducedMotion } from "framer-motion";

// Marker-style underline that "draws" itself behind a word in a headline.
const Highlight = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <span className="relative isolate inline-block whitespace-nowrap">
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-[-0.15em] bottom-[0.08em] -z-10 h-[0.42em] origin-left -rotate-1 rounded-sm bg-accent-300"
        initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      />
      {children}
    </span>
  );
};

export default Highlight;
