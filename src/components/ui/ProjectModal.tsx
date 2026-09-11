"use client";

/* ============================================================
   ProjectModal — Detail Proyek & Galeri Slider 3 Gambar
   ============================================================ */
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CodeXml,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { Badge } from "./Badge";
import type { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const statusLabel: Record<string, string> = {
  completed: "Selesai",
  "in-progress": "Dalam Proses",
  maintained: "Aktif Dipelihara",
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Reset slide index saat project berganti
  useEffect(() => {
    setCurrentSlide(0);
  }, [project]);

  const images =
    project?.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : project?.imageUrl
      ? [project.imageUrl]
      : [];

  const handlePrev = useCallback(() => {
    if (images.length === 0) return;
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    if (images.length === 0) return;
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation (Escape, ArrowLeft, ArrowRight) & body scroll lock
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose, handlePrev, handleNext]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[var(--radius-xl)] bg-[var(--color-bg-primary)] border border-[var(--color-border)] shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Tombol Close ── */}
        <button
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white transition-colors backdrop-blur-sm shadow-md"
        >
          <X size={20} />
        </button>

        {/* ── Konten Scrollable ── */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* ── Image Slider (3 Gambar) ── */}
          {images.length > 0 && (
            <div className="relative aspect-video w-full bg-[var(--color-bg-tertiary)] select-none group">
              <Image
                src={images[currentSlide]}
                alt={`${project.title} - Gambar ${currentSlide + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover transition-opacity duration-300"
              />

              {/* Gradient overlay di atas & bawah */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

              {/* Badge Slide Counter & Info */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md shadow-sm">
                  {currentSlide + 1} / {images.length} Gambar
                </span>
                {project.status && (
                  <Badge variant="default" className="bg-black/60 text-white backdrop-blur-md border border-white/20">
                    {statusLabel[project.status] ?? project.status}
                  </Badge>
                )}
              </div>

              {/* Tombol Navigasi Slider Kiri & Kanan */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    aria-label="Gambar sebelumnya"
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all transform hover:scale-110 backdrop-blur-sm shadow-lg"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Gambar berikutnya"
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all transform hover:scale-110 backdrop-blur-sm shadow-lg"
                  >
                    <ChevronRight size={22} />
                  </button>

                  {/* Dot Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        aria-label={`Lihat gambar ke-${idx + 1}`}
                        className={[
                          "h-2 rounded-full transition-all duration-300",
                          currentSlide === idx
                            ? "w-6 bg-white shadow-sm"
                            : "w-2 bg-white/50 hover:bg-white/80",
                        ].join(" ")}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* ── Detail Proyek ── */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Header Judul & Role */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2 text-xs font-mono text-[var(--color-accent)]">
                {project.role && (
                  <span className="flex items-center gap-1">
                    <Sparkles size={14} />
                    {project.role}
                  </span>
                )}
              </div>
              <h2
                id="project-modal-title"
                className="text-display-sm sm:text-display-md font-display font-bold text-[var(--color-text-primary)]"
              >
                {project.title}
              </h2>
              <p className="mt-3 text-body-lg text-[var(--color-text-secondary)] leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tantangan (Problem) & Solusi (Solution) */}
            {(project.problem || project.solution) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.problem && (
                  <div className="p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                      <AlertCircle size={16} className="text-amber-500" />
                      Tantangan / Permasalahan
                    </div>
                    <p className="text-body-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div className="p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
                    <div className="flex items-center gap-2 text-sm font-semibold text-[var(--color-text-primary)] mb-2">
                      <Lightbulb size={16} className="text-[var(--color-accent)]" />
                      Solusi & Pendekatan
                    </div>
                    <p className="text-body-sm text-[var(--color-text-secondary)] leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Fitur Utama */}
            {project.features && project.features.length > 0 && (
              <div className="p-5 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-card)]">
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3">
                  Fitur Unggulan & Kapabilitas:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-body-sm text-[var(--color-text-secondary)]"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[var(--color-accent)] shrink-0 mt-0.5"
                      />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Teknologi yang Digunakan */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                Teknologi & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="default"
                    className="px-3 py-1 text-sm bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons (Link GitHub & Live Demo) */}
            <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center gap-3">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] bg-[var(--color-accent)] text-white font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
                >
                  <CodeXml size={16} />
                  Lihat Repositori di GitHub
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-tertiary)] text-[var(--color-text-primary)] font-medium text-sm hover:bg-[var(--color-border)] transition-colors"
                >
                  <ExternalLink size={16} />
                  Kunjungi Live Demo
                </a>
              )}
              <button
                onClick={onClose}
                className="ml-auto px-4 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
