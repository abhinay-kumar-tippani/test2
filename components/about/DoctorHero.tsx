import Image from 'next/image';
import Badge from '@/components/ui/Badge';
import { doctor } from '@/config/doctor';

export default function DoctorHero() {
  return (
    <section className="section-space bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-2">
        <div className="relative h-[460px] overflow-hidden rounded-2xl">
          {/* REPLACE: public/doctor/profile.jpg — formal square portrait of the doctor */}
          <Image src={doctor.images.doctor.profile} alt={`${doctor.name} profile`} fill className="object-cover" blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==" placeholder="blur" />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-dark">{doctor.name}</h1>
          <p className="mt-2 text-lg text-primary">{doctor.credentials}</p>
          <p className="mt-2 text-sm text-muted">{doctor.registrationNo}</p>
          <div className="mt-6 space-y-4 text-muted">{doctor.bio.map((b) => <p key={b}>{b}</p>)}</div>
          <div className="mt-6 flex flex-wrap gap-2">{doctor.languages.map((l) => <Badge key={l}>{l}</Badge>)}</div>
          <blockquote className="mt-6 border-l-4 border-accent pl-4 font-display text-3xl italic text-dark">"{doctor.philosophy}"</blockquote>
        </div>
      </div>
    </section>
  );
}
