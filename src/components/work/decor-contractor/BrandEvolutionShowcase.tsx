import Image from "next/image";
import styles from "./BrandEvolutionShowcase.module.scss";

const imagePath = "/images/projects/decor-contractor";

const stages = [
  { image: "evolution-legacy.png", label: "EARLIER DECOR IDENTITY" },
  { image: "evolution-fusion.png", label: "DECOR FUSION" },
  { image: "evolution-contractor.png", label: "DECOR CONTRACTOR" },
];

const evolutionPoints = [
  {
    number: "01",
    title: "RECOGNITION",
    detail: "The paintbrush remains a distinctive, trade-relevant detail.",
  },
  {
    number: "02",
    title: "COHESION",
    detail: "A shared visual language connects Fusion and Contractor.",
  },
  {
    number: "03",
    title: "FLEXIBILITY",
    detail: "The system adapts to color, monochrome and app contexts.",
  },
];

export function BrandEvolutionShowcase() {
  return (
    <figure
      className={styles.frame}
      aria-label="Decor identity evolution from the earlier mark to the coordinated Fusion and Contractor identities"
    >
      <div className={styles.eyebrowAccent} />
      <p className={styles.eyebrow}>THE EVOLUTION</p>

      <h3 className={styles.headline}>Familiar foundations. Sharper expression.</h3>
      <p className={styles.intro}>
        We retained the brush-led heritage of Decor, then developed a coordinated identity for two distinct app experiences.
      </p>

      <div className={styles.stages}>
        {stages.map((stage, index) => (
          <div className={styles.stage} key={stage.label}>
            <Image
              className={styles.logo}
              src={`${imagePath}/${stage.image}`}
              width="440"
              height="440"
              alt=""
            />
            <strong>{stage.label}</strong>
            {index < stages.length - 1 && <span className={styles.arrow}>→</span>}
          </div>
        ))}
      </div>

      <div className={styles.divider} />
      <div className={styles.points}>
        {evolutionPoints.map((point) => (
          <div className={styles.point} key={point.number}>
            <span className={styles.pointNumber}>{point.number}</span>
            <div>
              <strong>{point.title}</strong>
              <p>{point.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}
