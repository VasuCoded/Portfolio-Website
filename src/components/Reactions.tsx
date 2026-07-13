"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type React0 = { emoji: string; count: number };

export default function Reactions({ initial }: { initial: React0[] }) {
  const [reacts, setReacts] = useState(initial);
  const [mine, setMine] = useState<Record<number, boolean>>({});

  const toggle = (i: number) => {
    setReacts((prev) =>
      prev.map((r, idx) => (idx === i ? { ...r, count: r.count + (mine[i] ? -1 : 1) } : r)),
    );
    setMine((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="reactions">
      {reacts.map((r, i) => (
        <motion.button
          key={r.emoji}
          className={`react-pill${mine[i] ? " mine" : ""}`}
          onClick={() => toggle(i)}
          whileTap={{ scale: 0.85 }}
          aria-pressed={!!mine[i]}
        >
          <span className="react-emoji">{r.emoji}</span>
          <span className="react-count">{r.count}</span>
        </motion.button>
      ))}
      <span className="react-hint">← react, go on</span>
    </div>
  );
}
