import { getPosts } from "@/app/utils/utils";
import { baseURL, routes as routesConfig } from "@/app/resources";
import { isWorkProjectVisible } from "@/app/work/projectVisibility";

const origin = `https://${baseURL}`;

export default async function sitemap() {
  const blogs = getPosts(["src", "app", "blog", "posts"]).map((post) => ({
    url: `${origin}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const works = getPosts(["src", "app", "work", "projects"])
    .filter((post) => isWorkProjectVisible(post.slug))
    .map((post) => ({
      url: `${origin}/work/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }));

  const sideProjects = getPosts(["src", "app", "projects", "items"]).map((post) => ({
    url: `${origin}/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const activeRoutes = Object.keys(routesConfig).filter((route) => routesConfig[route]);

  const routes = activeRoutes.map((route) => ({
    url: `${origin}${route === "/" ? "" : route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs, ...works, ...sideProjects];
}
