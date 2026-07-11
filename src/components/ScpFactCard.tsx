"use client";

import RandomPicker from "@/components/RandomPicker";
import { SCP_FACTS } from "@/data/scpFacts";

export default function ScpFactCard() {
  return (
    <div className="fact-card">
      <div className="fact-eyebrow">
        <span className="dot-sm" style={{ background: "var(--clay-text)" }} />
        random SCP fact
      </div>
      <RandomPicker
        items={SCP_FACTS}
        shuffleLabel="another one"
        render={(fact) => <p>{fact}</p>}
      />
    </div>
  );
}
