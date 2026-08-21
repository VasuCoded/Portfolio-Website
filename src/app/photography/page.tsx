"use client";

import ChannelHeader from "@/components/ChannelHeader";
import PhotographyBelt from "@/components/PhotographyBelt";

export default function Photography() {
  return (
    <>
      <ChannelHeader name="photography" topic="an endless belt · scroll to run it" />
      {/* fills the viewport; the belt loops, so the page itself never scrolls */}
      <div className="belt-page">
        <PhotographyBelt />
      </div>
    </>
  );
}
