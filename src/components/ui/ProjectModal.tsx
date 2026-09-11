"use client";

/* ============================================================
   ProjectModal — Detail Proyek & Galeri Slider Gambar Tajam
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
  const [touchStart, setTouchStart] = useState<number | null>(null);

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

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 40) handleNext();
    else if (diff < -40) handlePrev();
    setTouchStart(null);
  };

  // Keyboard navigation & body scroll lock
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-[var(--radius-xl)] bg-[var(--color-bg-primary)] border border-[var(--color-border)] shadow-2xl overflow-hidden animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Tombol Close ── */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup modal"
          className="absolute top-3 right-3 z-30 p-2.5 rounded-full bg-black/75 hover:bg-black text-white transition-colors backdrop-blur-md shadow-lg border border-white/20"
        >
          <X size={18} />
        </button>

        {/* ── Konten Scrollable ── */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* ── Image Slider (Tajam & Interaktif) ── */}
          {images.length > 0 && (
            <div className="relative w-full bg-zinc-950 select-none">
              {/* Container Tampilan Gambar (object-contain agar resolusi 100% tajam & tidak terpotong) */}
              <div
                className="relative w-full h-[260px] sm:h-[380px] md:h-[460px] flex items-center justify-center overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <Image
                  key={images[currentSlide]}
                  src={images[currentSlide]}
                  alt={`${project.title} - Gambar ${currentSlide + 1}`}
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />

                {/* Zona Klik Kiri & Kanan pada Gambar */}
                {images.length > 1 && (
                  <>
                    <div
                      onClick={handlePrev}
                      className="absolute inset-y-0 left-0 w-1/3 cursor-pointer z-10"
                      title="Klik untuk ke foto sebelumnya"
                    />
                    <div
                      onClick={handleNext}
                      className="absolute inset-y-0 right-0 w-1/3 cursor-pointer z-10"
                      title="Klik untuk ke foto berikutnya"
                    />
                  </>
                )}

                {/* Badge Info Slide Counter */}
                <div className="absolute top-3 left-3 z-20 flex items-center gap-2 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/75 text-white backdrop-blur-md border border-white/20 shadow-md">
                    {currentSlide + 1} / {images.length} Gambar
                  </span>
                  {project.status && (
                    <Badge
                      variant="default"
                      className="bg-black/75 text-white backdrop-blur-md border border-white/20"
                    >
                      {statusLabel[project.status] ?? project.status}
                    </Badge>
                  )}
                </div>

                {/* Tombol Panah Navigasi Kiri & Kanan */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      aria-label="Gambar sebelumnya"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/75 hover:bg-black text-white transition-all transform hover:scale-110 border border-white/20 shadow-xl cursor-pointer"
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      aria-label="Gambar berikutnya"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/75 hover:bg-black text-white transition-all transform hover:scale-110 border border-white/20 shadow-xl cursor-pointer"
                    >
                      <ChevronRight size={22} />
                    </button>
                  </>
                )}
              </div>

              {/* ── Thumbnail Bar (Bisa Diklik Langsung untuk Pindah Slide) ── */}
              {images.length > 1 && (
                <div className="flex items-center justify-center gap-3 py-2.5 px-4 bg-black/60 border-t border-white/10 backdrop-blur-sm">
                  {images.map((imgUrl, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={[
                        "relative flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all duration-200 cursor-pointer",
                        currentSlide === idx
                          ? "bg-[var(--color-accent)] text-white shadow-md scale-105"
                          : "bg-white/10 hover:bg-white/20 text-white/80",
                      ].join(" ")}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      <span>Foto {idx + 1}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* ── Detail Proyek Lengkap ── */}
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
                type="button"
                onClick={onClose}
                className="ml-auto px-4 py-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors cursor-pointer"
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
