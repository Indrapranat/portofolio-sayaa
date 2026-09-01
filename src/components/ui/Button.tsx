/* ============================================================
   Button — Studio Teknis Modern
   Primary: Navy solid | Secondary: bordered | Ghost: text only
   ============================================================ */

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  icon?: boolean;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external = false,
  icon = false,
  className = "",
  onClick,
}: ButtonProps) {
  const variants: Record<string, string> = {
    primary:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)]",
    secondary:
      "bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-secondary)]",
    ghost:
      "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]",
  };

  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-sm",
  };

  const base = [
    "inline-flex items-center justify-center gap-2 font-medium",
    "rounded-[var(--radius-sm)] transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if (href) {
    return (
      <a
        href={href}
        className={base}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={base} onClick={onClick}>
      {children}
    </button>
  );
}
