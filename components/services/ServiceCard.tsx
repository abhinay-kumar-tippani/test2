import Link from 'next/link';
import { CheckCircle2, Crown, Sparkles, Smile, Syringe, WandSparkles } from 'lucide-react';
import type { ComponentType } from 'react';
import { doctor } from '@/config/doctor';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  implant: Syringe,
  tooth: Smile,
  crown: Crown,
  align: WandSparkles,
  sparkle: Sparkles,
  smile: Smile,
};

export default function ServiceCard({
  service,
  expanded = false,
}: {
  service: {
    id: string;
    name: string;
    icon: string;
    shortDesc: string;
    fullDesc: string;
    benefits: string[];
    duration: string;
  };
  expanded?: boolean;
}) {
  const Icon = iconMap[service.icon] ?? Smile;
  const serviceWhatsApp = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(
    `Hi, I'd like to know more about ${service.name} at ${doctor.clinicName}.`
  )}`;
  return (
    <article id={expanded ? service.id : undefined} className="card-premium border-l-4 border-l-transparent hover:border-l-accent">
      <div className="mb-3 inline-flex rounded-full bg-primary/10 p-3 text-primary"><Icon className="h-5 w-5" /></div>
      <h3 className="text-2xl font-semibold text-dark">{service.name}</h3>
      <p className="mt-2 text-sm text-muted">{expanded ? service.fullDesc : service.shortDesc}</p>
      {expanded ? (
        <>
          <ul className="mt-4 space-y-2 text-sm">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 text-primary" />{b}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-primary">Duration: {service.duration}</p>
          <Link
            href={serviceWhatsApp}
            target="_blank"
            className="mt-4 inline-flex rounded-lg border border-gold px-4 py-2 text-sm font-medium text-gold transition-all duration-200 hover:bg-gold hover:text-white"
          >
            Ask About {service.name}
          </Link>
        </>
      ) : null}
    </article>
  );
}
