'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export type GalleryImage = { src: string; alt: string; caption: string };

export default function Lightbox({
  open,
  current,
  images,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  current: number;
  images: GalleryImage[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [open, onClose, onNext, onPrev]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[60] bg-black/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <button onClick={onClose} className="absolute right-5 top-5 text-white"><X /></button>
          <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-5 top-1/2 -translate-y-1/2 text-white"><ChevronLeft size={30} /></button>
          <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-5 top-1/2 -translate-y-1/2 text-white"><ChevronRight size={30} /></button>
          <motion.div initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="mx-auto mt-12 max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-[70vh] overflow-hidden rounded-2xl">
              {/* REPLACE: active gallery photo asset matching selected image */}
              <Image src={images[current].src} alt={images[current].alt} fill className="object-contain" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
