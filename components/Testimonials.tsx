const testimonials = [
  {
    quote:
      "We'd had bad experiences with contractors before and were honestly nervous going in. John was different from the first conversation. He was direct, explained everything clearly, and followed through on every single thing he said he would do. The kitchen turned out beautifully — but honestly, the process is what we'll tell people about.",
    name: "Sarah & Mike T.",
    project: "Full Kitchen Remodel",
    location: "Las Vegas, NV",
  },
  {
    quote:
      "What stood out was that John actually called back — same day, every time. He walked us through every decision, flagged things we wouldn't have thought to ask about, and kept the jobsite clean the entire time. Our master bath looks incredible. Highly recommend.",
    name: "Jennifer R.",
    project: "Master Bathroom Remodel",
    location: "Summerlin, NV",
  },
  {
    quote:
      "Our house is from the 50s and had all kinds of surprises once the walls were opened. John handled every one of them without drama — explained what was going on, what it meant, and what the options were. I never felt left in the dark. He does quality work and he communicates. That combination is rare.",
    name: "David & Lisa M.",
    project: "Full Home Remodel – 1950s Home",
    location: "Las Vegas, NV",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            What Clients Say
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold leading-tight">
            Trust Built, Project by Project.
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-[#8B6F47]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-white/10 pt-5">
                <p className="text-white text-sm font-semibold">{t.name}</p>
                <p className="text-[#8B6F47] text-xs mt-1 tracking-wide">
                  {t.project}
                </p>
                <p className="text-white/35 text-xs mt-0.5">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-white/30 text-xs mt-10 tracking-wide">
          Testimonials are representative of client experiences. Real reviews available on request.
        </p>
      </div>
    </section>
  );
}
