import { Button, Column, Flex, Grid, Heading, SmartImage, SmartLink, Text } from "@/once-ui/components";
import { FlowSlider } from "./FlowSlider";
import { GuidedHero } from "./GuidedHero";
import { HeroVideo } from "./HeroVideo";
import closingStyles from "./closing-hero.module.css";
import {
  execSummary,
  flowSections,
  metaItems,
  outcomes,
  problemPoints,
  processIntro,
  processTitle,
  reflectionPoints,
} from "./data";

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <Column gap="8" marginBottom="24">
      <Text variant="label-default-s" onBackground="brand-medium">
        {n}
      </Text>
      <Heading as="h2" variant="display-strong-s">
        {title}
      </Heading>
    </Column>
  );
}

export function FairwayCaseStudy() {
  return (
    <Column fillWidth maxWidth="xl" gap="xl" paddingBottom="xl">
      <Button href="/work" variant="tertiary" weight="default" size="m" prefixIcon="chevronLeft">
        Projects
      </Button>

      <Column gap="12" maxWidth="m">
        <Heading as="h1" variant="display-strong-s">
          Bringing AI to the Store Floor with Fairway+
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          An AI in-store assistant designed to minimize store trips and help customers with their projects.
        </Text>
      </Column>

      <HeroVideo
        src="/images/projects/fairway/fairway-hero.mp4"
        poster="/images/projects/fairway/fairway-hero-poster.jpg"
        label="Fairway+ product film"
        aspectRatio="16 / 9"
        background="#E8E8EC"
        objectFit="cover"
      />

      <Column id="overview" gap="l" paddingY="l">
        <SectionLabel n="01 — Summary" title="Overview" />
        <Grid columns="2" tabletColumns="2" mobileColumns="1" gap="l">
          <Column gap="m">
            {execSummary.map((paragraph, i) => (
              <Text
                key={paragraph.slice(0, 32)}
                variant={i === 0 ? "heading-default-m" : "body-default-l"}
                onBackground={i === 0 ? "neutral-strong" : "neutral-weak"}
              >
                {paragraph}
              </Text>
            ))}
          </Column>
          <Column gap="0">
            {metaItems.map((item) => (
              <Column key={item.label} paddingY="16" style={{ borderTop: "1px solid var(--neutral-alpha-weak)" }}>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {item.label.toUpperCase()}
                </Text>
                <Text variant="heading-strong-s">{item.value}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.note}
                </Text>
              </Column>
            ))}
          </Column>
        </Grid>
      </Column>

      <GuidedHero assetBase="/images/projects/fairway" />

      <Column id="problem" gap="l" paddingY="l">
        <SectionLabel n="02 — Problem" title="Three constraints from the floor" />
        <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="l">
          {problemPoints.map((point, i) => (
            <Column key={point.title} gap="12">
              <Text variant="label-default-s" onBackground="brand-medium">
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Heading as="h3" variant="heading-strong-m">
                {point.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {point.body}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>

      <figure className={closingStyles.bleed}>
        <img
          src="/images/projects/fairway/store-floor.jpg"
          alt="On the store floor: an associate with a phone and a box of fasteners listens as a customer points at packed shelves"
        />
      </figure>

      <Column id="process" gap="l" paddingY="l">
        <SectionLabel n="03 — Design process" title={processTitle} />
        <Text variant="body-default-m" onBackground="neutral-weak" style={{ maxWidth: "40rem" }}>
          {processIntro}
        </Text>
        <SmartImage
          src="/images/projects/fairway/competitive-research.png"
          alt="Competitive review: cover, findings, and how Rundoo, Lowe’s, and Home Depot answer"
          aspectRatio="16 / 9"
          objectFit="cover"
          radius="xl"
          sizes="(max-width: 960px) 100vw, 1440px"
        />
        <FlowSlider />
      </Column>

      <Column id="flows" gap="xl" paddingY="l">
        <SectionLabel n="04 — Flows" title="Five steps, one thread" />
        {flowSections.map((flow) => (
          <Column key={flow.id} id={flow.id} gap="l">
            <Column gap="8" maxWidth="s">
              <Flex gap="12" vertical="center">
                <Text variant="label-default-s" onBackground="brand-medium">
                  {flow.number}
                </Text>
                <Heading as="h3" variant="heading-strong-l">
                  {flow.title}
                </Heading>
              </Flex>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {flow.summary}
              </Text>
            </Column>
            <SmartImage
              src={flow.hero}
              alt={flow.heroAlt}
              aspectRatio="1745 / 1135"
              objectFit="cover"
              radius="xl"
              sizes="(max-width: 960px) 100vw, 1440px"
            />
          </Column>
        ))}
      </Column>

      <Column id="camera" gap="l" paddingY="l">
        <SectionLabel n="05 — Camera" title="Start with a click" />
        <Column gap="m" style={{ maxWidth: "40rem" }}>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Customers often aren’t aware of every product a job needs. The fastest way we found to help is AI-powered snap-and-search: a photo starts the match, then the thread fills in the rest of the kit.
          </Text>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Here’s a quick preview of the feature. The full flow stays internal.
          </Text>
        </Column>
      </Column>

      <figure className={closingStyles.bleed}>
        <SmartImage
          src="/images/projects/fairway/closing-hero.jpg"
          alt="Camera Match flow: capture, identify, locate, kit, and repair list across overlapping phones"
          aspectRatio="5 / 3"
          objectFit="cover"
          sizes="100vw"
        />
      </figure>

      <Column id="outcomes" gap="l" paddingY="l">
        <SectionLabel n="06 — Outcomes" title="Shipped and in beta-testing" />
        <Grid columns="2" tabletColumns="2" mobileColumns="1" gap="l">
          {outcomes.map((item) => (
            <Column key={item.label} gap="8" padding="l" border="neutral-medium" radius="l">
              <Text variant="label-default-s" onBackground="neutral-weak">
                {item.label.toUpperCase()}
              </Text>
              <Heading as="h3" variant="heading-strong-m">
                {item.value}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.detail}
              </Text>
            </Column>
          ))}
        </Grid>
        <SmartImage
          src="/images/projects/fairway/google-play.png"
          alt="Fairway+ on Google Play: ask without a SKU, get aisle and price, then open product details"
          aspectRatio="16 / 9"
          objectFit="cover"
          radius="xl"
          sizes="(max-width: 960px) 100vw, 1440px"
        />
      </Column>

      <Column id="reflection" gap="l" paddingY="l">
        <SectionLabel n="07 — Reflection" title="What I’d keep, and what I’d test next" />
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="l">
          {reflectionPoints.map((point) => (
            <Column key={point.title} gap="12">
              <Heading as="h3" variant="heading-strong-m">
                {point.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {point.body}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column gap="12" paddingY="xl" style={{ borderTop: "1px solid var(--neutral-alpha-medium)" }}>
        <Text variant="label-default-s" onBackground="neutral-weak">
          Next project
        </Text>
        <SmartLink href="/work/smart-shower">
          <Heading as="h2" variant="heading-strong-l">
            Prototyping an Advanced Shower GUI with Figma and Crank Storyboard
          </Heading>
        </SmartLink>
        <Text variant="body-default-m" onBackground="neutral-weak">
          Research, design, prototyping, and usability testing for a flexible embedded shower interface built with Crank Storyboard.
        </Text>
      </Column>
    </Column>
  );
}
