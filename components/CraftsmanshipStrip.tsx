import Image from "next/image";

const moments = [
  {
    src: "/images/progress-plumbing-rough-in.jpg",
    caption: "Plumbing rough-in — done right before anything closes up.",
    alt: "Plumbing rough-in during remodel",
  },
  {
    src: "/images/portfolio-misc-bath-handle-detail.jpg",
    caption: "Hardware detail — the small decisions that define the finish.",
    alt: "Brushed hardware detail on cabinetry",
  },
  {
    src: "/images/portfolio-lisa-kitchen-detail.jpg",
    caption: "Cabinet and counter detail — craftsmanship in the edges.",
    alt: "Kitchen cabinet and countertop edge detail",
  },
];

export default function CraftsmanshipStrip() {
  return (
    <section className="bg-[#1A1A1A] py-0">
      <div className="grid grid-cols-1 sm:grid-cols-3">
        {moments.map((m, i) => (
          <div key={i} className="relative aspect-[4/3] group overflow-hidden">
            <Image
              src={m.src}
              alt={m.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            {/* Subtle bottom fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-0 right-0 px-5 text-white/70 text-xs leading-snug text-center">
              {m.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
