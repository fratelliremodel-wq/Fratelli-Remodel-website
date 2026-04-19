import Image from "next/image";

const feedPhotos = [
  {
    src: "/images/before-kristen-kitchen.jpg",
    caption: "Before — dated kitchen, original layout",
    tag: "Before",
  },
  {
    src: "/images/progress-kristen-kitchen-demo.jpg",
    caption: "Demo day — cabinets out, full gut begins",
    tag: "Progress",
  },
  {
    src: "/images/portfolio-kristen-kitchen.jpg",
    caption: "After — fluted island, quartzite countertop, dark hardwood",
    tag: "After",
  },
  {
    src: "/images/progress-tadgh-framing.jpg",
    caption: "Framing, electrical & plumbing — the work behind the walls",
    tag: "Progress",
  },
  {
    src: "/images/portfolio-lisa-bath-pro.jpg",
    caption: "After — freestanding soaking tub, floor-mount gold filler",
    tag: "After",
  },
  {
    src: "/images/progress-plumbing-rough-in.jpg",
    caption: "Waterproof membrane and plumbing rough-in before tile",
    tag: "Progress",
  },
];

const tagColors: Record<string, string> = {
  Before: "bg-[#3D2B1F] text-[#C4A882]",
  Progress: "bg-[#2A2A1A] text-[#C4C482]",
  After: "bg-[#1A2D1F] text-[#82C4A0]",
};

export default function InstagramSection() {
  return (
    <>
      {/* From Our Work grid */}
      <section className="py-24 md:py-32 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
                From Our Work
              </p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-white font-bold leading-tight mb-4">
                Before. During. After.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl">
                Follow along as we document real projects from start to finish —
                demo, framing, finishes, and everything in between.
              </p>
            </div>
            <a
              href="https://www.instagram.com/fratelliremodellv"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 text-sm tracking-wide rounded hover:border-white/50 hover:text-white transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @fratelliremodellv
            </a>
          </div>

          {/* Photo grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {feedPhotos.map((photo, i) => (
              <div key={i} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Tag badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[10px] font-semibold tracking-[0.15em] uppercase px-2 py-1 rounded-full ${tagColors[photo.tag]}`}>
                    {photo.tag}
                  </span>
                </div>
                {/* Caption on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white/90 text-xs leading-snug p-4">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View more CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://www.instagram.com/fratelliremodellv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8B6F47] text-white text-sm font-medium tracking-wide rounded hover:bg-[#7A6040] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              View More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Not quite ready callout */}
      <section className="py-14 bg-[#F2EDE6] border-t border-[#E5DDD4]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-[family-name:var(--font-playfair)] text-xl text-[#1A1A1A] font-semibold mb-3">
            Not quite ready to start your project?
          </p>
          <p className="text-[#4A4A4A] leading-relaxed mb-6">
            Follow along on Instagram to see how we remodel homes the right way
            — from demo to final details. Real projects, real process, no filters.
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
            Follow @fratelliremodellv
          </a>
        </div>
      </section>
    </>
  );
}
