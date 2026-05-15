import Link from "next/link";
import { MapPin } from "lucide-react";
import { doctor } from "@/config/doctor";

export default function StaticMapCard() {
  const mapsQueryUrl = `https://maps.google.com/?q=${encodeURIComponent(doctor.clinicAddress)}`;

  return (
    <div>
      <div className="rounded-2xl bg-navy px-6 py-8 text-center shadow-[0_8px_30px_rgba(10,22,40,0.18)] md:px-10">
        <MapPin className="mx-auto text-gold" size={34} />
        <p className="mt-4 font-display text-3xl font-semibold text-white">{doctor.clinicName}</p>
        <p className="mt-3 whitespace-pre-line text-sm text-white/75">
          {doctor.clinicAddress.replace(",", ",\n")}
        </p>
        <p className="mt-4 text-sm font-medium text-gold">{doctor.phoneDisplay}</p>
        <p className="mt-1 text-sm text-gold">
          {doctor.workingHours[0]?.days}: {doctor.workingHours[0]?.hours}
        </p>
        <Link
          href={mapsQueryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-lg border border-gold px-5 text-sm font-medium text-gold transition hover:bg-gold hover:text-navy"
        >
          Open in Google Maps
        </Link>
      </div>
      {process.env.NODE_ENV === "development" ? (
        <p className="mt-3 text-center text-xs italic text-muted">
          To enable live map: add mapEmbedUrl in config/doctor.ts
        </p>
      ) : null}
    </div>
  );
}
