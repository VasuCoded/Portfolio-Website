"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ChannelHeader from "@/components/ChannelHeader";
import Whiteboard from "@/components/Whiteboard";
import Reactions from "@/components/Reactions";
import Redacted from "@/components/Redacted";
import ChatGroup from "@/components/ChatGroup";
import TypingDots from "@/components/TypingDots";

const ROLES = [
  { label: "systems", color: "#5b6f4d" },
  { label: "discord infra", color: "#4e6a80" },
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
            <div className="profile-banner">
              <div className="banner-chips">
                <span className="banner-chip">◈ est. 2026</span>
                <span className="banner-chip">3 channels</span>
                <span className="banner-chip live">● 1 online</span>
              </div>
            </div>

            <div className="profile-body">
              <div className="profile-left">
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

                <div className="hero-actions-row" style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                  <a className="btn btn-fill" href="mailto:sanskar.ch.inbox@gmail.com">
                    Email me
                  </a>
                  <a className="btn btn-line" href="https://github.com/VasuCoded/" target="_blank" rel="noopener">
                    GitHub ↗
                  </a>
                </div>
              </div>

              <div className="profile-right">
                <div className="profile-note">
                  <span className="profile-note-k">📌 pinned · server info</span>
                  <p>
                    Two channels live here right now: <strong>#yapping</strong>
                    {" "}for music, SCP lore and whatever else I&apos;m deep in, and{" "}
                    <strong>#portfolio</strong>
                    {" "}for the stuff I&apos;ve actually built. Rail&apos;s on the left,
                    roster&apos;s on the right. Still under construction in a couple spots.
                  </p>
                </div>

                <div className="mini-stats">
                  <div className="mini-stat">
                    <span className="mini-k">building</span>
                    <span className="mini-v">3 live</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-k">based in</span>
                    <span className="mini-v">India</span>
                  </div>
                  <div className="mini-stat">
                    <span className="mini-k">boost</span>
                    <span className="mini-v">lvl 0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* about me — the actual intro */}
        <div className="section-gap">
          <Reveal>
            <div className="msg-divider">
              <span>👋 about me</span>
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <ChatGroup time="pinned intro">
              <p className="chat-line">
                I lean product and systems over pure development. Give me a problem and I&apos;d
                rather work out how the whole thing should run and drive the process to ship it,
                then write the specific code that&apos;s actually missing.
              </p>
              <p className="chat-line">
                Discord is where this shows up most: bots, permissions, moderation, anti-raid
                setup. A lot of what I build, on Discord and off it, comes down to the same
                instinct: find the resourceful way to make something work with whatever&apos;s on
                hand, then clean it up once it does. If you know the word <em>jugaad</em>,
                that&apos;s pretty much my whole approach in one word.
              </p>
              <p className="chat-line">
                Right now I&apos;m on a drop year, prepping for JEE Advanced and UGEE 2027. Longer
                term I&apos;m working toward <strong>AI systems for autonomous surveillance and
                drone platforms</strong>. The tools and ops work here are groundwork for that, even on the days it
                doesn&apos;t look like it. Off the clock it&apos;s an SCP habit and a{" "}
                <Redacted>BoyWithUke</Redacted>
                {" "}problem; both live over in <Link href="/yapping" className="td-link">#yapping</Link>.
              </p>
              <Reactions
                initial={[
                  { emoji: "🔥", count: 7 },
                  { emoji: "👀", count: 12 },
                  { emoji: "🫡", count: 4 },
                ]}
              />
            </ChatGroup>
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

        {/* more channels — the "visit these too" nudge */}
        <div className="section-gap">
          <Reveal>
            <div className="msg-divider">
              <span>🧭 more channels</span>
            </div>
          </Reveal>
          <div className="nav-card-grid">
            <Reveal delay={0.04}>
              <Link href="/yapping" className="nav-card">
                <span className="nav-card-hash">#</span>
                <span className="nav-card-body">
                  <span className="nav-card-title">yapping</span>
                  <span className="nav-card-sub">
                    music, SCP lore, YouTube rabbit holes, and the TouchDesigner obsession
                  </span>
                </span>
                <span className="nav-card-go" aria-hidden>
                  →
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <Link href="/portfolio" className="nav-card">
                <span className="nav-card-hash">#</span>
                <span className="nav-card-body">
                  <span className="nav-card-title">portfolio</span>
                  <span className="nav-card-sub">
                    the stuff I&apos;ve actually built, plus what&apos;s still just an idea
                  </span>
                </span>
                <span className="nav-card-go" aria-hidden>
                  →
                </span>
              </Link>
            </Reveal>
          </div>
        </div>

        <TypingDots />

        <Footer showWebring />
      </div>
    </>
  );
}
