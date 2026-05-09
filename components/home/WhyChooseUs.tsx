'use client';

import { motion } from 'framer-motion';
import type { ComponentType } from 'react';
import { Clock3, HeartPulse, Microscope, ShieldCheck } from 'lucide-react';
import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  'shield-check': ShieldCheck,
  'heart-pulse': HeartPulse,
  microscope: Microscope,
  clock: Clock3,
};

export default function WhyChooseUs() {
  return (
    <AnimatedSection className="section-space bg-cream">
      <div className="section-shell">
        <SectionHeading title={`Why Patients Choose ${doctor.shortName}`} />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctor.whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon] ?? ShieldCheck;
            return (
              <motion.div key={item.title} variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }} className="card-premium">
                <div className="mb-4 inline-flex rounded-full bg-primary/10 p-3 text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="text-2xl font-semibold text-dark">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
