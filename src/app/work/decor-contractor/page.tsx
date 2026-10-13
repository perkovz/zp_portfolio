import { DecorContractorCaseStudy } from "@/components/work/decor-contractor/DecorContractorCaseStudy";
import { description, headline, title } from "@/components/work/decor-contractor/data";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

export async function generateMetadata() {
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
