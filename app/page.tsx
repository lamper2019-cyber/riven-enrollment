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
    <main className="relative min-h-screen overflow-hidden bg-[#0A0A0A] px-4 py-16 sm:py-24">
      {/* Ambient background orbs */}
      <div className="ambient-orb" style={{ width: 400, height: 400, top: "-10%", left: "-10%" }} />
      <div className="ambient-orb" style={{ width: 300, height: 300, bottom: "10%", right: "-5%", animationDelay: "4s" }} />

      <div className="relative z-10 mx-auto max-w-lg">
        {/* Logo */}
        <div className="mb-6 animate-fade-up text-center">
          <h1 className="logo-shimmer text-5xl font-bold tracking-[0.35em] sm:text-7xl">
            RIVEN
          </h1>
          <div className="animate-line mx-auto mt-4 h-[2px] bg-gradient-to-r from-transparent via-[#C8A951] to-transparent" />
        </div>

        {/* Tagline */}
        <p className="animate-fade-up delay-1 mb-2 text-center text-xs font-light uppercase tracking-[0.25em] text-white/40">
          Private Nutrition Coaching
        </p>

        {/* Spot Counter */}
        <div className="animate-fade-up delay-2 mb-12 text-center">
          <span className="pulse-gold inline-block rounded-full border border-[#C8A951]/30 bg-[#C8A951]/5 px-5 py-2 text-sm font-semibold tracking-wide text-[#C8A951]">
            {SPOTS_REMAINING} of 4 spots remaining — Q2 2026
          </span>
        </div>

        {/* Coaching Description */}
        <div className="animate-fade-up delay-3 mb-14">
          <div className="relative rounded-2xl border border-[#C8A951]/10 bg-gradient-to-b from-[#141414] to-[#0F0F0F] p-8 sm:p-10">
            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-8 w-[1px] bg-gradient-to-b from-[#C8A951]/40 to-transparent" />
            <div className="absolute left-0 top-0 h-[1px] w-8 bg-gradient-to-r from-[#C8A951]/40 to-transparent" />
            <div className="absolute bottom-0 right-0 h-8 w-[1px] bg-gradient-to-t from-[#C8A951]/40 to-transparent" />
            <div className="absolute bottom-0 right-0 h-[1px] w-8 bg-gradient-to-l from-[#C8A951]/40 to-transparent" />

            <div className="space-y-4 text-center">
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium tracking-wide text-white/80 sm:text-base">
                <span>12 weeks</span>
                <span className="text-[#C8A951]/40">|</span>
                <span>Daily check-ins</span>
                <span className="text-[#C8A951]/40">|</span>
                <span>Custom meal plans</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm font-medium tracking-wide text-white/80 sm:text-base">
                <span>Restaurant guide app</span>
                <span className="text-[#C8A951]/40">|</span>
                <span className="font-semibold text-[#C8A951]">20 lb guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="animate-fade-up delay-3 mb-10 flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#2A2A2A]" />
          <span className="text-xs font-light uppercase tracking-[0.3em] text-white/25">Apply</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#2A2A2A]" />
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="animate-fade-up delay-4 space-y-6">
          {/* Full Name */}
          <div className="group">
            <label htmlFor="fullName" className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40 transition-colors group-focus-within:text-[#C8A951]/70">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className="w-full rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-3.5 text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#C8A951]/50 focus:bg-[#141414]"
              placeholder="Your full name"
            />
          </div>

          {/* Email */}
          <div className="group">
            <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40 transition-colors group-focus-within:text-[#C8A951]/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="w-full rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-3.5 text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#C8A951]/50 focus:bg-[#141414]"
              placeholder="you@email.com"
            />
          </div>

          {/* Phone */}
          <div className="group">
            <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40 transition-colors group-focus-within:text-[#C8A951]/70">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              className="w-full rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-3.5 text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#C8A951]/50 focus:bg-[#141414]"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* Biggest Struggle */}
          <div className="group">
            <label htmlFor="biggestStruggle" className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40 transition-colors group-focus-within:text-[#C8A951]/70">
              What&apos;s your biggest struggle with food right now?
            </label>
            <textarea
              id="biggestStruggle"
              required
              rows={3}
              value={form.biggestStruggle}
              onChange={(e) => update("biggestStruggle", e.target.value)}
              className="w-full resize-none rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-3.5 text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#C8A951]/50 focus:bg-[#141414]"
              placeholder="Tell us what's been holding you back..."
            />
          </div>

          {/* Invested Before */}
          <div>
            <label className="mb-3 block text-xs font-medium uppercase tracking-widest text-white/40">
              Have you invested in a nutrition program before?
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => update("investedBefore", "Yes")}
                className={`flex-1 rounded-xl border py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  form.investedBefore === "Yes"
                    ? "border-[#C8A951]/50 bg-[#C8A951]/10 text-[#C8A951] shadow-[0_0_20px_rgba(200,169,81,0.1)]"
                    : "border-[#2A2A2A] bg-[#111111] text-white/40 hover:border-white/15 hover:text-white/60"
                }`}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => update("investedBefore", "No")}
                className={`flex-1 rounded-xl border py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  form.investedBefore === "No"
                    ? "border-[#C8A951]/50 bg-[#C8A951]/10 text-[#C8A951] shadow-[0_0_20px_rgba(200,169,81,0.1)]"
                    : "border-[#2A2A2A] bg-[#111111] text-white/40 hover:border-white/15 hover:text-white/60"
                }`}
              >
                No
              </button>
            </div>
          </div>

          {/* Why Today */}
          <div className="group">
            <label htmlFor="whyToday" className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/40 transition-colors group-focus-within:text-[#C8A951]/70">
              What made you look into this today?
            </label>
            <textarea
              id="whyToday"
              required
              rows={3}
              value={form.whyToday}
              onChange={(e) => update("whyToday", e.target.value)}
              className="w-full resize-none rounded-xl border border-[#2A2A2A] bg-[#111111] px-5 py-3.5 text-white placeholder-white/20 outline-none transition-all duration-300 focus:border-[#C8A951]/50 focus:bg-[#141414]"
              placeholder="What's motivating you right now..."
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting || !form.investedBefore}
              className="btn-glow w-full rounded-xl bg-gradient-to-r from-[#C8A951] to-[#B89A45] py-4 text-sm font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:from-[#D4B55E] hover:to-[#C8A951] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
              style={{ animationPlayState: submitting || !form.investedBefore ? "paused" : "running" }}
            >
              {submitting ? "SUBMITTING..." : "APPLY NOW"}
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="animate-fade-up delay-5 mt-10 text-center">
          <div className="mx-auto mb-3 h-[1px] w-12 bg-gradient-to-r from-transparent via-[#2A2A2A] to-transparent" />
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/20">
            Your information is kept private and never shared
          </p>
        </div>
      </div>
    </main>
  );
}
