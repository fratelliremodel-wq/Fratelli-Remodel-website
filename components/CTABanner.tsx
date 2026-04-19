export default function CTABanner() {
  return (
    <section
      className="py-24 md:py-28 relative overflow-hidden"
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

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p className="text-white/50 text-xs tracking-[0.3em] uppercase font-medium mb-5">
          Ready to Begin
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
          Start Your Project With Confidence
        </h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed mb-10">
          If you&apos;re planning a remodel and want a clear, professional
          experience from start to finish, we&apos;d love to connect.
        </p>
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
