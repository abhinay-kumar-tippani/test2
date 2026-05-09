import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesPreview from '@/components/home/ServicesPreview';
import AboutSnippet from '@/components/home/AboutSnippet';
import Testimonials from '@/components/home/Testimonials';
import BeforeAfterPreview from '@/components/home/BeforeAfterPreview';
import ClinicPreview from '@/components/home/ClinicPreview';
import Process from '@/components/home/Process';
import FaqTeaser from '@/components/home/FaqTeaser';
import ContactCta from '@/components/home/ContactCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <ServicesPreview />
      <AboutSnippet />
      <Testimonials />
      <BeforeAfterPreview />
      <ClinicPreview />
      <Process />
      <FaqTeaser />
      <ContactCta />
    </>
  );
}
