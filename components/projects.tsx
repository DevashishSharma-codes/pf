import React from "react";
import { Box } from "./box";
import Link from "next/link";
import {
  IconBrush,
  IconStethoscope,
  IconCoin,
  IconSearch,
  IconBrandGithub,
  IconDeviceDesktop,
} from "@tabler/icons-react";
import { Subheading } from "./subheading";

const projectItems = [
  {
    href: "https://cali-web-one.vercel.app/",
    title: "Picasso",
    description: "Sub-50ms collaborative canvas & whiteboard platform.",
    icon: (
      <IconBrush className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-emerald-400 to-teal-600 ring-offset-emerald-500",
  },
  {
    href: "https://stage.therepertory.com/",
    title: "TheRepertory",
    description: "Clinical AI case-taking & diagnostic tool for doctors.",
    icon: (
      <IconStethoscope className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-blue-500 to-indigo-700 ring-offset-blue-600",
  },
  {
    href: "https://goals.wealthswisdom.com/",
    title: "Wealth's Wisdom",
    description: "Financial goal tracking & net worth management platform.",
    icon: (
      <IconCoin className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-amber-400 to-orange-600 ring-offset-amber-500",
  },
  {
    href: "https://purplex-topaz.vercel.app/",
    title: "Purplex",
    description: "AI conversational search engine with cited-answer RAG UX.",
    icon: (
      <IconSearch className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-purple-500 to-violet-700 ring-offset-purple-600",
  },
  {
    href: "https://mac-portfolio-2kzn.vercel.app/",
    title: "macOS Web",
    description: "Interactive desktop simulation & UI operating system.",
    icon: (
      <IconDeviceDesktop className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-rose-500 to-pink-700 ring-offset-rose-600",
  },
  {
    href: "https://github.com/DevashishSharma-codes",
    title: "GitHub",
    description: "Explore all open-source repositories & experiments.",
    icon: (
      <IconBrandGithub className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
    ),
    boxClassName:
      "bg-linear-to-b from-stone-600 to-neutral-900 ring-offset-stone-700",
  },
];

export const Projects = () => {
  return (
    <section id="projects">
      <Subheading>Featured Projects</Subheading>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        {projectItems.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            className="group flex flex-col gap-2.5 transition-transform hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-2">
              <Box className={project.boxClassName}>{project.icon}</Box>
              <p className="text-foreground text-sm font-medium transition-colors group-hover:text-primary">
                {project.title}
              </p>
            </div>
            <p className="text-foreground/70 text-sm text-pretty leading-snug">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
