import Image from "next/image";

const pillars = [
  {
    number: "01",
    heading: "We Listen.",
    body: "We understand your home, your goals, and what matters most before anything begins.",
    imageSrc: "/images/team-client-finished-room.jpg",
    imageAlt: "John and Joe with clients at project completion",
    imageCaption: "Project completion — Las Vegas, NV",
    imagePosition: "object-center",
  },
  {
    number: "02",
    heading: "We Earn Trust.",
    body: "Clear communication and a professional process — from the first call to the final walkthrough.",
    imageSrc: "/images/progress-tadgh-framing.jpg",
    imageAlt: "Framing and rough-in work in progress",
    imageCaption: "Framing, electrical, plumbing — done right behind the walls.",
    imagePosition: "object-center",
  },
  {
    number: "03",
    heading: "We Build It Right.",
    body: "Quality where it matters most — the invisible work and the finished detail.",
    imageSrc: "/images/portfolio-lisa-bath-pro.jpg",
    imageAlt: "Finished master bathroom — freestanding tub, gold fixtures",
    imageCaption: "The finished result.",
    imagePosition: "object-center",
  },
];

export default function HowWeRemodel() {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Our Approach
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold leading-tight">
            How We Remodel Right
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6">
                <Image
                  src={pillar.imageSrc}
                  alt={pillar.imageAlt}
                  fill
                  className={`object-cover ${pillar.imagePosition}`}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/50">
                  <p className="text-white/70 text-xs leading-snug text-center">
                    {pillar.imageCaption}
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl text-[#8B6F47]/40 font-bold">
                    {pillar.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white font-bold">
                    {pillar.heading}
                  </h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
