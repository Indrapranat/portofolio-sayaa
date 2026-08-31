import { ArrowUp } from "lucide-react";
import { Container } from "./Container";
import { personalInfo, socialLinks } from "@/data/personal";
import { navItems } from "@/data/navigation";
import { SocialLink } from "@/components/ui/SocialLink";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]"
      role="contentinfo"
    >
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <p className="text-lg font-bold text-[var(--color-text-primary)]">
                <span className="text-[var(--color-accent)]">&lt;</span>
                {personalInfo.name.split(" ")[0]}
                <span className="text-[var(--color-accent)]"> /&gt;</span>
              </p>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {personalInfo.title}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                Quick Links
              </h3>
              <ul className="flex flex-col gap-2">
                {navItems.slice(0, 4).map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                Connect
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <SocialLink key={link.platform} link={link} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--color-text-muted)]">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>

            <a
              href="#"
              className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              aria-label="Back to top"
            >
              Back to top
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
