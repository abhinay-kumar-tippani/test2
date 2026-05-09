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
    <header className={`sticky top-0 z-40 transition ${sticky ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur'}`}>
      <nav className="section-shell flex h-20 items-center justify-between">
        <Link href="/" className={`font-display text-2xl font-semibold ${sticky ? 'text-primary' : 'text-primary'}`}>
          {doctor.clinicName}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={`nav-link text-sm font-medium ${pathname === l.href ? 'active text-primary' : 'text-text hover:text-primary'}`}>
              {l.label}
            </Link>
          ))}
          <Link href={`tel:${doctor.phone}`} className="btn-primary-hover rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-md transition hover:bg-primary-dark">
            Call Now
          </Link>
        </div>

        <button className="rounded-md p-2 text-primary md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menu">
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
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="section-shell flex flex-col gap-4 py-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`py-1 text-base ${pathname === l.href ? 'text-primary' : 'text-text'}`}>
                  {l.label}
                </Link>
              ))}
              <Link href={`tel:${doctor.phone}`} className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-white">
                <Phone size={18} className="mr-2" /> Call Now
              </Link>
              <Link href={wa} target="_blank" className="inline-flex h-11 items-center justify-center rounded-full bg-green-500 px-6 text-white">
                <MessageCircle size={18} className="mr-2" /> WhatsApp
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
