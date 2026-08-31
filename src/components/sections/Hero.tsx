import { ArrowDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SocialLink } from "@/components/ui/SocialLink";
import { personalInfo, socialLinks } from "@/data/personal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-accent)]/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--color-accent)]/5 blur-[120px] pointer-events-none" />

      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-white/5 text-sm text-[var(--color-text-secondary)] mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-[var(--color-text-primary)]">
              Hi, I&apos;m{" "}
            </span>
            <span className="bg-gradient-to-r from-[var(--color-accent)] to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Title */}
          <p className="mt-4 text-xl sm:text-2xl text-[var(--color-text-secondary)] font-medium">
            {personalInfo.title}
          </p>

          {/* Tagline */}
          <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <Button href="#projects" variant="primary" size="lg" icon>
              View Projects
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Get in Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-10 flex items-center gap-1">
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} link={link} />
            ))}
          </div>

          {/* Scroll indicator */}
          <a
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 animate-bounce"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </Container>
    </section>
  );
}
