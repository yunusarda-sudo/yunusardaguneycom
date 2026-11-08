"use client";
import Image from "next/image";
import { useState } from "react";
import { portfolioDesign } from "@/config/site";
import { projectArtwork } from "@/data/projects";

interface ProjectThumbnailProps { projectId:string;title:string;gradientFrom?:string;gradientTo?:string;image?:string;featured?:boolean; }
export function ProjectThumbnail({projectId,title,image}:ProjectThumbnailProps) {
  const [failed,setFailed]=useState(false);
  const artwork=projectArtwork[projectId];
  const showImage=Boolean(image&&!failed);
  return <figure className="min-w-0">
    <div className={`work-cover cover-${artwork?.style ?? "solveny"}`}>
      {showImage ? <Image src={image!} alt={`${title} screenshot`} fill sizes="(max-width:767px) 85vw, 45vw" className="object-cover" onError={()=>setFailed(true)}/> : <>
        <div className="cover-meta eyebrow"><span>{artwork?.label}</span></div>
        {artwork?.style==='randevu'&&<div className="cover-orbit" aria-hidden/>}
        {artwork?.style==='solveny'&&<div className="cover-stripes" aria-hidden/>}
        <div className="cover-word" aria-hidden>{artwork?.word.split('|').map(w=><span className="block" key={w}>{w}</span>)}</div>
        <p className="cover-bottom eyebrow">{artwork?.subtitle}</p>
      </>}
    </div>
    <figcaption className="eyebrow mt-3 text-muted">{showImage?title:portfolioDesign.work.artCaption}</figcaption>
  </figure>;
}
