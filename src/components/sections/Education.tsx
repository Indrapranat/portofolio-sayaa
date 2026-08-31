import { GraduationCap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { education } from "@/data/education";
import { getDateRange } from "@/lib/utils";

export function Education() {
  return (
    <Section id="education" title="Education" subtitle="Academic background">
      <div className="max-w-2xl mx-auto space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="p-6 sm:p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
          >
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent-muted)] shrink-0">
                <GraduationCap size={20} className="text-[var(--color-accent)]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-sm font-medium text-[var(--color-accent)]">
                  {edu.institution}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {getDateRange(edu.startDate, edu.endDate)}
                </p>
                {edu.achievements && (
                  <ul className="mt-3 space-y-1">
                    {edu.achievements.map((item, j) => (
                      <li
                        key={j}
                        className="text-sm text-[var(--color-text-secondary)] flex gap-2"
                      >
                        <span className="text-[var(--color-accent)] shrink-0">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
