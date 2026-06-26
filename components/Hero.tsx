export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <style>{`
        .hero-bg {
          background-size: cover;
          background-position: 45% 20%;
        }
        @media (min-width: 1024px) {
          .hero-bg {
            background-size: 110%;
            background-position: 30% 18%;
          }
        }
      `}</style>

      {/* Background photo */}
      <div
        className="absolute inset-0 hero-bg"
        style={{
          backgroundImage: "url(/images/portfolio-lisa-kitchen-wide.jpg)",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/62" />

      {/* Warm bronze tint */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, #3D2010 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">

          {/* Left — headline + CTA */}
          <div>
            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl text-white font-bold leading-[1.1] tracking-tight mb-6">
              Remodeling Done Right
              <span className="block text-[#C4A882] mt-2">in Las Vegas.</span>
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Licensed. Insured. Trusted. We help homeowners remodel with
              confidence through clear communication and quality craftsmanship.
            </p>

            <a
              href="#contact"
              className="inline-block px-10 py-4 bg-[#8B6F47] text-white text-sm tracking-wide rounded hover:bg-[#7A6040] transition-colors font-medium"
            >
              Start the Conversation
            </a>

            <p className="text-white/35 text-sm mt-4 tracking-wide">
              No pressure — just a conversation about your project.
            </p>
          </div>

          {/* Right — intro video */}
          <div className="flex flex-col items-center lg:items-end">
            <p className="text-white/40 text-[11px] tracking-[0.25em] uppercase mb-3 self-center lg:self-end lg:mr-1">
              Meet John
            </p>

            {/* Phone-style video frame */}
            <div className="relative w-full max-w-[280px] lg:max-w-[300px]">
              {/* Subtle glow behind the video */}
              <div
                className="absolute inset-0 rounded-[2rem] blur-2xl opacity-20 scale-95"
                style={{ background: "#8B6F47" }}
              />

              <div className="relative aspect-[9/16] rounded-[2rem] overflow-hidden ring-1 ring-white/10 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/JWipcDW1kwc?rel=0&modestbranding=1&color=white"
                  title="Meet John — Fratelli Remodel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
