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
                  <p className="text-white/55 text-xs mt-0.5">Fratelli Remodel LLC · Las Vegas, NV</p>
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
              Built on Craftsmanship.<br />Designed for a Better Experience.
            </h2>

            <div className="space-y-5 text-[#4A4A4A] leading-relaxed mb-8">
              <p>
                For most homeowners, remodeling isn&apos;t just about how the finished space will look — it&apos;s about how the entire process will feel.
              </p>
              <div className="space-y-2 pl-4 border-l-2 border-[#8B6F47]/30">
                <p>Will it be organized?</p>
                <p>Will communication be clear?</p>
                <p>Will the work actually be done right?</p>
              </div>
              <p>At Fratelli Remodel, that&apos;s exactly what we focus on.</p>
            </div>

            {/* Story teaser */}
            <div className="mb-8 pb-8 border-b border-[#E5DDD4]">
              <p className="text-[#1A1A1A] text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                Our Story
              </p>
              <p className="text-[#4A4A4A] leading-relaxed">
                Fratelli Remodel was built through experience, but more importantly, through a shared belief that homeowners deserve a better remodeling experience.
              </p>
            </div>

            {/* Expand button */}
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-[#8B6F47] text-[#8B6F47] text-sm font-medium tracking-wide rounded hover:bg-[#8B6F47] hover:text-white transition-all duration-200"
            >
              {expanded ? "Show Less" : "Read Our Story"}
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
              <div className="space-y-5 text-[#4A4A4A] leading-relaxed mb-14">
                <p>
                  John Juadines was introduced to construction early, working alongside his grandfather and uncle in his early twenties. That foundation instilled a respect for craftsmanship and doing things the right way from the start.
                </p>
                <p>
                  His path then took a different direction. After earning a degree in biology and working as an orthodontic assistant, John developed a high level of attention to detail — the kind that requires precision, patience, and care in every small decision.
                </p>
                <p>
                  Later, as a CrossFit gym owner, he spent years working closely with people — listening, guiding, and helping them through challenges. That experience shaped how he communicates today: with clarity, empathy, and a genuine focus on what matters most to the client.
                </p>
                <p>
                  When the pandemic hit, John returned to hands-on construction through his business, Farmhouse Handyman. What started as a way to support his family quickly reignited a deeper passion for building.
                </p>
                <p>
                  But more importantly, it revealed something else — that many homeowners weren&apos;t just frustrated with the results of their remodel, but with the process itself.
                </p>
                <div className="space-y-2 pl-4 border-l-2 border-[#8B6F47]/30 text-[#4A4A4A]">
                  <p>Lack of communication.</p>
                  <p>Unclear expectations.</p>
                  <p>Work that didn&apos;t reflect the level of care it should have.</p>
                </div>
                <p>
                  That&apos;s where the vision for Fratelli Remodel began to take shape.
                </p>
              </div>

              {/* Joe's story */}
              <div className="mb-14">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-semibold mb-5">
                  Experience That Shows in the Work
                </h3>
                <div className="space-y-5 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Joe brings a lifetime of experience rooted in construction and remodeling.
                  </p>
                  <p>
                    Raised in the Midwest, he learned the trade directly from his father, with knowledge passed down through generations. His experience spans a wide range of homes — including older properties where attention to detail and problem-solving matter most.
                  </p>
                  <p>
                    He approaches every project with a deep respect for the craft.
                  </p>
                  <p className="text-[#1A1A1A] font-medium">
                    Not just getting the job done — but doing it right.
                  </p>
                </div>
              </div>

              {/* How they met */}
              <div className="mb-14">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-semibold mb-5">
                  Where It Came Together
                </h3>
                <div className="space-y-5 text-[#4A4A4A] leading-relaxed">
                  <p>
                    During that same time, Joe remodeled John&apos;s master bathroom.
                  </p>
                  <p>
                    What started as a project quickly became something more — a shared understanding of how remodeling should be done.
                  </p>
                  <p>
                    They stayed in touch over the next couple of years, and it became clear they approached the work the same way: with a focus on communication, quality, and doing things right from start to finish.
                  </p>
                  <p>
                    Eventually, they teamed up to build Fratelli Remodel.
                  </p>
                </div>
              </div>

              {/* How we work */}
              <div className="mb-14">
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-semibold mb-5">
                  How We Work
                </h3>
                <div className="space-y-5 text-[#4A4A4A] leading-relaxed">
                  <p>
                    Today, Fratelli Remodel is built around a simple idea:
                  </p>
                  <p className="font-[family-name:var(--font-playfair)] text-lg text-[#1A1A1A] italic">
                    Remodeling should feel as good as the finished result looks.
                  </p>
                  <p>That means:</p>
                  <ul className="space-y-3 pl-4">
                    {[
                      "clear, consistent communication",
                      "thoughtful planning before work begins",
                      "attention to detail both behind the walls and in the finishes",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>Because in the end, it&apos;s not just about the final product.</p>
                  <p className="text-[#1A1A1A] font-medium">
                    It&apos;s about trusting the process — and the people doing the work.
                  </p>
                </div>
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
