"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface SliderProps {
  beforeSrc: string | null;
  afterSrc: string | null;
  label: string;
  sublabel?: string;
}

function ComparisonSlider({ beforeSrc, afterSrc, label, sublabel }: SliderProps) {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReady(true);
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setPosition(pct);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(true);
  };
  const handleMouseUp = useCallback(() => setDragging(false), []);
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging) updatePosition(e.clientX);
    },
    [dragging, updatePosition]
  );
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const isPlaceholder = !beforeSrc || !afterSrc;

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none shadow-md"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* BEFORE layer (base) */}
        <div className="absolute inset-0">
          {beforeSrc ? (
            <Image
              src={beforeSrc}
              alt={`Before — ${label}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{
                background:
                  "linear-gradient(135deg, #2A2018 0%, #3D2E1A 50%, #2A2018 100%)",
              }}
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
              <p className="text-white/30 text-xs tracking-widest uppercase">
                Before Photo
              </p>
            </div>
          )}
          {/* Before label */}
          <div className="absolute bottom-4 left-4 px-2.5 py-1 bg-black/55 backdrop-blur-sm rounded text-white text-[10px] font-semibold tracking-[0.15em] uppercase">
            Before
          </div>
        </div>

        {/* AFTER layer (clipped to slider position) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: ready
              ? `inset(0 ${100 - position}% 0 0)`
              : "inset(0 50% 0 0)",
            transition: dragging ? "none" : "clip-path 0.05s ease",
          }}
        >
          {afterSrc ? (
            <Image
              src={afterSrc}
              alt={`After — ${label}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{
                background:
                  "linear-gradient(135deg, #F2EDE6 0%, #E8DDD0 50%, #F2EDE6 100%)",
              }}
            >
              <svg
                className="w-8 h-8 text-[#8B6F47]/30"
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
              <p className="text-[#8B6F47]/50 text-xs tracking-widest uppercase">
                After Photo
              </p>
            </div>
          )}
          {/* After label */}
          <div className="absolute bottom-4 left-4 px-2.5 py-1 bg-[#8B6F47]/80 backdrop-blur-sm rounded text-white text-[10px] font-semibold tracking-[0.15em] uppercase">
            After
          </div>
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.4)]"
          style={{ left: `${position}%` }}
        />

        {/* Drag handle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center cursor-col-resize touch-none z-10"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={(e) => {
            e.preventDefault();
            updatePosition(e.touches[0].clientX);
          }}
        >
          <svg
            className="w-5 h-5 text-[#8B6F47]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l-3 3 3 3M16 9l3 3-3 3"
            />
          </svg>
        </div>

        {/* Hint (fades after first interaction) */}
        {isPlaceholder && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-black/40 backdrop-blur-sm rounded-full text-white/70 text-[10px] tracking-widest uppercase whitespace-nowrap pointer-events-none">
            Drag to compare
          </div>
        )}
      </div>

      {/* Label */}
      <div className="mt-4 px-1">
        <p className="font-[family-name:var(--font-playfair)] text-lg text-[#1A1A1A] font-semibold">
          {label}
        </p>
        {sublabel && (
          <p className="text-[#4A4A4A] text-sm mt-0.5">{sublabel}</p>
        )}
      </div>
    </div>
  );
}

// ─── Transformation data ──────────────────────────────────────────────────────
// To add real photos:
//   1. Drop image files into /public/images/
//   2. Replace null with the path, e.g. "/images/kitchen-before.jpg"
// ─────────────────────────────────────────────────────────────────────────────
const transformations: SliderProps[] = [
  {
    label: "Kitchen Remodel",
    sublabel: "Las Vegas, NV",
    beforeSrc: null,
    afterSrc: null,
  },
  {
    label: "Bathroom Remodel",
    sublabel: "Las Vegas, NV",
    beforeSrc: null,
    afterSrc: null,
  },
  {
    label: "Full Home Remodel",
    sublabel: "Las Vegas, NV",
    beforeSrc: null,
    afterSrc: null,
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Transformations
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-5">
            The Difference Is in the Details
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed">
            Drag the slider to see the before and after on each project. These
            are real Las Vegas homes — transformed from the inside out.
          </p>
        </div>

        {/* Sliders grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((t, i) => (
            <ComparisonSlider key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
