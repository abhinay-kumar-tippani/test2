import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { doctor } from '@/config/doctor';
import FaqAccordion from '@/components/ui/FaqAccordion';

export const metadata: Metadata = {
  title: doctor.seo.faqTitle,
  description: doctor.seo.faqDesc,
};

export default function FaqPage() {
  const wa = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(doctor.whatsappMessage)}`;
  return (
    <section className="section-space bg-surface">
      <div className="section-shell max-w-4xl">
        <h1 className="mb-8 text-center text-5xl font-bold text-dark">Frequently Asked Questions</h1>
        <FaqAccordion items={doctor.faqs} />
        <div className="mt-10 rounded-2xl bg-white p-8 text-center">
          <p className="text-lg text-dark">Still have questions? We're happy to help.</p>
          <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href={`tel:${doctor.phone}`} className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-7 text-white"><Phone size={18} className="mr-2" />Call</Link>
            <Link href={wa} target="_blank" className="inline-flex h-12 items-center justify-center rounded-full bg-green-500 px-6 text-white"><MessageCircle size={18} className="mr-2" />WhatsApp</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
