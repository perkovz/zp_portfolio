import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { SideProjects } from "@/components/projects/Projects";
import { baseURL, person, projects } from "@/app/resources";

export async function generateMetadata() {
  const title = projects.title;
  const description = projects.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/projects/`,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function ProjectsPage() {
  let allProjects = getPosts(["src", "app", "projects", "items"]);

  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            headline: projects.title,
            description: projects.description,
            url: `https://${baseURL}/projects`,
            author: { "@type": "Person", name: person.name },
            hasPart: allProjects.map((project) => ({
              "@type": "CreativeWork",
              headline: project.metadata.title,
              description: project.metadata.summary,
              url: `https://${baseURL}/projects/${project.slug}`,
            })),
          }),
        }}
      />
      <SideProjects />
    </Column>
  );
}
