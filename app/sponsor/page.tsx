import type { Metadata } from "next";
import Container from "@/components/container";
import { Companies } from "@/components/companies";
import { CopyEmailInline } from "@/components/copy-email-inline";
import { Focus } from "@/components/focus";
import { LinkPreview } from "@/components/link-preview";

import { DottedSeparator } from "@/components/separator";

export const metadata: Metadata = {
  title: "Contact & Opportunities - Devashish Sharma",
  description:
    "Get in touch with Devashish Sharma for full-stack engineering roles, freelance builds, and technical collaborations.",
  alternates: {
    canonical: "/sponsor",
  },
};

export default async function SponsorsPage() {
  return (
    <>
      <Container className="min-h-screen">
        <div className="text-foreground pt-4 text-base leading-relaxed">
          I'm always open to discussing high-impact software engineering roles,
          full-stack product building, real-time collaborative architectures, and
          AI/RAG engineering. Check out my repositories on{" "}
          <LinkPreview url="https://github.com/DevashishSharma-codes">
            GitHub
          </LinkPreview>{" "}
          and connect with me on{" "}
          <LinkPreview url="https://linkedin.com/in/devashish-sharma-aa470832a">
            LinkedIn
          </LinkPreview>.
        </div>
        <div className="text-foreground pt-4 text-base leading-relaxed">
          Whether you're looking to hire for an engineering team, build a 0→1
          product, or collaborate on open-source software, reach out to me
          directly at <CopyEmailInline>devashishsharma2157@gmail.com</CopyEmailInline> or
          call <a href="tel:6358006255" className="text-primary font-mono text-sm underline">+91 6358006255</a>.
        </div>
        <DottedSeparator className="my-8" />
        <Focus />
        <DottedSeparator className="my-8" />
        <Companies />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </>
  );
}
