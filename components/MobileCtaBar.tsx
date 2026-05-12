"use client";

import { useState, useEffect } from "react";

/**
 * Sticky bottom bar — mobile only (hidden on md+).
 * Appears after the user scrolls past the hero (~100vh).
 * Gives mobile visitors a persistent way to reach the contact form
 * without hunting for a nav button.
 */
export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after user scrolls past roughly the hero section
      setVisible(window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-40
        md:hidden
        transition-transform duration-300 ease-out
        ${visible ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="bg-white border-t border-[#E5DDD4] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-5 py-4 flex items-center gap-3">
        {/* Phone — quick tap to call */}
        <a
          href="tel:+17023247949"
          className="flex items-center gap-2 px-4 py-3 border border-[#E5DDD4] rounded text-[#4A4A4A] text-sm font-medium flex-shrink-0 active:bg-[#F2EDE6] transition-colors"
        >
          <svg className="w-4 h-4 text-[#8B6F47]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          Call
        </a>

        {/* Primary CTA — fill the remaining space */}
        <a
          href="#contact"
          className="flex-1 py-3 bg-[#8B6F47] text-white text-sm font-semibold tracking-wide rounded text-center active:bg-[#7A6040] transition-colors"
        >
          Start the Conversation
        </a>
      </div>
    </div>
  );
}
