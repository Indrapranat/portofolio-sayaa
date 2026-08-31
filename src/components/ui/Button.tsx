import { ArrowRight } from "lucide-react";

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
  const variants = {
    primary:
      "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-lg shadow-[var(--color-accent)]/20 hover:shadow-[var(--color-accent)]/30",
    secondary:
      "bg-white/5 text-[var(--color-text-primary)] border border-[var(--color-border)] hover:bg-white/10 hover:border-[var(--color-border-hover)]",
    ghost:
      "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        {icon && <ArrowRight size={16} />}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {children}
      {icon && <ArrowRight size={16} />}
    </button>
  );
}
