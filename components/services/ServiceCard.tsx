import Link from 'next/link';
import { CheckCircle2, Crown, Heart, ShieldCheck, Smile, Star, Stethoscope, Syringe } from 'lucide-react';
import type { ComponentType } from 'react';
import { doctor } from '@/config/doctor';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  implant: ShieldCheck,
  tooth: Stethoscope,
  crown: Crown,
  align: Star,
  sparkle: Heart,
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
    <article id={expanded ? service.id : undefined} className="group relative rounded-xl border border-border bg-white p-6 shadow-[0_8px_24px_rgba(10,22,40,0.06)] transition hover:border-gold/50 hover:shadow-[0_10px_28px_rgba(10,22,40,0.1)]">
      <span className="absolute left-0 top-4 h-0 w-0.5 rounded-r bg-gold transition-all duration-200 group-hover:h-[calc(100%-2rem)]" />
      <div className="mb-3 inline-flex rounded-full bg-gold/15 p-3 text-navy"><Icon className="h-5 w-5" /></div>
      <h3 className="text-2xl font-semibold text-navy">{service.name}</h3>
      <p className="mt-2 text-sm text-muted">{expanded ? service.fullDesc : service.shortDesc}</p>
      {expanded ? (
        <>
          <ul className="mt-4 space-y-2 text-sm">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 text-gold" />{b}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-medium text-navy">Duration: {service.duration}</p>
          <Link
            href={serviceWhatsApp}
            target="_blank"
            className="mt-4 inline-flex rounded-lg border border-navy px-4 py-2 text-sm font-medium text-navy transition hover:bg-navy hover:text-white"
          >
            Ask About {service.name}
          </Link>
        </>
      ) : null}
    </article>
  );
}
