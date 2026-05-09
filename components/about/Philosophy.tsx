import { doctor } from '@/config/doctor';

export default function Philosophy() {
  return (
    <section className="section-space bg-surface">
      <div className="section-shell relative text-center">
        <span className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2 text-8xl text-accent/25">“</span>
        <blockquote className="relative mx-auto max-w-4xl font-display text-4xl italic text-dark">
          {doctor.philosophy}
        </blockquote>
      </div>
    </section>
  );
}
