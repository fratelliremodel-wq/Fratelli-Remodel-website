import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bathroom Remodel Las Vegas | Fratelli Remodel",
  description:
    "Bathroom remodel in Las Vegas done right. Fratelli Remodel is a licensed Las Vegas remodeling contractor specializing in quality waterproofing, tile, and craftsmanship that holds up for years.",
};

export default function BathroomRemodel() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section
        className="min-h-[60vh] flex items-center justify-center pt-20"
        style={{
          background: "linear-gradient(135deg, #18130E 0%, #1A1E20 60%, #18130E 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center py-24">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-5">
            Fratelli Remodel · Las Vegas
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Bathroom Remodel Las Vegas
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            A bathroom remodel done right starts behind the walls — with proper
            waterproofing, clean plumbing work, and tile that&apos;s set to
            last. Fratelli Remodel handles every detail so you don&apos;t have
            to worry about what you can&apos;t see.
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
                What We Focus on in Every Bathroom Remodel
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                Bathrooms are wet environments. The work that prevents water
                damage — waterproof membranes, proper slope, quality setting
                materials — is just as important as the tile pattern and fixture
                selection. We take both equally seriously, which is why our
                bathroom remodels hold up long after the project is done.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1A1A1A] font-bold mb-4">
                Older Homes in Las Vegas
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                Many Las Vegas bathroom remodels involve older homes where the
                original waterproofing was minimal or has failed entirely.
                Fratelli Remodel is experienced with what&apos;s found behind
                the walls of older Las Vegas homes — and we handle it calmly,
                with clear communication about what we found and what
                it means.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1A1A1A] font-bold mb-4">
                Licensed &amp; Insured Las Vegas Remodeling Contractor
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                Fratelli Remodel LLC is a licensed general contractor in Nevada,
                fully insured, and based in Las Vegas. Every bathroom remodel is
                completed professionally, with the craftsmanship and
                accountability you deserve.
              </p>
            </div>
          </div>

          <div className="mt-14 p-8 bg-[#F2EDE6] rounded-xl border border-[#E5DDD4]">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-bold mb-3">
              Ready to Start Your Bathroom Remodel?
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
