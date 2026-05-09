'use client';

import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { doctor } from '@/config/doctor';
import AnimatedSection from '@/components/ui/AnimatedSection';

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <AnimatedSection className="border-t-2 border-accent bg-surface">
      <div className="section-shell grid grid-cols-2 gap-4 py-10 md:grid-cols-4 md:gap-0">
        {doctor.stats.map((s, i) => (
          <div key={s.label} className={`text-center ${i < 3 ? 'md:border-r md:border-border' : ''}`}>
            <p className="font-display text-5xl font-bold text-primary md:text-[52px]">
              <AnimatedCounter value={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
