"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Subheading } from "../subheading";
import { formatPostDate } from "@/lib/format-post-date";
import { IconArrowUpRight, IconList, IconLayoutGrid } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Post = {
  slug: string;
  publishedAt: string;
  title: string;
  summary?: string;
  image?: string;
};

type CrosswordCell = {
  r: number;
  c: number;
  char: string;
  num?: number;
};

// 1. Purplex AI Search: LANGGRAPH (Across), SEARCH (Down), WEB (Across), RAG (Down), CODE (Across)
const CROSSWORD_P1: { rows: number; cols: number; cells: CrosswordCell[] } = {
  rows: 6,
  cols: 9,
  cells: [
    // RAG (Down at col 3, rows 0..2)
    { r: 0, c: 3, char: "R", num: 4 },
    { r: 1, c: 3, char: "A" },
    // SEARCH (Down at col 1, rows 0..5)
    { r: 0, c: 1, char: "S", num: 2 },
    { r: 1, c: 1, char: "E" },
    { r: 3, c: 1, char: "R" },
    { r: 4, c: 1, char: "C" },
    { r: 5, c: 1, char: "H" },
    // WEB (Across at row 1, cols 0..2)
    { r: 1, c: 0, char: "W", num: 3 },
    { r: 1, c: 2, char: "B" },
    // LANGGRAPH (Across at row 2, cols 0..8)
    { r: 2, c: 0, char: "L", num: 1 },
    { r: 2, c: 1, char: "A" }, // intersects SEARCH
    { r: 2, c: 2, char: "N" },
    { r: 2, c: 3, char: "G" }, // intersects RAG
    { r: 2, c: 4, char: "G" },
    { r: 2, c: 5, char: "R" },
    { r: 2, c: 6, char: "A" },
    { r: 2, c: 7, char: "P" },
    { r: 2, c: 8, char: "H" },
    // CODE (Across at row 4, cols 1..4)
    { r: 4, c: 2, char: "O" },
    { r: 4, c: 3, char: "D" },
    { r: 4, c: 4, char: "E" },
  ],
};

// 2. Picasso Canvas: CANVAS (Across), CRDT (Down), NODE (Down), DOM (Across)
const CROSSWORD_P2: { rows: number; cols: number; cells: CrosswordCell[] } = {
  rows: 5,
  cols: 6,
  cells: [
    // CRDT (Down at col 0, rows 1..4)
    { r: 2, c: 0, char: "R" },
    { r: 3, c: 0, char: "D" },
    { r: 4, c: 0, char: "T" },
    // CANVAS (Across at row 1, cols 0..5)
    { r: 1, c: 0, char: "C", num: 1 }, // intersects CRDT
    { r: 1, c: 1, char: "A" },
    { r: 1, c: 2, char: "N" }, // intersects NODE
    { r: 1, c: 3, char: "V" },
    { r: 1, c: 4, char: "A" },
    { r: 1, c: 5, char: "S" },
    // NODE (Down at col 2, rows 1..4)
    { r: 2, c: 2, char: "O" },
    { r: 3, c: 2, char: "D" }, // intersects DOM
    { r: 4, c: 2, char: "E" },
    // DOM (Across at row 3, cols 2..4)
    { r: 3, c: 3, char: "O" },
    { r: 3, c: 4, char: "M" },
  ],
};

// 3. TheRepertory AI: CLINIC (Across), CARE (Down), AI (Across), ENG (Across)
const CROSSWORD_P3: { rows: number; cols: number; cells: CrosswordCell[] } = {
  rows: 4,
  cols: 6,
  cells: [
    // CLINIC (Across at row 0, cols 0..5)
    { r: 0, c: 0, char: "C", num: 1 }, // intersects CARE
    { r: 0, c: 1, char: "L" },
    { r: 0, c: 2, char: "I" },
    { r: 0, c: 3, char: "N" },
    { r: 0, c: 4, char: "I" },
    { r: 0, c: 5, char: "C" },
    // CARE (Down at col 0, rows 0..3)
    { r: 1, c: 0, char: "A" }, // intersects AI
    { r: 2, c: 0, char: "R" },
    { r: 3, c: 0, char: "E" }, // intersects ENG
    // AI (Across at row 1, cols 0..1)
    { r: 1, c: 1, char: "I" },
    // ENG (Across at row 3, cols 0..2)
    { r: 3, c: 1, char: "N" },
    { r: 3, c: 2, char: "G" },
  ],
};

