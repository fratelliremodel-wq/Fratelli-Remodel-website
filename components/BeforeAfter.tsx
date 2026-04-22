"use client";

import { useState } from "react";
import Image from "next/image";

type Stage = "before" | "progress" | "after";

interface ProjectPhoto {
  src: string | null;
  caption: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
}

interface Project {
  title: string;
  location: string;
  before: ProjectPhoto[];
  progress: ProjectPhoto[];
  after: ProjectPhoto[];
}

const projects: Project[] = [
  {
    title: "Kristen's Kitchen & Bath",
    location: "Las Vegas, NV",
    before: [
      { src: "/images/before-kristen-kitchen.jpg", caption: "Original kitchen — tile countertops, dated oak cabinets" },
      { src: "/images/before-kristen-kitchen2.jpg", caption: "Sink side — original layout and finishes" },
      { src: "/images/before-kristen-bath.jpg", caption: "Original bathroom — chrome fixtures, dated vanity" },
    ],
    progress: [
      { src: "/images/progress-kristen-1.jpg", caption: "Bathroom tile in progress — wall set, spacers in place" },
      { src: "/images/progress-kristen-2.jpg", caption: "Wall opened for new kitchen pass-through — framing and electrical rough-in" },
      { src: "/images/progress-kristen-3.jpg", caption: "Full kitchen gut — flooring stripped to slab, island framing removed" },
    ],
    after: [
      { src: "/images/portfolio-kristen-kitchen.jpg", caption: "Finished kitchen — fluted island, quartzite countertop, dark hardwood" },
      { src: "/images/portfolio-kristen-kitchen-doorway.jpg", caption: "View from entry — farmhouse sink, open to living room" },
      { src: "/images/portfolio-kristen-bath.jpg", caption: "Finished bathroom — navy vanity, quartzite top, patterned floor tile" },
    ],
  },
  {
    title: "Lisa's Full Home Remodel",
    location: "Las Vegas, NV",
    before: [
      { src: "/images/before-lisa-kitchen.jpg", caption: "Kitchen during early demo — original cabinets still in place, flooring removed", objectPosition: "50% 42%" },
      { src: "/images/before-lisa-bath.jpg", caption: "Master bath before — original jacuzzi tub, glass block windows, subfloor exposed" },
      { src: "/images/before-lisa-1.jpg", caption: "Original master shower — dated tile, brass frame, original layout before gut" },
    ],
    progress: [
      { src: "/images/progress-lisa-1.jpg", caption: "Full gut — framing exposed, flooring stripped, mold remediation complete" },
      { src: "/images/progress-lisa-2.jpg", caption: "Master bath tile in progress — large format marble tile being set" },
      { src: "/images/progress-lisa-3.jpg", caption: "Demo day — John and Joe demoing the master bath tub platform" },
    ],
    after: [
      { src: "/images/portfolio-lisa-bath-pro.jpg", caption: "Finished master bath — freestanding soaking tub, gold floor-mount filler" },
      { src: "/images/portfolio-lisa-kitchen-wide.jpg", caption: "Finished kitchen — dual islands, quartz countertops, globe pendants" },
      { src: "/images/after-lisa-1.jpg", caption: "Finished master shower — marble tile, gold fixtures, mosaic floor" },
    ],
  },
];

const stageConfig: { key: Stage; label: string; description: string }[] = [
  {
    key: "before",
    label: "Before",
    description: "Existing conditions and the starting point",
  },
  {
    key: "progress",
    label: "Progress",
    description: "Demo, rough work, waterproofing, framing, and trade work",
  },
  {
    key: "after",
    label: "After",
    description: "The finished result — clean, detailed, and done right",
  },
];

function PhotoPlaceholder({ caption, gradient }: { caption: string; gradient: string }) {
  return (
    <div className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br ${gradient}`}>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-30">
        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-black/50">
        <p className="text-white/70 text-xs leading-snug">{caption}</p>
      </div>
    </div>
  );
}

function PhotoReal({ src, caption, objectPosition = "center", objectFit = "cover" }: { src: string; caption: string; objectPosition?: string; objectFit?: "cover" | "contain" }) {
  return (
    <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#1A1A1A]">
      <Image src={src} alt={caption} fill className={objectFit === "contain" ? "object-contain" : "object-cover"} style={{ objectPosition }} sizes="(max-width: 768px) 100vw, 33vw" />
      <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-black/50">
        <p className="text-white/80 text-xs leading-snug">{caption}</p>
      </div>
    </div>
  );
}

const stageGradients: Record<Stage, string> = {
  before: "from-[#3D2B1F] to-[#5C3D2E]",
  progress: "from-[#2A2420] to-[#3D342A]",
  after: "from-[#1F2D2A] to-[#2A3D38]",
};

export default function BeforeAfter() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeStage, setActiveStage] = useState<Stage>("after");

  const project = projects[activeProject];
  const photos = project[activeStage];

  return (
    <section className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-[#8B6F47] text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Project Stories
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-[#1A1A1A] font-bold leading-tight mb-5">
            Real Projects, Real Work
          </h2>
          <p className="text-[#4A4A4A] text-lg leading-relaxed mb-4">
            We don&apos;t just show finished spaces — we show the process behind
            them.
          </p>
          <p className="text-[#4A4A4A] leading-relaxed">
            Browse the starting conditions, the work behind the walls, and the
            finished result for each project.
          </p>
        </div>

        {/* Project selector */}
        {projects.length > 1 && (
          <div className="flex gap-3 mb-8 flex-wrap">
            {projects.map((p, i) => (
              <button
                key={i}
                onClick={() => { setActiveProject(i); setActiveStage("after"); }}
                className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors ${
                  activeProject === i
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-[#F2EDE6] text-[#4A4A4A] hover:bg-[#E5DDD4]"
                }`}
              >
                {p.title}
              </button>
            ))}
          </div>
        )}

        {/* Stage tabs */}
        <div className="flex gap-1 p-1 bg-[#F2EDE6] rounded-xl mb-8 max-w-lg">
          {stageConfig.map((stage) => (
            <button
              key={stage.key}
              onClick={() => setActiveStage(stage.key)}
              className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium tracking-wide transition-all ${
                activeStage === stage.key
                  ? "bg-white text-[#1A1A1A] shadow-sm"
                  : "text-[#4A4A4A]/60 hover:text-[#4A4A4A]"
              }`}
            >
              {stage.label}
            </button>
          ))}
        </div>

        {/* Stage description */}
        <p className="text-[#4A4A4A]/60 text-sm mb-8 italic">
          {stageConfig.find((s) => s.key === activeStage)?.description}
        </p>

        {/* Photos grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) =>
            photo.src ? (
              <PhotoReal key={i} src={photo.src} caption={photo.caption} objectPosition={photo.objectPosition} objectFit={photo.objectFit} />
            ) : (
              <PhotoPlaceholder
                key={i}
                caption={photo.caption}
                gradient={stageGradients[activeStage]}
              />
            )
          )}
        </div>

        {/* Project info footer */}
        <div className="mt-8 flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#E5DDD4]">
          <div>
            <p className="font-[family-name:var(--font-playfair)] text-lg text-[#1A1A1A] font-semibold">
              {project.title}
            </p>
            <p className="text-[#4A4A4A]/60 text-sm">{project.location}</p>
          </div>
          <div className="flex gap-6 text-sm text-[#4A4A4A]/50">
            <span>{project.before.length} before photo{project.before.length !== 1 ? "s" : ""}</span>
            <span>{project.progress.length} progress photo{project.progress.length !== 1 ? "s" : ""}</span>
            <span>{project.after.length} after photo{project.after.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
