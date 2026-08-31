import { Briefcase } from "lucide-react";
import { getDateRange } from "@/lib/utils";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <div className="group relative flex gap-4 sm:gap-6">
      {/* Timeline dot & line */}
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-accent-muted)] shrink-0">
          <Briefcase size={16} className="text-[var(--color-accent)]" />
        </div>
        <div className="w-px flex-1 bg-[var(--color-border)] mt-2" />
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
            {experience.role}
          </h3>
          {experience.current && (
            <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
              Current
            </span>
          )}
        </div>

        <p className="text-sm font-medium text-[var(--color-accent)]">
          {experience.company}
        </p>

        <p className="mt-1 text-xs text-[var(--color-text-muted)]">
          {getDateRange(
            experience.startDate,
            experience.endDate,
            experience.current
          )}
        </p>

        <ul className="mt-3 flex flex-col gap-1.5">
          {experience.description.map((desc, i) => (
            <li
              key={i}
              className="text-sm text-[var(--color-text-secondary)] flex gap-2"
            >
              <span className="text-[var(--color-accent)] shrink-0 mt-1.5">
                •
              </span>
              {desc}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
