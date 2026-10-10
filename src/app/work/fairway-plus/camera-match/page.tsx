import { CameraMatchPrototype } from "@/components/work/fairway/camera-match/CameraMatchPrototype";
import { baseURL } from "@/app/resources";

const title = "Fairway+ Camera Match prototype";
const description =
  "Interactive prototype: scan a broken part, confirm the match, and leave with a repair list.";

export async function generateMetadata() {
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
  return <CameraMatchPrototype />;
}
