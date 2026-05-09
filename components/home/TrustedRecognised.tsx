import { BadgeCheck } from 'lucide-react';

const badges = [
  { title: 'IDA Member', subtitle: 'Indian Dental Association' },
  { title: 'NMC Registered', subtitle: 'National Medical Commission' },
  { title: 'ITI Certified', subtitle: 'International Team for Implantology' },
  { title: '12+ Years Experience', subtitle: 'Experienced clinical practice' },
];

export default function TrustedRecognised() {
  // TODO: move trust badges to config for multi-clinic reuse.
  return (
    <section className="section-space bg-white py-16 md:py-20">
      <div className="section-shell">
        <h3 className="mb-8 text-center text-3xl font-semibold text-dark">Trusted & Recognised</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <article key={badge.title} className="card-premium border border-border">
              <div className="mb-3 inline-flex rounded-full bg-gold/10 p-2 text-gold">
                <BadgeCheck size={18} />
              </div>
              <p className="text-base font-semibold text-dark">{badge.title}</p>
              <p className="text-sm text-muted">{badge.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
