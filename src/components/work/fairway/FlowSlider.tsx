"use client";

import { useCallback, useState } from "react";
import { SmartImage } from "@/once-ui/components";
import styles from "./flow-slider.module.css";

const SLIDES = [
  {
    src: "/images/projects/fairway/flow-01.jpg",
    alt: "A customer in a hardware aisle pointing at a bag of tile adhesive",
  },
  {
    src: "/images/projects/fairway/flow-02.jpg",
    alt: "A clerk photographing the bag of tile adhesive beside the customer",
  },
  {
    src: "/images/projects/fairway/flow-03.jpg",
    alt: "The clerk explaining aisle, price, and stock to the customer",
  },
  {
    src: "/images/projects/fairway/flow-04.jpg",
    alt: "The clerk pointing down the aisle at the rest of the tools for the job",
  },
  {
    src: "/images/projects/fairway/flow-05.jpg",
    alt: "The customer walking away with tile adhesive, gloves, and a caulk gun",
  },
];

export function FlowSlider() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    const total = SLIDES.length;
    setIndex(((next % total) + total) % total);
  }, []);

  const slide = SLIDES[index];

  return (
    <figure className={styles.bleed}>
      <div
        className={styles.stage}
        tabIndex={0}
        onClick={() => go(index + 1)}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(index + 1);
          if (event.key === "ArrowLeft") go(index - 1);
        }}
        role="group"
        aria-roledescription="carousel"
        aria-label="Store-floor story"
      >
        <SmartImage
          src={slide.src}
          alt={slide.alt}
          aspectRatio="16 / 9"
          objectFit="cover"
          priority={index === 0}
          sizes="100vw"
        />
        <div className={styles.dots}>
          {SLIDES.map((item, i) => (
            <button
              key={item.src}
              type="button"
              className={styles.dot}
              aria-label={`Slide ${i + 1} of ${SLIDES.length}`}
              aria-current={i === index}
              onClick={(event) => {
                event.stopPropagation();
                go(i);
              }}
            />
          ))}
        </div>
      </div>
    </figure>
  );
}
