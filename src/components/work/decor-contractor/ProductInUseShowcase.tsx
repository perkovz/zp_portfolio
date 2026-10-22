"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./ProductInUseShowcase.module.scss";

export function ProductInUseShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const play = () => {
      void video.play().catch(() => undefined);
    };

    play();
    video.addEventListener("canplay", play);

    return () => video.removeEventListener("canplay", play);
  }, []);

  return (
    <figure
      className={styles.frame}
      aria-label="Contractor checking the Decor Contractor app during a renovation, with the payment flow playing alongside"
    >
      <Image
        src="/images/projects/decor-contractor/contractor-checking-app-mid-Renovation.png"
        alt="Contractor checking a mobile app during an interior renovation"
        fill
        quality={90}
        sizes="(max-width: 1200px) 100vw, 1200px"
      />
      <div className={styles.device}>
        <video
          ref={videoRef}
          className={styles.video}
          src="/images/projects/decor-contractor/payment.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Decor Contractor payment flow"
        />
      </div>
    </figure>
  );
}
