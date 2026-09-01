/* ============================================================
   Contact Section — Studio Teknis Modern
   Clean, centered CTA with email + social links.
   ============================================================ */
import { Mail, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SocialLink } from "@/components/ui/SocialLink";
import { personalInfo, socialLinks } from "@/data/personal";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Hubungi Saya"
      subtitle="Ada proyek atau ide? Mari berdiskusi."
    >
      <div className="max-w-2xl">
        {/* ── Main contact card ── */}
        <div
          className="p-8 sm:p-10 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-card)]"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          {/* Email row */}
          <div className="flex items-start gap-4">
            <div className="mt-0.5 flex-shrink-0 p-2.5 rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)]">
              <Mail size={18} className="text-[var(--color-text-primary)]" />
            </div>
            <div>
              <p className="text-label-sm text-[var(--color-text-muted)] uppercase tracking-wider">
                Email
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="mt-0.5 text-headline-md font-display text-[var(--color-text-primary)] hover:text-[var(--color-accent-hover)] transition-colors duration-200"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {/* Location row */}
          <div className="flex items-center gap-4 mt-5">
            <div className="flex-shrink-0 p-2.5 rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)]">
              <MapPin size={18} className="text-[var(--color-text-primary)]" />
            </div>
            <div>
              <p className="text-label-sm text-[var(--color-text-muted)] uppercase tracking-wider">
                Lokasi
              </p>
              <p className="mt-0.5 text-body-md text-[var(--color-text-secondary)]">
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-[var(--color-border)]">
            <Button
              href={`mailto:${personalInfo.email}`}
              variant="primary"
              size="lg"
            >
              Kirim Email Sekarang
            </Button>
          </div>
        </div>

        {/* ── Social ── */}
        <div className="mt-8 flex items-center gap-2">
          <p className="text-label-sm text-[var(--color-text-muted)]">
            Atau temukan saya di
          </p>
          {socialLinks.map((link) => (
            <SocialLink key={link.platform} link={link} size={18} />
          ))}
        </div>
      </div>
    </Section>
  );
}
