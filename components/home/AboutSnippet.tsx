'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { doctor } from '@/config/doctor';
import { resolveDemoImage } from '@/lib/demoImages';
import NmcRegistration from '@/components/ui/NmcRegistration';

export default function AboutSnippet() {
  return (
    <section className="section-space bg-bg">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-5">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative lg:col-span-3">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-gold" />
          <div className="relative h-[360px] overflow-hidden rounded-2xl">
            {/* REPLACE: public/doctor/about.jpg — candid in-clinic photo of the doctor interacting with patient */}
            <Image src={resolveDemoImage(doctor.images.doctor.about)} alt={`${doctor.name} at clinic`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
          <h2 className="text-4xl font-bold text-navy">{doctor.name}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-gold/40 px-3 py-1 text-sm text-navy">{doctor.credentials}</span>
            <span className="rounded-full border border-gold/40 px-3 py-1 text-sm text-navy">
              <NmcRegistration />
            </span>
          </div>
          <p className="mt-4 text-muted">{doctor.bio[0]}</p>
          <Link href="/about" className="mt-6 inline-flex h-12 items-center rounded-lg bg-gold px-7 font-medium text-navy shadow-md transition hover:brightness-105">Read Full Story →</Link>
        </motion.div>
      </div>
    </section>
  );
}
