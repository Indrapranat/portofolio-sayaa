/* ============================================================
   Projects Section — Studio Teknis Modern
   ============================================================ */
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProjects = projects
    .filter((p) => p.featured)
    .sort((a, b) => a.order - b.order);

  return (
    <Section
      id="projects"
      title="Proyek Unggulan"
      subtitle="Beberapa karya terbaik saya"
      className="bg-[var(--color-bg-secondary)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      <div className="mt-12">
        <Button
          href="https://github.com/indra7dev"
          variant="secondary"
          size="md"
          external
        >
          Lihat semua di GitHub →
        </Button>
      </div>
    </Section>
  );
}
