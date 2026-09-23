"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfilePhotoProps {
  src?: string | null;
  alt: string;
}

function ProfilePlaceholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface-elevated to-surface">
      <span className="font-mono text-3xl font-medium text-accent">YA</span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
        fotoğraf
      </span>
    </div>
  );
}

export function ProfilePhoto({ src, alt }: ProfilePhotoProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const showImage = Boolean(src) && !error;

  return (
    <div className="relative mx-auto shrink-0 lg:mx-0">
      <div
        className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-accent/15 via-transparent to-accent/5 blur-2xl"
        aria-hidden
      />
      <div className="luxe-card relative h-52 w-52 overflow-hidden rounded-2xl border border-border-bright bg-surface sm:h-56 sm:w-56">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-accent/15" aria-hidden />
        {!showImage ? (
          <ProfilePlaceholder />
        ) : (
          <>
            {!loaded && <div className="absolute inset-0 skeleton-shimmer" />}
            <Image
              src={src!}
              alt={alt}
              fill
              className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setLoaded(true)}
              onError={() => setError(true)}
              sizes="(max-width: 1024px) 208px, 224px"
              priority
            />
          </>
        )}
      </div>
    </div>
  );
}
