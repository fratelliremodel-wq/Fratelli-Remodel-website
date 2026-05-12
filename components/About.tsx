"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function About() {
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const expandedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (expandedRef.current) {
        setContentHeight(expandedRef.current.scrollHeight);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Default visible: photo + intro */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Team photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/team-john-joe.jpg"
                alt="John and Joe — Fratelli Remodel"
                fill
                className="object-cover object-[50%_15%]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-black/50 backdrop-blur-sm px-6 py-4 border-t border-white/10">
                  <p className="text-white/90 text-sm font-semibold">John &amp; Joe</p>
                  <p className="text-white/55 text-xs mt-0.5">Founders, Fratelli Remodel · Las Vegas, NV</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#8B6F47]/20 rounded-xl -z-10" />
          </div>

          {/* Default content */}
          <div>
            <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Who We Are
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-8">
              Built on Craftsmanship.<br />Built for a Better Remodeling Experience.
            </h2>

            <div className="space-y-5 text-[#4A4A4A] leading-relaxed mb-8">
              <p>
                For most homeowners, remodeling isn&apos;t just about how the finished space will look — it&apos;s about how the entire process will feel.
              </p>
              <p className="text-[#4A4A4A]/70 italic">
                Because the process matters just as much as the result.
              </p>
            </div>

            {/* Story teaser */}
            <div className="mb-8 pb-8 border-b border-[#E5DDD4]">
              <p className="text-[#1A1A1A] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Our Story
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Fratelli Remodel was built from experience — but more importantly, from a belief that homeowners deserve better.
              </p>
            </div>

            {/* Expand button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#8B6F47] text-[#8B6F47] text-sm font-medium tracking-wide rounded hover:bg-[#8B6F47] hover:text-white transition-all duration-200"
            >
              {expanded ? "Show Less" : "Read the Full Story"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Expandable full story */}
        <div
          style={{
            maxHeight: expanded ? `${contentHeight}px` : "0px",
            overflow: "hidden",
            transition: "max-height 0.65s ease",
          }}
        >
          <div ref={expandedRef}>
            <div className="mt-16 max-w-3xl mx-auto">

              {/* Divider */}
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px flex-1 bg-[#E5DDD4]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B6F47]" />
                <div className="h-px flex-1 bg-[#E5DDD4]" />
              </div>

              {/* John's story */}
              <div className="space-y-6 text-[#4A4A4A] leading-relaxed mb-10">
                <p>
                  John was introduced to construction early, working alongside his grandfather and uncle in his early twenties. That foundation gave him a deep respect for doing things right from the start.
                </p>
                <p>
                  His path then took different directions — a biology degree, work as an orthodontic assistant, then years running a CrossFit gym. Each shaped him: the precision of clinical work, the focus on people and communication from coaching.
                </p>
                <p>
                  When the pandemic hit, he returned to hands-on construction. What started as a way to support his family quickly reignited a deeper passion — and revealed something important about the industry.
                </p>
                <p className="font-medium text-[#2A2A2A]">
                  Homeowners weren&apos;t just frustrated with results. They were frustrated with the process itself.
                </p>
                <div className="space-y-3 pl-4 border-l-2 border-[#8B6F47]/30 text-[#4A4A4A]">
                  <p>Lack of communication.</p>
                  <p>Unclear expectations.</p>
                  <p>Work that didn&apos;t reflect the care it should have.</p>
                </div>
                <p>That&apos;s where the vision for Fratelli Remodel began to take shape.</p>
              </div>

              {/* Photo break — John and Joe at work */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
                <Image
                  src="/images/team-john-joe-hats.jpg"
                  alt="John and Joe on the job — Fratelli Remodel"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-black/50">
                  <p className="text-white/70 text-xs">John and Joe — on the job, Las Vegas, NV</p>
                </div>
              </div>

              {/* Joe's story */}
              <div className="mb-10">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-semibold mb-5">
                  Experience That Shows in the Work
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Joe brings a lifetime of experience rooted in construction. Raised in the Midwest, he learned the trade directly from his father — knowledge passed through generations.
                  </p>
                  <p>
                    His experience spans a wide range of homes, including older properties where problem-solving and attention to hidden details matter most.
                  </p>
                  <p className="text-[#1A1A1A] font-semibold">
                    Not just getting the job done — but doing it right.
                  </p>
                </div>
              </div>

              {/* How they met */}
              <div className="mb-10">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-semibold mb-5">
                  Where It Came Together
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Joe remodeled John&apos;s master bathroom. What started as a project became a shared understanding — they approached the work the same way: communication first, quality throughout, and doing things right from start to finish.
                  </p>
                  <p>
                    Over the next couple of years, it became clear they needed to build something together. Fratelli Remodel was the result.
                  </p>
                </div>
              </div>

              {/* Photo break — progress work */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-10">
                <Image
                  src="/images/progress-tadgh-framing.jpg"
                  alt="Framing and rough-in work — the craftsmanship behind the walls"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute bottom-0 left-0 right-0 px-5 py-3 bg-black/50">
                  <p className="text-white/70 text-xs">Framing and rough-in — the work behind the walls that matters most.</p>
                </div>
              </div>

              {/* Pull quote — How we work */}
              <div className="py-10 mb-10 border-t border-b border-[#E5DDD4]">
                <p className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-[#1A1A1A] italic leading-snug text-center">
                  &ldquo;Remodeling should feel as good as the finished result looks.&rdquo;
                </p>
              </div>

              {/* How we work */}
              <div className="mb-10">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-semibold mb-5">
                  How We Work
                </h3>
                <div className="space-y-4 text-[#4A4A4A] leading-relaxed">
                  <p>That means:</p>
                  <ul className="space-y-3 pl-4">
                    {[
                      "clear, consistent communication",
                      "thoughtful planning before work begins",
                      "attention to detail behind the walls and in the finishes",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Closing pull quote */}
              <div className="py-8 mb-10 text-center">
                <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#8B6F47] italic leading-snug">
                  &ldquo;It&apos;s about trusting the process — and the people doing the work.&rdquo;
                </p>
              </div>

              {/* Close button */}
              <div className="text-center pb-4">
                <button
                  onClick={() => {
                    setExpanded(false);
                    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-[#8B6F47] text-sm font-medium tracking-wide hover:text-[#7A6040] transition-colors border-b border-[#8B6F47]/40 hover:border-[#7A6040] pb-0.5"
                >
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                  Show Less
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
