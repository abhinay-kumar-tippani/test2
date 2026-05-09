import Link from 'next/link';
import { doctor } from '@/config/doctor';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/services/ServiceCard';

export default function ServicesPreview() {
  return (
    <AnimatedSection className="section-space bg-white">
      <div className="section-shell">
        <SectionHeading title="What We Treat" subtitle="Comprehensive dental care for every stage of life" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctor.services.map((s) => (
            <div key={s.id}>
              <ServiceCard service={s} />
              <Link href={`/services#${s.id}`} className="mt-3 inline-block text-sm font-medium text-primary hover:text-accent">Learn More →</Link>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
