interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs tracking-widest text-accent">
          {index}
        </span>
        <span className="h-px flex-1 max-w-16 bg-border-bright" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {label}
        </span>
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      )}
    </div>
  );
}
