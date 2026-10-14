import { notFound } from "next/navigation";
import { CameraMatchPrototype } from "@/components/work/fairway/camera-match/CameraMatchPrototype";
import { baseURL } from "@/app/resources";
import { isWorkProjectVisible } from "@/app/work/projectVisibility";

const title = "Fairway+ Camera Match prototype";
const description =
  "Interactive prototype: scan a broken part, confirm the match, and leave with a repair list.";

export async function generateMetadata() {
  if (!isWorkProjectVisible("fairway-plus")) {
    return { robots: { index: false, follow: false } };
  }

  return {
    title,
    description,
    robots: { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: `https://${baseURL}/work/fairway-plus/camera-match`,
    },
  };
}

export default function CameraMatchPage() {
  if (!isWorkProjectVisible("fairway-plus")) {
    notFound();
  }

  return <CameraMatchPrototype />;
}
