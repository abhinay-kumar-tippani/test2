import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { doctor } from '@/config/doctor';
import ServiceCard from '@/components/services/ServiceCard';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: doctor.seo.servicesTitle,
  description: doctor.seo.servicesDesc,
};

export default function ServicesPage() {
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;
  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <SectionHeading title="Our Services" subtitle="Comprehensive dental care, tailored to your needs at every life stage." />
        <div className="grid gap-6 lg:grid-cols-2">
          {doctor.services.map((service) => <ServiceCard key={service.id} service={service} expanded />)}
        </div>
        <div className="mt-12 rounded-2xl bg-surface p-8 text-center">
          <p className="text-lg text-dark">Have questions? WhatsApp us for a consultation.</p>
          <Link href={wa} target="_blank" className="mt-4 inline-flex h-12 items-center rounded-full bg-green-500 px-6 text-white"><MessageCircle size={18} className="mr-2" />WhatsApp Us</Link>
        </div>
      </div>
    </section>
  );
}
