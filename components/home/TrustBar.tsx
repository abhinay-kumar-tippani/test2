'use client';

import { useEffect, useRef, useState } from 'react';
import { doctor } from '@/config/doctor';
import AnimatedSection from '@/components/ui/AnimatedSection';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const hasStarted = useRef(false);
  const [count, setCount] = useState<number>(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || hasStarted.current) return;
        hasStarted.current = true;
        const startAt = performance.now();
        const duration = 1500;
        const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
        const step = (now: number) => {
          const progress = Math.min((now - startAt) / duration, 1);
          const eased = easeOut(progress);
          setCount(Math.floor(eased * value));
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(value);
          }
        };
        setCount(0);
        requestAnimationFrame(step);
      }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>{count.toLocaleString('en-IN')}{suffix}</span>
  );
}

export default function TrustBar() {
  return (
    <AnimatedSection className="border-t border-gold/40 bg-gold-light/40">
      <div className="section-shell grid grid-cols-2 gap-4 py-10 md:grid-cols-4 md:gap-0">
        {doctor.stats.map((s, i) => (
          <div key={s.label} className={`text-center ${i < 3 ? 'md:border-r md:border-border' : ''}`}>
            <p className="font-display text-5xl font-bold text-navy md:text-[52px]">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
