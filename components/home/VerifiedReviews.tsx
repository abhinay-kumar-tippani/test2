import Link from "next/link";
import { doctor } from "@/config/doctor";
import GoogleGIcon from "@/components/ui/GoogleGIcon";

export default function VerifiedReviews() {
  const previewReviews = doctor.testimonials.slice(0, 3);

  return (
    <section className="bg-[linear-gradient(to_bottom,rgba(232,213,176,0.3),rgba(255,255,255,1))] py-14">
      <div className="section-shell max-w-4xl text-center">
        <div className="flex items-center justify-center gap-3">
          <GoogleGIcon size={26} />
          <p className="text-2xl font-bold text-navy">
            {doctor.googleRating} ★ on Google · {doctor.googleReviewCount} Verified Patient Reviews
          </p>
        </div>
        <p className="mt-3 text-3xl tracking-[0.18em] text-gold">★★★★★</p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {previewReviews.map((review) => (
            <article
              key={`${review.name}-${review.service}`}
              className="rounded-xl border border-gold/40 bg-white p-4 text-left shadow-[0_8px_24px_rgba(10,22,40,0.08)]"
            >
              <p className="text-sm text-gold">{"★".repeat(review.rating)}</p>
              <p className="mt-2 line-clamp-2 text-sm text-text">"{review.quote}"</p>
              <p className="mt-3 text-xs text-muted">
                {review.name} · {review.reviewSource}
              </p>
            </article>
          ))}
        </div>

        <Link
          href={doctor.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex h-11 items-center rounded-lg bg-navy px-6 text-sm font-medium text-white transition hover:bg-navy-mid"
        >
          Read All Reviews on Google →
        </Link>
        <p className="mt-3 text-xs text-muted">
          All reviews are from verified patients on Google Business Profile
        </p>
      </div>
    </section>
  );
}
