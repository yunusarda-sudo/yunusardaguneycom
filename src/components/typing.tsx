"use client";

import { useEffect, useState } from "react";

interface TypingProps {
  words: readonly string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdTime?: number;
}

/**
 * Tek bir başlığı yazıp silen, sonra sonrakine geçen typing efekti.
 * prefers-reduced-motion'da statik olarak ilk kelimeyi gösterir.
 */
export function Typing({
  words,
  className,
  typeSpeed = 70,
  deleteSpeed = 38,
  holdTime = 1500,
}: TypingProps) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
  }, []);

  useEffect(() => {
    if (reduced || words.length === 0) return;

    const current = words[wordIndex % words.length];
    const done = text === current;
    const empty = text === "";

    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && done) delay = holdTime;
    if (deleting && empty) delay = 240;

    const id = setTimeout(() => {
      if (!deleting && done) {
        setDeleting(true);
        return;
      }
      if (deleting && empty) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
        return;
      }
      const next = deleting
        ? current.slice(0, text.length - 1)
        : current.slice(0, text.length + 1);
      setText(next);
    }, delay);

    return () => clearTimeout(id);
  }, [text, deleting, wordIndex, words, reduced, typeSpeed, deleteSpeed, holdTime]);

  if (reduced) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="type-caret" aria-hidden>
        |
      </span>
    </span>
  );
}
