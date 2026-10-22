import Image from "next/image";
import { Button, Carousel, Column, Flex, Grid, Heading, Text } from "@/once-ui/components";
import { getNextWorkProject } from "@/app/work/getNextWorkProject";
import { NextProject } from "@/components/work/NextProject";
import { HeroVideo } from "@/components/work/fairway/HeroVideo";
import { BrandingShowcase } from "./BrandingShowcase";
import { DecisionShowcase } from "./DecisionShowcase";
import { ProductInUseShowcase } from "./ProductInUseShowcase";
import {
  authSteps,
  contribution,
  description,
  headline,
  measurementPlan,
  metaItems,
  phases,
  problem,
  protagonist,
  research,
  systemPoints,
  systemStats,
  tensionPoints,
  title,
  workflowBeats,
} from "./data";

function SectionLabel({ n, title: heading }: { n: string; title: string }) {
  return (
    <Column gap="8" marginBottom="24">
      <Text variant="label-default-s" onBackground="brand-medium">{n}</Text>
      <Heading as="h2" variant="display-strong-s">{heading}</Heading>
    </Column>
  );
}

function BeatCopy({ problem: issue, solution, outcome }: { problem: string; solution: string; outcome: string }) {
  return (
    <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="12">
      {[
        ["Problem", issue],
        ["Decision", solution],
        ["Outcome", outcome],
      ].map(([label, body]) => (
        <Column key={label} gap="8" padding="l" border="neutral-medium" radius="l">
          <Text variant="label-default-s" onBackground="brand-medium">{label}</Text>
          <Text variant="body-default-m" onBackground="neutral-weak">{body}</Text>
        </Column>
      ))}
    </Grid>
  );
}

