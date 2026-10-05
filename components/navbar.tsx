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
  const isHome = pathname === "/";

  return (
    <nav className="mx-auto flex max-w-3xl flex-col items-center px-4 sm:px-6 pt-6 md:pt-10 mb-4 sm:mb-6">
      {/* Editorial Top Section (Styled after the reference photo) */}
      {isHome ? (
        <div className="w-full flex flex-col items-center mb-5 sm:mb-6">
          {/* Top Name and Handle in Geist Pixel */}
          <h1 className="w-full text-center sm:text-justify text-[13px] sm:text-[14.5px] md:text-[15.5px] font-pixel uppercase tracking-[0.04em] text-foreground select-none pb-2.5">
            DEVASHISH SHARMA <span className="text-foreground/60 lowercase font-pixel px-0.5">aka</span>{" "}
            <a
              href="https://x.com/devartish"
              target="_blank"
              rel="noopener noreferrer"
              className="lowercase text-foreground/80 hover:text-primary hover:underline underline-offset-2 transition-colors cursor-pointer"
            >
              @devartish
            </a>
          </h1>

          {/* Top Full-Width Typography in Geist Pixel */}
          <div className="w-full text-center sm:text-justify text-[11.5px] sm:text-[12px] md:text-[12.5px] font-pixel uppercase tracking-[0.02em] sm:tracking-[0.03em] leading-[1.45] text-foreground select-none pb-1.5">
            HEY, I’M DEVASHISH SHARMA. I BUILD PRODUCTION SYSTEMS WITH REAL ATTENTION
            TO HOW THEY FEEL — THE SPACING, THE RHYTHM, THE QUIET DETAILS THAT MAKE AN
            INTERFACE FEEL INTENTIONAL.
          </div>

          {/* Center Section: Left Text + Center Photo + Right Text + Badges */}
          <div className="relative w-full flex items-stretch justify-center gap-3 sm:gap-4 md:gap-5 mt-1">
            {/* Left Flanking Text & SYSTEMS Badge (Desktop/Tablet) */}
            <div className="hidden sm:flex flex-1 flex-col justify-between text-right py-0.5">
              <div className="flex flex-col gap-2">
                <p className="text-[10px] md:text-[11px] font-pixel uppercase tracking-[0.02em] leading-[1.4] text-foreground select-none">
                  <span className="text-primary font-medium">I MAKE</span> REAL-TIME SYSTEMS, LOW-LATENCY TOOLS, AI WORKFLOWS… I WORK <span className="whitespace-nowrap">FULL-STACK.</span>
                </p>
                <p className="text-[10px] md:text-[11px] font-pixel uppercase tracking-[0.02em] leading-[1.4] text-foreground/80 select-none">
                  BUT DESIGN IS NEVER AN AFTERTHOUGHT. USUALLY WITH A SONG PLAYING ON MY MAC.
                </p>
              </div>
              <span className="text-[10px] md:text-[11px] font-pixel tracking-[0.25em] text-foreground/50 uppercase select-none self-end mt-4">
                SYSTEMS
              </span>
            </div>

            {/* Mobile Left Badge */}
            <span className="sm:hidden absolute left-1 top-1/2 -translate-y-1/2 text-[9px] font-pixel tracking-[0.2em] text-foreground/50 uppercase select-none">
              SYSTEMS
            </span>

            {/* Portrait Frame (Square Frame) */}
            <div className="relative shrink-0 group overflow-hidden bg-neutral-900 ring-1 ring-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
              <Image
                src="/devashish-photo.jpg"
                alt="Devashish Sharma"
                width={400}
                height={400}
                unoptimized
                className="w-48 sm:w-52 md:w-56 aspect-square object-cover object-[center_16%] transition-all duration-500 ease-out"
                priority
              />
            </div>

            {/* Mobile Right Badge */}
            <span className="sm:hidden absolute right-1 top-1/2 -translate-y-1/2 text-[9px] font-pixel tracking-[0.2em] text-foreground/50 uppercase select-none">
              WRITING
            </span>

            {/* Right Flanking Text & WRITING Badge (Desktop/Tablet) */}
            <div className="hidden sm:flex flex-1 flex-col justify-between text-left py-0.5">
              <div className="flex flex-col gap-2.5">
                <p className="text-[10px] md:text-[11px] font-pixel uppercase tracking-[0.02em] leading-[1.4] text-foreground select-none">
                  <span className="text-primary font-medium">SOMETIMES I WRITE.</span> NOT OFTEN,
                  <br />
                  NOT ON A SCHEDULE — JUST WHEN SOMETHING STAYS WITH ME LONG ENOUGH TO ASK FOR WORDS.
                </p>
                <p className="text-[10px] md:text-[11px] font-pixel uppercase tracking-[0.02em] leading-[1.4] text-foreground/80 select-none">
                  THOUGHTS ON DESIGN,
                  <br />
                  SYSTEMS, THE QUIET PARTS OF BUILDING THINGS.
                  <br />
                  MOSTLY NOTES FROM THE PROCESS,
                  <br />
                  WRITTEN LATE WITH A SONG STILL PLAYING.
                </p>
              </div>
              <span className="text-[10px] md:text-[11px] font-pixel tracking-[0.25em] text-foreground/50 uppercase select-none self-start mt-4">
                WRITING
              </span>
            </div>
          </div>

          {/* Mobile Flanking Text (shown cleanly below photo on small screens) */}
          <div className="sm:hidden w-full text-center text-[10.5px] font-pixel uppercase tracking-[0.02em] leading-[1.45] text-foreground select-none mt-2.5 flex flex-col gap-2">
            <p>
              <span className="text-primary font-medium">I MAKE</span> REAL-TIME SYSTEMS, LOW-LATENCY TOOLS, AI WORKFLOWS… I WORK FULL-STACK. BUT DESIGN IS NEVER AN AFTERTHOUGHT. USUALLY WITH A SONG PLAYING ON MY MAC.
            </p>
            <p className="text-foreground/80 text-[10px]">
              <span className="text-primary font-medium">SOMETIMES I WRITE.</span> NOT OFTEN, NOT ON A SCHEDULE — JUST WHEN SOMETHING STAYS WITH ME LONG ENOUGH TO ASK FOR WORDS. THOUGHTS ON DESIGN, SYSTEMS, THE QUIET PARTS OF BUILDING THINGS. MOSTLY NOTES FROM THE PROCESS, WRITTEN LATE WITH A SONG STILL PLAYING.
            </p>
          </div>

          {/* Social Handles list below photo */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-[10px] sm:text-[11px] font-pixel tracking-wide text-foreground/75 mt-3 sm:mt-4 select-none">
            <a
              href="https://x.com/devartish"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              X: @devartish
            </a>
            <span className="text-foreground/30">/</span>
            <a
              href="https://github.com/DevashishSharma-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              GITHUB
            </a>
            <span className="text-foreground/30">/</span>
            <a
              href="https://linkedin.com/in/devashish-sharma-aa470832a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              LINKEDIN
            </a>
            <span className="text-foreground/30">/</span>
            <a
              href="https://www.instagram.com/devashiiiiit/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              IG: @devashiiiiit
            </a>
            <span className="text-foreground/30">/</span>
            <a
              href="https://pinterest.com/devartish"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              PINTEREST
            </a>
            <span className="text-foreground/30">/</span>
            <a
              href="mailto:devashishsharma2157@gmail.com"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              EMAIL
            </a>
          </div>

          {/* Spotify currently listening bar (directly below social handles with matching alignment) */}
          <a
            href="https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ?si=a1cff66c90ab4b51"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 text-[10px] sm:text-[11px] font-pixel text-foreground/75 hover:text-foreground transition-all mt-2 sm:mt-2.5 select-none"
          >
            <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="#1DB954">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.216.353-.674.464-1.027.248-2.812-1.718-6.352-2.107-10.52-1.155-.403.092-.803-.16-.895-.563-.092-.403.16-.803.563-.895 4.564-1.042 8.48-.6 11.632 1.338.353.216.464.674.247 1.027zm1.467-3.26c-.272.443-.852.584-1.295.312-3.22-1.979-8.128-2.55-11.936-1.393-.497.151-1.024-.13-1.175-.627-.151-.497.13-1.024.627-1.175 4.356-1.322 9.774-.682 13.467 1.588.443.272.584.852.312 1.295zm.126-3.41c-3.86-2.292-10.23-2.504-13.918-1.384-.593.18-1.22-.164-1.4-.757-.18-.593.164-1.22.757-1.4 4.24-1.288 11.28-1.043 15.717 1.59.533.316.708 1.008.392 1.541-.316.533-1.008.708-1.548.41z" />
            </svg>
            <span className="truncate">
              <span className="text-foreground/50 uppercase">LISTENING:</span>
              <span className="mx-1.5 text-foreground/40">—</span>
              <span className="text-foreground/90 font-medium group-hover:text-primary transition-colors uppercase">
                The Less I Know The Better
              </span>
              <span className="mx-1 text-foreground/40">·</span>
              <span className="text-foreground/60 uppercase">Tame Impala</span>
            </span>
          </a>
        </div>
      ) : (
        /* Sub-page compact avatar & header */
        <div className="flex flex-col items-center text-center gap-2 mb-3">
          <div className="rounded-full bg-neutral-800 overflow-hidden ring-2 ring-white/15 shrink-0 shadow-md">
            <Image
              src="/devashish-photo.jpg"
              alt="Devashish Sharma"
              width={96}
              height={96}
              unoptimized
              className="aspect-square size-12 md:size-14 rounded-full object-cover object-[center_18%] transition-all duration-300"
              priority
            />
          </div>
          <h1 className="text-foreground text-xl font-medium tracking-tight md:text-2xl mt-1">
            Devashish Sharma <span className="font-serif italic font-normal text-foreground px-0.5">aka</span> @devartish
          </h1>
          <a
            href="https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ?si=a1cff66c90ab4b51"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 text-xs text-foreground/75 hover:text-foreground transition-all mt-1 select-none"
          >
            <svg className="size-3.5 shrink-0" viewBox="0 0 24 24" fill="#1DB954">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.498 17.306c-.216.353-.674.464-1.027.248-2.812-1.718-6.352-2.107-10.52-1.155-.403.092-.803-.16-.895-.563-.092-.403.16-.803.563-.895 4.564-1.042 8.48-.6 11.632 1.338.353.216.464.674.247 1.027zm1.467-3.26c-.272.443-.852.584-1.295.312-3.22-1.979-8.128-2.55-11.936-1.393-.497.151-1.024-.13-1.175-.627-.151-.497.13-1.024.627-1.175 4.356-1.322 9.774-.682 13.467 1.588.443.272.584.852.312 1.295zm.126-3.41c-3.86-2.292-10.23-2.504-13.918-1.384-.593.18-1.22-.164-1.4-.757-.18-.593.164-1.22.757-1.4 4.24-1.288 11.28-1.043 15.717 1.59.533.316.708 1.008.392 1.541-.316.533-1.008.708-1.548.41z" />
            </svg>
            <span className="truncate">
              <span className="text-foreground/50">Listening:</span>
              <span className="mx-1 text-foreground/40">—</span>
              <span className="text-foreground/90 font-medium group-hover:text-primary transition-colors">
                The Less I Know The Better
              </span>
              <span className="mx-1 text-foreground/40">·</span>
              <span className="text-foreground/60">Tame Impala</span>
            </span>
          </a>
        </div>
      )}

      {/* Navigation links */}
      <div className="flex items-center justify-center gap-4 pt-2.5 self-center">
        {links.map((link) => {
          const active = isActivePath(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "group relative transition-colors text-[15px]",
                active
                  ? "text-primary font-medium"
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

