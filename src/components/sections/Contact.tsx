import { Mail, MapPin } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SocialLink } from "@/components/ui/SocialLink";
import { personalInfo, socialLinks } from "@/data/personal";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Have a project in mind? Let's talk about it."
    >
      <div className="max-w-xl mx-auto text-center">
        {/* Email */}
        <div className="p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)]">
          <div className="flex flex-col items-center gap-4">
            <div className="p-3 rounded-full bg-[var(--color-accent-muted)]">
              <Mail size={28} className="text-[var(--color-accent)]" />
            </div>

            <div>
              <p className="text-sm text-[var(--color-text-muted)]">
                Email me at
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-lg font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
              <MapPin size={14} />
              {personalInfo.location}
            </div>

            <Button
              href={`mailto:${personalInfo.email}`}
              variant="primary"
              size="lg"
              icon
            >
              Send Email
            </Button>
          </div>
        </div>

        {/* Social */}
        <div className="mt-8">
          <p className="text-sm text-[var(--color-text-muted)] mb-4">
            Or find me on
          </p>
          <div className="flex items-center justify-center gap-2">
            {socialLinks.map((link) => (
              <SocialLink key={link.platform} link={link} size={22} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
