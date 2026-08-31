import { Container } from "./Container";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function Section({
  id,
  children,
  title,
  subtitle,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <Container>
        {title && (
          <div className="mb-12 lg:mb-16 text-center">
            <h2
              id={`${id}-heading`}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--color-text-primary)]"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--color-text-secondary)]">
                {subtitle}
              </p>
            )}
            <div className="mt-6 mx-auto h-1 w-16 rounded-full bg-[var(--color-accent)]" />
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
