'use client';

import Link from 'next/link';
import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function FaqTeaser() {
  const faqs = doctor.faqs.slice(0, 3);
  return (
    <section className="section-space bg-surface">
      <div className="section-shell max-w-4xl">
        <SectionHeading title="Common Questions" />
        <div className="space-y-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-border bg-white">
              <p className="px-5 py-4 font-medium text-navy">{f.q}</p>
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-muted">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/faq" className="text-sm font-medium text-gold hover:text-navy">See All FAQs →</Link>
        </div>
      </div>
    </section>
  );
}
