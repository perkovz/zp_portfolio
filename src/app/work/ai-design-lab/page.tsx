import { notFound } from "next/navigation";
import { AiDesignLabCaseStudy } from "@/components/work/ai-design-lab/AiDesignLabCaseStudy";
import { description, title } from "@/components/work/ai-design-lab/data";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { isWorkProjectVisible } from "@/app/work/projectVisibility";

const ogImage = `https://${baseURL}/images/projects/ai-design-lab/cover.png`;
const slug = "ai-design-lab";

export async function generateMetadata() {
  if (!isWorkProjectVisible(slug)) {
    return { robots: { index: false, follow: false } };
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://${baseURL}/work/ai-design-lab`,
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

export default function AiDesignLab() {
  if (!isWorkProjectVisible(slug)) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            headline: title,
            description,
            url: `https://${baseURL}/work/ai-design-lab`,
            image: ogImage,
            author: { "@type": "Person", name: person.name },
          }),
        }}
      />
      <AiDesignLabCaseStudy />
    </>
  );
}
