"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-sm shadow-sm border-b border-[#E5DDD4]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className={`font-[family-name:var(--font-playfair)] text-xl font-bold tracking-widest transition-colors ${
              scrolled ? "text-[#1A1A1A]" : "text-white"
            }`}
          >
            FRATELLI
          </span>
          <span
            className={`text-[9px] tracking-[0.35em] uppercase font-medium transition-colors ${
              scrolled ? "text-[#8B6F47]" : "text-[#C4A882]"
            }`}
          >
            Remodel
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors hover:text-[#8B6F47] ${
                scrolled ? "text-[#4A4A4A]" : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 px-5 py-2.5 bg-[#8B6F47] text-white text-sm tracking-wide rounded hover:bg-[#7A6040] transition-colors"
          >
            Get a Free Estimate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-1 transition-colors ${
            scrolled ? "text-[#1A1A1A]" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5DDD4] px-6 py-6 shadow-lg">
          <div className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-[#4A4A4A] text-sm tracking-wide hover:text-[#8B6F47] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 px-5 py-3 bg-[#8B6F47] text-white text-sm tracking-wide rounded text-center hover:bg-[#7A6040] transition-colors"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
