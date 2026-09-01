/* ============================================================
   Services Section — Studio Teknis Modern
   ============================================================ */
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";

export function Services() {
  return (
    <Section
      id="services"
      title="Layanan"
      subtitle="Bagaimana saya dapat membantu Anda"
      className="bg-[var(--color-bg-secondary)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>

      <div className="mt-12">
        <Button href="#contact" variant="primary" size="md">
          Mari Bekerja Sama
        </Button>
      </div>
    </Section>
  );
}
