import { Globe, Layout, Server, Palette, Briefcase, Code, Monitor, Database, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Service } from "@/types";

// Map service icon names to lucide components
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
  const IconComponent = iconMap[service.icon] || Briefcase;

  return (
    <div className="group relative p-6 sm:p-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] transition-all duration-300 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-bg-card-hover)] hover:-translate-y-1">
      <div className="mb-4 inline-flex p-3 rounded-lg bg-[var(--color-accent-muted)]">
        <IconComponent
          size={24}
          className="text-[var(--color-accent)]"
        />
      </div>

      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
        {service.title}
      </h3>

      <p className="mt-2 text-sm text-[var(--color-text-secondary)] leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
