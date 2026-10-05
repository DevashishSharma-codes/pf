"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  IconArrowUpRight,
  IconBrandGithub,
} from "@tabler/icons-react";
import { Subheading } from "./subheading";
import { cn } from "@/lib/utils";

export interface ProjectBook {
  id: string;
  githubName: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  href: string;
  githubUrl: string;
  language: string;
  tags: string[];
}

export const REAL_PROJECTS: Record<string, ProjectBook> = {
  picaso: {
    id: "picaso",
    githubName: "cali",
    title: "Picasso",
    subtitle: "Realtime Canvas",
    category: "Realtime Systems",
    description:
      "Sub-50ms collaborative whiteboard and vector canvas platform built with WebSockets, CRDT conflict-free replication, and optimistic rendering.",
    href: "https://cali-web-one.vercel.app/",
    githubUrl: "https://github.com/DevashishSharma-codes/cali",
    language: "TypeScript",
    tags: ["Next.js", "WebSockets", "CRDT", "Canvas API"],
  },
  therepertory: {
    id: "therepertory",
    githubName: "therepertory",
    title: "TheRepertory",
    subtitle: "Clinical AI Engine",
    category: "AI & Healthcare",
    description:
      "Clinical AI case-taking & diagnostic tool engineered for medical practitioners to streamline homeopathic symptom repertorization and clinical reasoning.",
    href: "https://stage.therepertory.com/",
    githubUrl: "https://github.com/DevashishSharma-codes/therepertory",
    language: "JavaScript",
    tags: ["React", "FastAPI", "Clinical AI", "LangChain"],
  },
  student_saarthi: {
    id: "student_saarthi",
    githubName: "Student-Saarthi",
    title: "Student-Saarthi",
    subtitle: "Academic Roadmap",
    category: "EdTech Platform",
    description:
      "Student mentorship and personalized academic pathway platform tracking skill milestones, curated roadmaps, and educational opportunities.",
    href: "https://student-saarthi-sigma.vercel.app/",
    githubUrl: "https://github.com/DevashishSharma-codes/Student-Saarthi",
    language: "TypeScript",
    tags: ["Next.js", "TailwindCSS", "Prisma", "PostgreSQL"],
  },
  wealth_wisdom: {
    id: "wealth_wisdom",
    githubName: "Wealth",
    title: "Wealth's Wisdom",
    subtitle: "Net Worth Tracker",
    category: "Fintech Platform",
    description:
      "Comprehensive financial goal tracking, compound interest asset calculation, and multi-portfolio net worth visualization platform.",
    href: "https://goals.wealthswisdom.com/",
    githubUrl: "https://github.com/DevashishSharma-codes/Wealth",
    language: "JavaScript / Python",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  purplex: {
    id: "purplex",
    githubName: "PURPLEX",
    title: "PURPLEX",
    subtitle: "Conversational Search",
    category: "AI & RAG Architecture",
    description:
      "AI conversational search engine combining LangGraph, cited-answer vector search, multi-agent reasoning loops, and streaming synthesis.",
    href: "https://purplex-topaz.vercel.app",
    githubUrl: "https://github.com/DevashishSharma-codes/PURPLEX",
    language: "JavaScript",
    tags: ["LangGraph", "Vector DB", "RAG", "Next.js"],
  },
  version_control: {
    id: "version_control",
    githubName: "version-control-clean",
    title: "Version Control",
    subtitle: "Git DAG Simulator",
    category: "Developer Tooling",
    description:
      "Interactive version control engine visualizing Git DAG commit graphs, tree pointers, staging states, and conflict resolution in real time.",
    href: "https://version-control-clean-tau.vercel.app",
    githubUrl: "https://github.com/DevashishSharma-codes/version-control-clean",
    language: "JavaScript",
    tags: ["React", "Data Structures", "Git Internals", "DAG"],
  },
  nextstate_agent: {
    id: "nextstate_agent",
    githubName: "NextState-Agent",
    title: "NextState-Agent",
    subtitle: "Autonomous Agent",
    category: "Autonomous AI",
    description:
      "State-predictive AI agent that forecasts its next internal state before acting, utilizes LLM tools, computes trust scores, and logs full execution traces.",
    href: "https://github.com/DevashishSharma-codes/NextState-Agent",
    githubUrl: "https://github.com/DevashishSharma-codes/NextState-Agent",
    language: "JavaScript",
    tags: ["Agentic AI", "Predictive State", "LLM Orchestration", "Trust Metrics"],
  },
  github_hub: {
    id: "github_hub",
    githubName: "DevashishSharma-codes",
    title: "GitHub Profile",
    subtitle: "Open Source Systems",
    category: "Engineering & Open Source",
    description:
      "Explore all public repositories, algorithms, micro-services, and architectural experiments built by Devashish Sharma.",
    href: "https://github.com/DevashishSharma-codes",
    githubUrl: "https://github.com/DevashishSharma-codes",
    language: "TypeScript / Python / Go",
    tags: ["GitHub", "Open Source", "Full-Stack", "AI Engineering"],
  },
  policy_checker: {
    id: "policy_checker",
    githubName: "policy-checker",
    title: "Policy Checker",
    subtitle: "PDF Intelligence",
    category: "Doc Intelligence",
    description:
      "\"Chat with your PDFs\" policy intelligence tool allowing users to query dense legal/policy documents and receive instant answers with verified quotes.",
    href: "https://policy-checker-0t5w.onrender.com/",
    githubUrl: "https://github.com/DevashishSharma-codes/policy-checker",
    language: "EJS / Node.js",
    tags: ["RAG", "PDF Parser", "Vector Embeddings", "Express"],
  },
  ragas: {
    id: "ragas",
    githubName: "ragas",
    title: "RAGaaS",
    subtitle: "Modular RAG Pipeline",
    category: "RAG Pipelines",
    description:
      "Modular Retrieval-Augmented Generation framework supporting data extraction, embeddings, and Qdrant vector search across websites, PDFs, and YouTube videos.",
    href: "https://github.com/DevashishSharma-codes/ragas",
    githubUrl: "https://github.com/DevashishSharma-codes/ragas",
    language: "JavaScript",
    tags: ["Qdrant", "Vector Search", "Embeddings", "RAG Architecture"],
  },
  tokenizer: {
    id: "tokenizer",
    githubName: "Tokenizer",
    title: "Tokenizer",
    subtitle: "AI Token Visualizer",
    category: "LLM Tooling",
    description:
      "Interactive visual tool explaining how AI models tokenize, parse, and encode text into discrete embedding dimensions.",
    href: "https://tokenizer-lime-seven.vercel.app/",
    githubUrl: "https://github.com/DevashishSharma-codes/Tokenizer",
    language: "JavaScript",
    tags: ["BPE Tokenizer", "LLM Internals", "Visualizer", "React"],
  },
  spheres21: {
    id: "spheres21",
    githubName: "21Spheres",
    title: "21Spheres",
    subtitle: "3D Spatial Web",
    category: "Creative Tech",
    description:
      "Interactive 3D spatial web experiment featuring dynamic physics bodies, procedural lighting, and interactive spatial shaders.",
    href: "https://21-spheres.vercel.app",
    githubUrl: "https://github.com/DevashishSharma-codes/21Spheres",
    language: "JavaScript",
    tags: ["Three.js", "WebGL", "3D Shaders", "Physics"],
  },
};

export const Projects = () => {
  const [activeBook, setActiveBook] = useState<ProjectBook>(REAL_PROJECTS.picaso);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const currentDisplay = hoveredId && REAL_PROJECTS[hoveredId] ? REAL_PROJECTS[hoveredId] : activeBook;

  return (
    <section id="projects" className="w-full flex flex-col my-6 select-none font-sans">
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between pb-2 border-b border-white/8">
        <Subheading>Projects</Subheading>
        <div className="flex items-center gap-2 text-[10px] text-foreground/45 uppercase tracking-widest font-mono">
          <span className="text-foreground/30">INDEX</span>
          <span className="text-primary font-bold">1</span>
          <span className="text-foreground/40">2</span>
          <span className="text-foreground/40">3</span>
          <span className="text-foreground/40">4</span>
          <span className="text-foreground/40">5</span>
        </div>
      </div>

      {/* Main Section Title & Caption in Geist Pixel (Light Weight) */}
      <div className="w-full flex flex-col items-center justify-center my-6 text-center font-pixel">
        <h2 className="font-pixel text-2xl sm:text-4xl md:text-5xl text-foreground/90 font-normal tracking-tight uppercase leading-[0.95]">
          SELECTED
        </h2>
        <h2 className="font-pixel text-2xl sm:text-4xl md:text-5xl text-foreground/90 font-normal tracking-tight uppercase leading-[0.95]">
          PROJECTS
        </h2>
        <p className="text-[10px] sm:text-[11.5px] text-foreground/45 font-pixel font-normal tracking-wider mt-2.5 max-w-md uppercase">
          A curated shelf of real-time systems, AI architectures, and open-source platforms.
        </p>
      </div>

      {/* ================= BOOKSHELF ROW ================= */}
      <div className="w-full relative pt-8 pb-3">
        {/* Books Row Container */}
        <div className="w-full overflow-x-auto no-scrollbar scroll-smooth flex items-end justify-start sm:justify-center gap-1.5 sm:gap-2 md:gap-2.5 px-3 pb-0.5">
          
          {/* 1. PICASSO (Pink Spine - Slim & Elegant) */}
          <Link
            href={REAL_PROJECTS.picaso.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("picaso");
              setActiveBook(REAL_PROJECTS.picaso);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative flex-shrink-0 w-[20px] sm:w-[24px] md:w-[26px] h-[190px] sm:h-[220px] md:h-[240px] bg-[#df729d] text-neutral-900 rounded-t-[2px] transition-all duration-300 hover:-translate-y-3.5 hover:shadow-xl hover:shadow-pink-900/40 flex flex-col justify-between py-3 px-0.5 cursor-pointer border-r border-black/15 shadow-sm"
          >
            <span className="text-[6.5px] sm:text-[7.5px] font-sans font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 text-black/85 mx-auto">
              CANVAS
            </span>
            <span className="text-[9.5px] sm:text-[11px] font-serif font-black uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 text-black my-auto mx-auto">
              PICASSO
            </span>
            <span className="text-[6px] sm:text-[6.5px] font-mono font-medium tracking-tight uppercase [writing-mode:vertical-rl] rotate-180 text-black/70 mx-auto">
              REALTIME
            </span>
          </Link>

          {/* 2. THE REPERTORY (Green Spine) */}
          <Link
            href={REAL_PROJECTS.therepertory.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("therepertory");
              setActiveBook(REAL_PROJECTS.therepertory);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative flex-shrink-0 w-[22px] sm:w-[26px] md:w-[30px] h-[180px] sm:h-[210px] md:h-[230px] bg-[#1d974b] text-white rounded-t-[2px] transition-all duration-300 hover:-translate-y-3.5 hover:shadow-xl hover:shadow-emerald-900/30 flex flex-col justify-between py-3 px-0.5 cursor-pointer border-r border-black/20 shadow-sm"
          >
            <span className="text-[7.5px] sm:text-[8.5px] font-bold font-sans tracking-wider uppercase [writing-mode:vertical-rl] rotate-180 text-white mx-auto">
              CLINICAL AI
            </span>
            <span className="text-[6.5px] sm:text-[7.5px] font-mono font-medium tracking-tight uppercase [writing-mode:vertical-rl] rotate-180 text-white/90 mx-auto">
              THEREPETORY
            </span>
          </Link>

          {/* 3. STUDENT-SAARTHI (Warm Stone Slim Spine) */}
          <Link
            href={REAL_PROJECTS.student_saarthi.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("student_saarthi");
              setActiveBook(REAL_PROJECTS.student_saarthi);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative flex-shrink-0 w-[14px] sm:w-[17px] md:w-[20px] h-[185px] sm:h-[215px] md:h-[235px] bg-[#c5c2b6] text-black/85 rounded-t-[2px] flex flex-col justify-between items-center py-3 text-[6.5px] sm:text-[7.5px] font-mono font-bold border-r border-black/15 shadow-sm transition-all duration-300 hover:-translate-y-3.5 hover:shadow-lg cursor-pointer"
          >
            <span className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-tight">
              STUDENT SAARTHI
            </span>
            <span className="[writing-mode:vertical-rl] rotate-180 uppercase tracking-tighter text-[5.5px] sm:text-[6px] text-black/65">
              ROADMAPS
            </span>
          </Link>

          {/* 4. WEALTH'S WISDOM (Sky Blue Chunky Spine) */}
          <Link
            href={REAL_PROJECTS.wealth_wisdom.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("wealth_wisdom");
              setActiveBook(REAL_PROJECTS.wealth_wisdom);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative flex-shrink-0 w-[36px] sm:w-[42px] md:w-[48px] h-[195px] sm:h-[225px] md:h-[250px] bg-[#8fc0eb] text-[#133967] rounded-t-[2px] transition-all duration-300 hover:-translate-y-3.5 hover:shadow-xl hover:shadow-sky-900/30 flex flex-col justify-between items-center py-3 cursor-pointer border-r border-black/15 shadow-sm"
          >
            <span className="text-[6.5px] sm:text-[7.5px] font-mono uppercase tracking-widest text-[#133967]/75">
              FINTECH
            </span>
            <span className="text-[11.5px] sm:text-[13px] md:text-[15px] font-black font-sans uppercase tracking-[0.18em] [writing-mode:vertical-rl] rotate-180 my-auto">
              WEALTH
            </span>
            <span className="text-[6px] font-mono uppercase tracking-tight text-[#133967]/70">
              GOALS
            </span>
          </Link>

          {/* 5. PURPLEX AI (Matte Black Spine) */}
          <Link
            href={REAL_PROJECTS.purplex.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("purplex");
              setActiveBook(REAL_PROJECTS.purplex);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative flex-shrink-0 w-[18px] sm:w-[22px] md:w-[26px] h-[188px] sm:h-[218px] md:h-[240px] bg-[#1a1918] text-white rounded-t-[2px] transition-all duration-300 hover:-translate-y-3.5 hover:shadow-xl hover:shadow-neutral-900 flex flex-col justify-between items-center py-3 cursor-pointer border-r border-white/10 shadow-sm"
          >
            <span className="text-[7px] sm:text-[8px] font-sans font-bold uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 text-white/90">
              PURPLEX
            </span>
            <span className="text-[6px] sm:text-[7px] font-mono uppercase tracking-tight [writing-mode:vertical-rl] rotate-180 text-white/70">
              AI SEARCH
            </span>
            <span className="text-[9px] text-pink-400">♥</span>
          </Link>

          {/* 6. VERSION-CONTROL-CLEAN (Tilted Yellow Spine) */}
          <Link
            href={REAL_PROJECTS.version_control.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("version_control");
              setActiveBook(REAL_PROJECTS.version_control);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex-shrink-0 w-[34px] sm:w-[40px] md:w-[46px] h-[178px] sm:h-[208px] md:h-[228px] bg-[#f4bd35] text-neutral-900 rounded-t-[2px] flex flex-col justify-between items-center py-3 -rotate-[2.5deg] origin-bottom-left border-r border-black/15 shadow-sm transition-all duration-300 hover:rotate-0 hover:-translate-y-3.5 cursor-pointer"
          >
            <span className="text-[7.5px] sm:text-[8.5px] font-sans font-bold uppercase tracking-widest [writing-mode:vertical-rl] rotate-180 text-black/85">
              GIT DAG
            </span>
            <span className="text-[7.5px] sm:text-[8.5px] font-mono font-bold uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 text-black/80">
              VERSION CONTROL
            </span>
          </Link>

          {/* 7. NEXTSTATE-AGENT (Tilted Magenta Slim Spine) */}
          <Link
            href={REAL_PROJECTS.nextstate_agent.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("nextstate_agent");
              setActiveBook(REAL_PROJECTS.nextstate_agent);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex-shrink-0 w-[15px] sm:w-[18px] md:w-[21px] h-[190px] sm:h-[220px] md:h-[242px] bg-[#b03a77] text-white/95 rounded-t-[2px] flex flex-col justify-center items-center py-3 rotate-[3.5deg] origin-bottom-right border-r border-black/20 shadow-sm transition-all duration-300 hover:rotate-0 hover:-translate-y-3.5 cursor-pointer"
          >
            <span className="text-[6.5px] sm:text-[7.5px] font-serif uppercase tracking-tight [writing-mode:vertical-rl] rotate-180 truncate">
              NEXTSTATE AUTONOMOUS AGENT
            </span>
          </Link>

          {/* ================= 8. CENTERPIECE: GITHUB HARDCOVER (ROYAL BLUE) ================= */}
          <Link
            href={REAL_PROJECTS.github_hub.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("github_hub");
              setActiveBook(REAL_PROJECTS.github_hub);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative flex-shrink-0 w-[170px] sm:w-[210px] md:w-[245px] h-[235px] sm:h-[275px] md:h-[305px] bg-[#2d4692] rounded-t-[3px] transition-all duration-300 hover:-translate-y-3.5 hover:shadow-2xl hover:shadow-blue-950/70 flex flex-col justify-between p-4 sm:p-5 cursor-pointer border-l-4 border-black/30 border-t border-r border-white/10 shadow-lg select-none"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.06), transparent 70%), linear-gradient(to right, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 6%, rgba(255,255,255,0.03) 10%, transparent 100%)",
            }}
          >
            {/* Hardcover Debossed Typography */}
            <div className="w-full h-full flex flex-col justify-between items-center text-center">
              <div className="my-auto flex flex-col items-center gap-0.5">
                <h3 className="font-serif text-[#16275c] text-[18px] sm:text-[22px] md:text-[25px] uppercase tracking-tight font-medium leading-[1.05] drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)]">
                  DEVASHISH
                </h3>
                <h3 className="font-serif text-[#16275c] text-[18px] sm:text-[22px] md:text-[25px] uppercase tracking-tight font-medium leading-[1.05] drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)]">
                  SHARMA
                </h3>
                <h3 className="font-serif text-[#16275c] text-[14px] sm:text-[17px] md:text-[19px] uppercase tracking-tight font-medium leading-[1.05] drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)] mt-1">
                  OPEN SOURCE
                </h3>
                <h3 className="font-serif text-[#16275c] text-[13px] sm:text-[16px] md:text-[18px] uppercase tracking-tight font-medium leading-[1.05] drop-shadow-[0_1px_1px_rgba(255,255,255,0.15)]">
                  SYSTEMS
                </h3>
              </div>

              <div className="w-full flex items-center justify-between pt-2 border-t border-black/10">
                <span className="font-serif text-[#16275c] text-[12px] sm:text-[14px] md:text-[15px] font-normal tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.1)] truncate">
                  DevashishSharma
                </span>
                <span className="text-[8px] font-mono uppercase text-[#16275c]/80 font-bold flex items-center gap-1 shrink-0">
                  <IconBrandGithub className="size-3" />
                  <span>GITHUB</span>
                </span>
              </div>
            </div>

            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-[3px] pointer-events-none" />
          </Link>

          {/* 9. POLICY-CHECKER (Crimson Red Slim Spine) */}
          <Link
            href={REAL_PROJECTS.policy_checker.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("policy_checker");
              setActiveBook(REAL_PROJECTS.policy_checker);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex-shrink-0 w-[15px] sm:w-[18px] md:w-[21px] h-[205px] sm:h-[235px] md:h-[260px] bg-[#d52840] text-white rounded-t-[2px] flex flex-col justify-between items-center py-3 rotate-[3deg] origin-bottom-left border-r border-black/20 shadow-sm transition-all duration-300 hover:rotate-0 hover:-translate-y-3.5 cursor-pointer"
          >
            <span className="text-[7px] sm:text-[8px] font-mono tracking-tight uppercase [writing-mode:vertical-rl] rotate-180">
              POLICY CHECKER
            </span>
            <span className="text-[6.5px] sm:text-[7.5px] font-serif uppercase [writing-mode:vertical-rl] rotate-180 text-white/90 truncate">
              PDF INTELLIGENCE
            </span>
          </Link>

          {/* 10. RAGAS (Grid Matrix Spine) */}
          <Link
            href={REAL_PROJECTS.ragas.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("ragas");
              setActiveBook(REAL_PROJECTS.ragas);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex-shrink-0 w-[20px] sm:w-[24px] md:w-[28px] h-[190px] sm:h-[220px] md:h-[242px] bg-white text-black rounded-t-[2px] flex flex-col justify-between items-center py-2 border-r border-black/20 shadow-sm transition-all duration-300 hover:-translate-y-3.5 cursor-pointer"
          >
            <div className="w-full flex flex-col items-center gap-1 px-0.5">
              <div className="w-full aspect-square border border-black/40 flex items-center justify-center text-[7.5px] font-mono bg-[#b3e0f7] font-bold">
                R
              </div>
              <div className="w-full aspect-square border border-black/40 flex items-center justify-center text-[7.5px] font-mono font-bold">
                A
              </div>
              <div className="w-full aspect-square border border-black/40 flex items-center justify-center text-[7.5px] font-mono bg-[#b3e0f7] font-bold">
                G
              </div>
            </div>
            <span className="text-[6px] font-mono font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 mt-auto pb-1 text-black/75">
              RAGAAS PIPELINES
            </span>
          </Link>

          {/* 11. TOKENIZER (Stone Grey with Barcode) */}
          <Link
            href={REAL_PROJECTS.tokenizer.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("tokenizer");
              setActiveBook(REAL_PROJECTS.tokenizer);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex-shrink-0 w-[32px] sm:w-[38px] md:w-[44px] h-[185px] sm:h-[215px] md:h-[238px] bg-[#bebcb2] text-neutral-900 rounded-t-[2px] flex flex-col justify-between items-center py-3 px-1 border-r border-black/15 shadow-sm transition-all duration-300 hover:-translate-y-3.5 cursor-pointer"
          >
            <span className="text-[5.5px] sm:text-[6.5px] font-mono uppercase tracking-widest text-black/60">
              AI ENCODER
            </span>
            <span className="text-[10px] sm:text-[12px] md:text-[13px] font-sans font-black tracking-wider [writing-mode:vertical-rl] rotate-180 text-black">
              TOKENIZER
            </span>
            <div className="flex flex-col items-center gap-0.5 w-full">
              <div className="flex items-center gap-[1px] h-3 w-4/5 justify-center opacity-85">
                <span className="w-[1.5px] h-full bg-black" />
                <span className="w-[0.5px] h-full bg-black" />
                <span className="w-[2px] h-full bg-black" />
                <span className="w-[0.5px] h-full bg-black" />
                <span className="w-[1.5px] h-full bg-black" />
                <span className="w-[1px] h-full bg-black" />
                <span className="w-[2px] h-full bg-black" />
              </div>
              <span className="text-[5px] font-mono text-black/70 leading-none">
                BPE PARSER
              </span>
            </div>
          </Link>

          {/* 12. 21SPHERES (Golden Marigold Spine) */}
          <Link
            href={REAL_PROJECTS.spheres21.href}
            target="_blank"
            onMouseEnter={() => {
              setHoveredId("spheres21");
              setActiveBook(REAL_PROJECTS.spheres21);
            }}
            onMouseLeave={() => setHoveredId(null)}
            className="group flex-shrink-0 w-[26px] sm:w-[32px] md:w-[36px] h-[188px] sm:h-[218px] md:h-[240px] bg-[#f8b220] text-neutral-900 rounded-t-[2px] flex flex-col justify-between items-center py-3 px-0.5 border-r border-black/15 shadow-sm transition-all duration-300 hover:-translate-y-3.5 cursor-pointer"
          >
            <span className="text-[7.5px] sm:text-[8.5px] font-serif font-bold uppercase tracking-wider [writing-mode:vertical-rl] rotate-180 text-black/90">
              21SPHERES: 3D WEB
            </span>
            <span className="text-[6.5px] sm:text-[7.5px] font-mono font-medium uppercase [writing-mode:vertical-rl] rotate-180 text-black/80">
              SPATIAL SHADERS
            </span>
          </Link>

        </div>

        {/* The Physical Bookshelf Baseline Bar */}
        <div className="w-full h-2.5 bg-gradient-to-r from-[#2a2825] via-[#3d3a36] to-[#2a2825] border-t border-white/20 border-b border-black/60 shadow-lg rounded-xs" />
        <div className="w-full h-1 bg-black/40 blur-[1px]" />
      </div>

      {/* ================= INTERACTIVE BOOK DETAIL PANEL (MINIMAL, NO BG CARD, NO PILLS) ================= */}
      <div className="w-full mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1 transition-all duration-300">
        <div className="flex flex-col gap-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-medium text-[#c3f53b] uppercase tracking-wider">
              {currentDisplay.category}
            </span>
            <span className="text-foreground/30 text-xs">·</span>
            <h4 className="text-foreground text-sm sm:text-base font-semibold tracking-tight truncate">
              {currentDisplay.title}
            </h4>
            <span className="text-foreground/45 text-xs font-mono">({currentDisplay.githubName})</span>
          </div>
          <p className="text-foreground/80 text-xs sm:text-sm leading-relaxed max-w-2xl mt-0.5">
            {currentDisplay.description}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
          {currentDisplay.githubUrl && (
            <Link
              href={currentDisplay.githubUrl}
              target="_blank"
              className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-foreground/80 hover:text-foreground text-xs font-mono transition-all duration-200"
            >
              <IconBrandGithub className="size-3.5" />
              <span>GITHUB</span>
            </Link>
          )}
          <Link
            href={currentDisplay.href}
            target="_blank"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[#c3f53b]/30 bg-[#c3f53b]/10 hover:bg-[#c3f53b]/20 text-[#f7f7f5] hover:text-[#c3f53b] text-xs font-mono font-medium transition-all duration-200"
          >
            <span>EXPLORE</span>
            <IconArrowUpRight className="size-3.5 text-[#c3f53b]" />
          </Link>
        </div>
      </div>
    </section>
  );
};
