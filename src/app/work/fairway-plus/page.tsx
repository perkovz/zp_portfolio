import { notFound } from "next/navigation";
import { FairwayCaseStudy } from "@/components/work/fairway/FairwayCaseStudy";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { isWorkProjectVisible } from "@/app/work/projectVisibility";

const title = "Bringing AI to the Store Floor with Fairway+";
const slug = "fairway-plus";
const description =
  "AI assistant for hardware store associates designed to help customers get everything the first time.";

export async function generateMetadata() {
  if (!isWorkProjectVisible(slug)) {
    return { robots: { index: false, follow: false } };
  }

  const ogImage = `https://${baseURL}/images/projects/fairway/cover.jpg`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://${baseURL}/work/fairway-plus`,
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

export default function FairwayPlus() {
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
            url: `https://${baseURL}/work/fairway-plus`,
            image: `https://${baseURL}/images/projects/fairway/cover.jpg`,
            author: { "@type": "Person", name: person.name },
          }),
        }}
      />
      <FairwayCaseStudy />
    </>
  );
}
