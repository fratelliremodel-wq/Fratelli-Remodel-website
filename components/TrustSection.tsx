const trustPoints = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.458 8.81a11.951 11.951 0 000 6.38A11.955 11.955 0 013.599 18a11.96 11.96 0 011.598 3.006 11.959 11.959 0 017.803 0 11.958 11.958 0 015.8-4.81c.63-2.137.63-4.243 0-6.38a11.954 11.954 0 00-5.8-4.81A11.959 11.959 0 0112 2.714z" />
      </svg>
    ),
    title: "Licensed & Insured",
    detail: "Nevada Contractor License #0091612",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Las Vegas-Based",
    detail: "Serving the Greater Las Vegas Valley",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "Kitchens, Bathrooms & Full Home Remodels",
    detail: "Experienced across all interior trades",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Quality Over Shortcuts",
    detail: "Every project gets the same standard of care",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Why It Matters
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold leading-tight mb-6">
              Built on Trust
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-4">
              Remodeling is a big decision. You&apos;re inviting people into your
              home, trusting them with your space, and committing real money to
              the outcome. You should feel confident in who you hire.
            </p>
            <p className="text-white/60 leading-relaxed">
              We&apos;re licensed, insured, and committed to doing things the
              right way — from the first conversation to the final walkthrough.
            </p>
          </div>

          {/* Right: trust points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPoints.map((point, i) => (
              <div
                key={i}
                className="p-5 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="text-[#8B6F47] mb-3">{point.icon}</div>
                <p className="text-white text-sm font-semibold mb-1">
                  {point.title}
                </p>
                <p className="text-white/40 text-xs leading-relaxed">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
