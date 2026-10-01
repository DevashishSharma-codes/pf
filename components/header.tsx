import React from "react";
import { LinkPreview } from "./link-preview";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <div className="text-foreground pt-4 text-base">
        I'm a full-stack engineer and builder building{" "}
        <LinkPreview
          url="https://stage.therepertory.com/"
          className="italic"
        >
          TheRepertory
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://purplex-topaz.vercel.app/"
          className="italic"
        >
          Purplex
        </LinkPreview>
        . Over the past years, I've focused on architecting high-performance systems, real-time collaboration engines, and AI-powered software that people love to use.
      </div>

      <div className="text-foreground pt-4 text-base">
        Currently interning as a Full Stack Developer at{" "}
        <span className="font-medium">21Spheres</span>, engineering the AI case-taking and clinical diagnostic workflow platform for practicing clinicians and healthcare teams.
      </div>

      <div className="text-foreground pt-4 text-base">
        I love building 0→1 products: from{" "}
        <LinkPreview
          url="https://cali-web-one.vercel.app/"
          className="italic"
        >
          Picasso
        </LinkPreview>{" "}
        (a sub-50ms real-time collaborative canvas) to freelance financial platforms like{" "}
        <LinkPreview
          url="https://goals.wealthswisdom.com/"
          className="italic"
        >
          Wealth's Wisdom
        </LinkPreview>
        . I regularly{" "}
        <Link
          href="/blog"
          className="italic underline"
        >
          write
        </Link>{" "}
        about real-time architectures, WebSockets, RAG workflows, and lessons from my engineering journey.
      </div>

      <div className="text-foreground pt-4 text-base">
        Always open to interesting conversations about engineering, startups, and new opportunities.{" "}
        <a
          href="mailto:devashishsharma2157@gmail.com"
          className="italic underline"
        >
          Say hello
        </a>{" "}
        or connect with me on{" "}
        <LinkPreview
          url="https://github.com/DevashishSharma-codes"
          className="italic"
        >
          GitHub
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://linkedin.com/in/devashish-sharma-aa470832a"
          className="italic"
        >
          LinkedIn
        </LinkPreview>
        , or{" "}
        <LinkPreview
          url="https://www.instagram.com/devashiiiiit/"
          className="italic"
        >
          Instagram
        </LinkPreview>
        .
      </div>
    </div>
  );
};
