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

  const firstName = personalInfo.name.split(" ")[0];

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
                href="#contact"
                className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-200"
              >
                Hubungi Saya
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
