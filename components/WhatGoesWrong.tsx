const problems = [
  {
    problem: "Poor Communication",
    problemDetail:
      "Contractors who don't return calls, go silent mid-project, or leave homeowners guessing about what's happening next.",
    solution: "Clear Communication",
    solutionDetail:
      "We return calls the same day. We explain what's happening before, during, and after each phase. You'll always know what's coming next.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
  {
    problem: "Rushed Timelines",
    problemDetail:
      "Projects that start fast and stall out. Contractors who skip the planning phase and make decisions on the fly — creating confusion, mistakes, and delays.",
    solution: "Thoughtful Planning",
    solutionDetail:
      "We invest time upfront to plan properly. Material selections, scheduling, and scope are aligned before work begins — so construction moves cleanly.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    problem: "Surface-Level Finishes Only",
    problemDetail:
      "Beautiful tile on top of failing waterproofing. Fresh paint over drywall problems. Contractors who make things look good without doing the work behind the walls.",
    solution: "Quality Behind the Walls",
    solutionDetail:
      "The finishes matter. But so does the substrate, the waterproofing, the framing, and the rough work. We take the invisible work just as seriously as what you can see.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
];

export default function WhatGoesWrong() {
  return (
    <section className="py-24 md:py-32 bg-[#F2EDE6]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            An Honest Look
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-5">
            What Most Remodels Get Wrong
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            Most remodeling frustrations come down to the same three things.
            We've built our entire process around getting them right.
          </p>
        </div>

        {/* Problem / Solution grid */}
        <div className="flex flex-col gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-sm"
            >
              {/* Problem side */}
              <div className="bg-white p-8 border border-[#E5DDD4]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#F2EDE6] flex items-center justify-center text-[#4A4A4A]/60">
                    {item.icon}
                  </div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#4A4A4A]/50">
                    Common Problem
                  </p>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1A1A1A] font-semibold mb-3">
                  {item.problem}
                </h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">
                  {item.problemDetail}
                </p>
              </div>

              {/* Solution side */}
              <div className="bg-[#1A1A1A] p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#8B6F47]/20 flex items-center justify-center text-[#8B6F47]">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B6F47]/70">
                    Fratelli&apos;s Approach
                  </p>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white font-semibold mb-3">
                  {item.solution}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  {item.solutionDetail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
