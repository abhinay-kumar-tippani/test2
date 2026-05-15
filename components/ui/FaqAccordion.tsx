export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <div key={f.q} className="rounded-xl border border-border bg-white">
          <p className="w-full px-5 py-4 text-left font-medium text-navy">{f.q}</p>
          <div className="overflow-hidden">
            <p className="px-5 pb-4 text-sm text-muted">{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
