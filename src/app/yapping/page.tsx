"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ChannelHeader from "@/components/ChannelHeader";
import PlaylistCard from "@/components/PlaylistCard";
import RandomSongPick from "@/components/RandomSongPick";
import RandomChannelPick from "@/components/RandomChannelPick";
import NowSpinning from "@/components/NowSpinning";
import ScpFactCard from "@/components/ScpFactCard";
import ChannelIcon from "@/components/ChannelIcons";
import ChatGroup from "@/components/ChatGroup";
import Reactions from "@/components/Reactions";
import { YT_CHANNELS } from "@/data/channels";

const ADMIN_ARCHIVES_SAMPLE = [
  "There Is a Light That Never Goes Out — The Smiths",
  "Cigarettes After Sex — Sweet",
  "Heather — Conan Gray",
  "Kun Faya Kun — A.R. Rahman",
  "Welcome to the Internet — Bo Burnham",
];

const ON_REPEAT_SAMPLE = [
  "Tum Tak — A.R. Rahman",
  "Mere Humsafar — Yashal Shahid",
  "Mitwa — Shankar-Ehsaan-Loy",
  "We Don't Talk Anymore — Charlie Puth, Selena Gomez",
  "There Is a Light That Never Goes Out — The Smiths",
];

export default function Yapping() {
  return (
    <>
      <ChannelHeader name="yapping" topic="the stuff I won't shut up about" />
      <div className="content-inner">
        <Reveal>
          <ChatGroup time="read the room">
            <p className="chat-line">
              Four things I&apos;ll talk your ear off about, unprompted, given the smallest
              opening. If any of it lands, my DMs are the fastest way to start something.
            </p>
            <Reactions
              initial={[
                { emoji: "🫡", count: 5 },
                { emoji: "🛠️", count: 3 },
              ]}
            />
          </ChatGroup>
        </Reveal>

        <div className="section-gap">
          <div className="card-grid">
            <Reveal>
              <div className="idea-row" style={{ borderStyle: "solid" }}>
                <span className="idea-tag">status</span>
                <p>
                  Probably down an SCP wiki rabbit hole, arguing with a Discord API rate limit, or
                  rebuilding something that already worked fine.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="idea-row" style={{ borderStyle: "solid", borderColor: "var(--moss)" }}>
                <span className="idea-tag">dms open</span>
                <p>
                  I like to yap — SCP lore, music, whatever server problem I&apos;m mid-fix on.
                  Add me on Discord and say something: <strong>@_whois.vasu</strong>
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ---------------- MUSIC ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag">01 · music</div>
              <p className="block-topic">taste that won&apos;t sit still</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <NowSpinning />
          </Reveal>

          <div className="card-grid" style={{ marginTop: 12 }}>
            <Reveal delay={0.08}>
              <PlaylistCard
                title="The Admin Archives"
                summary="a Blend with two close friends"
                kind="blend"
                count="50"
                duration="3h 43m"
                accent="#9A4A38"
                tracks={ADMIN_ARCHIVES_SAMPLE}
              >
                <p>
                  Spotify Blend where our three very different tastes collide — indie and alt-rock
                  running straight into Bollywood soundtracks, no genre-whiplash warnings.
                </p>
              </PlaylistCard>
            </Reveal>
            <Reveal delay={0.12}>
              <PlaylistCard
                title="On Repeat"
                summary="Spotify's own read on right now"
                kind="auto-made"
                count="30"
                duration="2h 35m"
                accent="#3B6E8F"
                tracks={ON_REPEAT_SAMPLE}
              >
                <p>
                  Currently leaning hard into Bollywood and film scores, which wasn&apos;t true a
                  month ago and probably won&apos;t be true a month from now.
                </p>
              </PlaylistCard>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="shuffle-card" style={{ marginTop: 12 }}>
              <div className="shuffle-eyebrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                shuffle · pull a random track from my library
              </div>
              <RandomSongPick />
            </div>
          </Reveal>
        </div>

        {/* ---------------- SCP ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag">02 · the scp universe</div>
              <p className="block-topic">collaborative fiction, taken very seriously</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="scp-doc">
              <div className="scp-doc-head">
                <span>Item #: II-004</span>
                <span>Object Class: Safe</span>
                <span>Clearance: Open to Discuss</span>
              </div>
              <div className="scp-doc-body">
                <div className="scp-field">
                  <span className="k">Description</span>
                  <p className="v">
                    A massive, community-written fiction wiki about a secret organization that
                    finds, captures, and contains anomalous objects, entities, and locations that
                    break the normal rules of reality — written in a dry, clinical, found-document
                    style that makes the horror hit harder. No single author, no canon police,
                    thousands of contributors building the same universe one containment report at
                    a time.
                  </p>
                </div>
                <div className="scp-field">
                  <span className="k">Personal file</span>
                  <p className="v">
                    I&apos;ve read an unreasonable amount of the wiki. Was also a map developer for
                    an SCP roleplay game on Roblox — building the containment sites players
                    actually walked through.
                  </p>
                </div>
                <div className="scp-field">
                  <span className="k">Addendum</span>
                  <p className="v">
                    If you&apos;re into it too, come find me — I will talk about this for a
                    genuinely embarrassing amount of time.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div style={{ marginTop: 12 }}>
              <ScpFactCard />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <a
              className="btn btn-line btn-sm"
              style={{ marginTop: 12 }}
              href="https://scp-wiki.wikidot.com/"
              target="_blank"
              rel="noopener"
            >
              Browse the wiki ↗
            </a>
          </Reveal>
        </div>

        {/* ---------------- YOUTUBE ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag">03 · youtube</div>
              <p className="block-topic">what&apos;s actually in my watch history</p>
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <p style={{ fontSize: 14.5, color: "var(--ink-soft)", maxWidth: 620 }}>
              Four channels I keep coming back to, for very different reasons.
            </p>
          </Reveal>

          <div className="channel-grid">
            {YT_CHANNELS.map((ch, i) => (
              <Reveal key={ch.name} delay={0.06 + i * 0.04}>
                <a
                  className={`channel-card niche-${ch.niche}`}
                  href={ch.url}
                  target="_blank"
                  rel="noopener"
                  style={{ ["--accent" as string]: ch.accent } as React.CSSProperties}
                >
                  <span className="channel-watermark" aria-hidden>
                    <ChannelIcon niche={ch.niche} />
                  </span>
                  <div className="channel-badge-logo">
                    <Image src={ch.logo} alt={`${ch.name} logo`} width={46} height={46} loading="eager" />
                    <span className="channel-play" aria-hidden>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7L8 5z" />
                      </svg>
                    </span>
                  </div>
                  <div className="channel-body">
                    <div className="channel-top">
                      <h4>{ch.name}</h4>
                      <span className="channel-go" aria-hidden>
                        ↗
                      </span>
                    </div>
                    <p>{ch.blurb}</p>
                    <div className="channel-foot">
                      <span className="channel-niche-tag">
                        <ChannelIcon niche={ch.niche} />
                        {ch.topic}
                      </span>
                      <span className="channel-sub">
                        <span className="channel-sub-bell">🔔</span> subscribed
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="shuffle-card" style={{ marginTop: 12, borderColor: "var(--clay)" }}>
              <div className="shuffle-eyebrow" style={{ color: "var(--clay-text)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M17 2l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                random channel pick
              </div>
              <RandomChannelPick />
              <p style={{ marginTop: 10, fontSize: 12, color: "var(--ink-muted)", fontStyle: "italic" }}>
                pulled from everything I actually watch, not just the four above.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---------------- TOUCHDESIGNER ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag">04 · touchdesigner</div>
              <p className="block-topic">the newest rabbit hole</p>
            </div>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="td-card">
              <div className="td-head">
                <div className="td-logo">
                  <Image src="/projects/touchdesigner.png" alt="TouchDesigner" width={44} height={44} loading="eager" />
                </div>
                <div>
                  <h4>node graphs, wires, and everything running live</h4>
                  <p className="td-sub">picked it up recently · still very much a beginner</p>
                </div>
              </div>

              <p className="td-text">
                I fell into TouchDesigner recently and it&apos;s the most fun I&apos;ve had
                building something in a while. It&apos;s node-based — you wire operators
                together and the whole graph <em>cooks</em> live, 60 times a second. No build
                step, no refresh. You drag a wire and the output changes while you&apos;re
                looking at it, which makes it dangerously easy to lose three hours.
              </p>

              <div className="td-graph" aria-hidden>
                <span className="td-graph-k">the loop</span>
                <div className="td-nodes">
                  <span className="td-node">webcam</span>
                  <span className="td-wire w-top" />
                  <span className="td-node">mediapipe</span>
                  <span className="td-wire w-chop" />
                  <span className="td-node">script</span>
                  <span className="td-wire w-sop" />
                  <span className="td-node">render</span>
                </div>
                <div className="td-legend">
                  <span>
                    <i className="w-top" />
                    TOP · image
                  </span>
                  <span>
                    <i className="w-chop" />
                    CHOP · data
                  </span>
                  <span>
                    <i className="w-sop" />
                    SOP · geometry
                  </span>
                </div>
              </div>

              <p className="td-text">
                First real thing I built with it: a window you frame with your fingers that
                either reveals a bright shape or makes you vanish into a frozen photo of the
                empty room behind you. The technical writeup lives over in{" "}
                <Link href="/portfolio" className="td-link">
                  #portfolio
                </Link>
                .
              </p>

              <div className="td-cta">
                <span className="td-cta-k">◈ open invitation</span>
                <p>
                  I&apos;m nowhere near good at this yet, so this goes both ways. If you
                  actually know TouchDesigner — <strong>teach me something</strong>, I&apos;ll
                  take any tip going. If you&apos;re just starting out, I&apos;ll happily walk
                  you through everything I&apos;ve figured out so far. And if you only want to
                  yap about node graphs, that counts too.
                </p>
                <span className="td-cta-handle">reach out — @_whois.vasu on Discord</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Footer />
      </div>
    </>
  );
}
