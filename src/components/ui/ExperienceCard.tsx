/* ============================================================
   ExperienceCard — Studio Teknis Modern
   Timeline list-item style:
   Left column: date (muted) | Right column: content
   Separated by 1px horizontal dividers.
   ============================================================ */
import { getDateRange } from "@/lib/utils";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
}

export function ExperienceCard({ experience, isLast = false }: ExperienceCardProps) {
  return (
    <div
      className={[
        "grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-8 py-7",
        !isLast ? "border-b border-[var(--color-border)]" : "",
      ].join(" ")}
    >
      {/* ── Date column ── */}
      <div className="sm:pt-0.5">
        <p className="text-label-sm text-[var(--color-text-muted)]">
          {getDateRange(experience.startDate, experience.endDate, experience.current)}
        </p>
        {experience.current && (
          <span className="inline-flex items-center mt-1.5 gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-[var(--radius-xs)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Sekarang
          </span>
        )}
      </div>

      {/* ── Content column ── */}
      <div>
        <h3 className="text-headline-md font-display text-[var(--color-text-primary)]">
          {experience.role}
        </h3>
        <p className="mt-0.5 text-label-sm text-[var(--color-text-secondary)]">
          {experience.company}
        </p>
        <ul className="mt-3 flex flex-col gap-1.5">
          {experience.description.map((desc, i) => (
            <li
              key={i}
              className="flex gap-2 text-body-md text-[var(--color-text-secondary)]"
            >
              <span className="shrink-0 mt-[0.35rem] w-1 h-1 rounded-full bg-[var(--color-text-muted)]" />
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
