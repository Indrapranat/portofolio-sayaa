/* ============================================================
   Education Section — Studio Teknis Modern
   ============================================================ */
import { GraduationCap } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { education } from "@/data/education";
import { getDateRange } from "@/lib/utils";

export function Education() {
  return (
    <Section
      id="education"
      title="Pendidikan"
      subtitle="Latar belakang akademik"
      className="bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-3xl border-t border-[var(--color-border)]">
        {education.map((edu, i) => (
          <div
            key={i}
            className={[
              "grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-4 sm:gap-8 py-7",
              i < education.length - 1 ? "border-b border-[var(--color-border)]" : "",
            ].join(" ")}
          >
            {/* Date */}
            <div className="sm:pt-0.5">
              <p className="text-label-sm text-[var(--color-text-muted)]">
                {getDateRange(edu.startDate, edu.endDate)}
              </p>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)] shrink-0">
                  <GraduationCap size={16} className="text-[var(--color-text-primary)]" />
                </div>
                <div>
                  <h3 className="text-headline-md font-display text-[var(--color-text-primary)]">
                    {edu.degree} — {edu.field}
                  </h3>
                  <p className="mt-0.5 text-label-sm text-[var(--color-text-secondary)]">
                    {edu.institution}
                  </p>
                  {edu.achievements && (
                    <ul className="mt-3 flex flex-col gap-1.5">
                      {edu.achievements.map((item, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-body-md text-[var(--color-text-secondary)]"
                        >
                          <span className="shrink-0 mt-[0.35rem] w-1 h-1 rounded-full bg-[var(--color-text-muted)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
