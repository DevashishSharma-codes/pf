import React from "react";
import { LinkPreview } from "./link-preview";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="space-y-3.5 pt-2">
      <div className="text-foreground text-base leading-relaxed">
        Full-stack engineer & builder crafting{" "}
        <LinkPreview
          url="https://stage.therepertory.com/"
          className="italic font-medium"
        >
          TheRepertory
        </LinkPreview>{" "}
        and{" "}
        <LinkPreview
          url="https://purplex-topaz.vercel.app/"
          className="italic font-medium"
        >
          Purplex
        </LinkPreview>
        . Currently engineering AI diagnostic workflows at{" "}
        <span className="font-medium">21Spheres</span> and building 0→1 products like{" "}
        <LinkPreview
          url="https://cali-web-one.vercel.app/"
          className="italic font-medium"
        >
          Picasso
        </LinkPreview>
        .
      </div>

      <div className="text-foreground text-base leading-relaxed">
        I{" "}
        <Link
          href="/blog"
          className="italic underline hover:text-primary transition-colors"
        >
          write
        </Link>{" "}
        about real-time systems and AI architectures. Always open to new opportunities —{" "}
        <a
          href="mailto:devashishsharma2157@gmail.com"
          className="italic underline hover:text-primary transition-colors"
        >
          say hello
        </a>{" "}
        or connect on{" "}
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
        , and{" "}
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

