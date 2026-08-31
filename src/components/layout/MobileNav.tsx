"use client";

import { navItems } from "@/data/navigation";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export function MobileNav({ isOpen, onClose, activeSection }: MobileNavProps) {
  return (
    <div
      id="mobile-nav"
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        className={`absolute right-0 top-0 h-full w-72 bg-[var(--color-bg-secondary)] border-l border-[var(--color-border)] shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-6">
          <ul className="flex flex-col gap-2" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={onClose}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
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
        </div>
      </nav>
    </div>
  );
}
