import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Process() {
  return (
    <section className="section-space bg-bg">
      <div className="section-shell">
        <SectionHeading title="Your First Visit, Simplified" />
        <div className="grid gap-8 md:grid-cols-4">
          {doctor.process.map((p, i) => (
            <div key={p.step} className="relative">
              {i < doctor.process.length - 1 ? <span className="absolute left-8 top-16 hidden h-[calc(100%-1rem)] w-px bg-gold/40 md:block" /> : null}
              <span className="font-display text-6xl leading-none text-gold">{p.step}</span>
              <h3 className="mt-4 text-2xl font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
