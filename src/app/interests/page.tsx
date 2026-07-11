"use client";

import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

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

export default function Interests() {
  return (
    <>
      <section className="block" style={{ paddingTop: 48 }}>
        <Reveal>
          <div className="block-head">
            <div className="block-tag"># yapping</div>
            <p className="block-topic">interests, on loop</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p>
            Two things I&apos;ll talk your ear off about, unprompted, given the chance. Two more
            slots below, reserved — more incoming whenever I get around to writing them up.
          </p>
        </Reveal>
      </section>

      {/* ---------------- MUSIC ---------------- */}
      <section className="block" style={{ borderTop: "1px solid var(--line)" }}>
        <Reveal>
          <div className="block-head">
            <div className="block-tag" style={{ fontSize: 13 }}>
              01 · music
            </div>
            <p className="block-topic">taste that refuses to sit still</p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <p>
            I&apos;ll listen to basically everything — except rap and metal, those two just never
            landed for me. What&apos;s actually on rotation changes constantly, but a few things
            stay fairly constant underneath the noise.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="panel featured" style={{ marginTop: 22 }}>
            <div className="card-top">
              <h3>now recommending</h3>
              <span className="meta-tag live">
                <span className="eq-bars">
                  <span />
                  <span />
                  <span />
                  <span />
                </span>
                on repeat
              </span>
            </div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "var(--ink)", marginTop: 14 }}>
              Two Moons — BoyWithUke
            </p>
            <p style={{ marginTop: 6 }}>
              BoyWithUke is the main event for me — the masked, ukulele-driven indie-pop project
              that turns anxiety and heartbreak into something you can still bop to. Two Moons is
              the one I&apos;d hand someone first, but Toxic, She Said No, and Tired of Wanting You
              are all in heavy rotation too. Genuinely not a bit — this is just what&apos;s been
              stuck in my head for months.
            </p>
            <a
              className="btn btn-fill"
              style={{ marginTop: 16 }}
              href="https://open.spotify.com/search/BoyWithUke%20Two%20Moons"
              target="_blank"
              rel="noopener"
            >
              Play it ↗
            </a>
          </div>
        </Reveal>

        <div className="role-grid" style={{ marginTop: 16 }}>
          <Reveal delay={0.12}>
            <div className="panel" style={{ marginTop: 0, height: "100%" }}>
              <div className="card-top">
                <h3 style={{ fontSize: 15 }}>The Admin Archives</h3>
                <span className="meta-tag">50 songs · 3h 43m</span>
              </div>
              <p>
                A Spotify Blend with two of my closest friends — the playlist where our three very
                different tastes collide. Indie and alt-rock running straight into Bollywood
                soundtracks, no genre whiplash warnings.
              </p>
              <ul style={{ marginTop: 12, paddingLeft: 18, color: "var(--ink-muted)", fontSize: 13 }}>
                {ADMIN_ARCHIVES_SAMPLE.map((t) => (
                  <li key={t} style={{ marginTop: 4 }}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="panel" style={{ marginTop: 0, height: "100%" }}>
              <div className="card-top">
                <h3 style={{ fontSize: 15 }}>On Repeat</h3>
                <span className="meta-tag">30 songs · 2h 35m</span>
              </div>
              <p>
                Spotify&apos;s own read on what I&apos;m actually playing right now. Currently
                leaning hard into Bollywood and film scores, which wasn&apos;t true a month ago and
                probably won&apos;t be true a month from now.
              </p>
              <ul style={{ marginTop: 12, paddingLeft: 18, color: "var(--ink-muted)", fontSize: 13 }}>
                {ON_REPEAT_SAMPLE.map((t) => (
                  <li key={t} style={{ marginTop: 4 }}>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SCP ---------------- */}
      <section className="block" style={{ borderTop: "1px solid var(--line)" }}>
        <Reveal>
          <div className="block-head">
            <div className="block-tag" style={{ fontSize: 13 }}>
              02 · the scp universe
            </div>
            <p className="block-topic">collaborative fiction, taken very seriously</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="scp-doc" style={{ marginTop: 18 }}>
            <div className="scp-doc-head">
              <span>Item #: II-004</span>
              <span>Object Class: Safe</span>
              <span>Clearance: Open to Discuss</span>
            </div>
            <div className="scp-doc-body">
              <div className="scp-field">
                <span className="k">Description</span>
                <p className="v">
                  The SCP Foundation is a massive, community-written fiction wiki about a secret
                  organization that finds, captures, and contains anomalous objects, entities, and
                  locations that break the normal rules of reality — written in a dry, clinical,
                  found-document style that somehow makes the horror hit harder. No single
                  author, no canon police, just thousands of contributors building the same
                  universe one containment report at a time.
                </p>
              </div>
              <div className="scp-field">
                <span className="k">Personal file</span>
                <p className="v">
                  I&apos;ve read an unreasonable amount of the wiki at this point. I was also a map
                  developer for an SCP roleplay game on Roblox — building out the containment
                  sites players actually walked through, not just reading about them.
                </p>
              </div>
              <div className="scp-field">
                <span className="k">Addendum</span>
                <p className="v">
                  If you&apos;re into it too, I will talk about this for a genuinely embarrassing
                  amount of time. Come find me.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <a
            className="btn btn-line"
            style={{ marginTop: 16 }}
            href="https://scp-wiki.wikidot.com/"
            target="_blank"
            rel="noopener"
          >
            Browse the wiki ↗
          </a>
        </Reveal>
      </section>

      {/* ---------------- PLACEHOLDERS ---------------- */}
      <section className="block" style={{ borderTop: "1px solid var(--line)" }}>
        <Reveal>
          <div className="block-head">
            <div className="block-tag" style={{ fontSize: 13 }}>
              03 · 04 · reserved
            </div>
            <p className="block-topic">still loading</p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="idea-row">
            <span className="idea-tag">soon</span>
            <p>Interest slot #3 — not written up yet, ask me in the meantime.</p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="idea-row">
            <span className="idea-tag">soon</span>
            <p>Interest slot #4 — same deal, more coming.</p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
