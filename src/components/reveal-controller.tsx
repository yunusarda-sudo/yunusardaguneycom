"use client";

import { useEffect } from "react";

const STAGGER_STEP_MS = 90;
const STAGGER_CLEANUP_MS = 900;

/**
 * Tüm [data-reveal] elemanlarını gözleyip viewport'a girdiklerinde
 * `.in` sınıfı ekler. data-reveal="2" gibi sayısal değer verilirse
 * kademeli (staggered) gecikme uygular. Server-rendered DOM üstünde
 * çalışır, her bölümü client'a çevirmeye gerek kalmaz.
 */
export function RevealController() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      nodes.forEach((n) => n.classList.add("in"));
      return;
    }

    nodes.forEach((n) => n.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          const step = Number(el.dataset.reveal);
          if (Number.isFinite(step) && step > 0) {
            const delay = step * STAGGER_STEP_MS;
            el.style.transitionDelay = `${delay}ms`;
            // Gecikme yalnızca giriş animasyonu için; hover geçişlerini etkilemesin
            window.setTimeout(() => {
              el.style.transitionDelay = "";
            }, delay + STAGGER_CLEANUP_MS);
          }

          el.classList.add("in");
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return null;
}
