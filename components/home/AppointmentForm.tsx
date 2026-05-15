'use client';

import { FormEvent, useState } from "react";
import { MessageCircle } from "lucide-react";
import emailjs from "emailjs-com";
import { doctor } from "@/config/doctor";

export default function AppointmentForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [treatment, setTreatment] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message =
      `Hi ${doctor.shortName}, I'd like to book an appointment.\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Treatment: ${treatment}\n` +
      `Preferred Time: ${preferredTime}`;

    const whatsappUrl = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(message)}`;

    const hasEmailJsConfig = Boolean(
      doctor.emailjs.serviceId.trim() &&
        doctor.emailjs.templateId.trim() &&
        doctor.emailjs.publicKey.trim()
    );
    if (hasEmailJsConfig) {
      try {
        await emailjs.send(
          doctor.emailjs.serviceId,
          doctor.emailjs.templateId,
          { name, phone, treatment, preferredTime },
          doctor.emailjs.publicKey
        );
      } catch {
        // Silent fallback by design; WhatsApp remains the primary submission flow.
      }
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    if (isMobile) {
      window.location.href = whatsappUrl;
      return;
    }
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <div className="mx-auto max-w-[600px] rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:p-8">
          <h2 className="text-center text-4xl font-bold text-dark">Book a Consultation</h2>
          <p className="mt-2 text-center text-sm text-muted">Fill in your details and we&apos;ll call you back within 2 hours.</p>
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <input
              required
              className="h-11 w-full rounded-lg border border-border px-4 text-sm"
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              className="h-11 w-full rounded-lg border border-border px-4 text-sm"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <select
              required
              className="h-11 w-full rounded-lg border border-border px-4 text-sm"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
            >
                <option value="">Treatment Interested In</option>
                <option>General Checkup</option>
                <option>Dental Implant</option>
                <option>Root Canal</option>
                <option>Crowns & Bridges</option>
                <option>Orthodontics</option>
                <option>Teeth Whitening</option>
                <option>Pediatric Dentistry</option>
                <option>Other</option>
            </select>
            <select
              required
              className="h-11 w-full rounded-lg border border-border px-4 text-sm"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
            >
                <option value="">Preferred Time</option>
                <option>Morning 10–1 PM</option>
                <option>Afternoon 1–4 PM</option>
                <option>Evening 4–7 PM</option>
            </select>
            <button
              type="submit"
              className="btn-primary-hover inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] font-medium text-white"
            >
              <MessageCircle size={18} />
              Send via WhatsApp
            </button>
            <p className="text-center text-xs text-muted">
              We respond within 2 hours on WhatsApp
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
