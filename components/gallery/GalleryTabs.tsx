'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { doctor } from '@/config/doctor';
import Lightbox, { GalleryImage } from './Lightbox';

const clinicImages: GalleryImage[] = [
  { src: doctor.images.clinic.reception, alt: 'Clinic reception area', caption: 'Reception' },
  { src: doctor.images.clinic.treatmentRoom, alt: 'Treatment room', caption: 'Treatment Room' },
  { src: doctor.images.clinic.equipment, alt: 'Dental equipment', caption: 'Equipment' },
  { src: doctor.images.clinic.exterior, alt: 'Clinic exterior', caption: 'Exterior' },
  { src: doctor.images.clinic.waitingArea, alt: 'Waiting area', caption: 'Waiting Area' },
];

const doctorImages: GalleryImage[] = [
  { src: doctor.images.doctor.hero, alt: `${doctor.name} hero photo`, caption: doctor.name },
  { src: doctor.images.doctor.about, alt: `${doctor.name} at clinic`, caption: 'At the Clinic' },
  { src: doctor.images.doctor.profile, alt: `${doctor.name} profile`, caption: 'Profile' },
  { src: doctor.images.doctor.team, alt: 'Clinic team', caption: 'Our Team' },
];

export default function GalleryTabs() {
  const [tab, setTab] = useState<'clinic' | 'doctor'>('clinic');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const images = useMemo(() => (tab === 'clinic' ? clinicImages : doctorImages), [tab]);

  return (
    <>
      <div className="mb-8 flex justify-center gap-8 border-b border-border">
        {(['clinic', 'doctor'] as const).map((t) => (
          <button key={t} onClick={() => setTab(t)} className="relative pb-3 text-sm font-medium text-dark">
            {t === 'clinic' ? 'Our Clinic' : "Doctor's Gallery"}
            {tab === t ? <motion.span layoutId="tabline" className="absolute bottom-0 left-0 h-0.5 w-full bg-accent" /> : null}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <button key={img.src} className="group relative h-64 overflow-hidden rounded-2xl" onClick={() => { setIndex(i); setOpen(true); }}>
            {/* REPLACE: gallery image file at {img.src} matching caption context */}
            <Image src={img.src} alt={img.alt} fill className="object-cover transition duration-300 group-hover:scale-105" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark/80 to-transparent p-3 text-left text-sm text-white">{img.caption}</span>
          </button>
        ))}
      </div>
      <Lightbox open={open} current={index} images={images} onClose={() => setOpen(false)} onPrev={() => setIndex((v) => (v - 1 + images.length) % images.length)} onNext={() => setIndex((v) => (v + 1) % images.length)} />
    </>
  );
}
