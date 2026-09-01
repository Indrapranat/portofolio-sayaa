/* ============================================================
   Skills Section — Studio Teknis Modern
   Three category cards with badge chips inside.
   ============================================================ */
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/data/skills";

const categories = [
  { key: "frontend" as const, label: "Frontend", emoji: "🎨" },
  { key: "backend" as const, label: "Backend", emoji: "⚙️" },
  { key: "tools" as const, label: "Tools & Platform", emoji: "🛠" },
];

export function Skills() {
  return (
    <Section
      id="skills"
      title="Keahlian & Teknologi"
      subtitle="Teknologi yang saya gunakan sehari-hari"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat.key);
          return (
            <div
              key={cat.key}
              className="p-6 sm:p-8 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-border-hover)] transition-colors duration-200"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-xl" aria-hidden="true">{cat.emoji}</span>
                <h3 className="text-label-sm font-display text-[var(--color-text-primary)] uppercase tracking-widest">
                  {cat.label}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {catSkills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center gap-2 group cursor-pointer" title={skill.name}>
                    <div className="flex items-center justify-center w-12 h-12 sm:w-[4.5rem] sm:h-[4.5rem] rounded-xl bg-[#0f1115] border border-white/5 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[var(--shadow-hover)]">
                      <i className={`${skill.icon} colored text-[2rem] sm:text-5xl drop-shadow-sm ${skill.name === 'Next.js' ? 'bg-white rounded-full' : ''}`}></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