// 4. Glebe House & Sockets: SOCKET (Across), SCALE (Down), TCP (Down), API (Across)
const CROSSWORD_P4: { rows: number; cols: number; cells: CrosswordCell[] } = {
  rows: 6,
  cols: 6,
  cells: [
    // SCALE (Down at col 0, rows 1..5)
    { r: 2, c: 0, char: "C" },
    { r: 3, c: 0, char: "A" }, // intersects API
    { r: 4, c: 0, char: "L" },
    { r: 5, c: 0, char: "E" },
    // SOCKET (Across at row 1, cols 0..5)
    { r: 1, c: 0, char: "S", num: 1 }, // intersects SCALE
    { r: 1, c: 1, char: "O" },
    { r: 1, c: 2, char: "C" },
    { r: 1, c: 3, char: "K" },
    { r: 1, c: 4, char: "E" },
    { r: 1, c: 5, char: "T", num: 2 }, // intersects TCP
    // TCP (Down at col 5, rows 1..3)
    { r: 2, c: 5, char: "C" },
    { r: 3, c: 5, char: "P" },
    // API (Across at row 3, cols 0..2)
    { r: 3, c: 1, char: "P" },
    { r: 3, c: 2, char: "I" },
  ],
};

// 5. The Holiday Home: TRUST (Across), RUN (Down), TEAM (Down), AIM (Across)
const CROSSWORD_P5: { rows: number; cols: number; cells: CrosswordCell[] } = {
  rows: 4,
  cols: 5,
  cells: [
    // TRUST (Across at row 0, cols 0..4)
    { r: 0, c: 0, char: "T", num: 1 },
    { r: 0, c: 1, char: "R" }, // intersects RUN
    { r: 0, c: 2, char: "U" },
    { r: 0, c: 3, char: "S" },
    { r: 0, c: 4, char: "T", num: 2 }, // intersects TEAM
    // RUN (Down at col 1, rows 0..2)
    { r: 1, c: 1, char: "U" },
    { r: 2, c: 1, char: "N" },
    // TEAM (Down at col 4, rows 0..3)
    { r: 1, c: 4, char: "E" },
    { r: 2, c: 4, char: "A" },
    { r: 3, c: 4, char: "M" }, // intersects AIM
    // AIM (Across at row 3, cols 2..4)
    { r: 3, c: 2, char: "A", num: 3 },
    { r: 3, c: 3, char: "I" },
  ],
};

// 6. Werkhaus Portfolio: CRAFT (Across), REACT (Down), RED (Across), TAG (Across)
const CROSSWORD_P6: { rows: number; cols: number; cells: CrosswordCell[] } = {
  rows: 5,
  cols: 5,
  cells: [
    // REACT (Down at col 2, rows 0..4)
    { r: 0, c: 2, char: "R", num: 2 }, // intersects RED
    { r: 1, c: 2, char: "E" },
    { r: 2, c: 2, char: "A" }, // intersects CRAFT
    { r: 3, c: 2, char: "C" },
    { r: 4, c: 2, char: "T", num: 3 }, // intersects TAG
    // RED (Across at row 0, cols 2..4)
    { r: 0, c: 3, char: "E" },
    { r: 0, c: 4, char: "D" },
    // CRAFT (Across at row 2, cols 0..4)
    { r: 2, c: 0, char: "C", num: 1 },
    { r: 2, c: 1, char: "R" },
    { r: 2, c: 3, char: "F" },
    { r: 2, c: 4, char: "T" },
    // TAG (Across at row 4, cols 2..4)
    { r: 4, c: 3, char: "A" },
    { r: 4, c: 4, char: "G" },
  ],
};

