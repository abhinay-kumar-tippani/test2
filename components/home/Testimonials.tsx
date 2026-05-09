import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Testimonials() {
  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <SectionHeading title="What Our Patients Say" />
        <div className="grid gap-6 md:grid-cols-2">
          {doctor.testimonials.map((t) => (
            <article key={t.name} className="card-premium border-l-4 border-l-gold">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-medium text-dark">{t.name}</p>
                  <p className="text-xs text-muted">{t.location} · {t.service}</p>
                </div>
              </div>
              <p className="mb-2 text-sm text-gold">★★★★★</p>
              <p className="font-display text-2xl italic text-dark">"{t.quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
