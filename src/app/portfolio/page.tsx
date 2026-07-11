"use client";

import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <>
      <section className="block" style={{ paddingTop: 48 }}>
        <Reveal>
          <div className="block-head">
            <div className="block-tag"># portfolio</div>
            <p className="block-topic">what&apos;s actually shipped, what&apos;s live, what&apos;s still an idea</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p>
            Most of what&apos;s below exists for the same reason: I wanted to understand how the
            thing actually works, so I built one. Selling it is secondary, if it happens at all —
            that&apos;s true of basically everything here, WhatNow being the one deliberate
            exception.
          </p>
        </Reveal>
      </section>

      {/* ---------------- WHATNOW ---------------- */}
      <section className="block" style={{ borderTop: "1px solid var(--line)" }}>
        <Reveal>
          <div className="panel featured">
            <div className="card-top">
              <h3>Founder · WhatNow</h3>
              <span className="meta-tag live">
                <span className="dot-sm" style={{ background: "var(--moss-text)" }} />
                ongoing
              </span>
            </div>
            <p>
              A free platform for honest career and exam guidance in India. Guides on exams like
              JEE, CLAT, and UCEED, alongside careers most counselors never mention — written with
              no coaching kickbacks and no paywall. Runs across a website, YouTube, Instagram, and
              Discord.
            </p>
            <div className="tech-chips">
              <span className="tech-chip">Next.js</span>
              <span className="tech-chip">Vercel</span>
            </div>
            <div className="role-grid">
              <div>
                <h4>Dev</h4>
                <p style={{ color: "var(--ink-soft)", fontSize: 14.5 }}>
                  Primarily research and development on the site right now, working alongside the
                  core dev on features, content structure, and what ships next.
                </p>
              </div>
              <div>
                <h4>Executive</h4>
                <p style={{ color: "var(--ink-soft)", fontSize: 14.5 }}>
                  Founded WhatNow, recruited the initial team, and wrote the operations manual that
                  defines roles across outreach, writing &amp; research, dev, and design. Built the
                  team&apos;s coordination system on Discord, Google Sheets/Docs, and Drive — chosen
                  over Notion so every contributor could edit for free.
                </p>
              </div>
            </div>
            <a
              className="btn btn-fill"
              style={{ marginTop: 18 }}
              href="https://whatnowindia.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              Visit WhatNow ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel">
            <div className="card-top">
              <h3>Event Manager · Not Your Type (Discord)</h3>
              <span className="meta-tag">2023 · ~1 yr</span>
            </div>
            <p>
              Planned and hosted multiple events for a YouTuber&apos;s Discord community, building
              on public tools and writing custom ones where they didn&apos;t exist, including a
              live integration that pulled the creator&apos;s YouTube subscriber count straight
              into the server.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="panel">
            <div className="card-top">
              <h3>Event Team · Gohar&apos;s Guide (Discord)</h3>
              <span className="meta-tag">2024 · ~6 mo</span>
            </div>
            <p>Hosted multiple events and helped manage day-to-day community for another creator&apos;s Discord server.</p>
          </div>
        </Reveal>
      </section>

      {/* ---------------- COLLAB PLATFORM ---------------- */}
      <section className="block" style={{ borderTop: "1px solid var(--line)" }}>
        <Reveal>
          <div className="block-head">
            <div className="block-tag" style={{ fontSize: 13 }}>
              building now
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="panel">
            <div className="card-top">
              <h3>Founder &amp; Developer · Collab Platform</h3>
              <span className="draft-tag">very early</span>
            </div>
            <p>
              A shared workspace for small teams — chat, DMs, task boards, shared notes, a live
              whiteboard, and peer-to-peer voice/video calls, all in one app instead of five open
              tabs. Even the name isn&apos;t final yet. The point of this one isn&apos;t really to
              sell it — it&apos;s to learn how software like this actually gets built, which is
              honestly the point of most of what&apos;s on this page.
            </p>
            <div className="tech-chips">
              <span className="tech-chip">Next.js</span>
              <span className="tech-chip">Supabase</span>
              <span className="tech-chip">Excalidraw</span>
              <span className="tech-chip">WebRTC</span>
            </div>
            <a
              className="btn btn-line"
              style={{ marginTop: 16 }}
              href="https://collabproject-vasu.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              See it live ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="panel">
            <div className="card-top">
              <h3>Creator · Jugaad (Discord bot)</h3>
              <span className="meta-tag live">
                <span className="dot-sm" style={{ background: "var(--moss-text)" }} />
                active
              </span>
            </div>
            <p>
              Economy, gambling, fun, image generation, moderation, and community tools, all in
              one bot. It&apos;s live and running in a private server right now while I finish
              rounding out the feature set — going public once it&apos;s ready for that.
            </p>
            <p>
              Runs on discord.js against a Supabase Postgres database, with node-canvas handling
              the image commands. Hosted on an always-on Oracle Cloud VM, kept alive under PM2 so
              it comes back online on its own after a reboot or crash — uptime has been solid
              since it went up.
            </p>
            <div className="tech-chips">
              <span className="tech-chip">discord.js v14</span>
              <span className="tech-chip">Node.js 22</span>
              <span className="tech-chip">Supabase / Postgres</span>
              <span className="tech-chip">node-canvas</span>
              <span className="tech-chip">PM2</span>
              <span className="tech-chip">Oracle Cloud (Ampere)</span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ---------------- IDEA PHASE ---------------- */}
      <section className="block" style={{ borderTop: "1px solid var(--line)" }}>
        <Reveal>
          <div className="block-head">
            <div className="block-tag"># idea-phase</div>
            <p className="block-topic">still loading</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="idea-row">
            <span className="idea-tag">idea</span>
            <p>
              <strong>Veekh</strong> · self-hosted semantic image search — describe a photo in
              plain language, find it in your own library, nothing sent to a third-party API.
              Python/FastAPI backend, CLIP embeddings for the actual semantic matching, Qdrant as
              the vector database, MinIO for object storage. Early days, not built out yet.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="idea-row">
            <span className="idea-tag">idea</span>
            <p>
              <strong>A second Discord bot</strong>, name not locked in — the idea is a
              documentation-driven server builder. Instead of paying for an LLM call inside the
              bot, you paste its schema docs into whatever LLM chat you already have open, describe
              the server you want, and get back a structured plan the bot validates and executes
              through Discord&apos;s API. All the &quot;thinking&quot; happens for free, outside the
              bot. v1 scope is bootstrap-only — create, no destructive edits — on top of
              discord.js, same stack as Jugaad.
            </p>
          </div>
        </Reveal>
      </section>

      <Footer showWebring />
    </>
  );
}
