import React from "react";
import { Subheading } from "./subheading";
import { Box } from "./box";
import {
  IconAppWindowFilled,
  IconPaintFilled,
  IconTools,
} from "@tabler/icons-react";

export const Focus = () => {
  const focus = [
    {
      title: "Real-Time Collaborative & Frontend Engineering",
      description:
        "Architecting sub-50ms WebSocket broadcast pipelines, HTML5 Canvas rendering & geometry engines, and interactive React 19 / Next.js 16 applications.",
      skeleton: (
        <IconAppWindowFilled className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-blue-400 to-indigo-600 ring-offset-blue-500",
    },
    {
      title: "AI, RAG & Agentic Workflows",
      description:
        "Building conversational search systems, cited-answer RAG architectures, LangChain/LangGraph agents, and multi-modal ingestion pipelines (PDF, YouTube, web).",
      skeleton: (
        <IconTools className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-purple-400 to-violet-600 ring-offset-purple-500",
    },
    {
      title: "Scalable Backend & Cloud Systems",
      description:
        "Designing relational database schemas (PostgreSQL/Prisma), solving race conditions & stale closures, and building containerized CI/CD to AWS ECS via ECR.",
      skeleton: (
        <IconPaintFilled className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
      boxClassName:
        "bg-linear-to-b from-emerald-400 to-teal-600 ring-offset-emerald-500",
    },
  ];
  return (
    <section>
      <Subheading>Things I focus on</Subheading>
      <div className="mt-4 flex flex-col gap-4">
        {focus.map((item) => (
          <div key={item.title} className="flex flex-col">
            <div className="flex flex-row items-center gap-2">
              <Box className={item.boxClassName}>{item.skeleton}</Box>
              <p className="text-foreground font-medium text-balance">
                {item.title}
              </p>
            </div>
            <p className="text-foreground/70 mt-2 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
