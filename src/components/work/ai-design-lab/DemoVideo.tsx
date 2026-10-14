"use client";

import { useEffect, useRef, useState } from "react";
import { Column, Flex, IconButton, Text } from "@/once-ui/components";

type DemoVideoProps = {
  src: string;
  label: string;
  caption?: string;
  load?: "visible" | "click";
};

export function DemoVideo({ src, label, caption, load = "visible" }: DemoVideoProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (load !== "visible" || shouldLoad || reduceMotion) return;
    const node = frameRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [load, shouldLoad, reduceMotion]);

  useEffect(() => {
    if (!shouldLoad) return;
    const node = frameRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      const video = videoRef.current;
      if (!video) return;
      if (entry.isIntersecting) void video.play();
      else video.pause();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const showVideo = shouldLoad;
  const showPlay = !shouldLoad;

  return (
    <Column gap="12" fillWidth>
      <Flex
        ref={frameRef}
        as="figure"
        fillWidth
        overflow="hidden"
        radius="m"
        horizontal="center"
        vertical="center"
        style={{
          aspectRatio: "16 / 9",
          background: "#0C0E0C",
          minWidth: 0,
          maxWidth: "100%",
          width: "100%",
          margin: 0,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {showVideo && (
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            aria-label={label}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
            }}
          />
        )}
        {showPlay && (
          <Column gap="12" horizontal="center">
            <IconButton
              icon="play"
              variant="secondary"
              size="l"
              aria-label={`Play ${label}`}
              onClick={() => setShouldLoad(true)}
            />
            <Text variant="label-default-s" onBackground="neutral-weak">
              {label}
            </Text>
          </Column>
        )}
      </Flex>
      {caption && (
        <Text variant="body-default-s" onBackground="neutral-weak">
          {caption}
        </Text>
      )}
    </Column>
  );
}
