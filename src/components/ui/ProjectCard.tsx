import { ExternalLink, CodeXml } from "lucide-react";
import { Badge } from "./Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-card-hover)] hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1">
      {/* Project Image */}
      {project.imageUrl && (
        <div className="relative aspect-video overflow-hidden bg-[var(--color-bg-tertiary)]">
          <div className="absolute inset-0 flex items-center justify-center text-[var(--color-text-muted)]">
            <span className="text-sm">Project Preview</span>
          </div>
          {/* Status badge */}
          {project.status && (
            <div className="absolute top-3 right-3">
              <Badge variant="accent">
                {project.status === "completed"
                  ? "Completed"
                  : project.status === "in-progress"
                  ? "In Progress"
                  : "Maintained"}
              </Badge>
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-[var(--color-text-secondary)] line-clamp-3 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="outline">+{project.techStack.length - 4}</Badge>
          )}
        </div>

        {/* Links */}
        <div className="mt-5 flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              aria-label={`View source code for ${project.title}`}
            >
              <CodeXml size={16} />
              Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              aria-label={`View live demo of ${project.title}`}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
