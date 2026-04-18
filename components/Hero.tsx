import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background photo */}
      <Image
        src="/images/portfolio-lisa-kitchen-wide.jpg"
        alt="Luxury kitchen remodel by Fratelli Remodel — Las Vegas"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-32">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12">
          {["Licensed", "Insured", "Las Vegas, NV"].map((badge, i) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-[#C4A882] text-xs tracking-[0.22em] uppercase font-medium"
            >
              {i > 0 && (
                <span className="hidden sm:block w-px h-3 bg-[#8B6F47]/50 mr-2" />
              )}
              <svg
                className="w-3 h-3 text-[#8B6F47]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {badge}
            </span>
          ))}
        </div>

        {/* Main headline */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl text-white font-bold leading-[1.1] mb-6 tracking-tight">
          Remodeling Done Right
          <span className="block text-[#C4A882] mt-2">in Las Vegas.</span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-12 bg-[#8B6F47]/50" />
          <span className="text-[#C4A882] text-xs tracking-[0.3em] uppercase">
            We Listen. We Earn Trust. We Remodel Right.
          </span>
          <div className="h-px w-12 bg-[#8B6F47]/50" />
        </div>

        {/* Subheadline */}
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-5">
          Licensed. Insured. Trusted. We help homeowners remodel with confidence
          through clear communication, thoughtful planning, and quality
          craftsmanship.
        </p>

        {/* Supporting line */}
        <p className="text-white/45 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12 italic">
          Most homeowners don&apos;t just worry about how their remodel will
          look — they worry about the experience. We focus on both.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#8B6F47] text-white text-sm tracking-wide rounded hover:bg-[#7A6040] transition-colors font-medium"
          >
            Schedule a Consultation
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm tracking-wide rounded hover:border-white/60 hover:bg-white/8 transition-all"
          >
            See Our Work
          </a>
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
