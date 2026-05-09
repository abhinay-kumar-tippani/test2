'use client';

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function FaqTeaser() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = doctor.faqs.slice(0, 3);
  return (
    <section className="section-space bg-white">
      <div className="section-shell max-w-4xl">
        <SectionHeading title="Common Questions" />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="rounded-xl border border-border bg-white">
              <button className="flex w-full items-center justify-between px-5 py-4 text-left font-medium text-dark" onClick={() => setOpen(open === i ? null : i)}>
                {f.q}
              </button>
              <AnimatePresence initial={false}>
                {open === i ? (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <p className="px-5 pb-4 text-sm text-muted">{f.a}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/faq" className="text-sm font-medium text-primary hover:text-accent">See All FAQs →</Link>
        </div>
      </div>
    </section>
  );
}
