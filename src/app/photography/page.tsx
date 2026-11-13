"use client";

import Link from "next/link";
import ChannelHeader from "@/components/ChannelHeader";
import Reveal from "@/components/Reveal";
import Redacted from "@/components/Redacted";
import Footer from "@/components/Footer";

// The conveyor-belt gallery (components/PhotographyBelt.tsx) is parked until it's
// finished. This channel shows a containment notice in the meantime.
export default function Photography() {
  return (
    <>
      <ChannelHeader name="photography" topic="access restricted · coming soon" />
      <div className="content-inner">
        <Reveal>
          <div className="hazard-band" aria-hidden />
        </Reveal>

        <Reveal delay={0.04}>
          <article className="scp-doc scp-notice" aria-labelledby="scp-notice-title">
            <div className="scp-doc-head">
              <span>Item #: VASU-PH-07</span>
              <span>Object Class: Pending</span>
              <span>Clearance: Level 0 — Public</span>
            </div>

            <div className="scp-doc-body">
              <div className="scp-notice-top">
                <div>
                  <p className="scp-notice-kicker">The Foundation · Exhibit notice</p>
                  <h1 id="scp-notice-title" className="scp-notice-title">
                    #photography is in containment
                  </h1>
                </div>
                <div className="scp-stamp" role="img" aria-label="Stamp: coming soon">
                  <span>Coming</span>
                  <span>soon</span>
                </div>
              </div>

              <div className="scp-field">
                <span className="k">Special containment procedures</span>
                <p className="v">
                  The exhibit is held at Provisional Site-<Redacted>19</Redacted> while its
                  conveyor apparatus is recalibrated. Visitors may not proceed past this notice.
                  Personnel who report hearing a conveyor belt running behind this page should
                  disregard it.
                </p>
              </div>

              <div className="scp-field">
                <span className="k">Description</span>
                <p className="v">
                  VASU-PH-07 is a collection of <Redacted>an undisclosed number of</Redacted>{" "}
                  photographs taken by the site&apos;s owner, currently awaiting cataloguing. When displayed, the images arrive on a
                  moving industrial belt. Attempts to view them in a plain grid have been{" "}
                  <Redacted>unsatisfying</Redacted>.
                </p>
              </div>

              <div className="scp-field">
                <span className="k">Declassification progress</span>
                <div className="scp-progress" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} aria-label="Declassification progress">
                  <span style={{ width: "60%" }} />
                </div>
                <p className="scp-progress-label">
                  60% · estimated release: <Redacted>when the belt stops jamming</Redacted>
                </p>
              </div>

              <div className="scp-field">
                <span className="k">Addendum PH-07-A</span>
                <p className="v">
                  Redacted bars on this page declassify on hover. Further anomalies are
                  catalogued in{" "}
                  <Link href="/yapping" className="td-link">#yapping</Link>, and contained
                  projects in{" "}
                  <Link href="/portfolio" className="td-link">#portfolio</Link>.
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="hazard-band" aria-hidden />
        </Reveal>

        <Footer />
      </div>
    </>
  );
}
