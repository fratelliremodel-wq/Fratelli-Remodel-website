export default function EmotionalHook() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-6">
          Why It Matters
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-10">
          A Remodel Isn&apos;t Just About How It Looks
        </h2>

        <p className="text-[#4A4A4A] text-lg leading-relaxed mb-10">
          Most homeowners don&apos;t just worry about how their remodel will turn out
          — they worry about the experience along the way.
        </p>

        <div className="flex flex-col gap-4 mb-10">
          {[
            "Will it be stressful?",
            "Will communication be clear?",
            "Will the work actually be done right?",
          ].map((q) => (
            <p
              key={q}
              className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#1A1A1A] italic"
            >
              {q}
            </p>
          ))}
        </div>

        <div className="h-px w-16 bg-[#8B6F47]/40 mx-auto mb-10" />

        <p className="text-[#4A4A4A] text-lg leading-relaxed">
          At Fratelli Remodel, we focus on both — the final result{" "}
          <span className="text-[#1A1A1A] font-medium">and</span> the experience
          it takes to get there.
        </p>
      </div>
    </section>
  );
}
