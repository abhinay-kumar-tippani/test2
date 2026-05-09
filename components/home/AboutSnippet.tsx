'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { doctor } from '@/config/doctor';

export default function AboutSnippet() {
  return (
    <section className="section-space bg-white">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-5">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative lg:col-span-3">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-accent" />
          <div className="relative h-[360px] overflow-hidden rounded-2xl">
            {/* REPLACE: public/doctor/about.jpg — candid in-clinic photo of the doctor interacting with patient */}
            <Image src={doctor.images.doctor.about} alt={`${doctor.name} at clinic`} fill className="object-cover" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" placeholder="blur" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2">
          <h2 className="text-4xl font-bold text-dark">{doctor.name}</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full border border-border px-3 py-1 text-sm text-primary">{doctor.credentials}</span>
            <span className="rounded-full border border-border px-3 py-1 text-sm text-primary">{doctor.registrationNo}</span>
          </div>
          <p className="mt-4 text-muted">{doctor.bio[0]}</p>
          <Link href="/about" className="mt-6 inline-flex h-12 items-center rounded-lg bg-primary px-7 font-medium text-white shadow-md transition hover:bg-primary-dark">Read Full Story →</Link>
        </motion.div>
      </div>
    </section>
  );
}
