import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { articles } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights | Fratelli Remodel",
  description:
    "Honest takes on the remodeling process — costs, timelines, and what to expect — written for Las Vegas homeowners.",
};

export default function InsightsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Nav />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
        <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-5">
          Fratelli Remodel
        </p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl text-[#1A1A1A] font-bold leading-tight mb-4">
          Insights
        </h1>
        <p className="text-[#9A9A9A] text-xs tracking-widest uppercase font-medium mb-6">
          Las Vegas remodeling contractor&nbsp;&nbsp;·&nbsp;&nbsp;Licensed &amp; insured&nbsp;&nbsp;·&nbsp;&nbsp;5-star rated
        </p>
        <p className="text-[#3A3A3A] text-lg md:text-xl leading-relaxed max-w-xl font-medium">
          What most contractors won&apos;t tell you about remodeling.
        </p>
        <p className="text-[#6A6A6A] text-lg md:text-xl leading-relaxed max-w-xl mt-2">
          Clear, honest insight so you know exactly what you&apos;re walking into.
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-[#E5DDD4]" />
      </div>

      {/* Article List */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col divide-y divide-[#E5DDD4]">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="group py-12 block"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#8B6F47] text-xs tracking-widest uppercase font-medium">
                  {article.date}
                </span>
                <span className="text-[#C4A882] text-xs">·</span>
                <span className="text-[#9A9A9A] text-xs tracking-wide">
                  {article.readTime}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#1A1A1A] font-bold leading-snug mb-4 group-hover:text-[#8B6F47] transition-colors">
                {article.title}
              </h2>
              <p className="text-[#6A6A6A] text-base leading-relaxed mb-6 max-w-xl">
                {article.description}
              </p>
              <span className="text-[#8B6F47] text-sm font-medium tracking-wide group-hover:underline underline-offset-4">
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#E5DDD4] bg-[#F8F5F0]">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Ready to talk?
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#1A1A1A] font-bold mb-5">
            Let&apos;s talk through your project.
          </h2>
          <p className="text-[#6A6A6A] text-lg mb-8 max-w-md mx-auto leading-relaxed">
            No pressure. Just a clear conversation so you understand your
            options and what to expect.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-[#8B6F47] text-white text-sm font-medium tracking-wide rounded hover:bg-[#7A6040] transition-colors"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
