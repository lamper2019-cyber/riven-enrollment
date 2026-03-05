export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0A0A0A] px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-[0.3em] text-white sm:text-5xl">
          RIVEN
        </h1>
        <div className="mx-auto mt-3 h-px w-16 bg-[#C8A951]" />

        <div className="mt-12 rounded-xl border border-[#2A2A2A] bg-[#141414] px-8 py-10 sm:px-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C8A951]">
            <svg
              className="h-8 w-8 text-[#C8A951]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-xl font-medium text-white sm:text-2xl">
            Got it. I&apos;ll reach out within 24 hours.
          </p>
        </div>
      </div>
    </main>
  );
}
