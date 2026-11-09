import Image from "next/image";

export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <Image
        src="/backgrounds/blue-engraving-v3.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        unoptimized
      />
      <div className="site-background-shade" />
    </div>
  );
}
