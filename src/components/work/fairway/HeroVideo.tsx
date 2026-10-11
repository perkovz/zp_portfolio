"use client";

import { useEffect, useRef, useState } from "react";
import { Flex, IconButton } from "@/once-ui/components";

const POSTER = "/images/projects/fairway/fairway-first-login-poster.jpg";
const MP4 = "/images/projects/fairway/fairway-first-login-marketing.mp4";

type HeroVideoProps = {
  src?: string;
  poster?: string;
  label?: string;
  aspectRatio?: string;
  background?: string;
  objectFit?: "contain" | "cover";
  soundToggle?: boolean;
};

export function HeroVideo({
  src = MP4,
  poster = POSTER,
  label = "Fairway+ first login",
  aspectRatio = "16 / 9",
  background = "#0A0A0A",
  objectFit = "contain",
  soundToggle = false,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
    if (!nextMuted) {
      void video.play();
    }
  };

  return (
    <Flex
      as="figure"
      fillWidth
      overflow="hidden"
      radius="m"
      horizontal="center"
      vertical="center"
      style={{
        aspectRatio,
        background,
        minWidth: 0,
        maxWidth: "100%",
        width: "100%",
        margin: 0,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {reduceMotion ? (
        <img
          src={poster}
          alt={label}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit,
            objectPosition: "center",
            display: "block",
          }}
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          muted={muted}
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={label}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit,
            objectPosition: "center",
            display: "block",
          }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {soundToggle && !reduceMotion && (
        <IconButton
          icon={muted ? "speakerOff" : "speaker"}
          variant="secondary"
          size="m"
          tooltip={muted ? "Turn sound on" : "Mute"}
          aria-label={muted ? "Turn sound on" : "Mute"}
          onClick={toggleSound}
          style={{
            position: "absolute",
            bottom: "0.75rem",
            right: "0.75rem",
            zIndex: 1,
          }}
        />
      )}
    </Flex>
  );
}
