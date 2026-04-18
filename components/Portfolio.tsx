import Image from "next/image";

const projects = [
  {
    label: "Master Bath Remodel",
    sub: "Freestanding tub · Gold fixtures",
    src: "/images/portfolio-lisa-bath-pro.jpg",
    tall: true,
  },
  {
    label: "Kitchen Remodel",
    sub: "Dual islands · Quartz countertops",
    src: "/images/portfolio-lisa-kitchen-wide.jpg",
  },
  {
    label: "Kitchen Remodel",
    sub: "Fluted island · Dark hardwood",
    src: "/images/portfolio-kristen-kitchen.jpg",
  },
  {
    label: "Bathroom Remodel",
    sub: "Patterned floor tile · Globe lights",
    src: "/images/portfolio-kristen-bath.jpg",
  },
  {
    label: "Master Bath Remodel",
    sub: "Freestanding tub · Travertine accent",
    src: "/images/portfolio-jason-bath-tub.jpg",
    tall: true,
  },
  {
    label: "Master Bath Remodel",
    sub: "All-marble · Frameless glass",
    src: "/images/portfolio-john-bath3.jpg",
  },
  {
    label: "Kitchen Remodel",
    sub: "Sage island · White quartz · Matte black",
    src: "/images/portfolio-bob-kitchen2.jpg",
  },
  {
    label: "Kitchen Remodel",
    sub: "Two-tone cabinets · 3D tile backsplash",
    src: "/images/portfolio-joe-kitchen.jpg",
    tall: true,
  },
  {
    label: "Bathroom Remodel",
    sub: "Frameless shower · Brushed gold hardware",
    src: "/images/portfolio-misc-bath-shower.jpg",
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
            A selection of completed projects — kitchens, bathrooms, and full
            home remodels across Las Vegas.
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
              <Image
                src={project.src}
                alt={project.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
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
