import Image from 'next/image';
import { Award, ShieldCheck, Star } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import { doctor } from '@/config/doctor';
import { resolveDemoImage } from '@/lib/demoImages';
import NmcRegistration from '@/components/ui/NmcRegistration';

export default function DoctorHero() {
  return (
    <section className="section-space bg-surface">
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <div className="relative h-[460px] overflow-hidden rounded-2xl">
          {/* REPLACE: public/doctor/profile.jpg — formal square portrait of the doctor */}
          <Image src={resolveDemoImage(doctor.images.doctor.profile)} alt={`${doctor.name} profile`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-navy">{doctor.name}</h1>
          <p className="mt-2 text-lg text-gold">{doctor.credentials}</p>
          <p className="mt-2 text-sm text-muted">
            <NmcRegistration />
          </p>
          <div className="mt-6 space-y-4 text-muted">{doctor.bio.map((b) => <p key={b}>{b}</p>)}</div>
          <div className="mt-6 grid gap-3 rounded-2xl border border-gold/30 bg-bg p-4 md:grid-cols-3">
            <div className="rounded-xl bg-white p-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                <ShieldCheck size={16} className="text-gold" />
                NMC Verified
              </p>
              <p className="mt-1 text-xs text-muted">
                <NmcRegistration />
              </p>
            </div>
            <div className="rounded-xl bg-white p-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                <Award size={16} className="text-gold" />
                IDA Member
              </p>
              <p className="mt-1 text-xs text-muted">{doctor.memberships[0]}</p>
            </div>
            <div className="rounded-xl bg-white p-3">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
                <Star size={16} className="text-gold" />
                {doctor.googleRating} Google Rating
              </p>
              <p className="mt-1 text-xs text-muted">{doctor.googleReviewCount} verified reviews</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">{doctor.languages.map((l) => <Badge key={l}>{l}</Badge>)}</div>
          <blockquote className="mt-6 border-l-4 border-gold pl-4 font-display text-[1.6rem] italic text-navy">"{doctor.philosophy}"</blockquote>
        </div>
      </div>
    </section>
  );
}
