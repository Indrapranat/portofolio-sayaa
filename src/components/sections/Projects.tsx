"use client";

/* ============================================================
   Projects Section — Studio Teknis Modern
   ============================================================ */
import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectModal } from "@/components/ui/ProjectModal";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import type { Project } from "@/types";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          <ProjectCard
            key={project.slug}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Button
          href="https://github.com/Indrapranat"
          variant="secondary"
          size="md"
          external
        >
          Lihat semua di GitHub →
        </Button>
        <p className="text-xs text-[var(--color-text-muted)]">
          * Klik pada kartu proyek untuk melihat detail lengkap dan galeri gambar.
        </p>
      </div>

      {/* ── Modal Dialog Detail Proyek & Slider Gambar ── */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </Section>
  );
}
