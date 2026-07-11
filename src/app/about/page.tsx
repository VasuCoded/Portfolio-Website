"use client";

import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ChannelHeader from "@/components/ChannelHeader";
import ExpandableCard from "@/components/ExpandableCard";
import RandomSongPick from "@/components/RandomSongPick";
import RandomChannelPick from "@/components/RandomChannelPick";
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

export default function About() {
  return (
    <>
      <ChannelHeader name="about-me" topic="who I am, and what I won't shut up about" />
      <div className="content-inner">
        <div className="prose">
          <Reveal>
            <p>
              I lean product and systems over pure development. Give me a problem and I&apos;d
              rather work out how the whole thing should run and drive the process to ship it,
              then write the specific code that&apos;s actually missing.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              Discord is where this shows up most. I&apos;ve put real time into the
              infrastructure side of it — bots, permissions, moderation, anti-raid setup. A lot of
              what I build, on Discord and off it, comes down to the same instinct: find the
              resourceful way to make something work with whatever&apos;s on hand, then clean it
              up once it does. If you know the word <em>jugaad</em>, that&apos;s pretty much my
              whole approach in one word.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p>
              Right now I&apos;m on a drop year, prepping for JEE Advanced and UGEE 2027. Longer
              term I&apos;m working toward <strong>AI systems for autonomous surveillance and
              drone platforms</strong>
              {" "}— the tools and ops work here are groundwork for that, even on the days it
              doesn&apos;t look like it.
            </p>
          </Reveal>
        </div>

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
            <ExpandableCard
              featured
              defaultOpen
              title="Two Moons — BoyWithUke"
              summary="the current obsession, click for the rest of the case"
              meta={
                <span className="meta-tag live">
                  <span className="eq-bars">
                    <span />
                    <span />
                    <span />
                    <span />
                  </span>
                  on repeat
                </span>
              }
            >
              <p>
                BoyWithUke is the main event for me — the masked, ukulele-driven indie-pop project
                that turns anxiety and heartbreak into something you can still bop to. Two Moons
                is the one I&apos;d hand someone first, but Toxic, She Said No, and Tired of
                Wanting You are all in heavy rotation too. Not a bit — genuinely what&apos;s been
                stuck in my head for months.
              </p>
              <p>
                Listen to basically everything else too — except rap and metal, those two just
                never landed. What&apos;s actually on rotation changes constantly.
              </p>
              <a
                className="btn btn-fill btn-sm"
                style={{ marginTop: 12 }}
                href="https://open.spotify.com/search/BoyWithUke%20Two%20Moons"
                target="_blank"
                rel="noopener"
              >
                Play it ↗
              </a>
            </ExpandableCard>
          </Reveal>

          <div className="card-grid" style={{ marginTop: 12 }}>
            <Reveal delay={0.08}>
              <ExpandableCard
                title="The Admin Archives"
                summary="a Blend with two close friends"
                meta={<span className="meta-tag">50 · 3h43</span>}
              >
                <p>
                  Spotify Blend where our three very different tastes collide — indie and alt-rock
                  running straight into Bollywood soundtracks, no genre-whiplash warnings.
                </p>
                <ul style={{ marginTop: 10, paddingLeft: 16, color: "var(--ink-muted)", fontSize: 13 }}>
                  {ADMIN_ARCHIVES_SAMPLE.map((t) => (
                    <li key={t} style={{ marginTop: 3 }}>
                      {t}
                    </li>
                  ))}
                </ul>
              </ExpandableCard>
            </Reveal>
            <Reveal delay={0.12}>
              <ExpandableCard
                title="On Repeat"
                summary="Spotify's own read on right now"
                meta={<span className="meta-tag">30 · 2h35</span>}
              >
                <p>
                  Currently leaning hard into Bollywood and film scores, which wasn&apos;t true a
                  month ago and probably won&apos;t be true a month from now.
                </p>
                <ul style={{ marginTop: 10, paddingLeft: 16, color: "var(--ink-muted)", fontSize: 13 }}>
                  {ON_REPEAT_SAMPLE.map((t) => (
                    <li key={t} style={{ marginTop: 3 }}>
                      {t}
                    </li>
                  ))}
                </ul>
              </ExpandableCard>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="fact-card" style={{ marginTop: 12, borderColor: "var(--moss)" }}>
              <div className="fact-eyebrow">
                <span className="dot-sm" />
                feeling lucky
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
                  className="channel-card"
                  href={ch.url}
                  target="_blank"
                  rel="noopener"
                  style={{ textDecoration: "none" }}
                >
                  <div className="channel-badge">{ch.initials}</div>
                  <div>
                    <h4>{ch.name}</h4>
                    <div className="ch-handle">{ch.topic}</div>
                    <p>{ch.blurb}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <div className="fact-card" style={{ marginTop: 12, borderColor: "var(--clay)" }}>
              <div className="fact-eyebrow">
                <span className="dot-sm" style={{ background: "var(--clay-text)" }} />
                random channel pick
              </div>
              <RandomChannelPick />
              <p style={{ marginTop: 10, fontSize: 12, color: "var(--ink-muted)", fontStyle: "italic" }}>
                small pool for now — more channels landing here soon.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ---------------- PLACEHOLDER ---------------- */}
        <div className="section-gap">
          <Reveal>
            <div className="block-head">
              <div className="block-tag">04 · reserved</div>
              <p className="block-topic">still loading</p>
            </div>
          </Reveal>
          <Reveal delay={0.04}>
            <div className="idea-row">
              <span className="idea-tag">soon</span>
              <p>Interest slot #4 — not written up yet, more coming.</p>
            </div>
          </Reveal>
        </div>

        <Footer />
      </div>
    </>
  );
}
