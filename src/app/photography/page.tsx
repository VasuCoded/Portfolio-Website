"use client";

import ChannelHeader from "@/components/ChannelHeader";
import Footer from "@/components/Footer";
import PhotographyBelt from "@/components/PhotographyBelt";

export default function Photography() {
  return (
    <>
      <ChannelHeader name="photography" topic="packages on a belt · scroll to run it" />
      <div className="belt-page">
        <PhotographyBelt />
        <Footer />
      </div>
    </>
  );
}
