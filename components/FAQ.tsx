"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Are you licensed and insured?",
    a: "Yes. Fratelli Remodel LLC is a licensed general contractor in the State of Nevada and is fully insured. We're happy to provide documentation before any work begins.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve the Greater Las Vegas Valley, including Las Vegas, Henderson, Summerlin, North Las Vegas, and surrounding communities.",
  },
  {
    q: "What types of remodels do you specialize in?",
    a: "We specialize in full home remodels, kitchen remodels, bathroom remodels, flooring, drywall, interior painting, and tile installation. We're especially experienced with older Las Vegas homes.",
  },
  {
    q: "Do you work on older homes?",
    a: "Yes — and we're good at it. Older homes often come with surprises once walls are opened: asbestos concerns, galvanized plumbing, outdated electrical, unexpected framing. We've seen it all and handle it calmly, with clear communication throughout.",
  },
  {
    q: "How do I know if we're a good fit?",
    a: "We're the right fit if you value quality, clear communication, and a professional process over finding the lowest bid. If you want a contractor who listens, explains things honestly, and does the work right — we should talk.",
  },
  {
    q: "What does your process look like?",
    a: "We start with a conversation to understand your project and goals, then do a walkthrough to assess the space. From there, we provide a clear written proposal, align on selections and schedule, and execute with consistent communication through completion.",
  },
  {
    q: "Do both homeowners need to be present for meetings?",
    a: "We strongly prefer it, yes. When all decision-makers are part of the conversation from the beginning, it keeps everyone aligned, prevents misunderstandings, and makes the whole process smoother. We'll ask for this at the start.",
  },
  {
    q: "How do you handle surprises or hidden conditions behind the walls?",
    a: "We treat the unexpected as a normal part of experienced remodeling. When something comes up, we stop, explain what we found, walk you through the options, and help you make an informed decision. No drama, no disappearing — just clear communication and practical solutions.",
  },
  {
    q: "How do I get started?",
    a: "Reach out by phone at (702) 324-7949 or fill out the form below. Tell us a little about your project and we'll set up an initial conversation to see if it's a good fit.",
  },
  {
    q: "What should I expect during the planning process?",
    a: "Expect clarity. We'll walk you through what's involved, help you think through decisions and materials, set realistic expectations on timeline and cost, and make sure you feel confident before any work begins.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            FAQ
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight">
            Common Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[#E5DDD4]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                className="w-full text-left py-5 flex items-start justify-between gap-4 group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-[#1A1A1A] text-base font-medium leading-snug group-hover:text-[#8B6F47] transition-colors pr-2">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 mt-0.5">
                  {openIndex === i ? (
                    <svg
                      className="w-5 h-5 text-[#8B6F47]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-[#8B6F47]/50 group-hover:text-[#8B6F47] transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </span>
              </button>

              {openIndex === i && (
                <div className="pb-6 pr-10">
                  <p className="text-[#4A4A4A] text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