// 7. Nedregate Runtimes: EVENT (Across), V8 (Down), TASK (Down), HEAP (Across)
const CROSSWORD_P7: { rows: number; cols: number; cells: CrosswordCell[] } = {
  rows: 5,
  cols: 6,
  cells: [
    // EVENT (Across at row 1, cols 0..4)
    { r: 1, c: 0, char: "E", num: 1 },
    { r: 1, c: 1, char: "V", num: 2 }, // intersects V8
    { r: 1, c: 2, char: "E" },
    { r: 1, c: 3, char: "N" },
    { r: 1, c: 4, char: "T", num: 3 }, // intersects TASK
    // V8 (Down at col 1, rows 1..2)
    { r: 2, c: 1, char: "8" },
    // TASK (Down at col 4, rows 1..4)
    { r: 2, c: 4, char: "A" }, // intersects HEAP
    { r: 3, c: 4, char: "S" },
    { r: 4, c: 4, char: "K" },
    // HEAP (Across at row 2, cols 2..5)
    { r: 2, c: 2, char: "H", num: 4 },
    { r: 2, c: 3, char: "E" },
    { r: 2, c: 5, char: "P" },
  ],
};

// 8. Carré Seine Pipeline: PEAK (Across), PIPE (Down), KEY (Down), END (Across)
const CROSSWORD_P8: { rows: number; cols: number; cells: CrosswordCell[] } = {
  rows: 5,
  cols: 4,
  cells: [
    // PEAK (Across at row 1, cols 0..3)
    { r: 1, c: 0, char: "P", num: 1 }, // intersects PIPE
    { r: 1, c: 1, char: "E" },
    { r: 1, c: 2, char: "A" },
    { r: 1, c: 3, char: "K", num: 2 }, // intersects KEY
    // PIPE (Down at col 0, rows 1..4)
    { r: 2, c: 0, char: "I" },
    { r: 3, c: 0, char: "P" },
    { r: 4, c: 0, char: "E" }, // intersects END
    // KEY (Down at col 3, rows 1..3)
    { r: 2, c: 3, char: "E" },
    { r: 3, c: 3, char: "Y" },
    // END (Across at row 4, cols 0..2)
    { r: 4, c: 1, char: "N" },
    { r: 4, c: 2, char: "D" },
  ],
};

