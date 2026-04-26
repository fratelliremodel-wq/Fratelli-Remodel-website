import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { articles, getArticle } from "@/lib/insights";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Fratelli Remodel`,
    description: article.description,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <main className="bg-white min-h-screen">
      <Nav />

      {/* Article Header */}
      <section className="pt-40 pb-12 px-6 max-w-2xl mx-auto">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-[#8B6F47] text-xs tracking-widest uppercase font-medium mb-10 hover:opacity-70 transition-opacity"
        >
          ← Insights
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <span className="text-[#8B6F47] text-xs tracking-widest uppercase font-medium">
            {article.date}
          </span>
          <span className="text-[#C4A882] text-xs">·</span>
          <span className="text-[#9A9A9A] text-xs tracking-wide">
            {article.readTime}
          </span>
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-8">
          {article.title}
        </h1>

        <p className="text-[#4A4A4A] text-xl leading-relaxed border-l-4 border-[#8B6F47] pl-6">
          {article.intro}
        </p>
      </section>

      {/* Divider */}
      <div className="max-w-2xl mx-auto px-6">
        <div className="border-t border-[#E5DDD4] my-4" />
      </div>

      {/* Article Body */}
      <article className="max-w-2xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-12">
          {article.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-bold mb-5">
                  {section.heading}
                </h2>
              )}
              <div className="flex flex-col gap-5">
                {section.paragraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-[#3A3A3A] text-[17px] leading-[1.85] tracking-[0.01em]"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="border-t border-[#E5DDD4] bg-[#F8F5F0] mt-12">
        <div className="max-w-2xl mx-auto px-6 py-20">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Fratelli Remodel · Las Vegas
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl text-[#1A1A1A] font-bold mb-5 leading-snug">
            Have a project in mind?
          </h2>
          <p className="text-[#6A6A6A] text-lg mb-8 leading-relaxed max-w-md">
            We&apos;re happy to have an honest conversation about your project — no
            pressure, no sales pitch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-[#8B6F47] text-white text-sm font-medium tracking-wide rounded hover:bg-[#7A6040] transition-colors text-center"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/insights"
              className="inline-block px-8 py-4 border border-[#C4A882] text-[#8B6F47] text-sm font-medium tracking-wide rounded hover:bg-[#F0EAE2] transition-colors text-center"
            >
              More Insights
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
