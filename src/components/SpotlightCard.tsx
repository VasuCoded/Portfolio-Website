"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

export default function SpotlightCard({
  icon,
  accent = "var(--moss)",
  title,
  tagline,
  meta,
  children,
}: {
  icon: React.ReactNode;
  accent?: string;
  title: string;
  tagline: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 220, damping: 22 });
  const bgX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const bgY = useTransform(my, [0, 1], ["0%", "100%"]);
  const glow = useMotionTemplate`radial-gradient(280px circle at ${bgX} ${bgY}, rgba(255,255,255,0.5), transparent 70%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function handleLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      className="spot-card"
      style={{ rotateX, rotateY, transformPerspective: 900, borderColor: open ? accent : undefined }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ y: -4 }}
    >
      <motion.div className="spot-glow" style={{ background: glow }} aria-hidden />
      <button className="spot-card-head" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <div className="spot-icon" style={{ background: accent }}>
          {icon}
        </div>
        <div className="spot-head-text">
          <div className="spot-title">{title}</div>
          <div className="spot-tagline">{tagline}</div>
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
    </motion.div>
  );
}
