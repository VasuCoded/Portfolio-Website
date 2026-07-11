"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function pickIndex(len: number, exclude?: number): number {
  if (len <= 1) return 0;
  let i = Math.floor(Math.random() * len);
  while (i === exclude) i = Math.floor(Math.random() * len);
  return i;
}

export default function RandomPicker<T>({
  items,
  render,
  shuffleLabel = "shuffle",
  className,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
  shuffleLabel?: string;
  className?: string;
}) {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    // Random pick must happen client-side only, after mount, to avoid a
    // server/client hydration mismatch — this is the correct pattern here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIndex(pickIndex(items.length));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shuffle = useCallback(() => {
    setIndex((prev) => pickIndex(items.length, prev ?? undefined));
  }, [items.length]);

  return (
    <div className={className}>
      <div className="random-pick-slot">
        {index === null ? (
          <div className="random-pick-skel" aria-hidden />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {render(items[index])}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
      <button className="btn btn-line btn-sm random-pick-btn" onClick={shuffle} disabled={index === null}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {shuffleLabel}
      </button>
    </div>
  );
}
