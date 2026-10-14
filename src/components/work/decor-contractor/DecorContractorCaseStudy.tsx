import Image from "next/image";
import { Button, Column, Flex, Grid, Heading, SmartLink, Text } from "@/once-ui/components";
import {
  authSteps,
  challengeClose,
  challengeIntro,
  contribution,
  description,
  directionIntro,
  directionPoints,
  existingWorkflows,
  execSummary,
  headline,
  hierarchyMoments,
  metaItems,
  outcomes,
  paymentRevisions,
  reflectionQuestions,
  scannerFeatures,
  scannerPath,
  systemPoints,
  systemStats,
  title,
} from "./data";
import { BrandingShowcase } from "./BrandingShowcase";
import { BrandEvolutionShowcase } from "./BrandEvolutionShowcase";
import { BrandPlatformShowcase } from "./BrandPlatformShowcase";
import { HeroVideo } from "@/components/work/fairway/HeroVideo";

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

function FlowHeading({ n, title: heading }: { n: string; title: string }) {
  return (
    <Flex gap="12" vertical="center">
      <Text variant="label-default-s" onBackground="brand-medium">
        {n}
      </Text>
      <Heading as="h3" variant="heading-strong-l">
        {heading}
      </Heading>
    </Flex>
  );
}

export function DecorContractorCaseStudy() {
  return (
    <Column fillWidth maxWidth="xl" gap="xl" paddingBottom="xl">
      <Button href="/work" variant="tertiary" weight="default" size="m" prefixIcon="chevronLeft">
        Projects
      </Button>

      <HeroVideo
        src="/images/projects/decor-contractor/payments-promo.mp4"
        poster="/images/projects/decor-contractor/payments-promo.jpg"
        label="Decor Contractor payments experience"
        aspectRatio="16 / 9"
        background="#062D37"
        objectFit="cover"
      />

      <Column gap="12" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">
          {title}
        </Text>
        <Heading as="h1" variant="display-strong-m">
          {headline}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          {description}
        </Text>
      </Column>

      <Image
        src="/images/projects/decor-contractor/paint-job.png"
        alt="Professional painter applying paint to an interior wall"
        width={1920}
        height={1080}
        sizes="(max-width: 1200px) 100vw, 1200px"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: "var(--radius-m)",
        }}
      />

      <Image
        src="/images/projects/decor-contractor/interior-painter-break.png"
        alt="Professional painter taking a break while working in an interior"
        width={1920}
        height={1080}
        sizes="(max-width: 1200px) 100vw, 1200px"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: "var(--radius-m)",
        }}
      />

      <Image
        src="/images/projects/decor-contractor/paint-store-interior.png"
        alt="Contractor walking through a modern paint store"
        width={1920}
        height={1080}
        sizes="(max-width: 1200px) 100vw, 1200px"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          borderRadius: "var(--radius-m)",
        }}
      />

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
        <SectionLabel n="02 Challenge" title="High-value workflows, competing urgencies." />
        <Column gap="m" maxWidth="m">
          <Text variant="heading-default-m">{challengeIntro}</Text>
          <Text variant="body-default-l" onBackground="neutral-weak">
            {challengeClose}
          </Text>
        </Column>
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="12">
          {existingWorkflows.map((workflow, i) => (
            <Flex
              key={workflow}
              gap="16"
              vertical="start"
              padding="l"
              border="neutral-medium"
              radius="l"
            >
              <Text variant="label-default-s" onBackground="brand-medium" style={{ fontVariantNumeric: "tabular-nums" }}>
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Text variant="body-default-m">{workflow}</Text>
            </Flex>
          ))}
        </Grid>
      </Column>

      <Column id="direction" gap="l" paddingY="l">
        <SectionLabel n="03 Direction" title="An account relationship, not an ordering tool." />
        <Column maxWidth="m">
          <Text variant="heading-default-m">{directionIntro}</Text>
        </Column>
        <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="l">
          {directionPoints.map((point, i) => (
            <Column key={point.title} gap="12" padding="l" border="neutral-medium" radius="l">
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

      <Column id="branding" gap="l" paddingY="l">
        <SectionLabel n="04 Branding" title="A stronger identity." />
        <BrandingShowcase />
        <BrandEvolutionShowcase />
        <BrandPlatformShowcase />
      </Column>

      <Column id="workflows" gap="xl" paddingY="l">
        <SectionLabel n="05 Workflows" title="Designing the moments that matter." />

        <Column id="scanning" gap="l">
          <Column gap="12" maxWidth="m">
            <FlowHeading n="05.1" title="Fast product lookup with barcode scanning" />
            <Text variant="body-default-m" onBackground="neutral-weak">
              Contractors may encounter a product in a store, truck, or jobsite and simply need to confirm its price. I designed the barcode experience around a short path. The key decision was to keep the result close to the scanning context. When the task is price checking, unnecessary confirmation screens slow the contractor down.
            </Text>
          </Column>
          <Flex gap="8" wrap>
            {scannerPath.map((step, i) => (
              <Flex key={step} gap="8" vertical="center">
                <Flex
                  paddingX="16"
                  paddingY="8"
                  border="neutral-medium"
                  radius="l"
                  vertical="center"
                  gap="8"
                >
                  <Text variant="label-default-s" onBackground="brand-medium">
                    {String(i + 1).padStart(2, "0")}
                  </Text>
                  <Text variant="label-default-m">{step}</Text>
                </Flex>
                {i < scannerPath.length - 1 && (
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    →
                  </Text>
                )}
              </Flex>
            ))}
          </Flex>
          <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="12">
            {scannerFeatures.map((feature) => (
              <Text key={feature} variant="body-default-m" onBackground="neutral-weak">
                {feature}
              </Text>
            ))}
          </Grid>
        </Column>

        <Column id="payments" gap="l">
          <Column gap="12" maxWidth="m">
            <FlowHeading n="05.2" title="A more trustworthy payment flow" />
            <Text variant="body-default-m" onBackground="neutral-weak">
              The payment experience required more than a form and a confirmation screen. Users needed to understand exactly what they were paying, which statement period it applied to, which payment method would be used, and what would happen next.
            </Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              The confirmation state was also revised to avoid implying that an ACH payment had already settled. “Payment submitted” or “Payment sent” communicates that the request was initiated while leaving room for processing time.
            </Text>
          </Column>
          <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="12">
            {paymentRevisions.map((item, i) => (
              <Flex
                key={item}
                gap="16"
                vertical="start"
                padding="l"
                border="neutral-medium"
                radius="l"
              >
                <Text variant="label-default-s" onBackground="brand-medium" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {String(i + 1).padStart(2, "0")}
                </Text>
                <Text variant="body-default-m">{item}</Text>
              </Flex>
            ))}
          </Grid>
        </Column>

        <Column id="hierarchy" gap="l">
          <Column gap="12" maxWidth="m">
            <FlowHeading n="05.3" title="Clarifying visual hierarchy" />
            <Text variant="body-default-m" onBackground="neutral-weak">
              Several payment screens originally repeated the same concept in multiple places. A screen could contain a navigation title, a large inline heading, and a summary heading that all communicated “payment.” Simplifying the hierarchy made each screen feel purposeful and reduced competition between headings.
            </Text>
          </Column>
          <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="l">
            {hierarchyMoments.map((moment, i) => (
              <Column key={moment.title} gap="12" padding="l" border="neutral-medium" radius="l">
                <Text variant="label-default-s" onBackground="brand-medium">
                  {String(i + 1).padStart(2, "0")}
                </Text>
                <Heading as="h3" variant="heading-strong-m">
                  {moment.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  {moment.body}
                </Text>
              </Column>
            ))}
          </Grid>
        </Column>

        <Column id="authentication" gap="l">
          <Column gap="12" maxWidth="m">
            <FlowHeading n="05.4" title="Authentication that respects platform boundaries" />
            <Text variant="body-default-m" onBackground="neutral-weak">
              The invitation flow used Microsoft Entra ID for authentication. A key product-design constraint was that the portal could control the invitation, branding, redirect destination, onboarding, and application session — and nothing more. This allowed the product to provide a branded, understandable entry point without pretending to own a security flow it could not control.
            </Text>
          </Column>
          <Image
            src="/images/projects/decor-contractor/entra-id.png"
            alt="Microsoft Entra ID authentication and Decor Contractor access flow"
            width={6049}
            height={2906}
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: "var(--radius-m)",
            }}
          />
          <Column gap="0">
            {authSteps.map((step, i) => (
              <Flex
                key={step}
                gap="16"
                vertical="center"
                paddingY="16"
                style={{ borderTop: "1px solid var(--neutral-alpha-weak)" }}
              >
                <Text variant="label-default-s" onBackground="brand-medium" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {String(i + 1).padStart(2, "0")}
                </Text>
                <Text variant="body-default-m">{step}</Text>
              </Flex>
            ))}
          </Column>
        </Column>
      </Column>

      <Column id="system" gap="l" paddingY="l">
        <SectionLabel n="06 System" title="Building consistency through the design system." />
        <Column gap="m" maxWidth="m">
          <Text variant="heading-default-m">
            The portal’s workflows depended on repeated patterns: buttons, selectable rows, payment methods, checkboxes, dividers, headers, and confirmation states.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak">
            I replaced hand-built interaction patterns with shared Mobile Core components across the payment experience. This improved more than visual consistency. It created a stronger relationship between the component library and real product workflows, making future changes easier to apply and reducing the risk of small interaction differences across screens.
          </Text>
        </Column>
        <Grid columns="4" tabletColumns="2" mobileColumns="1" gap="l">
          {systemStats.map((stat) => (
            <Column key={stat.label} gap="8" padding="l" border="neutral-medium" radius="l">
              <Heading as="h3" variant="display-strong-s">
                {stat.value}
              </Heading>
              <Text variant="heading-strong-s">{stat.label}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {stat.note}
              </Text>
            </Column>
          ))}
        </Grid>
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="12">
          {systemPoints.map((point) => (
            <Text key={point} variant="body-default-m" onBackground="neutral-weak">
              {point}
            </Text>
          ))}
        </Grid>
      </Column>

      <Column id="outcome" gap="l" paddingY="l">
        <SectionLabel n="07 Outcome" title="A connected account experience." />
        <Column maxWidth="m">
          <Text variant="heading-default-m">
            The project produced a clearer and more coherent contractor experience across product discovery, payments, authentication, and account management.
          </Text>
        </Column>
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="l">
          {outcomes.map((item) => (
            <Column key={item.title} gap="12" padding="l" border="neutral-medium" radius="l">
              <Heading as="h3" variant="heading-strong-m">
                {item.title}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {item.body}
              </Text>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column id="reflection" gap="l" paddingY="l">
        <SectionLabel n="08 Reflection" title="Enterprise design is often about reducing uncertainty." />
        <Column gap="m" maxWidth="m">
          <Text variant="heading-default-m">
            A contractor does not necessarily need more information. They need the right information at the right moment.
          </Text>
          <Text variant="body-default-l" onBackground="neutral-weak">
            By focusing on those questions, the portal became easier to navigate without hiding the complexity of the underlying business system.
          </Text>
        </Column>
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="12">
          {reflectionQuestions.map((question) => (
            <Flex
              key={question}
              padding="l"
              border="neutral-medium"
              radius="l"
              vertical="center"
            >
              <Text variant="heading-default-s">{question}</Text>
            </Flex>
          ))}
        </Grid>
      </Column>

      <Column id="contribution" gap="l" paddingY="l">
        <SectionLabel n="09 Contribution" title="What I owned." />
        <Column maxWidth="m">
          <Text variant="body-default-l" onBackground="neutral-weak">
            {contribution}
          </Text>
        </Column>
      </Column>

      <Column gap="12" paddingY="xl" style={{ borderTop: "1px solid var(--neutral-alpha-medium)" }}>
        <Text variant="label-default-s" onBackground="neutral-weak">
          Next project
        </Text>
        <SmartLink href="/work/ai-design-lab">
          <Heading as="h2" variant="heading-strong-l">
            Propello AI Design Lab
          </Heading>
        </SmartLink>
        <Text variant="body-default-m" onBackground="neutral-weak">
          A code-first prototyping workspace where Retail teams generate and validate functional prototypes instead of static screens.
        </Text>
      </Column>
    </Column>
  );
}
