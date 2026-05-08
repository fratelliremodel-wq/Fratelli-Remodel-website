import Image from "next/image";

const services = [
  {
    title: "Full Home Remodels",
    description:
      "Complete interior transformations with consistent quality, thoughtful coordination, and attention to every room — built to last.",
    image: "/images/team-client-finished-room.jpg",
    imageAlt: "Completed full home remodel — Las Vegas",
  },
  {
    title: "Kitchen Remodels",
    description:
      "Your most-used space deserves careful coordination — cabinets, counters, layout, and finish work done with real craftsmanship.",
    image: "/images/portfolio-lisa-kitchen-wide.jpg",
    imageAlt: "Kitchen remodel — Las Vegas",
  },
  {
    title: "Bathroom Remodels",
    description:
      "Waterproofing, plumbing, and tile work done right behind the walls first — because what you can't see matters just as much as what you can.",
    image: "/images/portfolio-lisa-bath-pro.jpg",
    imageAlt: "Bathroom remodel — Las Vegas",
  },
  {
    title: "Flooring",
    description:
      "Hardwood, tile, luxury vinyl — installed with proper substrate prep so your floors perform and look great for years.",
    image: "/images/portfolio-kristen-kitchen2.jpg",
    imageAlt: "Hardwood flooring installation — Las Vegas",
  },
  {
    title: "Framing & Drywall",
    description:
      "Structural framing, repairs, and smooth drywall finishes done right — because walls that perform and look right after paint start well before the first coat.",
    image: "/images/progress-tadgh-framing.jpg",
    imageAlt: "Framing and drywall work — Las Vegas",
  },
  {
    title: "& Everything In Between",
    description:
      "Interior painting, tile installation, trim carpentry, door and window installation, texture work, and more. If it's inside your home, we can handle it.",
    image: "/images/portfolio-mom-kitchen.jpg",
    imageAlt: "Full interior remodel — Las Vegas",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            What We Do
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-5">
            What We Remodel
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            From kitchens and bathrooms to full home transformations — every
            project gets the same attention to detail, clear communication, and
            commitment to doing the work right.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl aspect-[4/3]"
            >
              {/* Background image */}
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay — dark by default, lightens on hover */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-white/70 transition-colors duration-500" />

              {/* Content — centered, moves up together on hover */}
              <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="flex flex-col items-center text-center group-hover:-translate-y-4 transition-transform duration-500 ease-out">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold
                    text-white group-hover:text-[#1A1A1A]
                    transition-colors duration-500">
                    {service.title}
                  </h3>
                  {/* Description: zero height + invisible by default, expands on hover */}
                  <div className="overflow-hidden max-h-0 group-hover:max-h-32
                    mt-0 group-hover:mt-3
                    transition-all duration-500 ease-out">
                    <p className="opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 delay-200
                      text-[#2A2A2A] text-sm leading-relaxed max-w-[210px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
