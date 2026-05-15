'use client';

import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { doctor } from '@/config/doctor';

export default function FloatingWhatsApp() {
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;
  return (
    <>
      <div className="group fixed bottom-6 right-6 z-50 hidden md:block">
        <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 rounded bg-navy px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 lg:block">
          Chat with us
        </span>
        <span className="absolute inset-0 animate-ping rounded-full bg-green-400/40" />
        <Link
          href={wa}
          target="_blank"
          aria-label="WhatsApp"
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white transition hover:scale-110 hover:bg-green-600"
        >
          <MessageCircle size={24} />
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 right-0 z-50 grid h-14 grid-cols-2 bg-navy md:hidden">
        <Link href={`tel:${doctor.phone}`} className="flex items-center justify-center gap-2 text-sm font-medium text-gold">
          <Phone size={16} /> Call Now
        </Link>
        <Link href={wa} target="_blank" className="flex items-center justify-center gap-2 text-sm font-medium text-gold">
          <MessageCircle size={16} /> WhatsApp
        </Link>
      </div>
    </>
  );
}
