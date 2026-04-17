const steps = [
  {
    number: "1",
    title: "Reach Out",
    description:
      "Contact us by phone or through the form below. Tell us about your project — we're easy to talk to.",
  },
  {
    number: "2",
    title: "Initial Conversation",
    description:
      "We discuss your project, goals, and scope to make sure we're a strong fit before moving forward.",
  },
  {
    number: "3",
    title: "Walkthrough & Consultation",
    description:
      "We walk the space with you, identify important details, and talk through priorities and considerations.",
  },
  {
    number: "4",
    title: "Clear Proposal",
    description:
      "You receive a detailed, readable proposal so you understand exactly what's included and what to expect.",
  },
  {
    number: "5",
    title: "Planning & Selections",
    description:
      "We finalize materials, schedule, and next steps together — no surprises, no guesswork.",
  },
  {
    number: "6",
    title: "Construction & Completion",
    description:
      "We execute with communication and quality craftsmanship, and deliver a finished project you're proud of.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Our Process
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-5">
            How It Works
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            A remodel done right starts well before the first nail. Here's how
            we take you from first conversation to finished project — with
            clarity at every step.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step number */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#8B6F47] flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">
                    {step.number}
                  </span>
                </div>
                <div className="h-px flex-1 bg-[#E5DDD4]" />
              </div>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-[#1A1A1A] font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-[#4A4A4A] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 p-6 bg-[#F2EDE6] rounded-xl border border-[#E5DDD4]">
          <div className="flex gap-4 items-start">
            <svg
              className="w-5 h-5 text-[#8B6F47] mt-0.5 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <p className="text-[#4A4A4A] text-sm leading-relaxed">
              <span className="text-[#1A1A1A] font-semibold">A note on consultations:</span>{" "}
              We ask that all decision-makers be present for walkthroughs and
              planning conversations. It keeps everyone aligned, avoids confusion,
              and makes the whole process smoother for everyone involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
