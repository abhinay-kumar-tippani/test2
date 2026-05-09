import { doctor } from '@/config/doctor';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Process() {
  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <SectionHeading title="Your First Visit, Simplified" />
        <div className="grid gap-8 md:grid-cols-4">
          {doctor.process.map((p, i) => (
            <div key={p.step} className="relative">
              {i < doctor.process.length - 1 ? <span className="absolute left-14 top-6 hidden h-0.5 w-[calc(100%-2rem)] bg-border md:block" /> : null}
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent font-semibold text-white">{p.step}</span>
              <h3 className="mt-4 text-2xl font-semibold text-dark">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
