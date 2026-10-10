import { Button, Column, Flex, Grid, Heading, SmartImage, SmartLink, Tag, Text } from "@/once-ui/components";
import { GuidedHero } from "./GuidedHero";
import { HeroVideo } from "./HeroVideo";
import closingStyles from "./closing-hero.module.css";
import {
  decisions,
  execSummary,
  flowSections,
  metaItems,
  outcomes,
  problemPoints,
  reflectionPoints,
} from "./data";

function Phone({
  image,
  label,
  caption,
  state,
  index,
}: {
  image: string;
  label: string;
  caption: string;
  state: string;
  index: number;
}) {
  return (
    <Column gap="12" fillWidth>
      <SmartImage
        src={image}
        alt={label}
        aspectRatio="9 / 19"
        objectFit="contain"
        unoptimized
        radius="l"
        sizes="(max-width: 960px) 90vw, 280px"
      />
      <Flex gap="8" vertical="center">
        <Text variant="label-default-s" onBackground="neutral-weak" style={{ fontVariantNumeric: "tabular-nums" }}>
          {String(index + 1).padStart(2, "0")}
        </Text>
        <Text variant="label-default-m">{label}</Text>
      </Flex>
      <Text variant="body-default-s" onBackground="neutral-weak">
        {caption}
      </Text>
      <Tag size="s" variant="neutral" label={state} />
    </Column>
  );
}

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

      <HeroVideo
        src="/images/projects/fairway/fairway-story.mp4"
        poster="/images/projects/fairway/fairway-story-poster.jpg"
        label="Fairway+: a customer is looking, then Prism answers"
        aspectRatio="1744 / 1134"
        background="#EEF1F6"
      />

      <HeroVideo />

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
        <SectionLabel n="02 — Problem" title="Three constraints from the floor." />
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

      <Column id="decisions" gap="l" paddingY="l">
        <SectionLabel n="03 — Decisions" title="Six calls that held the product together." />
        <Column gap="l">
          {decisions.map((decision) => (
            <Grid key={decision.index} columns="4" tabletColumns="1" mobileColumns="1" gap="m">
              <Column gap="4">
                <Text variant="label-default-s" onBackground="brand-medium">
                  {decision.index}
                </Text>
                <Heading as="h3" variant="heading-strong-m">
                  {decision.title}
                </Heading>
                <Text variant="label-default-s" onBackground="neutral-weak">
                  {decision.premise}
                </Text>
              </Column>
              <Column style={{ gridColumn: "span 3" }}>
                <Text variant="body-default-l" onBackground="neutral-weak">
                  {decision.body}
                </Text>
              </Column>
            </Grid>
          ))}
        </Column>
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
              unoptimized
              radius="xl"
              sizes="(max-width: 960px) 100vw, 1120px"
            />
          </Column>
        ))}
      </Column>

      <figure className={closingStyles.bleed}>
        <img
          src="/images/projects/fairway/closing-hero.jpg"
          alt="Camera Match flow: capture, identify, locate, kit, and repair list across overlapping phones"
        />
      </figure>

      <Column id="outcomes" gap="l" paddingY="l">
        <SectionLabel n="05 — Outcomes" title="Shipped. Usage validation comes next." />
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
      </Column>

      <Column id="reflection" gap="l" paddingY="l">
        <SectionLabel n="06 — Reflection" title="What I’d keep, and what I’d test next." />
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
