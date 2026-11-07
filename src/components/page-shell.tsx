import { SiteBackground } from "@/components/site-background";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div id="top" className="page-shell min-h-screen">
      <SiteBackground />
      <div className="relative">{children}</div>
    </div>
  );
}
