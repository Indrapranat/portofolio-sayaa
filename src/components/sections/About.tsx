/* ============================================================
   About Section — Studio Teknis Modern
   Two-column layout on desktop: bio text + stats grid.
   ============================================================ */
import { Section } from "@/components/layout/Section";
import { personalInfo } from "@/data/personal";

const stats = [
  { value: "3+", label: "Tahun Pengalaman" },
  { value: "20+", label: "Proyek Selesai" },
  { value: "15+", label: "Teknologi" },
  { value: "10+", label: "Klien Puas" },
];

export function About() {
  return (
    <Section
      id="about"
      title="Tentang Saya"
      subtitle="Latar belakang dan apa yang saya kerjakan"
      className="bg-[var(--color-bg-secondary)]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">

        {/* ── Bio ── */}
        <div className="lg:col-span-3 space-y-4">
          {personalInfo.about.map((paragraph, i) => (
            <p
              key={i}
              className="text-body-lg text-[var(--color-text-secondary)] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}

          <div className="pt-2">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-label-sm text-[var(--color-text-primary)] underline underline-offset-4 hover:text-[var(--color-accent-hover)] transition-colors duration-200"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        {/* ── Stats grid ── */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <p className="font-display text-3xl font-700 text-[var(--color-text-primary)] leading-none">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-[var(--color-text-muted)] leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
