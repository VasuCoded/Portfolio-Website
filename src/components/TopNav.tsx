"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const CHANNELS = [
  { href: "/", label: "#welcome" },
  { href: "/about", label: "#about-me" },
  { href: "/interests", label: "#yapping" },
  { href: "/portfolio", label: "#portfolio" },
];

export default function TopNav() {
  const pathname = usePathname();

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand">
          <Image className="server-icon" src="/avatar.png" alt="" width={26} height={26} />
          <span className="wordmark">vasu&apos;s server</span>
        </Link>
        <nav className="channels">
          {CHANNELS.map((c) => {
            const active = pathname === c.href;
            return (
              <Link
                key={c.href}
                href={c.href}
                className={`channel-link${active ? " active" : ""}`}
              >
                {active && (
                  <motion.span
                    layoutId="channel-pill"
                    className="channel-pill-bg"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="channel-dot" />
                {c.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
