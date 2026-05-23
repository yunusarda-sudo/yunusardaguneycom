"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectThumbnailProps {
  projectId: string;
  title: string;
  gradientFrom: string;
  gradientTo: string;
  image?: string;
  featured?: boolean;
}

export function ProjectThumbnail({
  projectId,
  title,
  gradientFrom,
  gradientTo,
  image,
  featured,
}: ProjectThumbnailProps) {
  const [imgError, setImgError] = useState(false);
  const showImage = image && !imgError;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-lg bg-zinc-950 ${featured ? "aspect-[16/10]" : "aspect-video"}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} transition-opacity duration-500 ${showImage ? "opacity-40" : "opacity-100"}`}
      />

      {showImage && (
        <Image
          src={image}
          alt={`${title} önizleme`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes={
            featured
              ? "(max-width: 1024px) 50vw, 33vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          onError={() => setImgError(true)}
        />
      )}

      <div className="absolute inset-0 opacity-[0.35]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`grid-${projectId}`}
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent/30"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${projectId})`} />
        </svg>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent p-4 pt-12">
        <div className="flex items-end justify-between gap-2">
          <div className="flex gap-1.5">
            <div className="h-1.5 w-6 rounded-full bg-accent/70" />
            <div className="h-1.5 w-10 rounded-full bg-zinc-600" />
            <div className="h-1.5 w-4 rounded-full bg-zinc-700/80" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-muted/80">
            preview
          </span>
        </div>
      </div>
    </div>
  );
}
