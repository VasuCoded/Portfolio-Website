"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ExpandableCard({
  title,
  summary,
  meta,
  featured = false,
  defaultOpen = false,
  children,
}: {
  title: string;
  summary: string;
  meta?: React.ReactNode;
  featured?: boolean;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`xcard${featured ? " featured" : ""}`}>
      <button
        className="xcard-head"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="xcard-head-left">
          <div className="xcard-title">{title}</div>
          <div className="xcard-summary">{summary}</div>
        </div>
        {meta}
        <motion.span
          className="xcard-chevron"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="xcard-body-inner">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