// Retro Crossword Overlay Component with Yellow Tiles (Hover Only)
function RetroCrosswordOverlay({
  config,
}: {
  config: { rows: number; cols: number; cells: CrosswordCell[] };
}) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center p-1 sm:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none bg-black/40 backdrop-blur-[0.5px]">
      <div
        className="relative grid select-none drop-shadow-md transition-transform duration-300 group-hover:scale-[1.04]"
        style={{
          gridTemplateRows: `repeat(${config.rows}, minmax(0, 1fr))`,
          gridTemplateColumns: `repeat(${config.cols}, minmax(0, 1fr))`,
          gap: "1px",
        }}
      >
        {config.cells.map((cell, idx) => (
          <div
            key={idx}
            style={{
              gridRowStart: cell.r + 1,
              gridColumnStart: cell.c + 1,
            }}
            className="relative w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-[17px] sm:h-[17px] md:w-[18px] md:h-[18px] bg-[#facc15] border border-black/95 flex items-center justify-center shadow-xs"
          >
            {cell.num !== undefined && (
              <span className="absolute top-[0.5px] left-[1px] text-[4px] sm:text-[4.5px] font-mono font-bold leading-none text-black/90 pointer-events-none">
                {cell.num}
              </span>
            )}
            <span className="text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] md:text-[10.5px] font-pixel font-bold text-black leading-none flex items-center justify-center">
              {cell.char}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const BlogList = ({ posts = [] }: { posts?: Post[] }) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // 8 architectural projects mapped to blog posts
  const p1 = posts.find((p) => p.slug === "purplex-ai-conversational-search-engine") || posts[0] || {};
  const p2 = posts.find((p) => p.slug === "picasso-realtime-collaborative-whiteboard") || posts[1] || {};
  const p3 = posts.find((p) => p.slug === "therepertory-clinical-ai-case-taking") || posts[2] || {};
  const p4 = posts.find((p) => p.slug === "mastering-realtime-websockets-and-resilient-architectures") || posts[3] || {};
  const p5 = posts.find((p) => p.slug === "how-to-effectively-freelance") || posts[4] || {};
  const p6 = posts.find((p) => p.slug === "developer-portfolio-website") || posts[5] || {};
  const p7 = posts.find((p) => p.slug === "ace-the-javascript-interview") || posts[6] || {};
  const p8 = posts.find((p) => p.slug === "build-your-own-covid-leads-portal") || posts[7] || {};

  return (
    <section className="w-full flex flex-col my-3 font-pixel">
      {/* Header */}
      <div className="w-full flex items-center justify-between pb-2 border-b border-white/8 px-1">
        <div className="flex items-center gap-2">
          <Subheading>Writing</Subheading>
        </div>

        <div className="flex items-center gap-1 p-0.5 rounded-md bg-neutral-900/40 border border-white/6 text-[10.5px] font-pixel">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={cn(
              "flex items-center gap-1 px-2 py-0.5 rounded transition-colors select-none cursor-pointer",
              viewMode === "grid"
                ? "bg-white/10 text-primary font-medium"
                : "text-foreground/50 hover:text-foreground",
            )}
          >
            <IconLayoutGrid className="size-3" />
            <span>SPREAD</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={cn(
              "flex items-center gap-1 px-2 py-0.5 rounded transition-colors select-none cursor-pointer",
              viewMode === "list"
                ? "bg-white/10 text-primary font-medium"
                : "text-foreground/50 hover:text-foreground",
            )}
          >
            <IconList className="size-3" />
            <span>LIST</span>
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        /* Architectural Magazine Spread Grid with Retro Crossword Hover Effect */
        <div className="w-full mt-4 flex flex-col gap-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 items-start">
            
            {/* ================= COLUMN 1 (Far Left) ================= */}
            <div className="flex flex-col gap-6">
              
              {/* BLOCK 1: Villa Kogelhofun (Picasso Collaborative Canvas) */}
              <Link
                href={`/blog/${p2.slug || "picasso-realtime-collaborative-whiteboard"}`}
                className="group flex flex-col gap-2 cursor-pointer select-none transition-all duration-300"
              >
                <div className="flex flex-col">
                  <span className="text-[11.5px] font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    Villa Kogelhofun
                  </span>
                  <span className="text-[9px] text-foreground/45 group-hover:text-foreground/75 transition-colors mt-0.5">
                    Noord Beveland · Realtime Canvas
                  </span>
                  <p className="text-[9px] text-foreground/60 group-hover:text-foreground/90 transition-colors leading-relaxed mt-1 line-clamp-3">
                    Sub-50ms collaborative whiteboard engine built with WebSockets, optimistic conflict resolution, and Next.js.
                  </p>
                </div>

                <div className="relative overflow-hidden w-full aspect-[16/10] transition-all duration-500">
                  <Image
                    src="/blog/green-landscape.jpg"
                    alt="Villa Kogelhofun"
                    fill
                    unoptimized
                    className="object-cover grayscale contrast-[1.1] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Retro Crossword Hover Effect */}
                  <RetroCrosswordOverlay config={CROSSWORD_P2} />
                </div>

                <span className="text-[8px] text-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-300 uppercase tracking-wider pb-0.5 border-b border-white/15 w-fit">
                  {p2.publishedAt ? formatPostDate(p2.publishedAt) : "Livraison hiver 2016"}
                </span>
              </Link>

              {/* BLOCK 2: Glebe House */}
              <Link
                href={`/blog/${p4.slug || "mastering-realtime-websockets-and-resilient-architectures"}`}
                className="group flex flex-col gap-2 cursor-pointer select-none transition-all duration-300 pt-1"
              >
                <div className="flex flex-col">
                  <span className="text-[11.5px] font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    Glebe House
                  </span>
                  <span className="text-[9px] text-foreground/45 group-hover:text-foreground/75 transition-colors mt-0.5">
                    Knokke · Sockets Scale
                  </span>
                  <p className="text-[9px] text-foreground/60 group-hover:text-foreground/90 transition-colors leading-relaxed mt-1 line-clamp-3">
                    Resilient WebSocket architecture eliminating stale closures and queue lag.
                  </p>
                </div>

                <div className="relative overflow-hidden w-full aspect-[4/3] transition-all duration-500">
                  <Image
                    src="/blog/onion-layers.jpg"
                    alt="Glebe House"
                    fill
                    unoptimized
                    className="object-cover grayscale contrast-[1.1] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Retro Crossword Hover Effect */}
                  <RetroCrosswordOverlay config={CROSSWORD_P4} />
                </div>

                <span className="text-[8px] text-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-300 uppercase tracking-wider pb-0.5 border-b border-white/15 w-fit">
                  {p4.publishedAt ? formatPostDate(p4.publishedAt) : "Livraison été 2015"}
                </span>
              </Link>
            </div>

            {/* ================= COLUMN 2 (Center-Left Hero) ================= */}
            <div className="flex flex-col gap-4">
              
              {/* BLOCK 3: Non Program Pavillon (United Text + Center Big Square Photo) */}
              <Link
                href={`/blog/${p1.slug || "purplex-ai-conversational-search-engine"}`}
                className="group flex flex-col gap-2 cursor-pointer select-none transition-all duration-300"
              >
                {/* Text on top */}
                <div className="flex flex-col text-left sm:text-right pr-1">
                  <span className="text-[11.5px] font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    Non Program Pavillon
                  </span>
                  <span className="text-[9px] text-foreground/45 group-hover:text-foreground/75 transition-colors mt-0.5">
                    Barcelone · AI & RAG Engine
                  </span>
                  <p className="text-[9px] text-foreground/60 group-hover:text-foreground/90 transition-colors leading-relaxed mt-1 line-clamp-3">
                    Conversational AI engine combining LangGraph, vector search, and multi-agent reasoning.
                  </p>
                  <div className="flex items-center justify-start sm:justify-end mt-1.5">
                    <span className="text-[8px] text-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-300 uppercase tracking-wider pb-0.5 border-b border-white/15">
                      {p1.publishedAt ? formatPostDate(p1.publishedAt) : "Livraison hiver 2015"}
                    </span>
                  </div>
                </div>

                {/* Big Square Wooden Pavilion Photo with Retro Crossword */}
                <div className="relative overflow-hidden w-full aspect-[4/3] sm:aspect-square transition-all duration-500 mt-1">
                  <Image
                    src="/blog/tatra-mountains.jpg"
                    alt="Non Program Pavillon"
                    fill
                    unoptimized
                    className="object-cover grayscale contrast-[1.1] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Retro Crossword Hover Effect */}
                  <RetroCrosswordOverlay config={CROSSWORD_P1} />
                </div>
              </Link>

              {/* BLOCK 4: Werkhaus */}
              <Link
                href={`/blog/${p6.slug || "developer-portfolio-website"}`}
                className="group flex flex-col gap-2 cursor-pointer select-none transition-all duration-300 mt-2"
              >
                <div className="flex flex-col text-left sm:text-right pr-1">
                  <span className="text-[11px] font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    Werkhaus
                  </span>
                  <span className="text-[8.5px] text-foreground/45 group-hover:text-foreground/75 transition-colors mt-0.5">
                    Berlin · Craft & Design
                  </span>
                  <p className="text-[8.5px] text-foreground/60 group-hover:text-foreground/90 transition-colors leading-relaxed mt-1 line-clamp-2">
                    Minimalist developer portfolio engineering with Next.js and craft.
                  </p>
                </div>

                <div className="relative overflow-hidden w-full aspect-[16/10] transition-all duration-500">
                  <Image
                    src="/blog/soundwave-ocean.jpg"
                    alt="Werkhaus"
                    fill
                    unoptimized
                    className="object-cover grayscale contrast-[1.1] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Retro Crossword Hover Effect */}
                  <RetroCrosswordOverlay config={CROSSWORD_P6} />
                </div>

                <span className="text-[8px] text-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-300 uppercase tracking-wider pb-0.5 border-b border-white/15 w-fit ml-0 sm:ml-auto">
                  {p6.publishedAt ? formatPostDate(p6.publishedAt) : "Livraison été 2014"}
                </span>
              </Link>
            </div>

            {/* ================= COLUMN 3 (Center-Right Hero) ================= */}
            <div className="flex flex-col gap-5">
              
              {/* BLOCK 5: The Holiday Home */}
              <Link
                href={`/blog/${p5.slug || "how-to-effectively-freelance"}`}
                className="group flex flex-col gap-2 cursor-pointer select-none transition-all duration-300"
              >
                <div className="relative overflow-hidden w-full aspect-[16/10] transition-all duration-500">
                  <Image
                    src="/blog/hillside-dots.jpg"
                    alt="The Holiday Home"
                    fill
                    unoptimized
                    className="object-cover grayscale contrast-[1.1] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Retro Crossword Hover Effect */}
                  <RetroCrosswordOverlay config={CROSSWORD_P5} />
                </div>

                <div className="flex flex-col">
                  <span className="text-[11.5px] font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    The Holiday Home
                  </span>
                  <span className="text-[9px] text-foreground/45 group-hover:text-foreground/75 transition-colors mt-0.5">
                    Bern · Freelance Trust
                  </span>
                  <p className="text-[9px] text-foreground/60 group-hover:text-foreground/90 transition-colors leading-relaxed mt-1 line-clamp-3">
                    Engineering playbooks for client scoping, pricing, and velocity.
                  </p>
                  <span className="text-[8px] text-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-300 uppercase tracking-wider pb-0.5 border-b border-white/15 w-fit mt-1.5">
                    {p5.publishedAt ? formatPostDate(p5.publishedAt) : "Livraison été 2014"}
                  </span>
                </div>
              </Link>

              {/* BLOCK 6: Minimod (TheRepertory Clinical AI) */}
              <Link
                href={`/blog/${p3.slug || "therepertory-clinical-ai-case-taking"}`}
                className="group flex flex-col gap-2 cursor-pointer select-none transition-all duration-300 pt-1"
              >
                {/* Sunset Hero Photo with Retro Crossword */}
                <div className="relative overflow-hidden w-full aspect-[16/10] transition-all duration-500">
                  <Image
                    src="/blog/mountain-scanner.jpg"
                    alt="Minimod"
                    fill
                    unoptimized
                    className="object-cover grayscale contrast-[1.1] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Retro Crossword Hover Effect */}
                  <RetroCrosswordOverlay config={CROSSWORD_P3} />
                </div>

                {/* Text Block Directly Below Photo */}
                <div className="flex flex-col">
                  <span className="text-[11.5px] font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    Minimod
                  </span>
                  <span className="text-[9px] text-foreground/45 group-hover:text-foreground/75 transition-colors mt-0.5">
                    Madrid · Clinical AI
                  </span>
                  <p className="text-[9px] text-foreground/60 group-hover:text-foreground/90 transition-colors leading-relaxed mt-1 line-clamp-4">
                    Clinical AI case-taking platform engineered for homeopathy symptom repertorization and diagnostic reasoning.
                  </p>
                  <span className="text-[8px] text-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-300 uppercase tracking-wider pb-0.5 border-b border-white/15 w-fit mt-1.5">
                    {p3.publishedAt ? formatPostDate(p3.publishedAt) : "Livraison printemps 2015"}
                  </span>
                </div>
              </Link>
            </div>

            {/* ================= COLUMN 4 (Far Right) ================= */}
            <div className="flex flex-col gap-6">
              
              {/* BLOCK 7: Nedregate (Tall Vertical Photo) */}
              <Link
                href={`/blog/${p7.slug || "ace-the-javascript-interview"}`}
                className="group flex flex-col gap-2 cursor-pointer select-none transition-all duration-300"
              >
                <div className="relative overflow-hidden w-full aspect-[3/4] transition-all duration-500">
                  <Image
                    src="/blog/people-heads.jpg"
                    alt="Nedregate"
                    fill
                    unoptimized
                    className="object-cover grayscale contrast-[1.1] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Retro Crossword Hover Effect */}
                  <RetroCrosswordOverlay config={CROSSWORD_P7} />
                </div>

                <div className="flex flex-col">
                  <span className="text-[11.5px] font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    Nedregate
                  </span>
                  <span className="text-[9px] text-foreground/45 group-hover:text-foreground/75 transition-colors mt-0.5">
                    Paris · JS Internals
                  </span>
                  <p className="text-[9px] text-foreground/60 group-hover:text-foreground/90 transition-colors leading-relaxed mt-1 line-clamp-3">
                    V8 engine pipelines, event loops, and memory heap architecture.
                  </p>
                  <span className="text-[8px] text-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-300 uppercase tracking-wider pb-0.5 border-b border-white/15 w-fit mt-1.5">
                    {p7.publishedAt ? formatPostDate(p7.publishedAt) : "Livraison été 2015"}
                  </span>
                </div>
              </Link>

              {/* BLOCK 8: Carré Seine */}
              <Link
                href={`/blog/${p8.slug || "build-your-own-covid-leads-portal"}`}
                className="group flex flex-col gap-2 cursor-pointer select-none transition-all duration-300 pt-1"
              >
                <div className="relative overflow-hidden w-full aspect-[4/3] transition-all duration-500">
                  <Image
                    src="/blog/red-house.png"
                    alt="Carré Seine"
                    fill
                    unoptimized
                    className="object-cover grayscale contrast-[1.1] brightness-90 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Retro Crossword Hover Effect */}
                  <RetroCrosswordOverlay config={CROSSWORD_P8} />
                </div>

                <div className="flex flex-col">
                  <span className="text-[11.5px] font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    Carré Seine
                  </span>
                  <span className="text-[9px] text-foreground/45 group-hover:text-foreground/75 transition-colors mt-0.5">
                    Paris · Scale Portals
                  </span>
                  <p className="text-[9px] text-foreground/60 group-hover:text-foreground/90 transition-colors leading-relaxed mt-1 line-clamp-2">
                    High-throughput verification pipelines under peak traffic.
                  </p>
                  <span className="text-[8px] text-foreground/40 group-hover:text-primary group-hover:border-primary transition-all duration-300 uppercase tracking-wider pb-0.5 border-b border-white/15 w-fit mt-1.5">
                    {p8.publishedAt ? formatPostDate(p8.publishedAt) : "Livraison hiver 2016"}
                  </span>
                </div>
              </Link>
            </div>

          </div>

          {/* Spread Footer */}
          <div className="w-full flex items-center justify-between pt-3 border-t border-white/6 mt-2 font-pixel">
            <span className="text-[9px] text-foreground/35 uppercase tracking-wider select-none">
              SELECTED ESSAYS & ARCHITECTURE CASE STUDIES
            </span>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-[10.5px] text-foreground/50 hover:text-primary transition-colors uppercase"
            >
              <span>VIEW ALL ESSAYS</span>
              <IconArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      ) : (
        /* Minimalist List View Fallback */
        <div className="w-full flex flex-col divide-y divide-white/6 mt-1 font-pixel">
          {posts.map((post, index) => (
            <Link
              href={`/blog/${post.slug}`}
              key={index}
              className="group flex items-center justify-between gap-4 py-2.5 hover:text-primary transition-colors"
            >
              <div className="flex flex-col min-w-0">
                <span className="text-foreground text-xs font-medium group-hover:text-primary transition-colors truncate">
                  {post.title}
                </span>
                {post.summary ? (
                  <p className="text-[11px] text-foreground/45 truncate mt-0.5">{post.summary}</p>
                ) : null}
              </div>
              <span className="text-foreground/45 group-hover:text-primary shrink-0 text-[10px]">
                {formatPostDate(post.publishedAt)}
              </span>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};
