'use client';

import { FormEvent, useState } from 'react';

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-space bg-white">
      <div className="section-shell">
        <div className="mx-auto max-w-[600px] rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)] md:p-8">
          <h2 className="text-center text-4xl font-bold text-dark">Book a Consultation</h2>
          <p className="mt-2 text-center text-sm text-muted">Fill in your details and we&apos;ll call you back within 2 hours.</p>
          {submitted ? (
            <p className="mt-6 rounded-lg bg-green-50 p-4 text-center text-sm text-green-700">
              Thank you! Dr. Priya&apos;s team will call you within 2 hours.
            </p>
          ) : (
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <input required className="h-11 w-full rounded-lg border border-border px-4 text-sm" type="text" placeholder="Full Name" />
              <input required className="h-11 w-full rounded-lg border border-border px-4 text-sm" type="tel" placeholder="+91 XXXXX XXXXX" />
              <select required className="h-11 w-full rounded-lg border border-border px-4 text-sm">
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
              <select required className="h-11 w-full rounded-lg border border-border px-4 text-sm">
                <option value="">Preferred Time</option>
                <option>Morning 10–1 PM</option>
                <option>Afternoon 1–4 PM</option>
                <option>Evening 4–7 PM</option>
              </select>
              <button type="submit" className="btn-primary-hover h-11 w-full rounded-lg bg-primary font-medium text-white">
                Request a Callback
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
