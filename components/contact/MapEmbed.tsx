import { doctor } from '@/config/doctor';

export default function MapEmbed() {
  const isPlaceholder = doctor.mapEmbedUrl.includes('4v1234567890');
  return (
    <section className="section-space bg-cream">
      <div className="section-shell">
        {isPlaceholder ? (
          <div className="flex h-[280px] items-center justify-center rounded-2xl border border-border bg-white text-muted shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:h-[400px]">
            Add your Google Maps embed URL for: {doctor.clinicAddress}
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <iframe src={doctor.mapEmbedUrl} className="h-[280px] w-full border-0 md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        )}
      </div>
    </section>
  );
}
