import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EstimateChat from "@/components/EstimateChat";

export const metadata: Metadata = {
  title: "Get a Free Estimate | Fratelli Remodel — Las Vegas",
  description:
    "Answer a few questions and share some photos. Fratelli AI will walk you through the process and give you a rough cost range before you ever pick up the phone.",
  openGraph: {
    title: "Get a Free Estimate | Fratelli Remodel",
    description:
      "Answer a few questions and share some photos. Get a rough estimate range before you call.",
  },
};

export default function EstimatePage() {
  return (
    <main className="bg-[#FAFAF8] min-h-screen">
      <Nav />

      {/* Page header */}
      <section className="pt-36 pb-10 px-6 max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Fratelli Remodel · Las Vegas
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-5">
            Get a Rough Estimate Before You Call
          </h1>
          <p className="text-[#4A4A4A] text-lg leading-relaxed max-w-xl mx-auto mb-6">
            Answer a few questions and share some photos. John&apos;s AI will
            walk you through the process — no commitment, no pressure.
          </p>

          {/* Sticky contact line */}
          <div className="inline-flex items-center gap-3 bg-white border border-[#E5DDD4] rounded-full px-5 py-2.5 text-sm">
            <span className="text-[#9A9A9A]">Prefer to talk directly?</span>
            <a
              href="tel:7023247949"
              className="text-[#8B6F47] font-semibold hover:underline"
            >
              (702) 324-7949
            </a>
            <span className="text-[#C4A882]">·</span>
            <span className="text-[#9A9A9A] text-xs">Text is best</span>
          </div>
        </div>
      </section>

      {/* Chat window */}
      <section className="max-w-2xl mx-auto px-6 pb-20">
        <div className="bg-white border border-[#E5DDD4] rounded-2xl shadow-sm overflow-hidden min-h-[600px] flex flex-col">
          <EstimateChat />
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[#9A9A9A] text-xs mt-6 leading-relaxed max-w-md mx-auto">
          Estimates provided are rough ranges based on typical Las Vegas
          projects. Actual costs vary by scope, materials, and site conditions.
          John will give you a precise quote after seeing your space in person.
        </p>
      </section>

      {/* Bottom strip */}
      <section className="border-t border-[#E5DDD4] bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-xl text-[#1A1A1A] font-bold mb-1">
              Ready to talk to a real person?
            </p>
            <p className="text-[#6A6A6A] text-sm">
              John reviews every project personally. Call or text anytime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:7023247949"
              className="inline-block px-6 py-3 bg-[#8B6F47] text-white text-sm font-medium tracking-wide rounded hover:bg-[#7A6040] transition-colors text-center"
            >
              Call (702) 324-7949
            </a>
            <Link
              href="/#contact"
              className="inline-block px-6 py-3 border border-[#C4A882] text-[#8B6F47] text-sm font-medium tracking-wide rounded hover:bg-[#F0EAE2] transition-colors text-center"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
