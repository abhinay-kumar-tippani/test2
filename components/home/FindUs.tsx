import Link from 'next/link';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { doctor } from '@/config/doctor';

export default function FindUs() {
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;
  const isPlaceholder = doctor.mapEmbedUrl.includes('4v1234567890');

  return (
    <section className="section-space bg-cream">
      <div className="section-shell">
        <h2 className="mb-8 text-4xl font-bold text-dark">Find Us</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            {isPlaceholder ? (
              <div className="flex h-[280px] items-center justify-center bg-white text-sm text-muted md:h-[400px]">
                Add live Google Maps embed URL in config.
              </div>
            ) : (
              <iframe src={doctor.mapEmbedUrl} className="h-[280px] w-full border-0 md:h-[400px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            )}
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <p className="mb-3 flex items-start gap-2 text-sm text-dark"><MapPin size={18} className="mt-0.5 text-gold" /> {doctor.clinicAddress}</p>
            <p className="mb-3 flex items-center gap-2 text-sm text-dark"><Phone size={16} className="text-gold" /> {doctor.phoneDisplay}</p>
            <p className="mb-5 text-sm text-muted">{doctor.workingHours[0].days}: {doctor.workingHours[0].hours}</p>
            <div className="flex flex-wrap gap-3">
              <Link href={`tel:${doctor.phone}`} className="rounded-lg border border-gold px-4 py-2 text-sm font-medium text-gold transition-all duration-200 hover:bg-gold hover:text-white">Call Clinic</Link>
              <Link href={wa} target="_blank" className="rounded-lg border border-gold px-4 py-2 text-sm font-medium text-gold transition-all duration-200 hover:bg-gold hover:text-white">
                <MessageCircle size={15} className="mr-1 inline" /> WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
