"use client";

import { useState, FormEvent } from "react";

const inputClass =
  "w-full px-4 py-3 border border-[#E5DDD4] rounded-lg text-[#1A1A1A] text-sm placeholder:text-[#B0A898] focus:outline-none focus:border-[#8B6F47] focus:ring-1 focus:ring-[#8B6F47] transition-colors bg-[#FAFAF8]";

const labelClass =
  "block text-xs font-medium text-[#1A1A1A] tracking-wide uppercase mb-1.5";

const helperClass = "text-[#4A4A4A]/55 text-xs mt-1.5 leading-snug";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F2EDE6]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-5">
            Start a Conversation
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed mb-3">
            We focus on thoughtful, high-quality remodels — not small repairs or
            quick fixes. Most of our projects involve kitchens, bathrooms, or
            full home remodels where planning, communication, and craftsmanship
            matter.
          </p>
          <p className="text-[#8B6F47] text-sm font-medium leading-relaxed mb-6">
            We&apos;ll review your project and reach out to see if we&apos;re a good fit to move forward together.
          </p>
          {/* Highlighted note */}
          <div className="flex gap-3 p-4 bg-white border border-[#E5DDD4] rounded-xl">
            <svg
              className="w-4 h-4 text-[#8B6F47] flex-shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              <span className="font-semibold text-[#1A1A1A]">
                We are selective about the projects we take on
              </span>{" "}
              to ensure every client receives the level of attention,
              communication, and quality we&apos;re known for.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-xl p-10 text-center border border-[#E5DDD4]">
                <div className="w-14 h-14 rounded-full bg-[#8B6F47]/10 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-[#8B6F47]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-[#1A1A1A] font-bold mb-3">
                  Message Received
                </h3>
                <p className="text-[#4A4A4A] leading-relaxed">
                  Thank you for reaching out. We&apos;ll be in touch within one
                  business day to set up a time to talk about your project.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-xl p-8 border border-[#E5DDD4] space-y-6"
              >

                {/* Row 1: Name + Phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(702) 555-0100"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className={labelClass}>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </div>

                {/* Divider */}
                <div className="border-t border-[#F2EDE6]" />

                {/* Project Type */}
                <div>
                  <label className={labelClass}>Project Type *</label>
                  <select name="project_type" required className={inputClass}>
                    <option value="">Select a project type</option>
                    <option>Kitchen Remodel</option>
                    <option>Bathroom Remodel</option>
                    <option>Full Home Remodel</option>
                    <option>Multiple Areas</option>
                    <option>Other</option>
                  </select>
                  <p className={helperClass}>
                    We focus on remodeling projects rather than small repairs or
                    handyman work.
                  </p>
                </div>

                {/* Budget */}
                <div>
                  <label className={labelClass}>Approximate Budget *</label>
                  <select name="budget" required className={inputClass}>
                    <option value="">Select a budget range</option>
                    <option>Under $25,000</option>
                    <option>$25,000 – $50,000</option>
                    <option>$50,000 – $75,000</option>
                    <option>$75,000 – $150,000</option>
                    <option>$150,000 – $300,000</option>
                    <option>$300,000+</option>
                  </select>
                  <p className={helperClass}>
                    We typically focus on larger, quality-driven remodels and
                    will help guide you based on your goals.
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-[#F2EDE6]" />

                {/* Funding + Timeline side by side */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Funding Status *</label>
                    <select name="funding" required className={inputClass}>
                      <option value="">Select one</option>
                      <option>Yes, funds are ready</option>
                      <option>In progress</option>
                      <option>Not yet</option>
                    </select>
                    <p className={helperClass}>
                      Helps us understand how to guide next steps.
                    </p>
                  </div>
                  <div>
                    <label className={labelClass}>Desired Start Timeline *</label>
                    <select name="timeline" required className={inputClass}>
                      <option value="">Select one</option>
                      <option>Ready to start now</option>
                      <option>1–2 months</option>
                      <option>3–6 months</option>
                      <option>6+ months</option>
                      <option>Just exploring</option>
                    </select>
                  </div>
                </div>

                {/* Vision Maturity */}
                <div>
                  <label className={labelClass}>
                    How long have you been thinking about this project? *
                  </label>
                  <select name="vision_maturity" required className={inputClass}>
                    <option value="">Select one</option>
                    <option>Just starting to explore ideas</option>
                    <option>A few weeks</option>
                    <option>A few months</option>
                    <option>6+ months</option>
                    <option>This has been a long-term plan</option>
                  </select>
                </div>

                {/* Divider */}
                <div className="border-t border-[#F2EDE6]" />

                {/* Location */}
                <div>
                  <label className={labelClass}>
                    Project Address or Area{" "}
                    <span className="normal-case font-normal text-[#4A4A4A]/50 tracking-normal">
                      (recommended)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Where is your home located?"
                    className={inputClass}
                  />
                </div>

                {/* Description */}
                <div>
                  <label className={labelClass}>Tell Us About Your Project</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Share what you're envisioning — the space, the scope, and what matters most to you..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#8B6F47] text-white text-sm font-medium tracking-wide rounded-lg hover:bg-[#7A6040] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Start the Conversation"}
                </button>

                <p className="text-center text-[#4A4A4A]/50 text-xs">
                  We typically respond within one business day.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-8">

            {/* Contact info */}
            <div>
              <p className="text-[#1A1A1A] text-sm font-semibold tracking-wide uppercase mb-5">
                Contact Us Directly
              </p>
              <div className="space-y-5">
                <a href="tel:7023247949" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#8B6F47]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B6F47]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#8B6F47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] text-sm font-medium group-hover:text-[#8B6F47] transition-colors">
                      (702) 324-7949
                    </p>
                    <p className="text-[#4A4A4A]/60 text-xs mt-0.5">
                      Call or text — we respond promptly
                    </p>
                  </div>
                </a>

                <a href="mailto:fratelliremodel@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-[#8B6F47]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B6F47]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#8B6F47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] text-sm font-medium group-hover:text-[#8B6F47] transition-colors">
                      fratelliremodel@gmail.com
                    </p>
                    <p className="text-[#4A4A4A]/60 text-xs mt-0.5">
                      Email us anytime
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/fratelliremodellv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#8B6F47]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B6F47]/20 transition-colors">
                    <svg className="w-5 h-5 text-[#8B6F47]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] text-sm font-medium group-hover:text-[#8B6F47] transition-colors">
                      @fratelliremodellv
                    </p>
                    <p className="text-[#4A4A4A]/60 text-xs mt-0.5">
                      See our latest work on Instagram
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#8B6F47]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[#8B6F47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] text-sm font-medium">
                      Las Vegas, Nevada
                    </p>
                    <p className="text-[#4A4A4A]/60 text-xs mt-0.5">
                      Serving the Greater Las Vegas Valley
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decision-maker note */}
            <div className="p-5 bg-white rounded-xl border border-[#E5DDD4]">
              <p className="text-[#1A1A1A] text-sm font-semibold mb-2">
                A better process starts early.
              </p>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                We&apos;ve found the best projects start with clear alignment. If
                you&apos;re planning with a partner or spouse, we strongly
                recommend having all decision-makers involved from the first
                conversation.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
