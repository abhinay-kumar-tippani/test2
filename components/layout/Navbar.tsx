'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { doctor } from '@/config/doctor';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;

  useEffect(() => {
    const handle = () => setSticky(window.scrollY > 36);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition ${sticky ? 'bg-navy shadow-md' : 'bg-navy/95 backdrop-blur'}`}>
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className="font-display text-2xl font-semibold text-white">
          {doctor.clinicName}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link text-sm font-medium ${pathname === l.href ? 'active text-gold' : 'text-white hover:text-gold'}`}>
              {l.label}
            </Link>
          ))}
          <Link href={`tel:${doctor.phone}`} className="rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-navy shadow-md transition hover:brightness-105">
            Call Now
          </Link>
        </div>

        <button className="rounded-md p-2 text-white md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span key={open ? 'x' : 'm'} initial={{ rotate: -20, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 20, opacity: 0 }}>
              {open ? <X /> : <Menu />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/20 bg-navy md:hidden"
          >
            <div className="section-shell flex flex-col gap-4 py-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`py-1 text-base ${pathname === l.href ? 'text-gold' : 'text-white'}`}>
                  {l.label}
                </Link>
              ))}
              <Link href={`tel:${doctor.phone}`} className="inline-flex h-11 items-center justify-center rounded-lg bg-gold px-6 font-semibold text-navy">
                <Phone size={18} className="mr-2" /> Call Now
              </Link>
              <Link href={wa} target="_blank" className="inline-flex h-11 items-center justify-center rounded-lg border border-gold px-6 text-gold">
                <MessageCircle size={18} className="mr-2" /> WhatsApp
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
