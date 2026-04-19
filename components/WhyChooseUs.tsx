const differentiators = [
  {
    title: "Clear and consistent communication",
    description:
      "You'll always know what's happening, what's coming next, and who to call when you have a question. We return calls. We follow through.",
  },
  {
    title: "Thoughtful planning before construction begins",
    description:
      "We invest time upfront so decisions are made before work starts — not during. Fewer surprises. Cleaner execution.",
  },
  {
    title: "Attention to detail behind the walls and in the finishes",
    description:
      "Beautiful finishes start with what you can't see. Waterproofing, framing, substrate prep — we take the invisible work as seriously as the final result.",
  },
  {
    title: "Clean, professional jobsite standards",
    description:
      "We respect your home. That means a tidy, organized site, clear schedules, and a team that treats your space with care throughout the project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#F2EDE6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: header + context */}
          <div className="md:sticky md:top-28">
            <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Our Difference
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-8">
              What Sets Our Process Apart
            </h2>
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
              Many remodels focus only on the final look. We focus on the entire
              process — from planning and communication to execution and detail.
            </p>
            <p className="text-[#4A4A4A] leading-relaxed">
              We believe the difference is in how the work is done, not just how
              it looks when it&apos;s finished.
            </p>
          </div>

          {/* Right: differentiators */}
          <div className="flex flex-col gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-5 h-5 rounded-full bg-[#8B6F47] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#1A1A1A] font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
