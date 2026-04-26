import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Full Home Remodel Las Vegas | Fratelli Remodel",
  description:
    "Full home remodel in Las Vegas by Fratelli Remodel — a licensed Las Vegas general contractor. Complete interior transformations with consistent quality, clear communication, and craftsmanship throughout.",
};

export default function FullHomeRemodel() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section
        className="min-h-[60vh] flex items-center justify-center pt-20"
        style={{
          background: "linear-gradient(135deg, #18130E 0%, #1E1A14 60%, #18130E 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center py-24">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-5">
            Fratelli Remodel · Las Vegas
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-white font-bold leading-tight mb-6">
            Full Home Remodel Las Vegas
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            A full home remodel is the most complex — and most rewarding —
            project a homeowner can take on. Fratelli Remodel manages the whole
            process: consistent quality across every room, one point of contact,
            and clear communication from the first walkthrough to the final
            detail.
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
                Why Full Home Remodels Require a Different Level of Planning
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                When you&apos;re remodeling an entire home, every decision
                affects the next one. Flooring has to coordinate across rooms.
                Finishes need to be consistent. Scheduling has to account for
                trade sequencing. Fratelli Remodel approaches full home remodels
                with the planning and communication required to keep everything
                aligned from start to finish.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1A1A1A] font-bold mb-4">
                Especially Strong in Older Las Vegas Homes
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                Older Las Vegas homes — including homes from the 1950s and later
                decades — often reveal surprises when walls are opened: outdated
                electrical, galvanized plumbing, drainage issues, or unexpected
                framing. Fratelli Remodel is experienced with these conditions
                and handles them without drama, with clear communication and
                practical solutions at every step.
              </p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl text-[#1A1A1A] font-bold mb-4">
                Licensed &amp; Insured Las Vegas General Contractor
              </h2>
              <p className="text-[#4A4A4A] leading-relaxed">
                Fratelli Remodel LLC is a licensed general contractor in Nevada,
                fully insured, and based in Las Vegas. Full home remodels
                require a contractor you can trust for the duration — and
                we build that trust one conversation and one project at a time.
              </p>
            </div>
          </div>

          <div className="mt-14 p-8 bg-[#F2EDE6] rounded-xl border border-[#E5DDD4]">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-bold mb-3">
              Ready to Talk About Your Full Home Remodel?
            </h3>
            <p className="text-[#4A4A4A] mb-6 leading-relaxed">
              Tell us about your home and your goals. We&apos;ll reach out to
              schedule a walkthrough and see if we&apos;re the right fit.
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
