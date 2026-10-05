import type { Metadata } from "next";
import Container from "@/components/container";
import { Work } from "@/components/work";
import { Projects } from "@/components/projects";
import { ThreeDotsSeparator } from "@/components/separator";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { BlogList } from "@/components/blog/blog-list";
import { WorkWithMe } from "@/components/work-with-me";

type HomeBlogPost = {
  slug: string;
  publishedAt: string;
  title: string;
  summary?: string;
  image?: string;
};

export const metadata: Metadata = {
  title: "Devashish Sharma - Full Stack Developer & Builder",
  description:
    "Full Stack Developer, Real-time Systems & AI Engineer, and Builder. Experienced at EnactOn Technologies and 21Spheres.",
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const posts = ((await getAllFilesFrontMatter("blog")) as HomeBlogPost[]).sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return (
    <Container className="pt-4 pb-16">
      <Work />
      <ThreeDotsSeparator />
      <Projects />
      <ThreeDotsSeparator />
      <BlogList posts={posts} />
      <ThreeDotsSeparator />
      <WorkWithMe />
      <ThreeDotsSeparator />
    </Container>
  );
}
