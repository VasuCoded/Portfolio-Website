"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/* ============================================================================
   #photography — a top-down industrial conveyor belt.
   Ported from the left-to-right HTML prototype and turned vertical: the belt
   runs down the page, rails on the left/right, tread chevrons flowing down,
   wheel/touch scroll drives the belt (capturing until you hit an end), photo
   "crates" ride it, and loose stencilled text scatters between them and gets
   shoved aside when a photo comes near.

   Everything that moves per-frame is written straight to the DOM via refs in a
   single rAF loop — React never re-renders on scroll.
   ========================================================================== */

// ---- content data -----------------------------------------------------------

// TODO: replace with real photos in /public/photography — set `src` to the file
// path (e.g. "/photography/01.jpg"); leave "" to keep the numbered placeholder.
const PHOTOS: { id: number; src: string; caption: string }[] = [
  { id: 1, src: "", caption: "roll 01 · shot on [location]" },
  { id: 2, src: "", caption: "golden hour · [location]" },
  { id: 3, src: "", caption: "35mm · handheld" },
  { id: 4, src: "", caption: "roll 02 · [what it is]" },
  { id: 5, src: "", caption: "overcast, no edit" },
  { id: 6, src: "", caption: "street · [city], 2026" },
  { id: 7, src: "", caption: "long exposure · [location]" },
  { id: 8, src: "", caption: "roll 03 · [subject]" },
  { id: 9, src: "", caption: "shot on a moka-pot break" },
  { id: 10, src: "", caption: "blue hour · [location]" },
  { id: 11, src: "", caption: "roll 04 · [what it is]" },
  { id: 12, src: "", caption: "one that survived the edit" },
];

