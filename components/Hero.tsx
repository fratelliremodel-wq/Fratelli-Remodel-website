export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #18130E 0%, #221A10 40%, #1C1510 70%, #18130E 100%)",
      }}
    >
      {/* Subtle cross-hatch texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Warm radial glow in center */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #5C3D1E 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24 pb-32">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-12">
          {["Licensed", "Insured", "Las Vegas, NV"].map((badge, i) => (
            <span
              key={badge}
              className="flex items-center gap-2 text-[#B89A6A] text-xs tracking-[0.22em] uppercase font-medium"
            >
              {i > 0 && (
                <span className="hidden sm:block w-px h-3 bg-[#8B6F47]/40 mr-2" />
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
          <span className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase">
            We Listen. We Earn Trust. We Remodel Right.
          </span>
          <div className="h-px w-12 bg-[#8B6F47]/50" />
        </div>

        {/* Subheadline */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-5">
          Licensed. Insured. Trusted. We help homeowners remodel with confidence
          through clear communication, thoughtful planning, and quality
          craftsmanship.
        </p>

        {/* Supporting line */}
        <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12 italic">
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
            className="w-full sm:w-auto px-8 py-4 border border-white/25 text-white text-sm tracking-wide rounded hover:border-white/50 hover:bg-white/5 transition-all"
          >
            See Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
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
