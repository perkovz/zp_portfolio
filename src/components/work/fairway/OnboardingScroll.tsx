"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./onboarding-scroll.module.css";

const START = "/images/projects/fairway/onboarding-start.jpg";
const END = "/images/projects/fairway/onboarding-end.jpg";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export function OnboardingScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.28;
      const range = Math.max(1, rect.height - vh * 0.62);
      const t = (-rect.top + start) / range;
      setProgress(Math.max(0, Math.min(1, t)));
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const p = easeOutCubic(progress);
  const rise = (1 - p) * 12;

  return (
    <div ref={trackRef} className={styles.track}>
      <div className={styles.sticky}>
        <div className={styles.stage}>
          <img
            src={START}
            alt=""
            className={styles.frame}
            style={{ opacity: 1 - p, transform: `translate3d(0, ${rise}%, 0)` }}
            aria-hidden={p > 0.85}
          />
          <img
            src={END}
            alt="Fairway+ onboarding: signup behind a welcome screen, phones rising into frame"
            className={styles.frame}
            style={{ opacity: p, transform: `translate3d(0, ${rise - 12}%, 0)` }}
          />
        </div>
      </div>
    </div>
  );
}
