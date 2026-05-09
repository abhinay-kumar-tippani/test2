'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Star, Users } from 'lucide-react';
import { doctor } from '@/config/doctor';

const item = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* REPLACE: public/doctor/hero.jpg — professional headshot of the doctor, well-lit, clinic background */}
      <Image src={doctor.images.doctor.hero} alt={`${doctor.name} hero`} fill className="object-cover" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" placeholder="blur" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/50 to-transparent md:bg-gradient-to-r" />
      <motion.div initial="initial" animate="animate" transition={{ staggerChildren: 0.15 }} className="section-shell relative flex min-h-screen items-center py-24">
        <div className="max-w-2xl text-center md:text-left">
          <motion.span variants={item} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white">
            <ShieldCheck size={16} className="text-accent" /> NMC Registered · {doctor.credentials}
          </motion.span>
          <motion.h1 variants={item} className="mt-5 font-display text-5xl font-bold leading-tight text-white md:text-[64px]">{doctor.name}</motion.h1>
          <motion.p variants={item} className="mt-2 text-xl text-white/80">{doctor.tagline}</motion.p>
          <motion.p variants={item} className="mt-4 max-w-xl text-white/70">{doctor.heroSubtitle}</motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/about" className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-7 text-white shadow-md transition hover:bg-primary-dark">About {doctor.shortName}</Link>
            <Link href={`tel:${doctor.phone}`} className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-white px-7 text-white transition hover:bg-white hover:text-primary">Call Now: {doctor.phoneDisplay}</Link>
          </motion.div>
          <motion.div variants={item} className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
            <span className="rounded-full bg-white/15 px-3 py-1 text-sm text-white"><Sparkles className="mr-1 inline" size={14} />{doctor.stats[0]?.value}{doctor.stats[0]?.suffix} Years</span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-sm text-white"><Users className="mr-1 inline" size={14} />{doctor.stats[1]?.value.toLocaleString('en-IN')}{doctor.stats[1]?.suffix} Patients</span>
            <span className="rounded-full bg-white/15 px-3 py-1 text-sm text-white"><Star className="mr-1 inline" size={14} />5-Star Rated</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
