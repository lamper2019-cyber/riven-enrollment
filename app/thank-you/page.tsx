export default function ThankYou() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0A0A0A] px-4">
      {/* Ambient orb */}
      <div className="ambient-orb" style={{ width: 350, height: 350, top: "30%", left: "50%", marginLeft: -175 }} />

      <div className="relative z-10 text-center">
        <h1 className="logo-shimmer animate-fade-up text-4xl font-bold tracking-[0.35em] sm:text-5xl">
          RIVEN
        </h1>
        <div className="animate-line mx-auto mt-4 h-[2px] bg-gradient-to-r from-transparent via-[#C8A951] to-transparent" />

        <div className="animate-fade-up delay-2 mt-14">
          <div className="relative rounded-2xl border border-[#C8A951]/10 bg-gradient-to-b from-[#141414] to-[#0F0F0F] px-10 py-12 sm:px-16">
            {/* Corner accents */}
            <div className="absolute left-0 top-0 h-8 w-[1px] bg-gradient-to-b from-[#C8A951]/40 to-transparent" />
            <div className="absolute left-0 top-0 h-[1px] w-8 bg-gradient-to-r from-[#C8A951]/40 to-transparent" />
            <div className="absolute bottom-0 right-0 h-8 w-[1px] bg-gradient-to-t from-[#C8A951]/40 to-transparent" />
            <div className="absolute bottom-0 right-0 h-[1px] w-8 bg-gradient-to-l from-[#C8A951]/40 to-transparent" />

            <div className="animate-scale-in mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#C8A951]/30 bg-[#C8A951]/5">
              <svg
                className="check-draw h-9 w-9 text-[#C8A951]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-medium leading-relaxed text-white sm:text-2xl">
              Got it. I&apos;ll reach out
              <br />
              within 24 hours.
            </p>
            <p className="mt-4 text-sm text-white/30">
              Check your inbox and phone.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
