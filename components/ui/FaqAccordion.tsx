'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((f, i) => (
        <div key={f.q} className="rounded-xl border border-border bg-white">
          <button className="w-full px-5 py-4 text-left font-medium text-dark" onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
          </button>
          <AnimatePresence initial={false}>
            {open === i ? (
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-muted">{f.a}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
