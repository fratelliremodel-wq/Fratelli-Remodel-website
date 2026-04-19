export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/images/portfolio-lisa-kitchen-wide.jpg)",
          backgroundSize: "118%",
          backgroundPosition: "22% 22%",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/58" />

      {/* Warm bronze tint layer — keeps brand feel */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #3D2010 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center pt-32 pb-40">

        {/* Main headline */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-[1.1] tracking-tight mb-8">
          Remodeling Done Right
          <span className="block text-[#C4A882] mt-3">in Las Vegas.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/70 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-4">
          Licensed. Insured. Trusted. We help homeowners remodel with confidence
          through clear communication, thoughtful planning, and quality
          craftsmanship.
        </p>

        {/* Location line */}
        <p className="text-white/35 text-sm mb-14 tracking-wide">
          Serving homeowners throughout Las Vegas and surrounding areas.
        </p>

        {/* Primary CTA */}
        <a
          href="#contact"
          className="inline-block px-10 py-4 bg-[#8B6F47] text-white text-sm tracking-wide rounded hover:bg-[#7A6040] transition-colors font-medium"
        >
          Start the Conversation
        </a>
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
