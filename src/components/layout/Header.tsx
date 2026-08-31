"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { navItems } from "@/data/navigation";
import { personalInfo } from "@/data/personal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.href);
          }
        },
        { rootMargin: "-50% 0px -50% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border)] shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <Container>
          <nav
            className="flex items-center justify-between h-16 lg:h-20"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo / Name */}
            <a
              href="#"
              className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              aria-label={`${personalInfo.name} — Home`}
            >
              <span className="text-[var(--color-accent)]">&lt;</span>
              {personalInfo.name.split(" ")[0]}
              <span className="text-[var(--color-accent)]"> /&gt;</span>
            </a>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === item.href
                        ? "text-[var(--color-accent)] bg-[var(--color-accent-muted)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5"
                    }`}
                    aria-current={
                      activeSection === item.href ? "true" : undefined
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-white/5 transition-colors"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-expanded={isMobileOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
