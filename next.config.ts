import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Every image on the site is a small, static asset (the avatar and four
  // channel logos). Serving them directly — instead of through the on-demand
  // optimizer — keeps things simple and reliable, and is plenty fast at these
  // file sizes.
  images: { unoptimized: true },
};

export default nextConfig;
