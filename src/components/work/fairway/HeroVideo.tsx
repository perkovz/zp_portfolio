"use client";

import { useEffect, useState } from "react";
import { Flex } from "@/once-ui/components";

const POSTER = "/images/projects/fairway/fairway-plus-hammers-hero-16x9-poster.png";
const WEBM = "/images/projects/fairway/fairway-plus-hammers-hero-16x9.webm";
const MP4 = "/images/projects/fairway/fairway-plus-hammers-hero-16x9.mp4";

export function HeroVideo() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <Flex
      as="figure"
      fillWidth
      overflow="hidden"
      radius="m"
      style={{
        aspectRatio: "16 / 9",
        background: "#0A0A0A",
      }}
    >
      {reduceMotion ? (
        <img
          src={POSTER}
          alt="Fairway+ hammers click-through: ask, aisle and price, then product detail"
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={POSTER}
          aria-label="Fairway+ hammers click-through: ask, aisle and price, then product detail"
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        >
          <source src={WEBM} type="video/webm" />
          <source src={MP4} type="video/mp4" />
        </video>
      )}
    </Flex>
  );
}
