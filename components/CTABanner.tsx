export default function CTABanner() {
  return (
    <section
      className="py-32 md:py-40 relative overflow-hidden"
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

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold leading-tight mb-10">
          Start Your Project With Confidence
        </h2>
        <a
          href="#contact"
          className="inline-block px-10 py-4 bg-white text-[#8B6F47] text-sm font-semibold tracking-wide rounded hover:bg-[#F2EDE6] transition-colors"
        >
          Start the Conversation
        </a>
      </div>
    </section>
  );
}
