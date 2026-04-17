import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Kitchen Remodel Las Vegas | Fratelli Remodel",
  description:
    "Looking for a kitchen remodel in Las Vegas? Fratelli Remodel is a licensed and insured Las Vegas remodeling contractor delivering quality craftsmanship and clear communication from start to finish.",
};

export default function KitchenRemodel() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section
        className="min-h-[60vh] flex items-center justify-center pt-20"
        style={{
          background: "linear-gradient(135deg, #18130E 0%, #221A10 60%, #18130E 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center py-24">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-5">
            Fratelli Remodel · Las Vegas
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Kitchen Remodel Las Vegas
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Your kitchen is the most-used space in your home. We help Las Vegas
            homeowners transform it with quality craftsmanship, thoughtful
            planning, and clear communication — from cabinet layout to final
            hardware.
          </p>
          <a
            href="/#contact"
            className="inline-block px-8 py-4 bg-[#8B6F47] text-white text-sm font-medium tracking-wide rounded hover:bg-[#7A6040] transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-10">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1A1A1A] font-bold mb-4">
                What a Las Vegas Kitchen Remodel Actually Involves
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                A kitchen remodel is one of the most complex projects in a home.
                It involves plumbing, electrical, cabinetry, countertops,
                flooring, tile, and appliances — all coordinated to work
                together. Fratelli Remodel manages every part of that process
                with professional planning and hands-on communication.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1A1A1A] font-bold mb-4">
                Why Communication Makes the Difference
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                Kitchen remodels are disruptive. You&apos;re without a fully
                functional kitchen for weeks. What makes it manageable is
                knowing exactly what&apos;s happening, when, and what to expect
                next. We keep you informed throughout — not just at the
                beginning and end.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1A1A1A] font-bold mb-4">
                Licensed &amp; Insured Las Vegas Remodeling Contractor
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                Fratelli Remodel LLC is a licensed general contractor in Nevada,
                fully insured, and based in Las Vegas. Every kitchen remodel we
                complete is done to code, with permits where required, and with
                the craftsmanship and accountability you should expect from a
                professional contractor.
              </p>
            </div>
          </div>

          <div className="mt-14 p-8 bg-[#F2EDE6] rounded-xl border border-[#E5DDD4]">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-bold mb-3">
              Ready to Start Your Kitchen Remodel?
            </h3>
            <p className="text-[#4A4A4A] mb-6 leading-relaxed">
              Tell us about your project. We&apos;ll reach out to schedule a
              brief conversation and see if we&apos;re the right fit.
            </p>
            <a
              href="/#contact"
              className="inline-block px-7 py-3.5 bg-[#8B6F47] text-white text-sm font-medium tracking-wide rounded hover:bg-[#7A6040] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
