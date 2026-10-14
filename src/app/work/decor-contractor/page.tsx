import { notFound } from "next/navigation";
import { DecorContractorCaseStudy } from "@/components/work/decor-contractor/DecorContractorCaseStudy";
import { description, headline, title } from "@/components/work/decor-contractor/data";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";
import { isWorkProjectVisible } from "@/app/work/projectVisibility";

const slug = "decor-contractor";

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
      url: `https://${baseURL}/work/decor-contractor`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function DecorContractor() {
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
            headline,
            description,
            url: `https://${baseURL}/work/decor-contractor`,
            author: { "@type": "Person", name: person.name },
          }),
        }}
      />
      <DecorContractorCaseStudy />
    </>
  );
}
