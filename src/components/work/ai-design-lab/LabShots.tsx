import Image from "next/image";

import styles from "./lab-shots.module.css";

const shots = [
  {
    src: "/images/projects/ai-design-lab/design-lab-intro.png",
    alt: "AI Design Lab introduction page",
  },
  {
    src: "/images/projects/ai-design-lab/full-exampes.png",
    alt: "AI Design Lab full component examples",
  },
  {
    src: "/images/projects/ai-design-lab/buttons-page.png",
    alt: "AI Design Lab buttons documentation page",
  },
];

export function LabShots() {
  return (
    <div className={styles.bleed} aria-label="AI Design Lab workspace examples">
      <div className={styles.track}>
        {shots.map((shot) => (
          <div className={styles.shot} key={shot.src}>
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 768px) 88vw, 67vw"
              unoptimized
            />
          </div>
        ))}
      </div>
    </div>
  );
}
