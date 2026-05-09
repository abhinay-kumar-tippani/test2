import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { doctor } from '@/config/doctor';

export default function ContactInfo() {
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;
  return (
    <section className="section-space bg-white">
      <div className="section-shell grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-dark">Contact Us</h1>
          <p className="flex items-start gap-2"><MapPin size={18} className="mt-1 text-primary" /> {doctor.clinicAddress}</p>
          <p className="flex items-center gap-2"><Phone size={18} className="text-primary" /> {doctor.phoneDisplay}</p>
          <p className="flex items-center gap-2"><Mail size={18} className="text-primary" /> {doctor.email}</p>
          <div className="space-y-1 text-sm text-muted">{doctor.workingHours.map((h) => <p key={h.days}>{h.days}: {h.hours}</p>)}</div>
          <Link href="https://maps.google.com" target="_blank" className="text-sm font-medium text-primary">Open in Maps</Link>
        </div>
        <div className="flex flex-col gap-4 self-center">
          <Link href={`tel:${doctor.phone}`} className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-7 font-medium text-white"><Phone className="mr-2" size={18} />Call Now</Link>
          <Link href={wa} target="_blank" className="inline-flex h-12 items-center justify-center rounded-full bg-green-500 px-6 text-white"><MessageCircle className="mr-2" size={18} />WhatsApp Us</Link>
        </div>
      </div>
    </section>
  );
}
