import React from "react";
import { Subheading } from "./subheading";
import {
  CursorIcon,
  FireworksIcon,
  HostingerIcon,
  NeonIcon,
  PosthogIcon,
  ReplitIcon,
  StrapiIcon,
} from "./icons/general";
import { Box } from "./box";

export const Companies = () => {
  const companies = [
    {
      title: "21Spheres",
      description: "Full Stack Intern engineering TheRepertory AI clinical platform.",
      skeleton: (
        <CursorIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-blue-400 to-indigo-600 ring-offset-blue-500",
    },
    {
      title: "Wealth's Wisdom",
      description: "Freelance full-stack financial goals & asset tracking platform.",
      skeleton: (
        <ReplitIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-orange-400 to-amber-600 ring-offset-orange-500",
    },
    {
      title: "Oracle & PIET",
      description: "Oracle Java SE 17 Certified Developer & B.Tech CSE (IEP).",
      skeleton: (
        <HostingerIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-red-500 to-rose-700 ring-offset-red-500",
    },
    {
      title: "AWS Cloud",
      description: "Containerized deployment with AWS ECS, ECR, and CI/CD pipelines.",
      skeleton: (
        <StrapiIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-amber-400 to-yellow-600 ring-offset-amber-500",
    },
    {
      title: "Neon & PostgreSQL",
      description: "High-performance relational databases, Prisma ORM, and caching.",
      skeleton: (
        <NeonIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-green-400 to-emerald-600 ring-offset-green-500",
    },
    {
      title: "Supabase & Clerk",
      description: "Real-time subscriptions, secure auth & session management.",
      skeleton: (
        <PosthogIcon className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-teal-400 to-cyan-600 ring-offset-teal-500",
    },
  ];
  return (
    <section>
      <Subheading>Organizations & Tech Stack</Subheading>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3">
        {companies.map((company) => (
          <div key={company.title} className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Box className={company.boxClassName}>{company.skeleton}</Box>
              <p className="text-foreground text-sm font-medium">
                {company.title}
              </p>
            </div>
            <p className="text-foreground/70 text-sm text-pretty">
              {company.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
