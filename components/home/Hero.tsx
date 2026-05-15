'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Star, Stethoscope, UsersRound } from 'lucide-react';
import { useState } from 'react';
import { doctor } from '@/config/doctor';
import NmcRegistration from '@/components/ui/NmcRegistration';

const item = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } };

export default function Hero() {
  const [showDoctorImage, setShowDoctorImage] = useState(true);

  return (
    <section
      className="relative overflow-hidden bg-navy py-16 text-white md:py-20"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-35deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 26px)",
      }}
    >
      <motion.div initial="initial" animate="animate" transition={{ staggerChildren: 0.12 }} className="section-shell relative grid items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1 md:max-w-2xl">
          <motion.span variants={item} className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.08em] text-gold">
            <ShieldCheck size={14} /> NMC Registered · {doctor.credentials}
          </motion.span>
          <motion.h1 variants={item} className="mt-5 font-display text-5xl font-bold leading-tight text-white md:text-6xl">{doctor.name}</motion.h1>
          <motion.p variants={item} className="mt-3 text-xl text-white/80">{doctor.tagline}</motion.p>
          <motion.div variants={item} className="mt-2 text-sm text-white/80">
            <NmcRegistration className="text-white/80" />
          </motion.div>
          <motion.p variants={item} className="mt-3 text-base text-white/70">Trusted by 4,800+ patients across Delhi</motion.p>
          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-lg bg-gold px-7 font-semibold text-navy transition hover:brightness-105">Book Appointment</Link>
            <Link href={`tel:${doctor.phone}`} className="inline-flex h-12 items-center justify-center rounded-lg border border-white/70 px-7 text-white transition hover:bg-white hover:text-navy">Call Now: {doctor.phoneDisplay}</Link>
          </motion.div>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-mid/60 px-3 py-1.5 text-xs text-gold"><Award size={14} />12+ Years</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-mid/60 px-3 py-1.5 text-xs text-gold"><UsersRound size={14} />4,800+ Patients</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-navy-mid/60 px-3 py-1.5 text-xs text-gold"><Star size={14} />5-Star Rated</span>
          </motion.div>
        </div>
        <motion.div variants={item} className="order-1 md:order-2">
          {showDoctorImage ? (
            <div className="relative mx-auto h-[360px] w-full max-w-[460px] overflow-hidden rounded-[26px] border border-gold/30 bg-navy-mid shadow-[0_30px_60px_rgba(0,0,0,0.35)] md:h-[520px]">
              <Image
                src="/doctor/hero.jpg"
                alt={`${doctor.name} portrait`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 40vw"
                onError={() => setShowDoctorImage(false)}
              />
            </div>
          ) : (
            <div className="mx-auto flex h-[360px] w-full max-w-[460px] flex-col items-center justify-center rounded-[26px] border border-gold/30 bg-navy-mid shadow-[0_30px_60px_rgba(0,0,0,0.35)] md:h-[520px]">
              <Stethoscope size={70} className="text-gold/80" />
              <p className="mt-4 text-sm text-white/70">Doctor image will appear here</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
