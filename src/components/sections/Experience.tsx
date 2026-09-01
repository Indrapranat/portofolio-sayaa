/* ============================================================
   Experience Section — Studio Teknis Modern
   ============================================================ */
import { Section } from "@/components/layout/Section";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Pengalaman"
      subtitle="Perjalanan profesional saya"
    >
      <div className="max-w-3xl border-t border-[var(--color-border)]">
        {experiences.map((exp, i) => (
          <ExperienceCard
            key={i}
            experience={exp}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
