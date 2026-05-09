import type { Metadata } from 'next';
import ContactInfo from '@/components/contact/ContactInfo';
import MapEmbed from '@/components/contact/MapEmbed';
import { doctor } from '@/config/doctor';
import FaqAccordion from '@/components/ui/FaqAccordion';

export const metadata: Metadata = {
  title: doctor.seo.contactTitle,
  description: doctor.seo.contactDesc,
};

export default function ContactPage() {
  return (
    <>
      <MapEmbed />
      <ContactInfo />
      <section className="section-space bg-white pt-0">
        <div className="section-shell max-w-4xl">
          <h2 className="mb-6 text-center text-4xl font-bold text-dark">Frequently Asked Questions</h2>
          <FaqAccordion items={doctor.faqs} />
        </div>
      </section>
    </>
  );
}
