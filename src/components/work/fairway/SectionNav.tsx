"use client";

import { useEffect, useState } from "react";
import { Flex, Text } from "@/once-ui/components";
import { navSections } from "./data";

export function SectionNav() {
  const [active, setActive] = useState<string>(navSections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    navSections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Flex
      as="nav"
      aria-label="Case study sections"
      gap="4"
      paddingY="8"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        overflowX: "auto",
        backdropFilter: "blur(12px)",
      }}
    >
      {navSections.map((section) => (
        <a key={section.id} href={`#${section.id}`} aria-current={active === section.id ? "true" : undefined}>
          <Text
            variant="label-default-s"
            onBackground={active === section.id ? "neutral-strong" : "neutral-weak"}
            style={{ whiteSpace: "nowrap", padding: "6px 10px" }}
          >
            {section.label}
          </Text>
        </a>
      ))}
    </Flex>
  );
}
