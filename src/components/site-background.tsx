import Image from "next/image";

export function SiteBackground() {
  return (
    <div className="site-background" aria-hidden="true">
      <Image
        src="/backgrounds/blue-engraving-v2.webp"
        alt=""
        fill
        sizes="100vw"
        priority
        quality={90}
      />
      <div className="site-background-shade" />
    </div>
  );
}
