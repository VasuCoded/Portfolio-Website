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

// TODO: swap in your own scattered fragments — these are NOT photo captions,
// just stray stuff riding the line along with the packages.
const LOOSE: { id: number; text: string; variant?: "warn" | "small" }[] = [
  { id: 1, text: "handle w/ care", variant: "warn" },
  { id: 2, text: "roll 01" },
  { id: 3, text: "fragile", variant: "warn" },
  { id: 4, text: "keep dry", variant: "small" },
  { id: 5, text: "this way up ↑" },
  { id: 6, text: "do not bend", variant: "small" },
  { id: 7, text: "hyderabad, 2026" },
  { id: 8, text: "underexposed on purpose", variant: "small" },
  { id: 9, text: "iso 3200" },
  { id: 10, text: "lot 0447", variant: "small" },
  { id: 11, text: "expired film", variant: "warn" },
  { id: 12, text: "roll 02" },
  { id: 13, text: "shutter stuck again", variant: "small" },
  { id: 14, text: "f/1.8" },
  { id: 15, text: "no flash", variant: "small" },
  { id: 16, text: "grain is a feature" },
];

// ---- belt geometry (px, in belt-space) --------------------------------------
const CRATE_W = 150;
const CRATE_H = 172;
const SPACING = 232; // gap between crate tops
const START_PAD = 56;
const END_PAD = 72;
const BELT_LENGTH = START_PAD + (PHOTOS.length - 1) * SPACING + CRATE_H + END_PAD;

