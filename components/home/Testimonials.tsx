'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonials = doctor.testimonials;
  useEffect(() => {
    const t = setInterval(() => setIndex((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, [testimonials.length]);

  const visible = [0, 1, 2].map((o) => testimonials[(index + o) % testimonials.length]);
  return (
    <section className="section-space bg-surface">
      <div className="section-shell">
        <SectionHeading title="What Our Patients Say" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((t, i) => (
            <article key={`${t.name}-${i}`} className={`${i === 1 ? 'hidden md:block' : ''} ${i === 2 ? 'hidden lg:block' : ''} rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.07)]`}>
              <div className="mb-3 flex text-yellow-400">{Array.from({ length: t.rating }).map((_, ii) => <Star key={ii} size={16} fill="currentColor" />)}</div>
              <p className="font-display text-2xl italic text-dark">"{t.quote}"</p>
              <p className="mt-4 text-sm font-medium text-dark">{t.name}</p>
              <p className="text-xs text-muted">{t.location} · {t.service}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-center gap-3">
          <button onClick={() => setIndex((v) => (v - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-border p-2"><ChevronLeft size={18} /></button>
          {testimonials.map((_, i) => <button key={i} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${i === index ? 'bg-primary' : 'bg-border'}`} />)}
          <button onClick={() => setIndex((v) => (v + 1) % testimonials.length)} className="rounded-full border border-border p-2"><ChevronRight size={18} /></button>
        </div>
      </div>
    </section>
  );
}
