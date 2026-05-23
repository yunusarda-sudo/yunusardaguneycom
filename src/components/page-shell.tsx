export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div
        className="page-glow pointer-events-none fixed inset-0 z-0"
        aria-hidden
      />
      <div
        className="page-grid pointer-events-none fixed inset-0 z-0"
        aria-hidden
      />
      <div
        className="page-grain pointer-events-none fixed inset-0 z-0"
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
