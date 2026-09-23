"use client";

import { useEffect, useRef } from "react";

interface MagneticProps {
  children: React.ReactNode;
  /** 0–1 arası çekim gücü; 0.22 = sakin, lüks his */
  strength?: number;
  className?: string;
}

/**
 * İçeriğini imlece doğru hafifçe çeken sarmalayıcı.
 * Transform doğrudan DOM'a yazılır (state yok, re-render yok);
 * coarse pointer ve reduced-motion'da devre dışı kalır.
 */
export function Magnetic({ children, strength = 0.22, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const move = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * strength;
      const y = (e.clientY - rect.top - rect.height / 2) * strength;
      el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    };
    const leave = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={`magnetic ${className ?? ""}`}>
      {children}
    </div>
  );
}