export function DecorContractorCaseStudy() {
  const nextProject = getNextWorkProject("decor-contractor");

  return (
    <Column fillWidth maxWidth="xl" gap="xl" paddingBottom="xl">
      <Button href="/work" variant="tertiary" weight="default" size="m" prefixIcon="chevronLeft">
        Projects
      </Button>

      <Column gap="12" maxWidth="m">
        <Heading as="h1" variant="display-strong-m">{title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">{headline}</Text>
      </Column>

      <HeroVideo
        src="/images/projects/decor-contractor/payments-promo.mp4"
        poster="/images/projects/decor-contractor/payments-promo.jpg"
        label="A contractor reviewing and submitting a payment on a mobile phone"
        aspectRatio="16 / 9"
        background="#062D37"
        objectFit="cover"
      />

      <Column id="maya" gap="l" paddingY="l">
        <SectionLabel n="01 The moment" title={protagonist.title} />
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="l">
          <Column gap="m">
            <Text variant="heading-default-m">{protagonist.body}</Text>
            <Text variant="body-default-s" onBackground="neutral-weak">{protagonist.note}</Text>
          </Column>
          <Column gap="0">
            {metaItems.map((item) => (
              <Column key={item.label} paddingY="16" style={{ borderTop: "1px solid var(--neutral-alpha-weak)" }}>
                <Text variant="label-default-s" onBackground="neutral-weak">{item.label.toUpperCase()}</Text>
                <Text variant="heading-strong-s">{item.value}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">{item.note}</Text>
              </Column>
            ))}
          </Column>
        </Grid>
      </Column>

      <Column id="problem" gap="l" paddingY="l">
        <SectionLabel n="02 The tension" title={problem.title} />
        <Column gap="12" maxWidth="m">
          <Text variant="heading-default-m">{problem.subtitle}</Text>
          <Text variant="body-default-l" onBackground="neutral-weak">{problem.description}</Text>
        </Column>
        <Image
          src="/images/projects/decor-contractor/problem-definition.png"
          alt="Redacted legacy contractor payment portal shown on a desktop browser"
          width={1920}
          height={1080}
          quality={90}
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{ display: "block", width: "100%", height: "auto", borderRadius: "var(--radius-m)" }}
        />
        <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="l">
          {tensionPoints.map((point, i) => (
            <Column key={point.title} gap="12" padding="l" border="neutral-medium" radius="l">
              <Text variant="label-default-s" onBackground="brand-medium">{String(i + 1).padStart(2, "0")}</Text>
              <Heading as="h3" variant="heading-strong-m">{point.title}</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">{point.body}</Text>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column id="direction" gap="l" paddingY="l">
        <SectionLabel n="03 The thesis" title="Bring the counter to the job site." />
        <ProductInUseShowcase />
        <Carousel
          indicator="line"
          aspectRatio="16 / 9"
          sizes="(max-width: 1200px) 100vw, 1200px"
          images={[
            {
              src: "/images/projects/decor-contractor/paint-job.png",
              alt: "Professional painter applying paint to an interior wall",
            },
            {
              src: "/images/projects/decor-contractor/interior-painter-break.png",
              alt: "Professional painter taking a break during an interior job",
            },
            {
              src: "/images/projects/decor-contractor/paint-store-interior.png",
              alt: "Contractor walking through a paint store",
            },
          ]}
        />
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="l">
          <Column gap="m">
            <Text variant="heading-default-m">
              The product should make the supplier account useful where the work happens, not ask contractors to reconstruct their context at a desk.
            </Text>
            <Text variant="body-default-l" onBackground="neutral-weak">{description}</Text>
          </Column>
          <Column gap="12">
            <Text variant="label-default-s" onBackground="brand-medium">Research and planning</Text>
            {research.map((item, i) => (
              <Flex key={item} gap="12" vertical="start">
                <Text variant="label-default-s" onBackground="brand-medium" style={{ minWidth: "2rem" }}>{String(i + 1).padStart(2, "0")}</Text>
                <Text variant="body-default-m" onBackground="neutral-weak">{item}</Text>
              </Flex>
            ))}
          </Column>
        </Grid>
        <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="l">
          {phases.map((phase) => (
            <Column key={phase.number} gap="12" padding="l" border="neutral-medium" radius="l">
              <Flex horizontal="space-between" vertical="center">
                <Text variant="label-default-s" onBackground="brand-medium">{phase.number}</Text>
                <Text variant="label-default-s" onBackground="neutral-weak">{phase.state}</Text>
              </Flex>
              <Heading as="h3" variant="heading-strong-m">{phase.title}</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">{phase.body}</Text>
            </Column>
          ))}
        </Grid>
      </Column>

      <Column id="decisions" gap="xl" paddingY="l">
        <SectionLabel n="04 The decisions" title="Make the critical moments feel obvious." />
        {workflowBeats.map((beat) => (
          <Column key={beat.id} id={beat.id} gap="l">
            <Column gap="12" maxWidth="m">
              <Text variant="label-default-s" onBackground="brand-medium">{beat.n}</Text>
              <Heading as="h3" variant="heading-strong-l">{beat.title}</Heading>
              <Text variant="heading-default-m">{beat.claim}</Text>
            </Column>
            {beat.id === "identity" ? (
              <Image
                src="/images/projects/decor-contractor/entra-id.png"
                alt="Diagram showing the handoff between Decor Contractor and Microsoft Entra ID"
                width={6049}
                height={2906}
                quality={90}
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ display: "block", width: "100%", height: "auto", borderRadius: "var(--radius-m)" }}
              />
            ) : (
              <DecisionShowcase type={beat.id as "scan" | "payment"} />
            )}
            <BeatCopy problem={beat.problem} solution={beat.solution} outcome={beat.outcome} />
            {beat.id === "identity" && (
              <Grid columns="4" tabletColumns="2" mobileColumns="1" gap="12">
                {authSteps.map((step, i) => (
                  <Flex key={step} gap="12" padding="l" border="neutral-medium" radius="l" vertical="start">
                    <Text variant="label-default-s" onBackground="brand-medium">{String(i + 1).padStart(2, "0")}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">{step}</Text>
                  </Flex>
                ))}
              </Grid>
            )}
          </Column>
        ))}
      </Column>

      <Column id="system" gap="l" paddingY="l">
        <SectionLabel n="05 The system" title="Turn good decisions into reusable behavior." />
        <Column gap="m" maxWidth="m">
          <Text variant="heading-default-m">Mobile Core is Epicor’s shared mobile design system. I used the payment flow to make it more precise, then documented the choices so they could travel to the next workflow.</Text>
          <Text variant="body-default-l" onBackground="neutral-weak">{contribution}</Text>
        </Column>
        <DecisionShowcase type="selection" />
        <Grid columns="4" tabletColumns="2" mobileColumns="1" gap="l">
          {systemStats.map((stat) => (
            <Column key={stat.label} gap="8" padding="l" border="neutral-medium" radius="l">
              <Heading as="h3" variant="display-strong-s">{stat.value}</Heading>
              <Text variant="heading-strong-s">{stat.label}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">{stat.note}</Text>
            </Column>
          ))}
        </Grid>
        <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="12">
          {systemPoints.map((point) => <Text key={point} variant="body-default-m" onBackground="neutral-weak">{point}</Text>)}
        </Grid>
        <Column gap="12">
          <Text variant="label-default-s" onBackground="brand-medium">A shared product language</Text>
          <BrandingShowcase />
        </Column>
      </Column>

      <Column id="outcome" gap="l" paddingY="l">
        <SectionLabel n="06 What success looks like" title="A smaller counter queue. A more confident contractor." />
        <Flex fillWidth padding="xl" radius="l" style={{ background: "#062D37", color: "white" }}>
          <Column gap="12" maxWidth="m">
            <Text variant="label-default-s" style={{ color: "#56e0cb" }}>Impact framework</Text>
            <Heading as="h3" variant="display-strong-s">Phase 1 establishes the mobile foundation. The next releases prove whether it saves time, reduces uncertainty, and takes routine account work off the counter.</Heading>
            <Text variant="body-default-l" style={{ color: "#d6e8e7" }}>Targets below are a measurement plan to validate with production data as the later phases ship.</Text>
          </Column>
        </Flex>
        <Grid columns="3" tabletColumns="1" mobileColumns="1" gap="l">
          {measurementPlan.map((item) => (
            <Column key={item.title} gap="12" padding="l" border="neutral-medium" radius="l">
              <Heading as="h3" variant="heading-strong-m">{item.title}</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">{item.body}</Text>
            </Column>
          ))}
        </Grid>
      </Column>

      {nextProject && <NextProject {...nextProject} />}
    </Column>
  );
}
