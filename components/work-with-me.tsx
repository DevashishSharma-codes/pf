"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Subheading } from "./subheading";
import Link from "next/link";
import { Box } from "./box";
import { cn } from "@/lib/utils";
import {
  IconBriefcase,
  IconCode,
  IconMail,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { SPRING_CONFIG } from "@/lib/motion-config";

type WorkItem = {
  title: string;
  description: string;
  boxClassName: string;
  skeleton: React.ReactNode;
} & ({ type: "link"; href: string } | { type: "copyEmail"; email: string });

export const WorkWithMe = () => {
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = async (email: string) => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  const work: WorkItem[] = [
    {
      title: "Engineering Roles",
      description: "Full-Stack, Backend & AI systems",
      type: "link",
      href: "https://linkedin.com/in/devashish-sharma-aa470832a",
      boxClassName:
        "bg-linear-to-b from-[#6e8b71] to-[#4a634d] ring-offset-[#4f6651]",
      skeleton: (
        <IconBriefcase className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
    },
    {
      title: "Freelance Projects",
      description: "Scalable web apps, APIs & AI platforms",
      type: "link",
      href: "https://linkedin.com/in/devashish-sharma-aa470832a",
      boxClassName:
        "bg-linear-to-b from-[#5f7a62] to-[#435745] ring-offset-[#4f6651]",
      skeleton: (
        <IconCode className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
    },
    {
      title: "Direct Email",
      description: "devashishsharma2157@gmail.com",
      type: "copyEmail",
      email: "devashishsharma2157@gmail.com",
      boxClassName:
        "bg-linear-to-b from-[#4f6651] to-[#364738] ring-offset-[#4f6651]",
      skeleton: (
        <IconMail className="size-4 text-white drop-shadow-xl drop-shadow-black/40" />
      ),
    },
  ];

  const toast = (
    <AnimatePresence mode="wait">
      {copied ? <CopyAnimation key="copy-email-toast" /> : null}
    </AnimatePresence>
  );

  return (
    <section id="contact" className="flex flex-col font-pixel">
      <Subheading>Work with me</Subheading>
      {mounted ? createPortal(toast, document.body) : null}
      <div className="mt-4 flex flex-col gap-3 font-pixel">
        {work.map((item) => {
          if (item.type === "copyEmail") {
            return (
              <button
                type="button"
                onClick={() => handleCopyEmail(item.email)}
                className="group flex w-full cursor-pointer items-center gap-3 text-left transition-colors select-none"
                key={item.title}
              >
                <Box className={`shrink-0 ${item.boxClassName}`}>
                  {item.skeleton}
                </Box>
                <div className="flex flex-1 items-center justify-between gap-2 text-sm md:text-[15px]">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-normal uppercase tracking-wide text-[12.5px] sm:text-[13.5px] text-foreground group-hover:text-primary transition-colors shrink-0">
                      {item.title}
                    </span>
                    <span className="text-foreground/35 font-normal shrink-0 text-[11px]">
                      /
                    </span>
                    <span className="text-foreground/75 font-normal text-[11px] sm:text-[12px] uppercase tracking-wide">
                      {item.email}
                    </span>
                  </div>
                  <span className="shrink-0 text-[9.5px] sm:text-[10px] font-normal uppercase tracking-wider px-2 py-0.5 rounded-[4px] border border-white/10 bg-white/4 text-foreground/70 group-hover:text-foreground group-hover:border-white/25 transition-colors font-pixel">
                    {copied ? (
                      <span className="text-[#c3f53b] font-normal flex items-center gap-1">
                        Copied! ✓
                      </span>
                    ) : (
                      "Click to copy"
                    )}
                  </span>
                </div>
              </button>
            );
          }

          return (
            <Link
              href={item.href}
              target="_blank"
              className="group flex items-center gap-3 transition-colors select-none"
              key={item.title}
            >
              <Box className={`shrink-0 ${item.boxClassName}`}>
                {item.skeleton}
              </Box>
              <div className="flex items-center gap-2 text-sm md:text-[15px] flex-wrap">
                <span className="font-normal uppercase tracking-wide text-[12.5px] sm:text-[13.5px] text-foreground group-hover:text-primary transition-colors shrink-0">
                  {item.title}
                </span>
                <span className="text-foreground/35 font-normal shrink-0 text-[11px]">
                  /
                </span>
                <span className="text-foreground/75 font-normal text-[11px] sm:text-[12px] uppercase tracking-wide">
                  {item.description}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

const CopyAnimation = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        filter: "blur(10px)",
      }}
      transition={SPRING_CONFIG}
      className="pointer-events-none fixed inset-x-0 bottom-20 z-200 mx-auto flex w-fit items-center justify-center gap-2 rounded-lg bg-linear-to-b from-[#c3f53b] to-[#8ebc22] p-3.5 text-center text-[#141a15] font-pixel text-[11.5px] uppercase tracking-wider shadow-lg ring-1 shadow-black/20 ring-black/20 ring-offset-2 ring-offset-[#c3f53b] ring-inset"
    >
      <EmailIcon /> Email Copied to clipboard
    </motion.div>
  );
};

const EmailIcon = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="size-4 perspective-distant"
      initial={{
        scale: 0.8,
      }}
      animate={{
        scale: [0.8, 1, 1.2, 1],
      }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
      <motion.path
        initial={{
          rotateX: 40,
        }}
        animate={{
          rotateX: [40, 0, 40],
        }}
        style={{
          transformOrigin: "top",
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z"
      />
    </motion.svg>
  );
};
