/* ============================================================
   ServiceCard — Studio Teknis Modern
   Clean card with icon background (muted accent), headline,
   and description. Hover: border darkens slightly.
   ============================================================ */
import {
  Globe,
  Layout,
  Server,
  Palette,
  Briefcase,
  Code,
  Monitor,
  Database,
  Smartphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Layout,
  Server,
  Palette,
  Briefcase,
  Code,
  Monitor,
  Database,
  Smartphone,
};

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.icon] ?? Briefcase;

  return (
    <div
      className={[
        "group p-6 sm:p-7 rounded-[var(--radius-lg)]",
        "border border-[var(--color-border)] bg-[var(--color-bg-card)]",
        "hover:border-[var(--color-border-hover)] transition-all duration-250",
      ].join(" ")}
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {/* Icon */}
      <div className="mb-5 inline-flex p-2.5 rounded-[var(--radius-md)] bg-[var(--color-bg-tertiary)]">
        <IconComponent size={20} className="text-[var(--color-text-primary)]" />
      </div>

      <h3 className="text-headline-md font-display text-[var(--color-text-primary)]">
        {service.title}
      </h3>

      <p className="mt-2 text-body-md text-[var(--color-text-secondary)] leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
