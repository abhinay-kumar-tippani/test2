import Link from 'next/link';

export default function GoogleReviewsBanner() {
  // TODO: move Google review score and URL to config later.
  return (
    <section className="bg-navy py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-6 text-white lg:flex-row">
        <div className="flex items-center gap-3">
          <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M21.8 12.2c0-.8-.1-1.6-.2-2.3H12v4.4h5.5c-.2 1.4-1.1 2.6-2.4 3.4v2.8h3.9c2.3-2.1 2.8-5.1 2.8-8.3z" />
            <path fill="#34A853" d="M12 22c2.7 0 5-.9 6.7-2.5l-3.9-2.8c-1.1.7-2.5 1.2-4.2 1.2-3.2 0-5.9-2.1-6.9-5H.7v3.1A10 10 0 0 0 12 22z" />
            <path fill="#FBBC05" d="M5.1 12c0-.8.1-1.5.4-2.2V6.7H.7A10 10 0 0 0 0 12c0 1.7.4 3.3 1.1 4.7l3.9-3.1c-.2-.5-.3-1-.3-1.6z" />
            <path fill="#EA4335" d="M12 4.4c1.8 0 3.4.6 4.6 1.7l3.4-3.4A10 10 0 0 0 0 6.7l4.8 3.1c1-2.9 3.7-5.4 7.2-5.4z" />
          </svg>
          <div>
            <p className="text-lg font-semibold">4.9 ★ on Google</p>
            <p className="text-sm text-white/70">Based on 300+ reviews</p>
          </div>
        </div>
        <p className="text-gold text-2xl tracking-[0.2em]">★★★★★</p>
        <Link href="#" className="rounded-lg border border-gold px-5 py-3 text-sm font-medium text-gold transition-all duration-200 hover:bg-gold hover:text-white">
          Read Reviews on Google
        </Link>
      </div>
    </section>
  );
}
