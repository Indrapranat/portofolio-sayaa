/* ============================================================
   Hero Section — Studio Teknis Modern
   Clean, editorial, whitespace-dominant hero.
   ============================================================ */
import { ArrowDown, MapPin } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SocialLink } from "@/components/ui/SocialLink";
import { personalInfo, socialLinks } from "@/data/personal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--color-bg-primary)]"
      aria-label="Perkenalan"
    >
      {/* ── Subtle grid decoration ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.35,
        }}
      />
      {/* ── Gradient fade over grid ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)] pointer-events-none" />

      <Container>
        <div className="relative z-10 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28 max-w-4xl animate-on-scroll">

          {/* ── Availability pill ── */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] text-label-sm text-[var(--color-text-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Tersedia untuk proyek baru
          </div>

          {/* ── Name ── */}
          <h1 className="text-display-lg font-display text-[var(--color-text-primary)]">
            {personalInfo.name}
          </h1>

          {/* ── Title ── */}
          <p className="mt-4 text-headline-md font-display text-[var(--color-text-secondary)]">
            {personalInfo.title}
          </p>

          {/* ── Tagline ── */}
          <p className="mt-6 text-body-lg text-[var(--color-text-muted)] max-w-2xl">
            {personalInfo.tagline}
          </p>

          {/* ── Location ── */}
          <div className="mt-4 flex items-center gap-1.5 text-label-sm text-[var(--color-text-muted)]">
            <MapPin size={13} />
            {personalInfo.location}
          </div>

          {/* ── CTAs ── */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-start gap-3 w-full sm:w-auto">
            <Button href="#projects" variant="primary" size="lg" className="w-full sm:w-auto">
              Lihat Proyek
            </Button>
            <Button href="#contact" variant="secondary" size="lg" className="w-full sm:w-auto">
              Hubungi Saya
            </Button>
          </div>

          {/* ── Social Links ── */}
          <div className="mt-10 flex items-center gap-1">
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} link={link} />
            ))}
          </div>
        </div>
      </Container>

      {/* ── Scroll indicator ── */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
        aria-label="Gulir ke bagian Tentang"
      >
        <span className="text-label-sm hidden sm:block">Gulir</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
