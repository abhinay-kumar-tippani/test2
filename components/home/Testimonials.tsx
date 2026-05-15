import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';
import GoogleGIcon from '@/components/ui/GoogleGIcon';

export default function Testimonials() {
  return (
    <section className="section-space bg-surface">
      <div className="section-shell">
        <SectionHeading title="What Our Patients Say" />
        <div className="grid gap-6 md:grid-cols-2">
          {doctor.testimonials.map((t) => (
            <article key={t.name} className="rounded-2xl border border-border bg-white p-6 shadow-[0_10px_30px_rgba(10,22,40,0.07)]">
              <p className="mb-3 text-sm text-gold">{'★'.repeat(t.rating)}</p>
              <p className="mb-4 text-lg italic leading-relaxed text-text">"{t.quote}"</p>
              <span className="mb-3 block h-px w-14 bg-gold/80" />
              <div>
                <p className="text-sm font-semibold text-navy">{t.name}</p>
                <p className="text-xs text-muted">{t.location} · {t.service}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-green-700">
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  Verified
                </p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted">
                  <GoogleGIcon size={14} />
                  {t.reviewSource}
                </p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-3 rounded-xl border border-gold/40 bg-white px-5 py-4 text-center shadow-[0_10px_30px_rgba(10,22,40,0.08)]">
          <GoogleGIcon size={24} />
          <p className="text-sm font-semibold text-navy">{doctor.googleRating} ★ on Google — {doctor.googleReviewCount} Reviews</p>
        </div>
      </div>
    </section>
  );
}
