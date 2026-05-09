import Hero from '@/components/home/Hero';
import TrustBar from '@/components/home/TrustBar';
import PaymentTrustStrip from '@/components/home/PaymentTrustStrip';
import TrustedRecognised from '@/components/home/TrustedRecognised';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ServicesPreview from '@/components/home/ServicesPreview';
import AboutSnippet from '@/components/home/AboutSnippet';
import Testimonials from '@/components/home/Testimonials';
import GoogleReviewsBanner from '@/components/home/GoogleReviewsBanner';
import BeforeAfterPreview from '@/components/home/BeforeAfterPreview';
import ClinicPreview from '@/components/home/ClinicPreview';
import Process from '@/components/home/Process';
import FaqTeaser from '@/components/home/FaqTeaser';
import FindUs from '@/components/home/FindUs';
import AppointmentForm from '@/components/home/AppointmentForm';
import ContactCta from '@/components/home/ContactCta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PaymentTrustStrip />
      <TrustedRecognised />
      <WhyChooseUs />
      <ServicesPreview />
      <AboutSnippet />
      <Testimonials />
      <GoogleReviewsBanner />
      <BeforeAfterPreview />
      <ClinicPreview />
      <Process />
      <FaqTeaser />
      <FindUs />
      <AppointmentForm />
      <ContactCta />
    </>
  );
}
