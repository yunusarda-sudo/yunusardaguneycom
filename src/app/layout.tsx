import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";
import "./globals.css";

const readingFont = localFont({
  src: "./fonts/cormorant-garamond.ttf",
  variable: "--font-reading",
  weight: "300 700",
  display: "swap",
});

const labelFont = localFont({
  src: "./fonts/ibm-plex-mono.ttf",
  variable: "--font-labels",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} · ${siteConfig.role}`,
  description: siteConfig.tagline,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} · ${siteConfig.role}`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${readingFont.variable} ${labelFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
