"use client";

import { useEffect, useState } from "react";

/** Cycles through `items` on an interval. Starts at index 0 so SSR and the
 *  first client render match (no hydration mismatch), then advances. */
export function useCycle<T>(items: T[], ms = 3200): T {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (items.length <= 1) return;
    const id = setInterval(() => setI((v) => (v + 1) % items.length), ms);
    return () => clearInterval(id);
  }, [items.length, ms]);
  return items[i];
}
