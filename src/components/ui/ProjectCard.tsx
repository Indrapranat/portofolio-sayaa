/* ============================================================
   ProjectCard — Studio Teknis Modern
   White card, 1px border, ultra-low shadow.
   Hover: border strengthens, shadow lifts slightly.
   ============================================================ */
import Image from "next/image";
import { ExternalLink, CodeXml, Eye, Images } from "lucide-react";
import { Badge } from "./Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

const statusLabel: Record<string, string> = {
  completed: "Selesai",
  "in-progress": "Dalam Proses",
  maintained: "Maintained",
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Buka detail dan galeri proyek ${project.title}`}
      className={[
        "group relative flex flex-col rounded-[var(--radius-lg)]",
        "border border-[var(--color-border)] bg-[var(--color-bg-card)]",
        "overflow-hidden transition-all duration-300 cursor-pointer",
        "hover:border-[var(--color-border-hover)] hover:-translate-y-1",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
      ].join(" ")}
    >
      {/* ── Image Placeholder with Gallery Hint ── */}
      {project.imageUrl && (
        <div className="relative aspect-video bg-[var(--color-bg-tertiary)] overflow-hidden">
          <Image 
            src={project.imageUrl} 
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
          />
          {project.status && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="default" className="shadow-sm backdrop-blur-sm bg-black/50 text-white border-0">
                {statusLabel[project.status] ?? project.status}
              </Badge>
            </div>
          )}

          {/* Badge jumlah gambar galeri */}
          {project.screenshots && project.screenshots.length > 1 && (
            <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black/60 text-white backdrop-blur-sm">
              <Images size={13} />
              <span>{project.screenshots.length} Foto</span>
            </div>
          )}

          {/* Hover overlay hint */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
            <Eye size={16} />
            <span>Klik untuk Detail & Slider</span>
          </div>
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
        <div className="mt-5 pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
          <div className="flex items-center gap-5">
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-label-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                aria-label={`Lihat demo ${project.title}`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
          <span className="text-xs text-[var(--color-accent)] font-medium group-hover:underline">
            Detail →
          </span>
        </div>
      </div>
    </article>
  );
}
