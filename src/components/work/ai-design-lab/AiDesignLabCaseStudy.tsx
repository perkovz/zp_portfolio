import { Button, Column, Flex, Grid, Heading, SmartImage, SmartLink, Text } from "@/once-ui/components";
import { HeroVideo } from "@/components/work/fairway/HeroVideo";
import { DemoVideo } from "./DemoVideo";
import {
  approachPoints,
  capabilities,
  challengePoints,
  demos,
  description,
  environmentClose,
  environmentIntro,
  execSummary,
  impactPoints,
  metaItems,
  takeaway,
  title,
} from "./data";

function SectionLabel({ n, title: heading }: { n: string; title: string }) {
  return (
    <Column gap="8" marginBottom="24">
      <Text variant="label-default-s" onBackground="brand-medium">
        {n}
      </Text>
      <Heading as="h2" variant="display-strong-s">
        {heading}
      </Heading>
    </Column>
  );
}

export function AiDesignLabCaseStudy() {
  return (
    <Column fillWidth maxWidth="xl" gap="xl" paddingBottom="xl">
      <Button href="/work" variant="tertiary" weight="default" size="m" prefixIcon="chevronLeft">
        Projects
      </Button>

      <HeroVideo
        src="/images/projects/ai-design-lab/design-excellence.mp4"
        poster="/images/projects/ai-design-lab/cover.png"
        label="Design Excellence with AI Design Lab"
        aspectRatio="16 / 9"
        background="#0C0E0C"
        objectFit="contain"
        soundToggle
      />

      <Column gap="12" maxWidth="m">
        <Heading as="h1" variant="display-strong-m">
          {title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {description}
        </Text>
      </Column>

      <Column id="overview" gap="l" paddingY="l">
        <SectionLabel n="01 Summary" title="Overview" />
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

      <Column id="challenge" gap="l" paddingY="l">
        <SectionLabel n="02 Challenge" title="Static screens hide the real problems." />
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="l">
          {challengePoints.map((point, i) => (
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
        <SmartImage
          src="/images/projects/ai-design-lab/annotated-work.png"
          alt="Annotated Create Children screens covering attribute groups, dropdowns, and selection states"
          aspectRatio="3747 / 2274"
          objectFit="contain"
          radius="m"
          unoptimized
          sizes="(max-width: 960px) 100vw, 1120px"
        />
      </Column>

      <Column id="approach" gap="l" paddingY="l">
        <SectionLabel n="03 Approach" title="A workspace that starts in code." />
        <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="l">
          {approachPoints.map((point, i) => (
            <Column key={point.title} gap="12" padding="l" border="neutral-medium" radius="l">
              <Text variant="label-default-s" onBackground="brand-medium">
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Heading as="h3" variant="heading-strong-m">
                {point.title}
              </Heading>
              {(Array.isArray(point.body) ? point.body : [point.body]).map((paragraph) => (
                <Text key={paragraph.slice(0, 32)} variant="body-default-m" onBackground="neutral-weak">
                  {paragraph}
                </Text>
              ))}
            </Column>
          ))}
        </Grid>
        <SmartImage
          src="/images/projects/ai-design-lab/kendo-ui.png"
          alt="Kendo UI component library in Figma, the system the lab generates from"
          aspectRatio="3837 / 2013"
          objectFit="contain"
          radius="m"
          unoptimized
          sizes="(max-width: 960px) 100vw, 1120px"
        />
      </Column>

      <Column id="environment" gap="l" paddingY="l">
        <SectionLabel n="04 In the product" title="Designing in a real product environment." />
        <Column maxWidth="m">
          <Text variant="heading-default-m">{environmentIntro}</Text>
        </Column>
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="12">
          {capabilities.map((capability, i) => (
            <Flex
              key={capability}
              gap="16"
              vertical="start"
              padding="l"
              border="neutral-medium"
              radius="l"
            >
              <Text variant="label-default-s" onBackground="brand-medium" style={{ fontVariantNumeric: "tabular-nums" }}>
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Text variant="body-default-m">{capability}</Text>
            </Flex>
          ))}
        </Grid>
        <Column maxWidth="m">
          <Text variant="body-default-m" onBackground="neutral-weak">
            {environmentClose}
          </Text>
        </Column>
        <DemoVideo
          src={demos.linkingProducts.src}
          label={demos.linkingProducts.label}
          caption={demos.linkingProducts.caption}
        />
      </Column>

      <Column id="impact" gap="l" paddingY="l">
        <SectionLabel n="05 Impact" title="Faster iteration, without treating quality as optional." />
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="l">
          {impactPoints.map((point) => (
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
        <DemoVideo
          src={demos.customerPosSearch.src}
          label={demos.customerPosSearch.label}
          caption={demos.customerPosSearch.caption}
        />
        <DemoVideo
          src={demos.arStatements.src}
          label={demos.arStatements.label}
          caption={demos.arStatements.caption}
          load="click"
        />
      </Column>

      <Column id="takeaway" gap="l" paddingY="l">
        <SectionLabel n="06 Takeaway" title="Shape the product, don’t just picture it." />
        <Column gap="m" maxWidth="m">
          {takeaway.map((paragraph, i) => (
            <Text
              key={paragraph.slice(0, 32)}
              variant={i === 0 ? "heading-default-m" : "body-default-l"}
              onBackground={i === 0 ? "neutral-strong" : "neutral-weak"}
            >
              {paragraph}
            </Text>
          ))}
        </Column>
      </Column>

      <Column gap="12" paddingY="xl" style={{ borderTop: "1px solid var(--neutral-alpha-medium)" }}>
        <Text variant="label-default-s" onBackground="neutral-weak">
          Next project
        </Text>
        <SmartLink href="/work/fairway-plus">
          <Heading as="h2" variant="heading-strong-l">
            Fairway+: Redesigning the Store-floor Experience.
          </Heading>
        </SmartLink>
        <Text variant="body-default-m" onBackground="neutral-weak">
          An in-store AI assistant for Ace Hardware associates designed so a vague floor question returns aisle, price, and stock before the customer walks away.
        </Text>
      </Column>
    </Column>
  );
}
