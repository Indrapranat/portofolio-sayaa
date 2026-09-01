/* ============================================================
   Section — Studio Teknis Modern
   Generous vertical whitespace, left-aligned section eyebrow,
   thin 1px divider accent below heading.
   ============================================================ */
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
      className={`py-24 lg:py-32 animate-on-scroll ${className}`}
      aria-labelledby={title ? `${id}-heading` : undefined}
    >
      <Container>
        {title && (
          <div className="mb-14 lg:mb-18">
            <h2
              id={`${id}-heading`}
              className="text-headline-lg font-display text-[var(--color-text-primary)]"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-body-md text-[var(--color-text-secondary)] max-w-xl">
                {subtitle}
              </p>
            )}
            {/* Thin accent line — 40px, 1px */}
            <div
              className="mt-5 h-px w-10 bg-[var(--color-text-primary)]"
              aria-hidden="true"
            />
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
