import Image from 'next/image';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import { doctor } from '@/config/doctor';
import { resolveDemoImage } from '@/lib/demoImages';

export default function ClinicPreview() {
  return (
    <section className="section-space bg-surface">
      <div className="section-shell">
        <SectionHeading title="Step Inside Our Clinic" />
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="relative h-80 overflow-hidden rounded-2xl lg:col-span-2">
            {/* REPLACE: public/clinic/reception.jpg — wide shot of reception and front desk */}
            <Image src={resolveDemoImage(doctor.images.clinic.reception)} alt="Clinic reception area" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
          </div>
          <div className="grid gap-4">
            <div className="relative h-[152px] overflow-hidden rounded-2xl">
              {/* REPLACE: public/clinic/treatment-room.jpg — treatment chair and sterile room setup */}
              <Image src={resolveDemoImage(doctor.images.clinic.treatmentRoom)} alt="Treatment room" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 30vw" />
            </div>
            <div className="relative h-[152px] overflow-hidden rounded-2xl">
              {/* REPLACE: public/clinic/equipment.jpg — modern dental equipment close-up */}
              <Image src={resolveDemoImage(doctor.images.clinic.equipment)} alt="Dental equipment" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 30vw" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/gallery" className="rounded-lg border-2 border-navy px-7 py-3.5 font-medium text-navy transition hover:bg-navy hover:text-white">
            See Full Gallery →
          </Link>
        </div>
      </div>
    </section>
  );
}
