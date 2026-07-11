"use client";

import { useEffect, useRef, useState } from "react";

const PENS = ["#3F4E36", "#9A4A38", "#201F1A", "#6B8F55"];

export default function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const color = useRef(PENS[0]);
  const [active, setActive] = useState(PENS[0]);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctxRef.current = ctx;

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 2.5;
    };
    setup();
    window.addEventListener("resize", setup);
    return () => window.removeEventListener("resize", setup);
  }, []);

  const pos = (e: React.PointerEvent) => {
    const rect = canvasRef.current!.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const start = (e: React.PointerEvent) => {
    drawing.current = true;
    last.current = pos(e);
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
  };

  const move = (e: React.PointerEvent) => {
    if (!drawing.current || !ctxRef.current) return;
    const p = pos(e);
    const ctx = ctxRef.current;
    ctx.strokeStyle = color.current;
    ctx.beginPath();
    ctx.moveTo(last.current!.x, last.current!.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = p;
    if (!hasDrawn) setHasDrawn(true);
  };

  const end = () => {
    drawing.current = false;
    last.current = null;
  };

  const clear = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
  };

  return (
    <div className="whiteboard">
      <div className="wb-bar">
        <span className="wb-label">scribble zone · not saved, draw whatever</span>
        <div className="wb-tools">
          {PENS.map((c) => (
            <button
              key={c}
              className={`wb-pen${active === c ? " active" : ""}`}
              style={{ background: c }}
              onClick={() => {
                color.current = c;
                setActive(c);
              }}
              aria-label={`pen ${c}`}
            />
          ))}
          <button className="wb-clear" onClick={clear}>
            clear
          </button>
        </div>
      </div>
      <div className="wb-surface">
        <canvas
          ref={canvasRef}
          className="wb-canvas"
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerLeave={end}
        />
        {!hasDrawn && <span className="wb-hint">✎ draw something here</span>}
      </div>
    </div>
  );
}
