import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import { Button, Column, Heading, SmartImage } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import ScrollToHash from "@/components/ScrollToHash";

interface ProjectParams {
  params: Promise<{ slug: string }>;
}

const postsDir = ["src", "app", "projects", "items"] as const;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts([...postsDir]);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ProjectParams) {
  const { slug } = await params;
  let post = getPosts([...postsDir]).find((post) => post.slug === slug);
  if (!post) return;

  let { title, publishedAt: publishedTime, summary: description, image } = post.metadata;
  let ogImage = image ? `https://${baseURL}${image}` : `https://${baseURL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/projects/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function SideProject({ params }: ProjectParams) {
  const { slug } = await params;
  let post = getPosts([...postsDir]).find((post) => post.slug === slug);
  if (!post) notFound();

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Column maxWidth="m" gap="16">
        <Button href="/projects" variant="tertiary" weight="default" size="m" prefixIcon="chevronLeft">
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt={post.metadata.title}
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="m">
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