// TODO: swap in your own scattered fragments — deliberately NOT photo captions,
// just random junk riding the line. `color` picks a label style (leave off for
// the plain stencil), `small` shrinks it. Orientation is randomised per label.
type Color = "yellow" | "red" | "blue" | "green" | "pink" | "orange" | "cyan" | "ink";
const LOOSE: { id: number; text: string; color?: Color; small?: boolean }[] = [
  { id: 1, text: "handle w/ care", color: "yellow" },
  { id: 2, text: "404", color: "red" },
  { id: 3, text: "fragile", color: "red", small: true },
  { id: 4, text: "wet paint", color: "blue" },
  { id: 5, text: "this way up ↑", color: "orange", small: true },
  { id: 6, text: "do not bend", color: "cyan", small: true },
  { id: 7, text: "beep boop", color: "green" },
  { id: 8, text: "sudo", color: "ink" },
  { id: 9, text: "★★★★☆", color: "pink", small: true },
  { id: 10, text: "lot 0447", small: true },
  { id: 11, text: "this is fine", color: "yellow" },
  { id: 12, text: "ctrl+z", color: "blue", small: true },
  { id: 13, text: "no signal", color: "red", small: true },
  { id: 14, text: "42", color: "cyan" },
  { id: 15, text: "loading…", small: true },
  { id: 16, text: "touch grass", color: "green" },
  { id: 17, text: "AIR CARGO", color: "orange", small: true },
  { id: 18, text: "do a barrel roll", color: "pink" },
  { id: 19, text: "0x1F4A9", color: "ink", small: true },
  { id: 20, text: "left on read", color: "blue", small: true },
  { id: 21, text: "sorted", color: "green", small: true },
  { id: 22, text: "REJECT", color: "red" },
  { id: 23, text: "keep flat", small: true },
  { id: 24, text: "npm install", color: "cyan", small: true },
  { id: 25, text: "insert coin", color: "yellow" },
  { id: 26, text: "quack", color: "pink", small: true },
  { id: 27, text: "no thoughts", color: "ink" },
  { id: 28, text: "batch #12", color: "blue", small: true },
  { id: 29, text: "vibes", color: "orange" },
  { id: 30, text: "half-off", color: "green", small: true },
  { id: 31, text: "cache miss", color: "red", small: true },
  { id: 32, text: "priority", color: "green" },
  { id: 33, text: "segfault", color: "cyan", small: true },
  { id: 34, text: "brb", color: "yellow", small: true },
  { id: 35, text: "you are here →", color: "pink" },
  { id: 36, text: "under construction", color: "orange", small: true },
  { id: 37, text: "banana", color: "yellow", small: true },
  { id: 38, text: "one more frame", color: "blue" },
  { id: 39, text: "handle w/ care", color: "ink", small: true },
  { id: 40, text: "unsorted", color: "red", small: true },
  { id: 41, text: "gg", color: "green" },
  { id: 42, text: "chmod 777", color: "cyan", small: true },
  { id: 43, text: "delivered", color: "pink", small: true },
  { id: 44, text: "afk", color: "ink", small: true },
  { id: 45, text: "f/8 and be there", color: "blue" },
  { id: 46, text: "the keeper", color: "orange" },
  { id: 47, text: "lorem ipsum", small: true },
  { id: 48, text: "TODO", color: "red" },
  { id: 49, text: "≈≈≈", color: "cyan", small: true },
  { id: 50, text: "respawn", color: "green", small: true },
  { id: 51, text: "yeet", color: "pink" },
  { id: 52, text: "0.0.0.0", color: "ink", small: true },
  { id: 53, text: "keep away from cats", color: "yellow", small: true },
  { id: 54, text: "ping", color: "blue", small: true },
  { id: 55, text: "pong", color: "orange", small: true },
  { id: 56, text: "game over", color: "red" },
  { id: 57, text: "wip", color: "green", small: true },
  { id: 58, text: "hello world", color: "cyan" },
  { id: 59, text: "★ heavy ★", color: "yellow", small: true },
  { id: 60, text: "return null", color: "ink", small: true },
  { id: 61, text: "moo", color: "pink", small: true },
  { id: 62, text: "do not stack", color: "orange", small: true },
  { id: 63, text: "buffering", color: "blue", small: true },
  { id: 64, text: "signal lost", color: "red", small: true },
  { id: 65, text: "made in a hurry", color: "green", small: true },
  { id: 66, text: "01001000", color: "cyan", small: true },
  { id: 67, text: "sike", color: "pink" },
  { id: 68, text: "checked twice", color: "ink", small: true },
  { id: 69, text: "return to sender", color: "yellow", small: true },
  { id: 70, text: "it works on my machine", color: "blue", small: true },
  { id: 71, text: "exit(0)", color: "green", small: true },
  { id: 72, text: "seen it", color: "orange", small: true },
];

// ---- belt geometry (px, in belt-space) --------------------------------------
const CRATE_W = 150;
const CRATE_H = 172;
const SPACING = 232; // gap between crate tops
// The belt is a seamless loop: photos repeat every LOOP px. Keeping the period
// an exact multiple of SPACING means the gap between the last photo of one lap
// and the first of the next is identical to every other gap → no visible seam.
const LOOP = PHOTOS.length * SPACING;

const TEXT_SCROLL = 0.97; // loose text scrolls a hair slower → photos creep past it
const AVOID_MARGIN = 12;
const SHOVE_MAX = 150; // clamp a single frame's shove so text can't teleport
const DY_LIMIT = 300; // how far a knocked label may drift from its lane

// deterministic PRNG so the scatter is identical on server + client
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type CrateLayout = { rot: number; xJitter: number };
type LooseLayout = { yNorm: number; xNorm: number; rot: number };

