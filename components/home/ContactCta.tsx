import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { doctor } from '@/config/doctor';

export default function ContactCta() {
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;
  return (
    <section className="section-space bg-primary">
      <div className="section-shell text-center">
        <h2 className="text-4xl font-bold text-white md:text-[42px]">Ready to book your visit?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">Call or message us directly and we will guide you on the next best step for your dental concern.</p>
        <p className="mt-5 font-display text-4xl text-white">{doctor.phoneDisplay}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={`tel:${doctor.phone}`} className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-7 font-medium text-primary"><Phone size={18} className="mr-2" />Call Now</Link>
          <Link href={wa} target="_blank" className="inline-flex h-12 items-center justify-center rounded-full bg-green-500 px-6 text-white hover:bg-green-600"><MessageCircle size={18} className="mr-2" />WhatsApp Us</Link>
        </div>
      </div>
    </section>
  );
}
