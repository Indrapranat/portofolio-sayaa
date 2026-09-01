"use client";

import { navItems } from "@/data/navigation";
import { personalInfo } from "@/data/personal";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileNav({ isOpen, onClose, activeSection }: MobileNavProps) {
  return (
    <div
      id="mobile-nav"
      className={[
        "fixed inset-0 z-40 lg:hidden transition-all duration-300",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label="Navigasi mobile"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        className={[
          "absolute right-0 top-0 h-full w-72 bg-[var(--color-bg-card)]",
          "border-l border-[var(--color-border)]",
          "shadow-[var(--shadow-hover)]",
          "transition-transform duration-300",
          isOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex flex-col pt-24 px-6">
          {/* Nav items */}
          <ul className="flex flex-col" role="list">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className={[
                      "block px-3 py-3 rounded-[var(--radius-sm)] text-body-md font-medium transition-all duration-200",
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

          {/* CTA & Theme */}
          <div className="mt-6 pt-6 border-t border-[var(--color-border)] flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-label-sm text-[var(--color-text-secondary)]">Mode Tema</span>
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              onClick={onClose}
              className="block w-full text-center px-5 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors duration-200"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Name */}
          <p className="mt-8 text-label-sm text-[var(--color-text-muted)]">
            {personalInfo.name}
          </p>
        </div>
      </nav>
    </div>
  );
}
