import type { Metadata } from 'next';
import DoctorHero from '@/components/about/DoctorHero';
import Timeline from '@/components/about/Timeline';
import Memberships from '@/components/about/Memberships';
import { doctor } from '@/config/doctor';

export const metadata: Metadata = {
  title: doctor.seo.aboutTitle,
  description: doctor.seo.aboutDesc,
};

export default function AboutPage() {
  return (
    <>
      <DoctorHero />
      <Timeline />
      <Memberships />
    </>
  );
}
