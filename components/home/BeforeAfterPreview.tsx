import Image from 'next/image';
import Link from 'next/link';
import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function BeforeAfterPreview() {
  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <SectionHeading title="Real Results" subtitle="Every smile tells a story" />
        <div className="grid gap-6 md:grid-cols-3">
          {doctor.beforeAfter.map((item) => (
            <article key={item.id} className="card-premium">
              <div className="grid grid-cols-2 gap-2">
                <div className="relative h-40 overflow-hidden rounded-lg">
                  {/* REPLACE: {item.beforeSrc} — before treatment clinical photo, same angle as after */}
                  <Image src={item.beforeSrc} alt={item.beforeAlt} fill className="object-cover" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" placeholder="blur" />
                  <span className="absolute left-2 top-2 rounded bg-dark/70 px-2 py-1 text-xs text-white">Before</span>
                </div>
                <div className="relative h-40 overflow-hidden rounded-lg">
                  {/* REPLACE: {item.afterSrc} — after treatment photo with improved smile outcome */}
                  <Image src={item.afterSrc} alt={item.afterAlt} fill className="object-cover" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" placeholder="blur" />
                  <span className="absolute left-2 top-2 rounded bg-primary/80 px-2 py-1 text-xs text-white">After</span>
                </div>
              </div>
              <h3 className="mt-3 text-2xl font-semibold text-dark">{item.treatment}</h3>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="text-sm font-medium text-primary hover:text-accent">See More Cases →</Link>
        </div>
      </div>
    </section>
  );
}
