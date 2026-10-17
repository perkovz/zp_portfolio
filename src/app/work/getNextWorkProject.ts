import { getPosts } from "@/app/utils/utils";
import { isWorkProjectVisible } from "@/app/work/projectVisibility";

export type NextWorkProject = {
  href: string;
  title: string;
  summary: string;
};

export function getNextWorkProject(slug: string): NextWorkProject | null {
  const posts = getPosts(["src", "app", "work", "projects"])
    .filter((post) => isWorkProjectVisible(post.slug))
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
    );

  if (posts.length < 2) {
    return null;
  }

  const index = posts.findIndex((post) => post.slug === slug);
  const next = posts[index === -1 || index === posts.length - 1 ? 0 : index + 1];

  return {
    href: `/work/${next.slug}`,
    title: next.metadata.title,
    summary: next.metadata.summary,
  };
}
