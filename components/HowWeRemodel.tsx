const pillars = [
  {
    number: "01",
    heading: "We Listen.",
    body: "We take time to understand your home, your goals, and what matters most to you. Before any work begins, we want to know how you use the space, what's been frustrating about it, and what a successful project looks like to you.",
    imageLabel: "Consultation & Walkthrough",
    imageCaption: "Meeting on-site to understand the space before planning begins",
    gradient: "from-[#2A2018] to-[#3D2E1A]",
  },
  {
    number: "02",
    heading: "We Earn Trust.",
    body: "Clear communication, professional planning, and a process you can feel confident in. You'll know what's happening, what's coming next, and who to call when you have a question. We return calls. We follow through. Every time.",
    imageLabel: "Planning & Proposal",
    imageCaption: "Clear written proposals so nothing is left to guesswork",
    gradient: "from-[#1F2A2A] to-[#2A3D3D]",
  },
  {
    number: "03",
    heading: "We Build It Right.",
    body: "Attention to detail not just in the finishes, but behind the walls where it matters most. Waterproofing. Framing. Plumbing. The work you'll never see is the work that determines whether everything holds up five years from now.",
    imageLabel: "Construction Progress",
    imageCaption: "The work behind the walls that makes the finished result last",
    gradient: "from-[#252018] to-[#3A3020]",
  },
];

export default function HowWeRemodel() {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Our Approach
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold leading-tight mb-5">
            How We Remodel Right
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            Every project we take on follows the same three commitments — no
            matter the size of the job.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col">
              {/* Image placeholder */}
              <div
                className={`relative aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gradient-to-br ${pillar.gradient} flex flex-col items-center justify-center gap-3`}
              >
                <svg
                  className="w-8 h-8 text-white/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <p className="text-white/30 text-xs tracking-widest uppercase text-center px-4">
                  {pillar.imageLabel}
                </p>
                {/* Caption strip */}
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/40">
                  <p className="text-white/50 text-xs leading-snug text-center">
                    {pillar.imageCaption}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-[family-name:var(--font-playfair)] text-2xl text-[#8B6F47]/40 font-bold">
                    {pillar.number}
                  </span>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-white font-bold">
                    {pillar.heading}
                  </h3>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
