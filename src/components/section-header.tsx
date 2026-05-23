interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  kicker?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  kicker,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-10 lg:mb-20">
      <div className="flex items-start gap-3 sm:flex-col sm:gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent">
          §{index}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-dim">
          / {label}
        </span>
      </div>

      <div className="max-w-3xl border-t-2 border-foreground/90 pt-6">
        {kicker && (
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted">
            {kicker}
          </p>
        )}
        <h2 className="display-text text-[2.5rem] leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
