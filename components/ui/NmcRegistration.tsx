import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { doctor } from "@/config/doctor";

export default function NmcRegistration({ className = "" }: { className?: string }) {
  const content = (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <ShieldCheck size={15} className="text-gold" />
      <span>{doctor.registrationNo}</span>
    </span>
  );

  if (!doctor.nmcVerifyUrl.trim()) return content;

  return (
    <Link href={doctor.nmcVerifyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
      {content}
    </Link>
  );
}
