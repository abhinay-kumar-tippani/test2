import Link from 'next/link';
import { Smile } from 'lucide-react';
import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BeforeAfterPreview() {
  const hasRealCaseImage = doctor.beforeAfter.some(
    (item) =>
      item.beforeSrc.trim() &&
      item.afterSrc.trim() &&
      !item.beforeSrc.includes("picsum.photos") &&
      !item.afterSrc.includes("picsum.photos")
  );
  if (!doctor.showBeforeAfter || !hasRealCaseImage) return null;

  return (
    <section className="section-space bg-bg">
      <div className="section-shell">
        <SectionHeading title="Real Results" subtitle="Every smile tells a story" />
        <div className="grid gap-6 md:grid-cols-3">
          {doctor.beforeAfter.map((item) => (
            <article key={item.id} className="card-premium">
              <div className="grid grid-cols-2 gap-2">
                {[{ label: 'Before' }, { label: 'After' }].map((side) => (
                  <div
                    key={side.label}
                    className="relative flex h-44 items-center justify-center rounded-lg border border-gold/25 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300"
                  >
                    <span className="absolute left-2 top-2 rounded bg-navy px-2 py-1 text-xs text-gold">{side.label}</span>
                    <div className="text-center text-navy/70">
                      <Smile size={20} className="mx-auto mb-2" />
                      <p className="text-xs font-medium">{side.label}</p>
                    </div>
                  </div>
                ))}
                </div>
              <h3 className="mt-3 text-2xl font-semibold text-navy">{item.treatment}</h3>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="text-sm font-medium text-gold hover:text-navy">See More Cases →</Link>
        </div>
      </div>
    </section>
  );
}
