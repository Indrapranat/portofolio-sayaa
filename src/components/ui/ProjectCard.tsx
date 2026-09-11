"use client";

/* ============================================================
   ProjectCard — Studio Teknis Modern
   White card, 1px border, ultra-low shadow.
   Hover: border strengthens, shadow lifts slightly.
   ============================================================ */
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, CodeXml, ChevronLeft, ChevronRight, Eye } from "lucide-react";
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
  const [activeSlide, setActiveSlide] = useState(0);

  const images =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : project.imageUrl
      ? [project.imageUrl]
      : [];

  const handleCardPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setActiveSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleCardNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length <= 1) return;
    setActiveSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

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
      {/* ── Image Container (Crisp, No Blur) ── */}
      {images.length > 0 && (
        <div className="relative aspect-video bg-zinc-950 overflow-hidden select-none">
          <Image
            key={images[activeSlide]}
            src={images[activeSlide]}
            alt={`${project.title} - Gambar ${activeSlide + 1}`}
            fill
            unoptimized
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />

          {/* Status Badge */}
          {project.status && (
            <div className="absolute top-3 right-3 z-10">
              <Badge
                variant="default"
                className="shadow-sm bg-black/75 text-white border border-white/20"
              >
                {statusLabel[project.status] ?? project.status}
              </Badge>
            </div>
          )}

          {/* Slider Controls on Card Hover (Jika ada lebih dari 1 gambar) */}
          {images.length > 1 && (
            <>
              {/* Counter Badge */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-black/75 text-white border border-white/20">
                <span>{activeSlide + 1} / {images.length} Foto</span>
              </div>

              {/* Navigasi Panah Cepat di Kartu */}
              <button
                type="button"
                onClick={handleCardPrev}
                aria-label="Foto sebelumnya"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/70 hover:bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/20 shadow-md cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleCardNext}
                aria-label="Foto berikutnya"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-black/70 hover:bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-white/20 shadow-md cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>

              {/* Mini Dot Indicators */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2 py-1 rounded-full bg-black/60">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={[
                      "h-1.5 rounded-full transition-all duration-200",
                      activeSlide === idx ? "w-4 bg-white" : "w-1.5 bg-white/40",
                    ].join(" ")}
                  />
                ))}
              </div>
            </>
          )}

          {/* Hint Overlay (Tanpa Blur agar tidak buram) */}
          <div className="absolute bottom-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <span className="flex items-center gap-1 px-2 py-1 rounded text-[11px] font-semibold bg-black/80 text-white border border-white/10 shadow-sm">
              <Eye size={12} />
              Buka Detail
            </span>
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
