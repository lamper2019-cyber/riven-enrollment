"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// ── UPDATE THIS NUMBER TO CHANGE SPOTS REMAINING ──
const SPOTS_REMAINING = 4;
// ────────────────────────────────────────────────────

export default function EnrollmentPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    biggestStruggle: "",
    investedBefore: "",
    whyToday: "",
  });

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Submit failed");
      router.push("/thank-you");
    } catch {
      alert("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-lg">
        {/* Logo */}
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold tracking-[0.3em] text-white sm:text-6xl">
            RIVEN
          </h1>
          <div className="mx-auto mt-3 h-px w-16 bg-[#C8A951]" />
        </div>

        {/* Spot Counter */}
        <p className="mb-10 text-center text-sm font-semibold tracking-wide text-[#C8A951] sm:text-base">
          {SPOTS_REMAINING} of 4 spots remaining — Q2 2026
        </p>

        {/* Coaching Description */}
        <div className="mb-12 rounded-xl border border-[#2A2A2A] bg-[#141414] p-6 sm:p-8">
          <p className="text-center text-base leading-relaxed text-white/90 sm:text-lg">
            12 weeks. Daily check-ins. Personalized meal plans. Restaurant guide
            app included. <span className="font-semibold text-[#C8A951]">20 lb guarantee.</span>
          </p>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="mb-1.5 block text-sm font-medium text-white/70">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className="w-full rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#C8A951]"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-white/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#C8A951]"
              placeholder="you@email.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-white/70">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#C8A951]"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Biggest Struggle */}
          <div>
            <label htmlFor="biggestStruggle" className="mb-1.5 block text-sm font-medium text-white/70">
              What&apos;s your biggest struggle with food right now?
            </label>
            <textarea
              id="biggestStruggle"
              required
              rows={3}
              value={form.biggestStruggle}
              onChange={(e) => update("biggestStruggle", e.target.value)}
              className="w-full resize-none rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#C8A951]"
              placeholder="Tell us what's been holding you back..."
            />
          </div>

          {/* Invested Before */}
          <div>
            <label className="mb-2 block text-sm font-medium text-white/70">
              Have you invested in a nutrition program before?
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => update("investedBefore", "Yes")}
                className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                  form.investedBefore === "Yes"
                    ? "border-[#C8A951] bg-[#C8A951]/10 text-[#C8A951]"
                    : "border-[#2A2A2A] bg-[#1A1A1A] text-white/50 hover:border-white/20"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => update("investedBefore", "No")}
                className={`flex-1 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                  form.investedBefore === "No"
                    ? "border-[#C8A951] bg-[#C8A951]/10 text-[#C8A951]"
                    : "border-[#2A2A2A] bg-[#1A1A1A] text-white/50 hover:border-white/20"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Why Today */}
          <div>
            <label htmlFor="whyToday" className="mb-1.5 block text-sm font-medium text-white/70">
              What made you look into this today?
            </label>
            <textarea
              id="whyToday"
              required
              rows={3}
              value={form.whyToday}
              onChange={(e) => update("whyToday", e.target.value)}
              className="w-full resize-none rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] px-4 py-3 text-white placeholder-white/30 outline-none transition-colors focus:border-[#C8A951]"
              placeholder="What's motivating you right now..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting || !form.investedBefore}
            className="mt-4 w-full rounded-lg bg-[#C8A951] py-4 text-base font-bold tracking-wider text-black transition-colors hover:bg-[#A68A3E] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "SUBMITTING..." : "APPLY NOW"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-white/30">
          Your information is kept private and never shared.
        </p>
      </div>
    </main>
  );
}
