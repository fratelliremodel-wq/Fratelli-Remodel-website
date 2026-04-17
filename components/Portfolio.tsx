const projects = [
  {
    label: "Kitchen Remodel",
    sub: "Full kitchen transformation",
    gradient: "from-[#3D2B1F] to-[#5C3D2E]",
  },
  {
    label: "Bathroom Remodel",
    sub: "Master bath renovation",
    gradient: "from-[#1F2D3D] to-[#2E4055]",
    tall: true,
  },
  {
    label: "Full Home Remodel",
    sub: "Complete interior transformation",
    gradient: "from-[#2B3D1F] to-[#3D5528]",
  },
  {
    label: "Kitchen Remodel",
    sub: "Custom cabinetry & countertops",
    gradient: "from-[#3D3020] to-[#5C4A30]",
    tall: true,
  },
  {
    label: "Tile Installation",
    sub: "Flooring & backsplash",
    gradient: "from-[#2D1F3D] to-[#3F2C55]",
  },
  {
    label: "Bathroom Remodel",
    sub: "Guest bathroom refresh",
    gradient: "from-[#3D2020] to-[#5C3030]",
  },
  {
    label: "Flooring",
    sub: "Hardwood installation",
    gradient: "from-[#2B2D1F] to-[#3F4228]",
    tall: true,
  },
  {
    label: "Interior Painting",
    sub: "Whole-home repaint",
    gradient: "from-[#1F3D3D] to-[#285555]",
  },
  {
    label: "Full Home Remodel",
    sub: "Older home renovation",
    gradient: "from-[#3D2B1F] to-[#4F3A2A]",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#F2EDE6]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
              Our Work
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight">
              Projects That Speak For Themselves
            </h2>
          </div>
          <p className="text-[#4A4A4A] text-sm leading-relaxed max-w-xs sm:text-right">
            Real photos coming soon. Each tile below represents a completed
            project — kitchens, bathrooms, full home remodels, and more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                project.tall ? "row-span-2" : ""
              }`}
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Subtle texture */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Photo placeholder icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition-opacity">
                <svg
                  className="w-10 h-10 text-white"
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
              </div>

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-sm font-semibold">{project.label}</p>
                <p className="text-white/60 text-xs">{project.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-10 text-center">
          <p className="text-[#4A4A4A] text-sm mb-4">
            Follow our work in progress on Instagram
          </p>
          <a
            href="https://www.instagram.com/fratelliremodellv"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#8B6F47] text-sm font-medium tracking-wide hover:text-[#7A6040] transition-colors border-b border-[#8B6F47]/40 hover:border-[#7A6040] pb-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @fratelliremodellv
          </a>
        </div>
      </div>
    </section>
  );
}
