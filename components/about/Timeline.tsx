'use client';

import { motion } from 'framer-motion';
import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Timeline() {
  return (
    <section className="section-space bg-surface">
      <div className="section-shell">
        <SectionHeading title="Education & Advanced Training" centered={false} />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="relative border-l border-border pl-6">
          {doctor.education.map((e) => (
            <motion.div key={`${e.year}-${e.degree}`} variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }} className="relative mb-8">
              <span className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-primary" />
              <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs text-white">{e.year}</span>
              <h3 className="mt-2 text-2xl font-semibold text-dark">{e.degree}</h3>
              <p className="text-sm font-medium text-primary">{e.institution}</p>
              <p className="mt-1 text-sm text-muted">{e.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
