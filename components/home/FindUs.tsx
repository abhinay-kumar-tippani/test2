import Link from 'next/link';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { doctor } from '@/config/doctor';
import StaticMapCard from '@/components/ui/StaticMapCard';

export default function FindUs() {
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;
  const mapUrl = (doctor.mapEmbedUrl || '').trim();
  const hasMapEmbed = Boolean(mapUrl);
  const mapsQueryUrl = `https://maps.google.com/?q=${encodeURIComponent(doctor.clinicAddress)}`;

  return (
    <section className="section-space bg-surface">
      <div className="section-shell">
        <h2 className="mb-8 text-4xl font-bold text-navy">Find Us</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-[0_8px_30px_rgba(10,22,40,0.08)]">
            {hasMapEmbed ? (
              <iframe src={mapUrl} className="h-[280px] w-full border-0 md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            ) : (
              <StaticMapCard />
            )}
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-[0_8px_30px_rgba(10,22,40,0.08)]">
            <p className="mb-3 flex items-start gap-2 text-sm text-text"><MapPin size={18} className="mt-0.5 text-gold" /> {doctor.clinicAddress}</p>
            <p className="mb-3 flex items-center gap-2 text-sm text-text"><Phone size={16} className="text-gold" /> {doctor.phoneDisplay}</p>
            <p className="mb-5 text-sm text-muted">{doctor.workingHours[0].days}: {doctor.workingHours[0].hours}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={`tel:${doctor.phone}`} className="rounded-lg border border-navy px-4 py-2 text-sm font-medium text-navy transition hover:bg-navy hover:text-white">Call Clinic</Link>
              <Link href={wa} target="_blank" className="rounded-lg bg-gold px-4 py-2 text-sm font-medium text-navy transition hover:brightness-105">
                <MessageCircle size={15} className="mr-1 inline" /> WhatsApp
              </Link>
              <Link href={mapsQueryUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-gold px-4 py-2 text-sm font-medium text-navy transition hover:bg-gold/30">
                Open in Maps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
