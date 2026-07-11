"use client";

import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <section className="block" style={{ paddingTop: 48 }}>
        <Reveal>
          <div className="block-head">
            <div className="block-tag"># about-me</div>
            <p className="block-topic">the human version, not the resume pitch</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <p>
            I lean product and systems over pure development. Given a problem, I&apos;d rather work
            out how the whole thing should run and drive the process to ship it, then write the
            specific code that&apos;s actually missing — not the other way round.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p>
            Discord is the clearest example of this in practice. I&apos;ve put real time into the
            infrastructure side of it — bots, permissions, moderation, anti-raid setup — not just
            sitting in servers as a member. A lot of what I build, on Discord and off it, comes
            down to the same instinct: figure out the resourceful way to make something work with
            whatever&apos;s on hand, then tidy it up once it does. If you know the word{" "}
            <em>jugaad</em>, that&apos;s basically my whole approach in one word.
          </p>
        </Reveal>
        <Reveal delay={0.14}>
          <p>
            Right now I&apos;m on a drop year, prepping for JEE Advanced and UGEE 2027. Longer
            term, I&apos;m working toward <strong>AI systems for autonomous surveillance and drone
            platforms</strong>. The tools and ops work here are groundwork for that, even on the
            days it doesn&apos;t look like it.
          </p>
        </Reveal>
      </section>

      <section className="block" style={{ borderTop: "1px solid var(--line)" }}>
        <Reveal>
          <div className="panel">
            <p className="mono-bit" style={{ marginBottom: 2 }}>currently</p>
            <p style={{ marginTop: 6, fontSize: 15.5, color: "var(--ink-soft)" }}>
              probably down an SCP wiki rabbit hole, arguing with a Discord API rate limit, or
              rebuilding something that already worked fine.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="panel featured" style={{ marginTop: 16 }}>
            <div className="card-top">
              <h3>I like to yap</h3>
              <span className="meta-tag live">
                <span className="dot-sm" style={{ background: "var(--moss-text)" }} />
                open dms
              </span>
            </div>
            <p>
              Genuinely — SCP lore, music, whatever server infrastructure problem I&apos;m mid-way
              through solving, all of it. If any of this page or the interests channel resonates,
              add me on Discord and say hi.
            </p>
            <p className="mono-bit" style={{ marginTop: 12 }}>@_whois.vasu</p>
          </div>
        </Reveal>
      </section>

      <Footer />
    </>
  );
}
