"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { GENERAL_VARIANT, SPRING_CONFIG } from "@/lib/motion-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { DottedUnderline } from "./dotted-underline";

import {
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandPinterest,
  IconMail,
} from "@tabler/icons-react";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const links = [
  { title: "Home", href: "/" },
  { title: "Inspiration", href: "/inspiration" },
  { title: "Blog", href: "/blog" },
  { title: "Sponsor", href: "/sponsor" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-2xl flex-col items-start gap-4 px-4 pt-4 md:pt-8">
      <motion.div
        variants={GENERAL_VARIANT}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={SPRING_CONFIG}
        className="rounded-full bg-neutral-800 overflow-hidden ring-2 ring-white/15 shrink-0 shadow-md"
      >
        <Image
          src="/avatar.jpg"
          alt="Devashish Sharma"
          width={96}
          height={96}
          className="aspect-square size-12 md:size-14 rounded-full object-cover object-[center_18%] transition-transform duration-300 hover:scale-105"
          priority
        />
      </motion.div>

      <h1 className="text-foreground text-xl font-medium tracking-tight md:text-2xl">
        Devashish Sharma <span className="font-serif italic font-normal text-foreground px-0.5">aka</span> @devartish
      </h1>

      <p className="text-[#adcb7b] text-[15px] md:text-[17px] font-cursive -mt-2 tracking-wide">
        “making the culture prettier”
      </p>

      {/* Spotify currently listening bar */}
      <a
        href="https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ?si=a1cff66c90ab4b51"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex max-w-full items-center gap-2 text-xs md:text-[13px] text-foreground/80 font-normal transition-opacity hover:opacity-90 -mt-1"
      >
        <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="#1DB954">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.216.353-.674.464-1.027.248-2.812-1.718-6.352-2.107-10.52-1.155-.403.092-.803-.16-.895-.563-.092-.403.16-.803.563-.895 4.564-1.042 8.48-.6 11.632 1.338.353.216.464.674.247 1.027zm1.467-3.26c-.272.443-.852.584-1.295.312-3.22-1.979-8.128-2.55-11.936-1.393-.497.151-1.024-.13-1.175-.627-.151-.497.13-1.024.627-1.175 4.356-1.322 9.774-.682 13.467 1.588.443.272.584.852.312 1.295zm.126-3.41c-3.86-2.292-10.23-2.504-13.918-1.384-.593.18-1.22-.164-1.4-.757-.18-.593.164-1.22.757-1.4 4.24-1.288 11.28-1.043 15.717 1.59.533.316.708 1.008.392 1.541-.316.533-1.008.708-1.548.41z" />
        </svg>
        <span className="truncate">
          <span className="text-foreground/60">Currently listening</span>
          <span className="mx-1.5 text-foreground/40">—</span>
          <span className="text-foreground/90 font-medium group-hover:text-primary transition-colors">
            The Less I Know The Better
          </span>
          <span className="mx-1 text-foreground/40">·</span>
          <span className="text-foreground/60">
            Tame Impala
          </span>
        </span>
      </a>

      {/* Social links row */}
      <div className="flex items-center gap-3.5 text-foreground/60">
        {/* 1. X */}
        <a
          href="https://x.com/devartish"
          target="_blank"
          rel="noopener noreferrer"
          title="X (Twitter)"
          className="transition-colors hover:text-foreground"
        >
          <IconBrandX className="size-4.5" />
        </a>

        {/* 2. LinkedIn */}
        <a
          href="https://linkedin.com/in/devashish-sharma-aa470832a"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="transition-colors hover:text-foreground"
        >
          <IconBrandLinkedin className="size-4.5" />
        </a>

        {/* 3. GitHub */}
        <a
          href="https://github.com/DevashishSharma-codes"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          className="transition-colors hover:text-foreground"
        >
          <IconBrandGithub className="size-4.5" />
        </a>

        {/* 4. Instagram */}
        <a
          href="https://www.instagram.com/devashiiiiit/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
          className="transition-colors hover:text-foreground"
        >
          <IconBrandInstagram className="size-4.5" />
        </a>

        {/* 5. Pinterest */}
        <a
          href="https://pinterest.com/devartish"
          target="_blank"
          rel="noopener noreferrer"
          title="Pinterest"
          className="transition-colors hover:text-foreground"
        >
          <IconBrandPinterest className="size-4.5" />
        </a>

        {/* 6. Mail */}
        <a
          href="mailto:devashishsharma2157@gmail.com"
          title="Email"
          className="transition-colors hover:text-foreground"
        >
          <IconMail className="size-4.5" />
        </a>
      </div>

      {/* Navigation links */}
      <div className="flex items-center gap-4 pt-1">
        {links.map((link) => {
          const active = isActivePath(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative transition-colors",
                active
                  ? "text-primary"
                  : "text-foreground/70 hover:text-primary",
              )}
            >
              {link.title}
              <DottedUnderline
                className={cn(
                  "mask-x-from-90% transition-opacity duration-300",
                  active
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100",
                )}
              />
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
