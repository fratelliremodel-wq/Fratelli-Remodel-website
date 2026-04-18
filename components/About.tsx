import Image from "next/image";

const values = [
  "Communication first",
  "Quality behind the walls",
  "Honest guidance",
  "Detail-oriented execution",
  "Respect for your home",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Team photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/team-john-joe-drywall.jpg"
                alt="John and Joe — Fratelli Remodel team"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Name card overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <p className="text-white/90 text-sm font-semibold">
                    John &amp; Joe
                  </p>
                  <p className="text-white/55 text-xs mt-0.5">
                    Fratelli Remodel LLC · Las Vegas, NV
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#8B6F47]/20 rounded-xl -z-10" />
          </div>

          {/* Story */}
          <div>
            <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Our Story
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-8">
              Built From the Ground Up. Literally.
            </h2>

            <div className="space-y-5 text-[#4A4A4A] leading-relaxed">
              <p>
                Construction runs deep in this family. John Juadines learned the
                trade from his uncle and grandfather — custom home builders who
                worked Las Vegas when the city was still finding itself. The
                craftsmanship, the standards, the way you treat a client's home
                — that foundation never left him.
              </p>
              <p>
                John took a different path for a while. He studied biology,
                considered medicine, and eventually built a CrossFit gym and a
                career in personal training. What he learned there — how to
                listen, how to guide people through hard processes, how trust is
                earned and not assumed — turned out to matter just as much in
                remodeling as it did in a gym.
              </p>
              <p>
                When the pandemic shifted everything, John came back to
                construction. He started with a handyman business and grew it
                deliberately into Fratelli Remodel — a company built on the
                belief that a great remodeling experience is about more than just
                the work on the walls. It's about who you let into your home and
                whether they deserve to be there.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 pt-8 border-t border-[#E5DDD4]">
              <p className="text-[#1A1A1A] text-sm font-semibold tracking-wide uppercase mb-5">
                What We Stand For
              </p>
              <ul className="space-y-3">
                {values.map((value) => (
                  <li key={value} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] flex-shrink-0" />
                    <span className="text-[#4A4A4A] text-sm">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
