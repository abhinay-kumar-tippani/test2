import { doctor } from '@/config/doctor';
import StaticMapCard from '@/components/ui/StaticMapCard';

export default function MapEmbed() {
  const mapUrl = (doctor.mapEmbedUrl || '').trim();
  const hasMapEmbed = Boolean(mapUrl);
  return (
    <section className="section-space bg-bg">
      <div className="section-shell">
        {hasMapEmbed ? (
          <div className="overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <iframe src={mapUrl} className="h-[280px] w-full border-0 md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        ) : (
          <StaticMapCard />
        )}
      </div>
    </section>
  );
}
