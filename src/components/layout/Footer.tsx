/* ============================================================
   Footer — Studio Teknis Modern
   Three-column, 1px top border, minimal and clean.
   ============================================================ */
import { ArrowUp } from "lucide-react";
import { Container } from "./Container";
import { personalInfo, socialLinks } from "@/data/personal";
import { navItems } from "@/data/navigation";
import { SocialLink } from "@/components/ui/SocialLink";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const firstName = personalInfo.name.split(" ")[0];

  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
      role="contentinfo"
    >
      <Container>
        <div className="py-12 lg:py-16 animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

            {/* ── Brand ── */}
            <div>
              <p className="font-display text-sm font-semibold text-[var(--color-text-primary)] tracking-tight">
                <span className="font-mono text-xs opacity-50">&lt;</span>
                {firstName}
                <span className="font-mono text-xs opacity-50"> /&gt;</span>
              </p>
              <p className="mt-2 text-body-md text-[var(--color-text-secondary)]">
                {personalInfo.title}
              </p>
              <p className="mt-1 flex items-center gap-1 text-label-sm text-[var(--color-text-muted)]">
                {personalInfo.location}
              </p>
            </div>

            {/* ── Quick Links ── */}
            <div>
              <h3 className="text-label-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
                Navigasi
              </h3>
              <ul className="flex flex-col gap-2.5">
                {navItems.slice(0, 5).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-body-md text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Social ── */}
            <div>
              <h3 className="text-label-sm text-[var(--color-text-muted)] uppercase tracking-wider mb-4">
                Terhubung
              </h3>
              <div className="flex gap-2">
                {socialLinks.map((link) => (
                  <SocialLink key={link.platform} link={link} size={18} />
                ))}
              </div>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-label-sm text-[var(--color-text-muted)]">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <a
              href="#"
              className="flex items-center gap-1.5 text-label-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
              aria-label="Kembali ke atas"
            >
              Kembali ke atas
              <ArrowUp size={13} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
