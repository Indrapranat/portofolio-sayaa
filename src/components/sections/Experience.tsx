import { Section } from "@/components/layout/Section";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey"
      className="bg-[var(--color-bg-secondary)]"
    >
      <div className="max-w-2xl mx-auto">
        {experiences.map((exp, i) => (
          <ExperienceCard key={i} experience={exp} />
        ))}
      </div>
    </Section>
  );
}
