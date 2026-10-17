import Image from "next/image";
import styles from "./BrandPlatformShowcase.module.scss";

const imagePath = "/images/projects/decor-contractor";

const treatments = [
  { image: "platform-fusion-base.png", label: "FUSION / BASE" },
  { image: "platform-contractor-base.png", label: "CONTRACTOR / BASE" },
  { image: "platform-contractor-inverted.png", label: "CONTRACTOR / INVERTED" },
  { image: "platform-monochrome-light.png", label: "MONOCHROME / LIGHT" },
  { image: "platform-monochrome-dark.png", label: "MONOCHROME / DARK" },
  { image: "platform-android-adaptive.png", label: "ANDROID / ADAPTIVE" },
];

export function BrandPlatformShowcase() {
  return (
    <figure
      className={styles.frame}
      aria-label="Decor identity system shown across iOS, Android, color, inverted, and monochrome applications"
    >
      <section className={styles.platforms} aria-label="Decor app icons in use">
        <Image
          className={styles.halation}
          src={`${imagePath}/platform-halation.svg`}
          width={820}
          height={820}
          quality={90}
          alt=""
        />

        <div className={styles.eyebrowAccent} />
        <p className={styles.eyebrow}>MADE FOR REAL WORLD USE</p>
        <h3 className={styles.headline}>
          One identity.
          <br />
          Every platform.
        </h3>
        <p className={styles.intro}>
          Thoughtfully adapted to the places our customers discover and use Decor.
        </p>

        <div className={`${styles.phone} ${styles.ios}`}>
          <div className={styles.phoneBacking} />
          <Image
            src={`${imagePath}/platform-ios-home.png`}
            width={219}
            height={434}
            quality={90}
            alt="Decor Contractor icon on an iOS home screen"
          />
          <strong>iOS</strong>
        </div>

        <div className={`${styles.phone} ${styles.android}`}>
          <div className={styles.phoneBacking} />
          <Image
            src={`${imagePath}/platform-android-home.png`}
            width={244}
            height={434}
            quality={90}
            alt="Decor Contractor icon on an Android home screen"
          />
          <strong>ANDROID</strong>
        </div>
      </section>

      <section className={styles.system} aria-label="Decor logo treatments">
        <h3 className={styles.systemHeadline}>One adaptable system.</h3>
        <p className={styles.systemIntro}>
          Real assets. A consistent language across color, inverted and monochrome treatments.
        </p>

        <div className={styles.treatments}>
          {treatments.map((treatment) => (
            <div className={styles.treatment} key={treatment.label}>
              <div className={styles.cardShadow} />
              <div className={styles.card}>
                <Image
                  src={`${imagePath}/${treatment.image}`}
                  width={215}
                  height={215}
                  quality={90}
                  alt=""
                />
                <strong>{treatment.label}</strong>
              </div>
            </div>
          ))}
        </div>
      </section>
    </figure>
  );
}
