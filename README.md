# vasu's server

A personal site built to look and work like a Discord server: a channel
sidebar, a live member list, and pages styled as channels. Live at
https://vasucoded.vercel.app/

## What's on it

- **#welcome**: a profile card, a quick-facts panel, and a canvas whiteboard
  you can draw on
- **#yapping**: music (a "now spinning" player, two playlists, a shuffle
  track picker), an SCP Foundation write-up with a random fact generator,
  four YouTube channel cards, and notes on learning TouchDesigner
- **#portfolio**: project cards for WhatNow, Collab Platform, the After
  Hours Discord bot, and a TouchDesigner build, plus two unbuilt ideas and
  past community/event work
- **#photography**: a top-down conveyor belt scene, DOM elements animated
  with refs and requestAnimationFrame, scroll-jacked so wheel/touch input
  drives the belt instead of the page

Also: a member list sidebar with real Discord presence pulled from the
public Lanyard API, light/dark theme toggle, animated page transitions
(Framer Motion), and a bottom nav bar for mobile.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer
Motion. No database or CMS: content (songs, channels, SCP facts) lives in
static TypeScript files under `src/data`.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.
