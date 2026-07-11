"use client";

import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import ChannelHeader from "@/components/ChannelHeader";

export default function About() {
  return (
    <>
      <ChannelHeader name="about-me" topic="who I actually am" />
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

        <Footer />
      </div>
    </>
  );
}
