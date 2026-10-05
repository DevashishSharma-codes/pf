"use client";

import React, { useState } from "react";
import { Subheading } from "./subheading";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconChevronRight } from "@tabler/icons-react";

type Technology = {
  name: string;
  url?: string;
  icon?: React.ReactNode;
  invertDark?: boolean;
};

type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  isWorking?: boolean;
  technologies: Technology[];
  achievements: string[];
};

// Clean AWS SVG with currentColor text (white in dark mode, dark in light mode) and orange smile
const AwsLogo = () => (
  <svg className="size-4.5" viewBox="0 0 24 24" fill="none">
    <text
      x="3.2"
      y="11.5"
      fill="currentColor"
      className="font-sans text-[9px] font-black tracking-tight"
    >
      aws
    </text>
    <path
      d="M3.8 15c4.2 2.6 10 2.6 14.5 0"
      stroke="#FF9900"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M17.2 13.8l2 1.5-1.4 2"
      stroke="#FF9900"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const OFFICIAL_LOGOS: Record<string, Technology> = {
  nextjs: {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    invertDark: true,
  },
  tailwindcss: {
    name: "Tailwind CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  typescript: {
    name: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  javascript: {
    name: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  react: {
    name: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  figma: {
    name: "Figma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  bun: {
    name: "Bun",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bun/bun-original.svg",
  },
  express: {
    name: "Express",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    invertDark: true,
  },
  mongodb: {
    name: "MongoDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  nodejs: {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  postgresql: {
    name: "PostgreSQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  prisma: {
    name: "Prisma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    invertDark: true,
  },
  docker: {
    name: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  supabase: {
    name: "Supabase",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  aws: {
    name: "AWS",
    icon: <AwsLogo />,
  },
  postman: {
    name: "Postman",
    url: "/postman.png",
  },
  vercel: {
    name: "Vercel",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    invertDark: true,
  },
};

const experiences: ExperienceItem[] = [
  {
    id: "enacton",
    company: "EnactOn Technologies",
    role: "Full Stack Developer",
    period: "July 2026 – Present",
    location: "Surat, India (On-Site)",
    isWorking: true,
    technologies: [
      OFFICIAL_LOGOS.nextjs,
      OFFICIAL_LOGOS.tailwindcss,
      OFFICIAL_LOGOS.typescript,
      OFFICIAL_LOGOS.react,
      OFFICIAL_LOGOS.figma,
      OFFICIAL_LOGOS.vercel,
      OFFICIAL_LOGOS.aws,
      OFFICIAL_LOGOS.postman,
      OFFICIAL_LOGOS.bun,
    ],
    achievements: [
      "Engineered end-to-end full-stack web architectures, scalable REST & real-time APIs, and high-performance frontend interfaces.",
      "Developed responsive, accessible UI component ecosystems with optimized state management and seamless user flows.",
      "Designed relational database schemas, optimized complex query execution plans, and implemented resilient authentication pipelines.",
      "Streamlined CI/CD automation and containerized development workflows using Docker and cloud infrastructure.",
    ],
  },
  {
    id: "21spheres",
    company: "21Spheres",
    role: "Full Stack Developer Intern",
    period: "January 2026 – June 2026 (6 Months)",
    location: "Remote",
    isWorking: false,
    technologies: [
      OFFICIAL_LOGOS.bun,
      OFFICIAL_LOGOS.express,
      OFFICIAL_LOGOS.figma,
      OFFICIAL_LOGOS.javascript,
      OFFICIAL_LOGOS.mongodb,
      OFFICIAL_LOGOS.nextjs,
      OFFICIAL_LOGOS.nodejs,
      OFFICIAL_LOGOS.postgresql,
      OFFICIAL_LOGOS.prisma,
      OFFICIAL_LOGOS.react,
      OFFICIAL_LOGOS.typescript,
      OFFICIAL_LOGOS.postman,
      OFFICIAL_LOGOS.vercel,
      OFFICIAL_LOGOS.aws,
      OFFICIAL_LOGOS.docker,
    ],
    achievements: [
      "Engineered core modules of TheRepertory—an AI clinical case-taking & diagnostic workflow platform used daily by practicing doctors.",
      "Implemented sub-second real-time patient case synchronization using WebSockets and optimistic UI update strategies.",
      "Integrated AI-driven diagnostic recommendation pipelines with multi-symptom rubric search and automated clinical summaries.",
      "Built containerized microservices deployed via AWS ECS/ECR with automated CI/CD and production health monitoring.",
    ],
  },
  {
    id: "wealthswisdom",
    company: "Wealth's Wisdom",
    role: "Full Stack Developer (Freelance)",
    period: "March 2025 – Present",
    location: "Remote",
    isWorking: false,
    technologies: [
      OFFICIAL_LOGOS.nextjs,
      OFFICIAL_LOGOS.react,
      OFFICIAL_LOGOS.typescript,
      OFFICIAL_LOGOS.tailwindcss,
      OFFICIAL_LOGOS.supabase,
      OFFICIAL_LOGOS.postgresql,
      OFFICIAL_LOGOS.vercel,
    ],
    achievements: [
      "Architected and shipped a 0→1 goal-oriented financial asset tracking and net worth management web platform.",
      "Designed interactive financial modeling graphs with dynamic compound projection calculations and asset allocation telemetry.",
      "Implemented secure user authentication, multi-currency conversions, and automated recurring balance ledger sync.",
    ],
  },
];

export const Work = () => {
  const [openIds, setOpenIds] = useState<string[]>(["enacton"]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const allExpanded = experiences.every((exp) => openIds.includes(exp.id));

  const toggleAll = () => {
    if (allExpanded) {
      setOpenIds([]);
    } else {
      setOpenIds(experiences.map((exp) => exp.id));
    }
  };

  return (
    <section id="experience" className="flex flex-col font-pixel">
      <Subheading>Work Experience</Subheading>

      <div className="mt-4 flex flex-col divide-y divide-white/6 font-pixel">
        {experiences.map((exp) => {
          const isOpen = openIds.includes(exp.id);

          return (
            <div key={exp.id} className="py-4 first:pt-0 last:pb-0">
              {/* Header row */}
              <div
                onClick={() => toggleItem(exp.id)}
                className="group flex cursor-pointer items-start justify-between gap-4 select-none"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-foreground text-[13.5px] sm:text-[14.5px] md:text-[15.5px] font-normal uppercase tracking-wide transition-colors group-hover:text-primary">
                      {exp.company}
                    </span>

                    {/* Minimal squared working badge */}
                    {exp.isWorking && (
                      <span className="flex items-center gap-1.5 rounded-[4px] border border-[#4f6651]/40 bg-[#4f6651]/20 px-1.5 py-0.5 text-[10px] sm:text-[10.5px] font-normal text-foreground/90 uppercase tracking-wider">
                        <span className="size-1.5 rounded-full bg-[#c3f53b] shadow-[0_0_6px_rgba(195,245,59,0.7)] animate-pulse" />
                        Working
                      </span>
                    )}

                    {/* Subtle squared hover chevron */}
                    <span
                      className={cn(
                        "flex size-5 items-center justify-center rounded-[4px] border border-white/10 bg-white/4 text-foreground/50 transition-colors",
                        "opacity-0 group-hover:opacity-100",
                        isOpen && "opacity-100 text-foreground",
                      )}
                    >
                      {isOpen ? (
                        <IconChevronDown className="size-3" />
                      ) : (
                        <IconChevronRight className="size-3" />
                      )}
                    </span>
                  </div>

                  <p className="text-foreground/70 text-[11.5px] sm:text-[12.5px] font-normal uppercase tracking-wide">
                    {exp.role}
                  </p>
                </div>

                {/* Right side period & location */}
                <div className="flex flex-col items-end text-right shrink-0">
                  <span className="text-foreground/80 text-[11px] sm:text-[12px] font-normal uppercase tracking-wider">
                    {exp.period}
                  </span>
                  <span className="text-foreground/45 text-[10px] sm:text-[11px] font-normal uppercase tracking-wide mt-0.5">
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Expandable accordion body */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`content-${exp.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden font-pixel"
                  >
                    <div className="pt-4 pb-2 flex flex-col gap-4">
                      {/* Technologies & Tools */}
                      <div>
                        <h4 className="text-foreground/50 text-[10px] sm:text-[11px] font-normal uppercase tracking-wider mb-2.5">
                          Technologies & Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <div
                              key={tech.name}
                              title={tech.name}
                              className="flex size-8 md:size-8.5 items-center justify-center rounded-[6px] border border-dashed border-white/15 bg-white/4 shadow-2xs transition-all hover:scale-110 hover:border-white/30"
                            >
                              {tech.icon ? (
                                tech.icon
                              ) : (
                                <img
                                  src={tech.url}
                                  alt={tech.name}
                                  loading="lazy"
                                  className={cn(
                                    "size-4.5 object-contain pointer-events-none select-none",
                                    tech.invertDark && "dark:invert",
                                  )}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* What I've done */}
                      <div>
                        <h4 className="text-foreground/50 text-[10px] sm:text-[11px] font-normal uppercase tracking-wider mb-2">
                          What I've done
                        </h4>
                        <ul className="flex flex-col gap-2 text-[11px] sm:text-[12px] text-foreground/80 leading-relaxed pl-1 uppercase tracking-wide">
                          {exp.achievements.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-[#c3f53b] mt-0.5 select-none text-[10px]">
                                ▪
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Show all work experiences toggle button */}
      <button
        type="button"
        onClick={toggleAll}
        className="mx-auto mt-6 flex items-center justify-center rounded-[6px] border border-white/10 bg-white/5 hover:bg-white/10 px-4 py-2 text-[11px] font-normal uppercase tracking-wider text-foreground/80 hover:text-primary transition-all cursor-pointer font-pixel"
      >
        {allExpanded ? "Hide work experiences" : "Show all work experiences"}
      </button>
    </section>
  );
};
