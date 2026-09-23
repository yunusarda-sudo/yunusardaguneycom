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
      className={`relative w-full overflow-hidden rounded-lg border border-border bg-paper ${featured ? "aspect-[16/10]" : "aspect-video"}`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientFrom} ${gradientTo} transition-opacity duration-500 ${showImage ? "opacity-40" : "opacity-100"}`}
      />

      {/* Typographic cover — dev serif monogram, hover'da hafifçe yükselir */}
      {!showImage && (
        <span
          aria-hidden
          className="display-text display-italic pointer-events-none absolute -bottom-8 right-1 select-none text-[8rem] leading-none text-foreground/[0.08] transition-transform duration-700 ease-out group-hover:-translate-y-3 sm:text-[10rem]"
        >
          {title.charAt(0)}
        </span>
      )}

      {showImage && (
        <Image
          src={image}
          alt={`${title} önizleme`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes={
            featured
              ? "(max-width: 1024px) 50vw, 33vw"
              : "(max-width: 1024px) 100vw, 33vw"
          }
          onError={() => setImgError(true)}
        />
      )}

      {/* Hairline grid texture */}
      <div className="absolute inset-0 opacity-[0.4]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id={`grid-${projectId}`}
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 22 0 L 0 0 0 22"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-foreground/15"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${projectId})`} />
        </svg>
      </div>

    </div>
  );
}
