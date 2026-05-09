import { doctor } from '@/config/doctor';

export default function MapEmbed() {
  const isPlaceholder = doctor.mapEmbedUrl.includes('4v1234567890');
  return (
    <section className="section-space bg-surface pt-0">
      <div className="section-shell">
        {isPlaceholder ? (
          <div className="flex h-[400px] items-center justify-center rounded-2xl border border-border bg-white text-muted">
            Add your Google Maps embed URL for: {doctor.clinicAddress}
          </div>
        ) : (
          <iframe src={doctor.mapEmbedUrl} className="h-[400px] w-full rounded-2xl border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        )}
      </div>
    </section>
  );
}
