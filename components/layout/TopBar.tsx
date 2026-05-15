import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { doctor } from '@/config/doctor';

export default function TopBar() {
  const hours = doctor.workingHours[0]?.hours ?? '';
  const shortAddress = `${doctor.workingHours[0]?.days ?? ''}: ${hours} | ${doctor.clinicAddress.split('–')[0]?.trim()}`;
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;

  return (
    <div className="hidden h-9 items-center bg-navy-mid text-sm text-white md:flex">
      <div className="section-shell flex w-full items-center justify-between">
        <p className="truncate">{shortAddress}</p>
        <div className="flex items-center gap-4">
          <Link className="inline-flex items-center gap-1 hover:text-gold" href={`tel:${doctor.phone}`}>
            <Phone size={14} />
            {doctor.phoneDisplay}
          </Link>
          <Link className="inline-flex items-center gap-1 hover:text-gold" href={wa} target="_blank">
            <MessageCircle size={14} />
            WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}
