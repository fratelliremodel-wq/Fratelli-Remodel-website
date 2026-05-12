import Image from "next/image";

const differentiators = [
  {
    title: "Clear, consistent communication",
    description: "You'll always know what's happening and who to call. We return calls and follow through.",
  },
  {
    title: "Thoughtful planning before construction begins",
    description: "Decisions are made before work starts — not during. Fewer surprises. Cleaner execution.",
  },
  {
    title: "Attention to detail behind the walls and in the finishes",
    description: "Waterproofing, framing, substrate prep — we take invisible work as seriously as the final result.",
  },
  {
    title: "Clean, professional jobsite standards",
    description: "A tidy, organized site and a team that treats your home with care throughout.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#F2EDE6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left: header + photo */}
          <div className="md:sticky md:top-28">
            <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Our Difference
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-6">
              What Sets Our Process Apart
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-10">
              We believe the difference is in how the work is done — not just how
              it looks when it&apos;s finished.
            </p>

            {/* Photo — team at work */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/team-john-joe-drywall.jpg"
                alt="John and Joe working — Fratelli Remodel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/50">
                <p className="text-white/70 text-xs">Hands-on throughout every project.</p>
              </div>
            </div>
          </div>

          {/* Right: differentiators */}
          <div className="flex flex-col gap-8 md:pt-4">
            {differentiators.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="w-5 h-5 rounded-full bg-[#8B6F47] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg text-[#1A1A1A] font-semibold mb-1.5">
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
