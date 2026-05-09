import { ShieldCheck } from 'lucide-react';
import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Memberships() {
  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <SectionHeading title="Professional Affiliations" />
        <div className="flex flex-wrap justify-center gap-3">
          {doctor.memberships.map((m) => (
            <span key={m} className="inline-flex items-center gap-2 rounded-full border border-primary bg-white px-4 py-2 text-sm text-primary">
              <ShieldCheck size={16} />
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
