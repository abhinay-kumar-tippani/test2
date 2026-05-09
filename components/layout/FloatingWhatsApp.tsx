'use client';

import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { doctor } from '@/config/doctor';

export default function FloatingWhatsApp() {
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;
  return (
    <div className="group fixed bottom-6 right-6 z-50">
      <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 rounded bg-dark px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100 md:block">
        Chat with us
      </span>
      <span className="absolute inset-0 animate-ping rounded-full bg-green-400/40" />
      <Link
        href={wa}
        target="_blank"
        aria-label="WhatsApp"
        className="relative flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white transition hover:scale-110 hover:bg-green-600 md:h-14 md:w-14"
      >
        <MessageCircle size={24} />
      </Link>
    </div>
  );
}
