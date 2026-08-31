import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/data/skills";

export function Skills() {
  const categories = [
    { key: "frontend" as const, label: "Frontend" },
    { key: "backend" as const, label: "Backend" },
    { key: "tools" as const, label: "Tools & Platforms" },
  ];

  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies I work with"
      className="bg-[var(--color-bg-secondary)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {categories.map((category) => {
          const categorySkills = skills.filter(
            (s) => s.category === category.key
          );
          return (
            <div
              key={category.key}
              className="p-6 sm:p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]"
            >
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-4">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <Badge key={skill.name} variant="accent">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
