"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HiCheck } from "react-icons/hi2";
import { T } from "@/i18n/LanguageProvider";

const tasks = [
  { de: "Belege verbucht", en: "Receipts booked" },
  { de: "UVA übermittelt", en: "VAT return filed" },
  { de: "Löhne abgerechnet", en: "Payroll done" },
  { de: "Fristen im Blick", en: "Deadlines covered" },
];

// Decorative illustration of a "monthly status" card for the hero.
const HeroCard = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-4 -z-10 rotate-3 rounded-[2rem] bg-accent-300" />
      <div className="absolute -inset-4 -z-20 -rotate-2 rounded-[2rem] bg-brand-100" />
      <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl shadow-neutral-900/10">
        <div className="flex items-center justify-between">
          <p className="font-display text-sm font-semibold text-neutral-950">
            <T de="Ihr Monat" en="Your month" />
          </p>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
            <T de="Alles erledigt" en="All done" />
          </span>
        </div>
        <ul className="mt-6 space-y-3">
          {tasks.map((task, index) => (
            <motion.li
              key={task.de}
              className="flex items-center gap-3 rounded-2xl bg-neutral-50 px-4 py-3"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.25, duration: 0.4 }}
            >
              <motion.span
                className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-emerald-500"
                initial={{ scale: shouldReduceMotion ? 1 : 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.7 + index * 0.25,
                  type: "spring",
                  stiffness: 400,
                  damping: 15,
                }}
              >
                <HiCheck className="h-4 w-4 text-white" />
              </motion.span>
              <span className="text-sm font-medium text-neutral-800"><T de={task.de} en={task.en} /></span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
          <span className="text-3xl">☕</span>
          <p className="text-sm text-neutral-600">
            <T
              de="Und Sie? Kümmern sich um Ihr Geschäft."
              en="And you? You focus on your business."
            />
          </p>
        </div>
      </div>
      <motion.div
        className="absolute -right-4 -top-6 rotate-6 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-neutral-900 shadow-lg ring-1 ring-neutral-200"
        initial={{ scale: shouldReduceMotion ? 1 : 0, rotate: 6 }}
        animate={{ scale: 1, rotate: 6 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 300, damping: 12 }}
      >
        <T de="UVA-Frist am 15.? ✓" en="VAT deadline on the 15th? ✓" />
      </motion.div>
    </div>
  );
};

export default HeroCard;
