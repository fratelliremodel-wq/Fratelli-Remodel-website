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
          {/* Photo placeholder */}
          <div className="relative">
            <div
              className="aspect-[4/5] rounded-xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #2D2218 0%, #3D3020 50%, #2D2218 100%)",
              }}
            >
              {/* Placeholder content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white/25 gap-3">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p className="text-xs tracking-widest uppercase">Photo Coming Soon</p>
              </div>

              {/* Decorative accent */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <p className="text-white/80 text-sm font-semibold">
                    John Juadines
                  </p>
                  <p className="text-white/45 text-xs mt-0.5">
                    Founder, Fratelli Remodel LLC
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
