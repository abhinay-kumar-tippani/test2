import Link from 'next/link';
import { Camera } from 'lucide-react';
import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BeforeAfterPreview() {
  return (
    <section className="section-space bg-cream">
      <div className="section-shell">
        <SectionHeading title="Real Results" subtitle="Every smile tells a story" />
        <div className="grid gap-6 md:grid-cols-3">
          {doctor.beforeAfter.map((item) => (
            <article key={item.id} className="card-premium">
              <div className="grid grid-cols-2 gap-2">
                {[{ label: 'Before' }, { label: 'After' }].map((side) => (
                  <div key={side.label} className="relative flex h-40 items-center justify-center rounded-lg bg-slate-100">
                    <span className="absolute left-2 top-2 rounded bg-dark/70 px-2 py-1 text-xs text-white">{side.label}</span>
                    <div className="text-center text-slate-500">
                      <Camera size={20} className="mx-auto mb-2" />
                      <p className="text-xs">Patient case photo — to be added by doctor</p>
                    </div>
                  </div>
                ))}
                </div>
              <h3 className="mt-3 text-2xl font-semibold text-dark">{item.treatment}</h3>
            </article>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted">Actual patient photos will be uploaded during setup.</p>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="text-sm font-medium text-primary hover:text-accent">See More Cases →</Link>
        </div>
      </div>
    </section>
  );
}
