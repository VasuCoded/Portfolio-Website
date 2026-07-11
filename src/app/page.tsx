"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ChannelHeader from "@/components/ChannelHeader";
import ScpFactCard from "@/components/ScpFactCard";

export default function Home() {
  return (
    <>
      <ChannelHeader name="welcome" topic="intro & how this server's laid out" />
      <div className="content-inner">
        <div className="hero-flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: "relative", width: 88, height: 88, flexShrink: 0 }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 88, height: 88, borderRadius: 22, overflow: "hidden", border: "1px solid var(--line)" }}
            >
              <Image
                src="/avatar.png"
                alt="Vasu"
                width={88}
                height={88}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
            <span className="status-dot" style={{ position: "absolute", bottom: 1, right: 1 }} />
          </motion.div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <Reveal>
              <p className="mono-bit" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
                <span className="dot-sm" />
                drop year · JEE Advanced &amp; UGEE, 2027
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 style={{ fontSize: "clamp(30px, 5vw, 40px)", fontWeight: 700, letterSpacing: "-0.02em", marginTop: 8 }}>
                Vasu
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="pill-row role-pills-row" style={{ marginTop: 12 }}>
                {["systems", "discord infra", "ops", "founder"].map((r) => (
                  <span key={r} className="info-pill">
                    <span className="dot-sm" style={{ background: "var(--moss-text)" }} />
                    {r}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <p style={{ marginTop: 14, fontSize: 15, color: "var(--ink-soft)", maxWidth: 460 }}>
                My server, one member. Left rail&apos;s got the channels — pick one, or just scroll.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero-actions-row" style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                <a className="btn btn-fill" href="mailto:sanskar.ch.inbox@gmail.com">
                  Email me
                </a>
                <a className="btn btn-line" href="https://github.com/VasuCoded/" target="_blank" rel="noopener">
                  GitHub ↗
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="section-gap">
          <Reveal>
            <div className="idea-row" style={{ borderStyle: "solid", background: "var(--paper)" }}>
              <span className="idea-tag">pinned</span>
              <p>
                Server created 2026 · boost level 0 · vibe: still under construction in a couple
                spots. Two channels live here right now — <strong>#about-me</strong>{" "}
                for the actual person plus what I yap about (music, SCP lore), and{" "}
                <strong>#portfolio</strong>{" "}
                for the stuff I&apos;ve built. Check the rail on the left (or the menu button on
                mobile).
              </p>
            </div>
          </Reveal>
        </div>

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
                  <span className="perm-label">Long game<span className="mono-bit">AI for autonomous surveillance &amp; drones</span></span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ScpFactCard />
            </Reveal>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
