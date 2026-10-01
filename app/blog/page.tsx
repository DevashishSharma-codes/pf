import type { Metadata } from "next";
import Container from "@/components/container";
import { Subheading } from "@/components/subheading";
import { DottedSeparator } from "@/components/separator";
import { BlogIndex, type BlogIndexPost } from "@/components/blog/blog-index";
import { getAllFilesFrontMatter } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog - Devashish Sharma",
  description:
    "Engineering notes, system design teardowns, real-time architectures, AI workflows, and project breakdowns.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = (await getAllFilesFrontMatter("blog")) as BlogIndexPost[];

  return (
    <section>
      <Container className="min-h-screen">
        <Subheading className="mt-4">Engineering Notes & Insights</Subheading>
        <p className="text-foreground pt-4 text-base">
          Articles, system design deep-dives, RAG experiments, and lessons
          learned shipping production web applications.
        </p>

        <BlogIndex posts={posts} />
      </Container>
      <Container>
        <DottedSeparator className="my-8" />
      </Container>
    </section>
  );
}
