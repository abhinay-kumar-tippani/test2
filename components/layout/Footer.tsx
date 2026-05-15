import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { doctor } from '@/config/doctor';
import NmcRegistration from '@/components/ui/NmcRegistration';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const socials = [
    { href: doctor.socialMedia.instagram, icon: Instagram, label: 'Instagram' },
    { href: doctor.socialMedia.facebook, icon: Facebook, label: 'Facebook' },
    { href: doctor.socialMedia.linkedin, icon: Linkedin, label: 'LinkedIn' },
  ].filter((s) => s.href);

  return (
    <footer className="bg-navy text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-display text-3xl">{doctor.clinicName}</h3>
          <p className="mt-3 text-sm text-white/70">{doctor.clinicTagline}</p>
          <div className="mt-4 flex gap-3">
            {socials.map((s) => (
              <Link key={s.label} href={s.href} target="_blank" className="rounded-full border border-white/20 p-2 hover:border-gold hover:text-gold">
                <s.icon size={16} />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-display text-2xl">Quick Links</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-2xl">Services</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {doctor.services.slice(0, 4).map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display text-2xl">Contact</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li className="flex gap-2"><MapPin size={15} className="mt-0.5" /> {doctor.clinicAddress}</li>
            <li className="flex gap-2"><Phone size={15} className="mt-0.5" /> {doctor.phoneDisplay}</li>
            <li className="flex gap-2"><Mail size={15} className="mt-0.5" /> {doctor.email}</li>
            <li className="flex gap-2"><Clock size={15} className="mt-0.5" /> {doctor.workingHours[0]?.days}: {doctor.workingHours[0]?.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/70">
        &copy; {new Date().getFullYear()} {doctor.clinicName}. <NmcRegistration className="text-white/70" />
      </div>
    </footer>
  );
}
