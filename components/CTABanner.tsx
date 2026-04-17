export default function CTABanner() {
  return (
    <section
      className="py-20 md:py-24 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #8B6F47 0%, #7A6040 50%, #6B5235 100%)",
      }}
    >
      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-white/60 text-xs tracking-[0.3em] uppercase font-medium mb-5">
          Ready to get started?
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
          Ready to Remodel Right?
        </h2>
        <p className="text-white/75 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-10">
          Let's have a conversation about your project. No pressure — just a
          real discussion about what you're looking for and whether we're the
          right fit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 bg-white text-[#8B6F47] text-sm font-semibold tracking-wide rounded hover:bg-[#F2EDE6] transition-colors"
          >
            Schedule a Consultation
          </a>
          <a
            href="tel:7023247949"
            className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white text-sm tracking-wide rounded hover:border-white/60 hover:bg-white/5 transition-all"
          >
            Call (702) 324-7949
          </a>
        </div>
      </div>
    </section>
  );
}
