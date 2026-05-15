import { BadgeCheck, Cross, ShieldCheck, Medal } from 'lucide-react';

const badges = [
  { title: 'IDA Member', subtitle: 'Indian Dental Association', icon: Cross },
  { title: 'NMC Registered', subtitle: 'National Medical Commission', icon: ShieldCheck },
  { title: 'ITI Certified', subtitle: 'International Team for Implantology', icon: Medal },
  { title: 'Verified Credentials', subtitle: 'Recognized professional training', icon: BadgeCheck },
];

export default function TrustedRecognised() {
  // TODO: move trust badges to config for multi-clinic reuse.
  return (
    <section className="section-space bg-gold-light/45 py-16 md:py-20">
      <div className="section-shell">
        <h3 className="mb-8 text-center text-3xl font-semibold text-navy">Trusted & Recognised</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <article key={badge.title} className="rounded-2xl border border-gold/50 bg-white p-6 text-center shadow-[0_10px_30px_rgba(10,22,40,0.08)]">
              <div className="mb-3 inline-flex rounded-full bg-gold/15 p-3 text-gold">
                <badge.icon size={20} />
              </div>
              <p className="text-base font-semibold text-navy">{badge.title}</p>
              <p className="text-sm text-muted">{badge.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
