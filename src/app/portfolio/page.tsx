"use client";

import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ChannelHeader from "@/components/ChannelHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { WhatNowIcon, CollabIcon, JugaadIcon } from "@/components/ProjectIcons";

export default function Portfolio() {
  return (
    <>
      <ChannelHeader name="portfolio" topic="shipped work, live work, and ideas" />
      <div className="content-inner">
        <Reveal>
          <p style={{ fontSize: 15, color: "var(--ink-soft)", maxWidth: 640 }}>
            Most of this exists for the same reason: I wanted to know how the thing actually
            works, so I built one. Selling it is secondary, if it happens at all — WhatNow&apos;s
            the one deliberate exception. Click a card for the full writeup.
          </p>
        </Reveal>

        {/* ---------------- SPOTLIGHT ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag"># the main three</div>
            </div>
          </Reveal>

          <div className="spotlight-grid">
            <Reveal delay={0.04}>
              <SpotlightCard
                icon={<WhatNowIcon />}
                accent="var(--moss)"
                title="WhatNow"
                tagline="Founder · honest exam & career guidance"
                meta={
                  <span className="meta-tag live">
                    <span className="dot-sm" style={{ background: "var(--moss-text)" }} />
                    ongoing
                  </span>
                }
              >
                <p>
                  A free platform for honest career and exam guidance in India — JEE, CLAT, UCEED,
                  plus careers most counselors never mention. No coaching kickbacks, no paywall.
                  Runs across a website, YouTube, Instagram, and Discord.
                </p>
                <div className="tech-chips">
                  <span className="tech-chip">Next.js</span>
                  <span className="tech-chip">Vercel</span>
                </div>
                <div className="role-grid">
                  <div>
                    <h4>Dev</h4>
                    <p style={{ color: "var(--ink-soft)", fontSize: 14 }}>
                      Research and development on the site right now — features, content
                      structure, what ships next, alongside the core dev.
                    </p>
                  </div>
                  <div>
                    <h4>Executive</h4>
                    <p style={{ color: "var(--ink-soft)", fontSize: 14 }}>
                      Founded it, recruited the initial team, wrote the ops manual covering
                      outreach, writing &amp; research, dev, and design. Built the coordination
                      system on Discord, Sheets/Docs, and Drive — chosen over Notion so every
                      contributor could edit for free.
                    </p>
                  </div>
                </div>
                <a
                  className="btn btn-fill btn-sm"
                  style={{ marginTop: 14 }}
                  href="https://whatnowindia.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  Visit WhatNow ↗
                </a>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.08}>
              <SpotlightCard
                icon={<CollabIcon />}
                accent="var(--clay)"
                title="Collab Platform"
                tagline="Founder & developer · shared workspace"
                meta={<span className="draft-tag">very early</span>}
              >
                <p>
                  Chat, DMs, task boards, shared notes, a live whiteboard, and peer-to-peer
                  voice/video — one app instead of five open tabs. Even the name isn&apos;t final.
                  Point of this one is to learn how software like this actually gets built, more
                  than to sell it — same as most of what&apos;s on this page.
                </p>
                <div className="tech-chips">
                  <span className="tech-chip">Next.js</span>
                  <span className="tech-chip">Supabase</span>
                  <span className="tech-chip">Excalidraw</span>
                  <span className="tech-chip">WebRTC</span>
                </div>
                <a
                  className="btn btn-line btn-sm"
                  style={{ marginTop: 12 }}
                  href="https://collabproject-vasu.vercel.app/"
                  target="_blank"
                  rel="noopener"
                >
                  See it live ↗
                </a>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.12}>
              <SpotlightCard
                icon={<JugaadIcon />}
                accent="#7A5B1C"
                title="Jugaad"
                tagline="Creator · Discord bot, live in a private server"
                meta={
                  <span className="meta-tag live">
                    <span className="dot-sm" style={{ background: "var(--moss-text)" }} />
                    active
                  </span>
                }
              >
                <p>
                  Economy, gambling, fun, image generation, moderation, and community tools in one
                  bot. Running in a private server right now while I round out the feature set —
                  going public once it&apos;s ready.
                </p>
                <p>
                  discord.js against a Supabase Postgres database, node-canvas for the image
                  commands. Hosted on an always-on Oracle Cloud VM, kept alive under PM2 so it
                  comes back on its own after a reboot or crash — uptime&apos;s been solid since it
                  went up.
                </p>
                <div className="tech-chips">
                  <span className="tech-chip">discord.js v14</span>
                  <span className="tech-chip">Node.js 22</span>
                  <span className="tech-chip">Supabase / Postgres</span>
                  <span className="tech-chip">node-canvas</span>
                  <span className="tech-chip">PM2</span>
                  <span className="tech-chip">Oracle Cloud (Ampere)</span>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>

        {/* ---------------- EXPERIENCE ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag">also on the résumé</div>
            </div>
          </Reveal>
          <div className="card-grid">
            <Reveal delay={0.04}>
              <div className="idea-row" style={{ borderStyle: "solid" }}>
                <span className="idea-tag">2023 · ~1yr</span>
                <p>
                  <strong>Event Manager, Not Your Type (Discord)</strong>
                  {" "}— planned and hosted events for a YouTuber&apos;s community, including a
                  live integration pulling the creator&apos;s sub count straight into the server.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="idea-row" style={{ borderStyle: "solid" }}>
                <span className="idea-tag">2024 · ~6mo</span>
                <p>
                  <strong>Event Team, Gohar&apos;s Guide (Discord)</strong>
                  {" "}— events and day-to-day community management for another creator&apos;s
                  server.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------------- IDEA PHASE ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag"># idea-phase</div>
              <p className="block-topic">still loading</p>
            </div>
          </Reveal>

          <div className="card-grid">
            <Reveal delay={0.04}>
              <div className="idea-row">
                <span className="idea-tag">idea</span>
                <p>
                  <strong>Veekh</strong>
                  {" "}— self-hosted semantic image search. Describe a photo in plain language,
                  find it in your own library, nothing sent to a third-party API.
                  Python/FastAPI backend, CLIP embeddings for the matching, Qdrant as the vector
                  database, MinIO for object storage. Early days.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="idea-row">
                <span className="idea-tag">idea</span>
                <p>
                  <strong>A second Discord bot</strong>, name TBD — a documentation-driven
                  server builder. Paste its schema docs into whatever LLM chat you already have
                  open, describe the server you want, get back a structured plan the bot validates
                  and executes through Discord&apos;s API. All the thinking happens outside the
                  bot, for free. v1 is bootstrap-only — create, no destructive edits — same stack
                  as Jugaad.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Footer showWebring />
      </div>
    </>
  );
}
