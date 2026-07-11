"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

const CHANNEL_PREVIEWS = [
  {
    href: "/about",
    label: "#about-me",
    desc: "The human version, not the resume pitch — who I am when I'm not building something.",
  },
  {
    href: "/interests",
    label: "#yapping",
    desc: "SCP lore, whatever's stuck in my head this week, and a BoyWithUke problem I won't apologize for.",
  },
  {
    href: "/portfolio",
    label: "#portfolio",
    desc: "What I've actually shipped, what's live right now, and what's still just an idea doc.",
  },
];

export default function Home() {
  return (
    <>
      <section className="block" style={{ paddingTop: 56, paddingBottom: 40 }}>
        <div className="hero-flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", width: 104, height: 104, flexShrink: 0 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 104,
                height: 104,
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid var(--line)",
              }}
            >
              <Image
                src="/avatar.png"
                alt="Vasu"
                width={104}
                height={104}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
            <span className="status-dot" style={{ position: "absolute", bottom: 2, right: 2 }} />
          </motion.div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <Reveal>
              <p className="mono-bit" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5 }}>
                <span className="dot-sm" />
                drop year · JEE Advanced &amp; UGEE, 2027
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1
                style={{
                  fontSize: "clamp(34px, 6vw, 46px)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  marginTop: 10,
                }}
              >
                Vasu
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="role-pills-row" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 14 }}>
                {["systems", "discord infra", "ops", "founder"].map((r) => (
                  <span
                    key={r}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "var(--mono)",
                      fontSize: 12,
                      padding: "5px 12px",
                      borderRadius: 999,
                      background: "var(--moss-soft)",
                      color: "var(--moss-text)",
                    }}
                  >
                    <span className="dot-sm" style={{ background: "var(--moss-text)" }} />
                    {r}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <p style={{ marginTop: 16, fontSize: 15.5, color: "var(--ink-soft)", maxWidth: 460 }}>
                This is my little corner of the internet — built like the Discord server I&apos;d
                actually want to hang out in. Pick a channel: the about page, the interests page
                where I yap, or the portfolio if you&apos;re here for the actual work.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero-actions-row" style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
                <a className="btn btn-fill" href="mailto:sanskar.ch.inbox@gmail.com">
                  Email me
                </a>
                <a className="btn btn-line" href="https://github.com/VasuCoded/" target="_blank" rel="noopener">
                  GitHub ↗
                </a>
                <Link className="btn btn-clay" href="/portfolio">
                  See the work →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="block" style={{ borderTop: "1px solid var(--line)" }}>
        <Reveal>
          <div className="block-head">
            <div className="block-tag"># server-guide</div>
            <p className="block-topic">pick a channel, any channel</p>
          </div>
        </Reveal>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
          {CHANNEL_PREVIEWS.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.08}>
              <Link href={c.href} style={{ textDecoration: "none", display: "block" }}>
                <motion.div
                  className="panel"
                  whileHover={{ y: -3, borderColor: "var(--moss)" }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    marginTop: 0,
                    cursor: "pointer",
                  }}
                >
                  <div>
                    <h3 style={{ fontFamily: "var(--mono)", fontSize: 15, color: "var(--moss-text)", fontWeight: 700 }}>
                      {c.label}
                    </h3>
                    <p style={{ marginTop: 6, color: "var(--ink-soft)", fontSize: 14 }}>{c.desc}</p>
                  </div>
                  <motion.span
                    aria-hidden
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    style={{ fontSize: 18, color: "var(--ink-muted)", flexShrink: 0 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
