import { FairwayCaseStudy } from "@/components/work/fairway/FairwayCaseStudy";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

const title = "Fairway+: Redesigning the Store-floor Experience.";
const description =
  "An in-store AI assistant for Ace Hardware associates — designed at Epicor so a vague floor question returns aisle, price, and stock before the customer walks away.";

export async function generateMetadata() {
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
