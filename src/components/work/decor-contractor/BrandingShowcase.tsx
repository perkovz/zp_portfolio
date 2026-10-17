import Image from "next/image";
import styles from "./BrandingShowcase.module.scss";

const principles = [
  { number: "01", title: "Recognizable", detail: "Home + paintbrush" },
  { number: "02", title: "Connected family", detail: "Fusion + Contractor" },
  { number: "03", title: "Platform-ready", detail: "Flexible by design" },
];

const imagePath = "/images/projects/decor-contractor";

export function BrandingShowcase() {
  return (
    <figure
      className={styles.frame}
      aria-label="Decor brand evolution: a stronger identity built for the professionals behind the work"
    >
      <Image
        className={styles.ellipseLarge}
        src={`${imagePath}/brand-ellipse-large.svg`}
        width="1500"
        height="1500"
        quality={90}
        alt=""
      />
      <Image
        className={styles.ellipseSmall}
        src={`${imagePath}/brand-ellipse-small.svg`}
        width="1040"
        height="1040"
        quality={90}
        alt=""
      />
      <Image
        className={styles.gridInner}
        src={`${imagePath}/brand-grid-inner.svg`}
        width="840"
        height="840"
        quality={90}
        alt=""
      />
      <Image
        className={styles.gridMiddle}
        src={`${imagePath}/brand-grid-middle.svg`}
        width="975"
        height="975"
        quality={90}
        alt=""
      />
      <Image
        className={styles.gridOuter}
        src={`${imagePath}/brand-grid-outer.svg`}
        width="1110"
        height="1110"
        quality={90}
        alt=""
      />

      <div className={styles.eyebrowAccent} />
      <p className={styles.eyebrow}>DECOR / BRAND EVOLUTION</p>

      <h3 className={styles.headline}>
        Built for the
        <br />
        professionals
        <br />
        behind the work.
      </h3>

      <p className={styles.intro}>
        A refreshed app identity that connects the tools, the trade and the people who rely on Decor every day.
      </p>

      <div className={styles.principles}>
        {principles.map((principle) => (
          <div className={styles.principle} key={principle.number}>
            <span className={styles.principleNumber}>{principle.number}</span>
            <strong>{principle.title}</strong>
            <span className={styles.principleDetail}>{principle.detail}</span>
          </div>
        ))}
      </div>

      <div className={`${styles.groupFrame} ${styles.contractorGroup}`}>
        <Image
          className={styles.groupImage}
          src={`${imagePath}/contractor-group.png`}
          width="753"
          height="751"
          quality={90}
          alt=""
        />
      </div>
      <div className={`${styles.groupFrame} ${styles.fusionGroup}`}>
        <Image
          className={styles.groupImage}
          src={`${imagePath}/fusion-group.png`}
          width="759"
          height="751"
          quality={90}
          alt=""
        />
      </div>
    </figure>
  );
}
