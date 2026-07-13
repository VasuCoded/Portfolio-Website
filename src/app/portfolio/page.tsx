"use client";

import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ChannelHeader from "@/components/ChannelHeader";
import SpotlightCard from "@/components/SpotlightCard";
import { WhatNowIcon, CollabIcon, JugaadIcon } from "@/components/ProjectIcons";

export default function Portfolio() {
  return (
    <>
      <ChannelHeader name="portfolio" topic="what I've built, and what I'm building" />
      <div className="content-inner">
        <Reveal>
          <div className="portfolio-intro">
            <p style={{ fontSize: 15, color: "var(--ink-soft)", maxWidth: 620 }}>
              Most of this exists for one reason: I wanted to know how the thing actually works,
              so I built one. Click a card to open it up.
            </p>
            <a
              className="btn btn-line btn-sm"
              href="https://github.com/VasuCoded"
              target="_blank"
              rel="noopener"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49l-.01-1.71c-2.78.62-3.37-1.37-3.37-1.37-.46-1.18-1.11-1.5-1.11-1.5-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9l-.01 2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
              </svg>
              github.com/VasuCoded ↗
            </a>
          </div>
        </Reveal>

        {/* ---------------- SPOTLIGHT (2x2) ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag"># the build log</div>
            </div>
          </Reveal>

          <div className="spotlight-grid">
            <Reveal delay={0.04}>
              <SpotlightCard
                icon={<WhatNowIcon />}
                accent="var(--moss)"
                title="WhatNow"
                tagline="A content platform for exam & career guidance — a Next.js site backed by a multi-channel content pipeline."
                meta={
                  <span className="meta-tag live">
                    <span className="dot-sm" style={{ background: "var(--moss-text)" }} />
                    live
                  </span>
                }
              >
                <div className="spot-field">
                  <span className="spot-k">My role</span>
                  <p>
                    Founder and part of the dev team — I build site features and run the
                    content/ops system behind it (Discord, Sheets/Docs, and a pipeline where every
                    piece has one owner and one status).
                  </p>
                </div>
                <div className="spot-field">
                  <span className="spot-k">The vision</span>
                  <p>
                    Free, honest guidance for Indian students, no coaching kickbacks or paywall —
                    scaling across web, YouTube, Instagram, and Discord.
                  </p>
                </div>
                <div className="tech-chips">
                  <span className="tech-chip">Next.js</span>
                  <span className="tech-chip">Vercel</span>
                </div>
                <div className="spot-links">
                  <a className="btn btn-fill btn-sm" href="https://whatnowindia.vercel.app/" target="_blank" rel="noopener">
                    Live site ↗
                  </a>
                  <a className="btn btn-line btn-sm" href="https://github.com/VasuCoded/WhatNow_Website" target="_blank" rel="noopener">
                    GitHub ↗
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.08}>
              <SpotlightCard
                icon={<CollabIcon />}
                accent="var(--clay)"
                title="Collab Platform"
                tagline="A real-time team workspace — chat, task boards, shared notes, a live whiteboard, and WebRTC calls in one app."
                meta={<span className="draft-tag">very early</span>}
              >
                <div className="spot-field">
                  <span className="spot-k">My role</span>
                  <p>
                    Building it with a couple of friends to learn how real-time collaborative
                    software actually works — the sync, the presence, the WebRTC plumbing.
                  </p>
                </div>
                <div className="spot-field">
                  <span className="spot-k">The vision</span>
                  <p>
                    Replace five open tabs with one workspace for small teams. Early and
                    exploratory — even the name isn&apos;t final yet.
                  </p>
                </div>
                <div className="tech-chips">
                  <span className="tech-chip">Next.js</span>
                  <span className="tech-chip">Supabase</span>
                  <span className="tech-chip">Excalidraw</span>
                  <span className="tech-chip">WebRTC</span>
                </div>
                <div className="spot-links">
                  <a className="btn btn-fill btn-sm" href="https://collabproject-vasu.vercel.app/" target="_blank" rel="noopener">
                    Live site ↗
                  </a>
                  <a className="btn btn-line btn-sm" href="https://github.com/VasuCoded/Project-Collab-Platform" target="_blank" rel="noopener">
                    GitHub ↗
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.12}>
              <SpotlightCard
                icon={<JugaadIcon />}
                accent="#7A5B1C"
                title="Jugaad"
                tagline="A multi-feature Discord bot — economy, moderation, mini-games, and on-the-fly image generation, self-hosted."
                meta={
                  <span className="meta-tag live">
                    <span className="dot-sm" style={{ background: "var(--moss-text)" }} />
                    active
                  </span>
                }
              >
                <div className="spot-field">
                  <span className="spot-k">My role</span>
                  <p>
                    Built and maintain it solo on discord.js + Supabase, self-hosted on an
                    always-on Oracle Cloud VM under PM2 — so it comes back on its own after a
                    reboot or crash.
                  </p>
                </div>
                <div className="spot-field">
                  <span className="spot-k">The vision</span>
                  <p>
                    One bot that does what servers usually need five for. Public now — invite it
                    to any server you manage.
                  </p>
                </div>
                <div className="tech-chips">
                  <span className="tech-chip">discord.js v14</span>
                  <span className="tech-chip">Node.js 22</span>
                  <span className="tech-chip">Supabase</span>
                  <span className="tech-chip">node-canvas</span>
                  <span className="tech-chip">PM2 · Oracle Cloud</span>
                </div>
                <div className="spot-links">
                  <a className="btn btn-fill btn-sm" href="https://jugaadbot.vercel.app/" target="_blank" rel="noopener">
                    Website ↗
                  </a>
                </div>
                <p className="spot-private">Repo is private for now while it&apos;s in development.</p>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="spot-card shell">
                <div className="spot-shell-inner">
                  <div className="spot-shell-plus">+</div>
                  <div className="spot-shell-title">something&apos;s coming</div>
                  <p className="spot-shell-text">
                    Slot 4 is reserved for the next build. I&apos;ll drop it in here soon.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------------- IDEAS (dreamy, moved up) ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag ideas-tag">✦ in the idea box</div>
              <p className="block-topic">not built yet, but living rent-free in my head</p>
            </div>
          </Reveal>

          <div className="idea-clouds">
            <Reveal delay={0.04}>
              <div className="idea-cloud">
                <div className="idea-cloud-name">Veekh</div>
                <p>
                  Self-hosted semantic image search. Describe a photo in plain language, find it in
                  your own library, nothing sent to a third-party API. Python/FastAPI, CLIP
                  embeddings for the matching, Qdrant as the vector database, MinIO for storage.
                </p>
                <div className="tech-chips">
                  <span className="tech-chip">FastAPI</span>
                  <span className="tech-chip">CLIP</span>
                  <span className="tech-chip">Qdrant</span>
                  <span className="tech-chip">MinIO</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="idea-cloud">
                <div className="idea-cloud-name">Server-builder bot</div>
                <p>
                  A documentation-driven Discord bot: paste its schema docs into whatever LLM chat
                  you already have open, describe the server you want, and get back a structured
                  plan the bot validates and executes — all the thinking happens outside the bot,
                  for free. v1 is bootstrap-only: create, no destructive edits.
                </p>
                <div className="tech-chips">
                  <span className="tech-chip">discord.js</span>
                  <span className="tech-chip">JSON schema</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------------- EXPERIENCE ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag">before the code · community &amp; events</div>
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

        <Footer showWebring />
      </div>
    </>
  );
}
