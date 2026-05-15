import type { Metadata } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import { doctor } from '@/config/doctor';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TopBar from '@/components/layout/TopBar';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: doctor.seo.homeTitle,
  description: doctor.seo.homeDesc,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-bg pb-16 font-sans text-text antialiased md:pb-0">
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
