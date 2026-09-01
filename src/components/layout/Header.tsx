/* ============================================================
   Header — Studio Teknis Modern design system
   Sticky, transparent-on-hero → solid+blur on scroll.
   Active section tracking via IntersectionObserver.
   ============================================================ */
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { navItems } from "@/data/navigation";
import { personalInfo } from "@/data/personal";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* ── Scroll detection ── */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Intersection Observer for active nav item ── */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(item.href);
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Body scroll lock when mobile nav open ── */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  const firstName = personalInfo.name;

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-[var(--color-bg-primary)]/90 backdrop-blur-xl border-b border-[var(--color-border)] shadow-[0_1px_0_0_var(--color-border)]"
            : "bg-transparent",
        ].join(" ")}
        role="banner"
      >
        <Container>
          <nav
            className="flex items-center justify-between h-16 lg:h-20"
            role="navigation"
            aria-label="Navigasi utama"
          >
            {/* ── Wordmark / Logo ── */}
            <a
              href="#"
              className="group flex items-center gap-0.5 text-sm font-semibold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200 font-display"
              aria-label={`${personalInfo.name} — Beranda`}
            >
              <span className="text-[var(--color-accent)] font-mono text-xs mr-0.5 opacity-60">&lt;</span>
              <span>{firstName}</span>
              <span className="text-[var(--color-accent)] font-mono text-xs ml-0.5 opacity-60">/&gt;</span>
            </a>

            {/* ── Desktop Nav ── */}
            <ul className="hidden lg:flex items-center gap-1" role="list">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={[
                        "text-label-sm px-4 py-2 rounded-[var(--radius-sm)] transition-all duration-200",
                        isActive
                          ? "text-[var(--color-text-primary)] bg-[var(--color-bg-tertiary)]"
                          : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)]",
                      ].join(" ")}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* ── Desktop CTA & Theme ── */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />
              <a
                href="https://wa.me/6281243508709"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium rounded-[var(--radius-sm)] bg-[#25D366] text-white hover:bg-[#20b858] hover:scale-105 active:scale-95 shadow-lg shadow-[#25D366]/20 transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Konsultasi Gratis
              </a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileOpen ? "Tutup menu" : "Buka menu"}
            >
              {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>
        </Container>
      </header>

      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
