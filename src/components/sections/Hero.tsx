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
            <Button href="#projects" variant="primary" size="lg" className="w-full sm:w-auto hover:scale-105 hover:shadow-[0_0_20px_var(--color-accent)] active:scale-95 transition-all duration-300">
              Lihat Proyek
            </Button>
            <a
              href="https://wa.me/6281243508709"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-medium rounded-[var(--radius-sm)] bg-[#25D366] text-white hover:bg-[#20b858] hover:scale-105 hover:shadow-[0_0_20px_#25D366] active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konsultasi Gratis
            </a>
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
