const differentiators = [
  {
    number: "01",
    title: "Trust Comes First",
    description:
      "We understand that inviting a contractor into your home requires real trust. Every interaction — from the first call to the final walkthrough — is designed to earn and keep it.",
  },
  {
    number: "02",
    title: "Communication You Can Count On",
    description:
      "We call back. We explain what matters. We give you clear next steps. You'll never feel like you're chasing us for answers or left wondering what's happening.",
  },
  {
    number: "03",
    title: "Quality Behind the Walls",
    description:
      "Beautiful finishes start with what you can't see. We take the prep work, waterproofing, and structural details as seriously as the tile pattern and paint color.",
  },
  {
    number: "04",
    title: "Expertise With Older Homes",
    description:
      "Las Vegas has a lot of older homes — and older homes have surprises. We're experienced with what's behind those walls and handle the unexpected with calm, clear communication.",
  },
  {
    number: "05",
    title: "A Professional Client Experience",
    description:
      "Clear proposals, organized timelines, clean jobsites, and a process that respects your home and your time. This is what a well-run remodel looks like.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-[#F2EDE6]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: header + quote */}
          <div className="md:sticky md:top-28">
            <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Why Fratelli
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-8">
              A Better Remodeling Experience Starts With Trust.
            </h2>
            <div className="border-l-2 border-[#8B6F47] pl-6">
              <p className="text-[#4A4A4A] text-lg leading-relaxed italic">
                "Most homeowners aren't just looking for someone to move tile
                and hang drywall. They're looking for someone they can actually
                trust in their home — someone who communicates, who cares about
                the details, and who does the work right."
              </p>
              <p className="text-[#8B6F47] text-sm font-medium mt-4 tracking-wide">
                — John Juadines, Founder
              </p>
            </div>
          </div>

          {/* Right: differentiators */}
          <div className="flex flex-col gap-8">
            {differentiators.map((item) => (
              <div key={item.number} className="flex gap-6">
                <span className="font-[family-name:var(--font-playfair)] text-3xl text-[#8B6F47]/30 font-bold leading-none pt-1 min-w-[2.5rem]">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1A1A1A] font-semibold mb-2">
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
