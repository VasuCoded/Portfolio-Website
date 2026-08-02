"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCycle } from "@/lib/useCycle";

const STATUSES = [
  "🎧 BoyWithUke — Two Moons",
  "📖 down an SCP rabbit hole",
  "⌨️ arguing with a rate limit",
  "🛠️ poking at After Hours",
  "☕ JEE prep, allegedly",
  "🗺️ redrawing a containment site",
];

export default function StatusTicker() {
  const status = useCycle(STATUSES, 3400);
  return (
    <div className="status-ticker">
      <span className="status-ticker-dot" />
      <div className="status-ticker-text">
        <AnimatePresence mode="wait">
          <motion.span
            key={status}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.25 }}
          >
            {status}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