const PARALLAX = 0.9; // loose text follows the belt slightly slower → drift
const PUSH_MAX = 140; // cap on the combined shove so a tag never flies off the belt
const AVOID_MARGIN = 14;

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
type LooseLayout = {
  yNorm: number;
  xNorm: number;
  rot: number;
  phase: number;
  amp: number;
};

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
      xNorm: (rnd() * 2 - 1) * 0.86,
      rot: (rnd() * 2 - 1) * 7,
      phase: rnd() * Math.PI * 2,
      amp: 3 + rnd() * 8,
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
    let beltTarget = 0; // where the wheel/touch wants the belt
    let beltOffset = 0; // smoothed current position
    let treadScroll = 0;
    let maxOffset = 0;
    let sceneCX = 0;
    let halfBeltW = 0;
    let hintGone = false;

    const drag = crateLayout.map(() => ({ x: 0, y: 0 }));
    const avoid = looseLayout.map(() => ({ x: 0, y: 0 }));
    const looseHalf = looseLayout.map(() => ({ w: 40, h: 16 }));
    let dragging = -1;

    function measure() {
      const w = scene!.clientWidth;
      const h = scene!.clientHeight;
      sceneCX = w / 2;
      const beltW = Math.max(240, Math.min(w * 0.72, 400));
      halfBeltW = (beltW - 28) / 2; // keep loose text inside the surface (rails are 14px)
      maxOffset = Math.max(0, BELT_LENGTH - h + 90);
      scene!.style.setProperty("--belt-w", `${beltW}px`);
      looseRefs.current.forEach((el, i) => {
        if (el) {
          looseHalf[i] = { w: el.offsetWidth / 2, h: el.offsetHeight / 2 };
        }
      });
    }
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(scene);

    // ---- input: wheel (desktop) ----
    function onWheel(e: WheelEvent) {
      const d = e.deltaY;
      const atStart = beltTarget <= 0 && d < 0;
      const atEnd = beltTarget >= maxOffset && d > 0;
      if (atStart || atEnd) return; // release to normal page scroll
      e.preventDefault();
      beltTarget = Math.min(maxOffset, Math.max(0, beltTarget + d));
      treadScroll += d * 0.5;
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
      const y = e.touches[0].clientY;
      const d = lastTouchY - y; // swipe up → advance belt
      lastTouchY = y;
      const atStart = beltTarget <= 0 && d < 0;
      const atEnd = beltTarget >= maxOffset && d > 0;
      if (atStart || atEnd) return; // let the page scroll
      e.preventDefault();
      beltTarget = Math.min(maxOffset, Math.max(0, beltTarget + d));
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

    // ---- the render loop ----
    let raf = 0;
    function frame(t: number) {
      beltOffset += (beltTarget - beltOffset) * 0.18;

      beltTrack!.style.transform = `translate3d(0, ${-beltOffset}px, 0)`;
      looseTrack!.style.transform = `translate3d(0, ${-beltOffset * PARALLAX}px, 0)`;
      treadShift!.style.transform = `translate3d(0, ${-(((treadScroll % 96) + 96) % 96)}px, 0)`;

      // crate transforms + their live screen-space centres
      const cx: number[] = [];
      const cy: number[] = [];
      for (let i = 0; i < crateLayout.length; i++) {
        const el = crateRefs.current[i];
        if (i !== dragging) {
          drag[i].x += (0 - drag[i].x) * 0.2;
          drag[i].y += (0 - drag[i].y) * 0.2;
        }
        const L = crateLayout[i];
        if (el) {
          el.style.transform = `translate3d(${L.xJitter - CRATE_W / 2 + drag[i].x}px, ${drag[i].y}px, 0) rotate(${L.rot}deg)`;
        }
        cx[i] = sceneCX + L.xJitter + drag[i].x;
        cy[i] = START_PAD + i * SPACING + CRATE_H / 2 - beltOffset + drag[i].y;
      }

      // loose text: idle drift + get shoved around nearby photos
      for (let j = 0; j < looseLayout.length; j++) {
        const el = looseRefs.current[j];
        if (!el) continue;
        const L = looseLayout[j];
        const baseX = sceneCX + L.xNorm * (halfBeltW - looseHalf[j].w);
        const baseY = L.yNorm * BELT_LENGTH - beltOffset * PARALLAX;

        let tx = Math.sin(t * 0.0011 + L.phase) * L.amp;
        let ty = Math.cos(t * 0.0009 + L.phase) * L.amp;

        for (let i = 0; i < cx.length; i++) {
          const dx = baseX - cx[i];
          const dy = baseY - cy[i];
          // photo's rectangular keep-out (its half-extent + the tag's + margin)
          const ex = CRATE_W / 2 + looseHalf[j].w + AVOID_MARGIN;
          const ey = CRATE_H / 2 + looseHalf[j].h + AVOID_MARGIN;
          const penX = ex - Math.abs(dx);
          const penY = ey - Math.abs(dy);
          if (penX > 0 && penY > 0) {
            // shove out along whichever edge is nearest (min-translation)
            if (penX < penY) {
              const s = dx === 0 ? (Math.cos(L.phase) >= 0 ? 1 : -1) : Math.sign(dx);
              tx += s * penX;
            } else {
              const s = dy === 0 ? (Math.sin(L.phase) >= 0 ? 1 : -1) : Math.sign(dy);
              ty += s * penY;
            }
          }
        }

        // don't let combined shoves fling a tag off the belt
        const mag = Math.hypot(tx, ty);
        if (mag > PUSH_MAX) {
          tx = (tx / mag) * PUSH_MAX;
          ty = (ty / mag) * PUSH_MAX;
        }

        avoid[j].x += (tx - avoid[j].x) * 0.16;
        avoid[j].y += (ty - avoid[j].y) * 0.16;
        el.style.transform = `translate3d(${L.xNorm * (halfBeltW - looseHalf[j].w) - looseHalf[j].w + avoid[j].x}px, ${L.yNorm * BELT_LENGTH + avoid[j].y}px, 0) rotate(${L.rot}deg)`;
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
                style={{ top: START_PAD + i * SPACING, left: "50%" }}
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
                className={`tag${tItem.variant ? " " + tItem.variant : ""}`}
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
