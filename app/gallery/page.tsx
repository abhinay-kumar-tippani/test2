import type { Metadata } from 'next';
import { doctor } from '@/config/doctor';
import GalleryTabs from '@/components/gallery/GalleryTabs';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: doctor.seo.galleryTitle,
  description: doctor.seo.galleryDesc,
};

export default function GalleryPage() {
  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <SectionHeading title="Clinic Gallery" subtitle="Explore our treatment spaces and doctor gallery." />
        <GalleryTabs />
      </div>
    </section>
  );
}
