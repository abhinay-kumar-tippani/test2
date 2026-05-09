import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { doctor } from '@/config/doctor';

export default function ClinicPreview() {
  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <SectionHeading title="Step Inside Our Clinic" />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="relative h-80 overflow-hidden rounded-2xl lg:col-span-2">
            {/* REPLACE: public/clinic/reception.jpg — wide shot of reception and front desk */}
            <Image src={doctor.images.clinic.reception} alt="Clinic reception area" fill className="object-cover" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" placeholder="blur" />
          </div>
          <div className="grid gap-4">
            <div className="relative h-[152px] overflow-hidden rounded-2xl">
              {/* REPLACE: public/clinic/treatment-room.jpg — treatment chair and sterile room setup */}
              <Image src={doctor.images.clinic.treatmentRoom} alt="Treatment room" fill className="object-cover" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" placeholder="blur" />
            </div>
            <div className="relative h-[152px] overflow-hidden rounded-2xl">
              {/* REPLACE: public/clinic/equipment.jpg — modern dental equipment close-up */}
              <Image src={doctor.images.clinic.equipment} alt="Dental equipment" fill className="object-cover" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" placeholder="blur" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="rounded-lg border-2 border-primary px-7 py-3.5 font-medium text-primary transition hover:bg-primary hover:text-white">
            See Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
