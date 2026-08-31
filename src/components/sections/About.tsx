import { Section } from "@/components/layout/Section";
import { personalInfo } from "@/data/personal";

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Get to know me better">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {personalInfo.about.map((paragraph, i) => (
            <p
              key={i}
              className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Quick stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Completed", value: "10+" },
            { label: "Technologies", value: "15+" },
            { label: "Happy Clients", value: "5+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
            >
              <p className="text-2xl sm:text-3xl font-bold text-[var(--color-accent)]">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
