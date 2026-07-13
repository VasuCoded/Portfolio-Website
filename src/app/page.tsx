"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ChannelHeader from "@/components/ChannelHeader";
import Whiteboard from "@/components/Whiteboard";
import Reactions from "@/components/Reactions";
import Redacted from "@/components/Redacted";
import TypingDots from "@/components/TypingDots";

const ROLES = [
  { label: "systems", color: "#5b6f4d" },
  { label: "discord infra", color: "#5a5891" },
  { label: "ops", color: "#a1533f" },
  { label: "founder", color: "#a67c27" },
];

export default function Home() {
  return (
    <>
      <ChannelHeader name="welcome" topic="intro & how this server's laid out" />
      <div className="content-inner">
        {/* profile popout */}
        <Reveal>
          <div className="profile-card">
            <div className="profile-banner" />
            <div className="profile-body">
              <div className="profile-av-wrap">
                <motion.div
                  className="profile-av"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image src="/avatar.png" alt="Vasu" width={92} height={92} priority />
                </motion.div>
                <span className="status-dot profile-status" />
                <span className="profile-sticker" aria-hidden>
                  ✦
                </span>
              </div>

              <div className="profile-info">
                <h1 className="profile-name">Vasu</h1>
                <p className="profile-handle">@_whois.vasu · drop year, 2027</p>

                <div className="profile-roles">
                  {ROLES.map((r) => (
                    <span
                      key={r.label}
                      className="role-tag"
                      style={{ ["--role" as string]: r.color } as React.CSSProperties}
                    >
                      <span className="role-dot" />
                      {r.label}
                    </span>
                  ))}
                </div>

                <div className="profile-note">
                  <span className="profile-note-k">about me</span>
                  <p>
                    Systems and Discord infra, an SCP habit, and a{" "}
                    <Redacted>BoyWithUke</Redacted>
                    {" "}problem. This is my corner of the internet, run like the server I&apos;d
                    actually want to hang out in.
                  </p>
                </div>

                <div className="hero-actions-row" style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                  <a className="btn btn-fill" href="mailto:sanskar.ch.inbox@gmail.com">
                    Email me
                  </a>
                  <a className="btn btn-line" href="https://github.com/VasuCoded/" target="_blank" rel="noopener">
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* pinned message */}
        <div className="section-gap">
          <Reveal>
            <div className="msg-divider">
              <span>📌 pinned</span>
            </div>
            <div className="idea-row" style={{ borderStyle: "solid", background: "var(--paper)" }}>
              <span className="idea-tag">pinned</span>
              <div>
                <p style={{ margin: 0 }}>
                  Server created 2026 · boost level 0 · vibe: still under construction in a couple
                  spots. Two channels live here right now — <strong>#about-me</strong>{" "}
                  for the actual person plus what I yap about (music, SCP lore), and{" "}
                  <strong>#portfolio</strong>{" "}
                  for the stuff I&apos;ve built. Rail&apos;s on the left, roster&apos;s on the right.
                </p>
                <Reactions
                  initial={[
                    { emoji: "🔥", count: 7 },
                    { emoji: "👀", count: 12 },
                    { emoji: "🫡", count: 4 },
                  ]}
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* quick facts + whiteboard */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag"># quick facts</div>
            </div>
          </Reveal>
          <div className="card-grid">
            <Reveal delay={0.04}>
              <div className="perm-panel" style={{ height: "100%" }}>
                <div className="perm-row">
                  <span className="perm-label">Based around<span className="mono-bit">India</span></span>
                </div>
                <div className="perm-row">
                  <span className="perm-label">Currently<span className="mono-bit">prepping JEE Advanced + UGEE, 2027</span></span>
                </div>
                <div className="perm-row">
                  <span className="perm-label">Discord<span className="mono-bit">@_whois.vasu</span></span>
                </div>
                <div className="perm-row">
                  <span className="perm-label">Long game<span className="mono-bit">AI for <Redacted>autonomous surveillance &amp; drones</Redacted></span></span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <Whiteboard />
            </Reveal>
          </div>
        </div>

        <TypingDots />

        <Footer />
      </div>
    </>
  );
}
