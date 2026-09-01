/* ============================================================
   ProjectCard — Studio Teknis Modern
   White card, 1px border, ultra-low shadow.
   Hover: border strengthens, shadow lifts slightly.
   ============================================================ */
import Image from "next/image";
import { ExternalLink, CodeXml } from "lucide-react";
import { Badge } from "./Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const statusLabel: Record<string, string> = {
  completed: "Selesai",
  "in-progress": "Dalam Proses",
  maintained: "Maintained",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={[
        "group relative flex flex-col rounded-[var(--radius-lg)]",
        "border border-[var(--color-border)] bg-[var(--color-bg-card)]",
        "overflow-hidden transition-all duration-300",
        "hover:border-[var(--color-border-hover)]",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)]",
      ].join(" ")}
    >
      {/* ── Image Placeholder ── */}
      {project.imageUrl && (
        <div className="relative aspect-video bg-[var(--color-bg-tertiary)] overflow-hidden">
          <Image 
            src={project.imageUrl} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
          />
          {project.status && (
            <div className="absolute top-3 right-3">
              <Badge variant="default">
                {statusLabel[project.status] ?? project.status}
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <h3 className="text-headline-md font-display text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {project.title}
        </h3>

        <p className="mt-2 text-body-md text-[var(--color-text-secondary)] line-clamp-3 flex-1 leading-relaxed">
          {project.description}
        </p>

        {/* ── Tech Stack chips ── */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline">+{project.techStack.length - 4}</Badge>
          )}
        </div>

        {/* ── Links ── */}
        <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center gap-5">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-label-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
              aria-label={`Lihat kode sumber ${project.title}`}
            >
              <CodeXml size={14} />
              Source
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-label-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
              aria-label={`Lihat demo ${project.title}`}
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
