/* ============================================================
   Badge — Studio Teknis Modern
   Chip / tag style: very light bg, no border default.
   ============================================================ */

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variants: Record<string, string> = {
    default:
      "bg-[var(--color-bg-tertiary)] text-[var(--color-text-secondary)]",
    accent:
      "bg-[var(--color-accent-muted)] text-[var(--color-accent)]",
    outline:
      "bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border)]",
  };

  return (
    <span
      className={[
        "inline-flex items-center px-2.5 py-0.5 rounded-[var(--radius-sm)]",
        "text-xs font-medium",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </span>
  );
}
