"use client";
import React from "react";
import Container from "./container";
import { motion } from "motion/react";
import { LinkPreview } from "./link-preview";

export const Footer = () => {
  return (
    <Container className="pb-10">
      <footer className="my-8 flex flex-col items-center gap-4">
        <Signature />
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-foreground/40 text-center text-sm text-balance">
            Designed & built by{" "}
            <LinkPreview url="https://github.com/DevashishSharma-codes">
              Devashish Sharma
            </LinkPreview>
            . Explore the code on{" "}
            <LinkPreview url="https://github.com/DevashishSharma-codes">
              GitHub
            </LinkPreview>
            .
          </p>
          <p className="text-foreground/40 text-sm text-balance">
            Vadodara, India ·{" "}
            <LinkPreview url="https://linkedin.com/in/devashish-sharma-aa470832a">
              LinkedIn
            </LinkPreview>{" "}
            ·{" "}
            <LinkPreview url="https://www.instagram.com/devashiiiiit/">
              Instagram
            </LinkPreview>
          </p>
        </div>
      </footer>
    </Container>
  );
};

const Signature = () => {
  return (
    <motion.svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 380 95"
      className="mx-auto h-9 w-auto text-[#c3f53b] transition-colors"
      fill="none"
    >
      {/* Devashish handwritten cursive signature */}
      <motion.path
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          pathLength: { duration: 2.8, ease: "easeInOut" },
          opacity: { duration: 0.4, ease: "easeInOut" },
        }}
        d="M 32 20 C 30 38, 24 58, 20 72 C 18 76, 12 76, 14 68 C 16 58, 28 32, 48 16 C 68 2, 94 6, 96 28 C 98 48, 76 68, 44 70 C 28 71, 24 64, 34 52 C 44 42, 62 48, 76 56 C 84 60, 92 48, 96 42 C 100 36, 106 38, 104 46 C 102 54, 94 60, 102 60 C 110 60, 116 46, 122 46 C 128 46, 130 56, 134 60 C 138 64, 144 46, 154 44 C 162 42, 166 48, 164 56 C 162 62, 154 62, 150 58 C 146 54, 148 46, 156 44 C 162 42, 166 48, 168 58 C 170 60, 174 46, 184 44 C 190 43, 192 48, 188 56 C 186 60, 190 62, 196 56 C 200 50, 204 28, 208 14 C 210 8, 204 8, 202 16 C 198 30, 196 52, 196 60 C 196 60, 202 44, 212 42 C 220 40, 222 48, 222 58 C 224 60, 228 46, 236 44 C 242 42, 244 48, 244 58 C 246 60, 250 46, 260 44 C 266 43, 268 48, 264 56 C 262 60, 266 62, 272 56 C 276 50, 280 28, 284 14 C 286 8, 280 8, 278 16 C 274 30, 272 52, 272 60 C 272 60, 278 44, 288 42 C 296 40, 298 48, 298 58"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Dot over the 'i' */}
      <motion.circle
        cx="240"
        cy="32"
        r="1.8"
        fill="currentColor"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 2.2, duration: 0.3 }}
      />

      {/* Signature Underline Flourish */}
      <motion.path
        initial={{
          pathLength: 0,
          opacity: 0,
        }}
        whileInView={{
          pathLength: 1,
          opacity: 1,
        }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          pathLength: { duration: 1.8, ease: "easeInOut", delay: 1.4 },
          opacity: { duration: 0.3, ease: "easeInOut", delay: 1.4 },
        }}
        d="M 302 58 C 316 62, 332 58, 342 52 C 290 70, 180 78, 40 74 C 18 73, 80 76, 170 73 C 260 70, 330 64, 360 58"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};