export default function PhotographyBelt() {
  // stable per-item scatter parameters
  const crateLayout = useMemo<CrateLayout[]>(() => {
    const rnd = mulberry32(1337);
    return PHOTOS.map((_, i) => ({
      rot: (i % 2 ? 2.2 : -2.2) + (rnd() * 2 - 1) * 1.6,
      xJitter: (rnd() * 2 - 1) * 16,
    }));
  }, []);

  const looseLayout = useMemo<LooseLayout[]>(() => {
    const rnd = mulberry32(90210);
    return LOOSE.map((_, i) => ({
      yNorm: (i + rnd()) / LOOSE.length,
      xNorm: (rnd() * 2 - 1) * 0.9,
      // full spread of orientations — some horizontal, some diagonal, some vertical
      rot: (rnd() * 2 - 1) * 90,
    }));
  }, []);

  const [reduced, setReduced] = useState(false);

  // refs to the moving pieces
  const sceneRef = useRef<HTMLDivElement>(null);
  const beltTrackRef = useRef<HTMLDivElement>(null);
  const looseTrackRef = useRef<HTMLDivElement>(null);
  const treadShiftRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const crateRefs = useRef<(HTMLDivElement | null)[]>([]);
  const looseRefs = useRef<(HTMLDivElement | null)[]>([]);

  // reduced-motion detection (post-mount, so it can fall back to a plain list)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const scene = sceneRef.current;
    const beltTrack = beltTrackRef.current;
    const looseTrack = looseTrackRef.current;
    const treadShift = treadShiftRef.current;
    if (!scene || !beltTrack || !looseTrack || !treadShift) return;

    // ---- live state (mutable, never triggers React) ----
    let beltTarget = 0; // where the wheel/touch wants the belt (unbounded — it loops)
    let beltOffset = 0; // smoothed current position
    let treadScroll = 0;
    let sceneCX = 0;
    let sceneH = 0;
    let halfBeltW = 0;
    let hintGone = false;

    const drag = crateLayout.map(() => ({ x: 0, y: 0 }));
    // persistent per-label displacement — a shoved label STAYS shoved
    const pos = looseLayout.map(() => ({ dx: 0, dy: 0 }));
    const looseHalf = looseLayout.map(() => ({ w: 40, h: 16 })); // rotated keep-out box
    const looseBox = looseLayout.map(() => ({ hw: 40, hh: 12 })); // element's own half-size
    let dragging = -1;

    function measure() {
      const w = scene!.clientWidth;
      sceneH = scene!.clientHeight;
      sceneCX = w / 2;
      const beltW = Math.max(240, Math.min(w * 0.72, 400));
      halfBeltW = (beltW - 28) / 2; // keep loose text inside the surface (rails are 14px)
      scene!.style.setProperty("--belt-w", `${beltW}px`);
      looseRefs.current.forEach((el, i) => {
        if (!el) return;
        const bw = el.offsetWidth;
        const bh = el.offsetHeight;
        looseBox[i] = { hw: bw / 2, hh: bh / 2 };
        // a rotated label footprints wider/taller — size the keep-out to its AABB
        const rad = (looseLayout[i].rot * Math.PI) / 180;
        const c = Math.abs(Math.cos(rad));
        const s = Math.abs(Math.sin(rad));
        looseHalf[i] = { w: (bw * c + bh * s) / 2, h: (bw * s + bh * c) / 2 };
      });
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(scene);

    // ---- input: the belt loops, so scroll always drives it (never the page) ----
    function onWheel(e: WheelEvent) {
      e.preventDefault();
      beltTarget += e.deltaY;
      treadScroll += e.deltaY * 0.5;
      hideHint();
    }

    // ---- input: touch drag (mobile) ----
    let lastTouchY = 0;
    function onTouchStart(e: TouchEvent) {
      if (dragging >= 0) return;
      lastTouchY = e.touches[0].clientY;
    }
    function onTouchMove(e: TouchEvent) {
      if (dragging >= 0) return; // a crate is being dragged instead
      e.preventDefault();
      const y = e.touches[0].clientY;
      const d = lastTouchY - y; // swipe up → advance belt
      lastTouchY = y;
      beltTarget += d;
      treadScroll += d * 0.5;
      hideHint();
    }

    function hideHint() {
      if (hintGone) return;
      hintGone = true;
      if (hintRef.current) hintRef.current.style.opacity = "0";
    }

    scene.addEventListener("wheel", onWheel, { passive: false });
    scene.addEventListener("touchstart", onTouchStart, { passive: false });
    scene.addEventListener("touchmove", onTouchMove, { passive: false });

    // ---- crate dragging (pointer) ----
    const cleanups: (() => void)[] = [];
    crateRefs.current.forEach((el, i) => {
      if (!el) return;
      let startX = 0;
      let startY = 0;
      let baseX = 0;
      let baseY = 0;
      const down = (e: PointerEvent) => {
        e.stopPropagation();
        dragging = i;
        startX = e.clientX;
        startY = e.clientY;
        baseX = drag[i].x;
        baseY = drag[i].y;
        el.setPointerCapture(e.pointerId);
        el.classList.add("dragging");
        hideHint();
      };
      const move = (e: PointerEvent) => {
        if (dragging !== i) return;
        e.stopPropagation();
        drag[i].x = baseX + (e.clientX - startX);
        drag[i].y = baseY + (e.clientY - startY);
      };
      const up = (e: PointerEvent) => {
        if (dragging !== i) return;
        dragging = -1;
        el.classList.remove("dragging");
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {}
      };
      el.addEventListener("pointerdown", down);
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerup", up);
      el.addEventListener("pointercancel", up);
      cleanups.push(() => {
        el.removeEventListener("pointerdown", down);
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerup", up);
        el.removeEventListener("pointercancel", up);
      });
    });

    // seamless wrap: keep the jump-point off-screen below the visible band
    const wrap = (y: number) => {
      let m = ((y % LOOP) + LOOP) % LOOP;
      if (m > sceneH + 320) m -= LOOP;
      return m;
    };

    // ---- the render loop ----
    let raf = 0;
    function frame() {
      beltOffset += (beltTarget - beltOffset) * 0.18;
      treadShift!.style.transform = `translate3d(0, ${-(((treadScroll % 96) + 96) % 96)}px, 0)`;

      // crates: looping, draggable (these DO spring back)
      const cx: number[] = [];
      const cy: number[] = [];
      for (let i = 0; i < crateLayout.length; i++) {
        const el = crateRefs.current[i];
        if (i !== dragging) {
          drag[i].x += (0 - drag[i].x) * 0.2;
          drag[i].y += (0 - drag[i].y) * 0.2;
        }
        const L = crateLayout[i];
        const wy = wrap(i * SPACING - beltOffset);
        if (el) {
          el.style.transform = `translate3d(${L.xJitter - CRATE_W / 2 + drag[i].x}px, ${wy + drag[i].y}px, 0) rotate(${L.rot}deg)`;
        }
        cx[i] = sceneCX + L.xJitter + drag[i].x;
        cy[i] = wy + CRATE_H / 2 + drag[i].y;
      }

      // loose labels: shoved by nearby photos and they STAY shoved — no home spring
      for (let j = 0; j < looseLayout.length; j++) {
        const el = looseRefs.current[j];
        if (!el) continue;
        const L = looseLayout[j];
        const hw = looseHalf[j].w;
        const hh = looseHalf[j].h;
        const xHome = L.xNorm * (halfBeltW - hw);
        const scrollY = wrap(L.yNorm * LOOP - beltOffset * TEXT_SCROLL);

        const centerX = sceneCX + xHome + pos[j].dx;
        const centerY = scrollY + pos[j].dy;

        let sx = 0;
        let sy = 0;
        for (let i = 0; i < cx.length; i++) {
          const dx = centerX - cx[i];
          const dy = centerY - cy[i];
          const ex = CRATE_W / 2 + hw + AVOID_MARGIN;
          const ey = CRATE_H / 2 + hh + AVOID_MARGIN;
          const penX = ex - Math.abs(dx);
          const penY = ey - Math.abs(dy);
          if (penX > 0 && penY > 0) {
            // shove out along whichever photo edge is nearest
            if (penX < penY) sx += (dx < 0 ? -1 : 1) * penX;
            else sy += (dy < 0 ? -1 : 1) * penY;
          }
        }
        const mag = Math.hypot(sx, sy);
        if (mag > SHOVE_MAX) {
          sx = (sx / mag) * SHOVE_MAX;
          sy = (sy / mag) * SHOVE_MAX;
        }
        // integrate into the persistent offset (eased) — it never returns home
        pos[j].dx += sx * 0.22;
        pos[j].dy += sy * 0.22;

        // keep it on the belt and roughly in its lane
        const lim = halfBeltW - hw;
        pos[j].dx = Math.max(-lim - xHome, Math.min(lim - xHome, pos[j].dx));
        pos[j].dy = Math.max(-DY_LIMIT, Math.min(DY_LIMIT, pos[j].dy));

        el.style.transform = `translate3d(${xHome + pos[j].dx - looseBox[j].hw}px, ${scrollY + pos[j].dy - looseBox[j].hh}px, 0) rotate(${L.rot}deg)`;
      }

      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      scene.removeEventListener("wheel", onWheel);
      scene.removeEventListener("touchstart", onTouchStart);
      scene.removeEventListener("touchmove", onTouchMove);
      cleanups.forEach((c) => c());
    };
  }, [reduced, crateLayout, looseLayout]);

  // ---- reduced-motion: plain static list, normal page scroll ----
  if (reduced) {
    return (
      <div className="pm-static">
        <p className="pm-static-note">
          reduced-motion is on — here&apos;s the plain roll, no moving belt.
        </p>
        <div className="pm-static-grid">
          {PHOTOS.map((p) => (
            <figure key={p.id} className="crate static">
              <div className="crate-img">
                {p.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.src} alt={p.caption} />
                ) : (
                  <span className="crate-ph">IMG {String(p.id).padStart(2, "0")}</span>
                )}
              </div>
              <figcaption className="cap">{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }

  // ---- the belt ----
  return (
    <div className="belt-scene" ref={sceneRef}>
      <div className="belt-hint" ref={hintRef}>
        scroll / swipe to run the belt · drag a photo
      </div>

      <div className="belt-wrap">
        <div className="rail left">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="bolt" style={{ top: `${8 + i * 12}%` }} />
          ))}
        </div>
        <div className="rail right">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="bolt" style={{ top: `${8 + i * 12}%` }} />
          ))}
        </div>

        <div className="belt-surface">
          <div className="tread-shift" ref={treadShiftRef}>
            <div className="treads" />
          </div>

          <div className="arrow-col" aria-hidden>
            {Array.from({ length: 7 }).map((_, i) => (
              <span key={i}>˅</span>
            ))}
          </div>

          {/* crates layer */}
          <div className="belt-track" ref={beltTrackRef}>
            {PHOTOS.map((p, i) => (
              <div
                key={p.id}
                className="crate"
                ref={(el) => {
                  crateRefs.current[i] = el;
                }}
                style={{ top: 0, left: "50%" }}
              >
                <div className="crate-img">
                  {p.src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.src} alt={p.caption} draggable={false} />
                  ) : (
                    <span className="crate-ph">IMG {String(p.id).padStart(2, "0")}</span>
                  )}
                </div>
                <div className="cap">{p.caption}</div>
              </div>
            ))}
          </div>

          {/* loose text layer (on top so it's never hidden behind a photo) */}
          <div className="loose-track" ref={looseTrackRef}>
            {LOOSE.map((tItem, j) => (
              <div
                key={tItem.id}
                className={`tag${tItem.color ? " " + tItem.color : ""}${tItem.small ? " small" : ""}`}
                ref={(el) => {
                  looseRefs.current[j] = el;
                }}
                style={{ left: "50%", top: 0 }}
              >
                {tItem.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
