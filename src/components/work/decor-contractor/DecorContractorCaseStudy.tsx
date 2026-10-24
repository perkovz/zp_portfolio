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
  identitySolutionPoints,
  measurementPlan,
  metaItems,
  paymentSolutionPoints,
  phases,
  problem,
  protagonist,
  research,
  scanSolutionPoints,
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

function PaymentNarrative({ problem: issue, solution, outcome }: { problem: string; solution: string; outcome: string }) {
  return (
    <Column gap="xl">
      <Column gap="12" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">Problem</Text>
        {issue.split("\n\n").map((paragraph) => (
          <Text key={paragraph} variant="body-default-l" onBackground="neutral-weak">{paragraph}</Text>
        ))}
      </Column>

      <Column gap="m" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">Solution</Text>
        <Text variant="body-default-l" onBackground="neutral-weak">{solution}</Text>
        <Column gap="12" paddingLeft="m">
          {paymentSolutionPoints.map((point) => (
            <Flex key={point} gap="12" vertical="start">
              <Text variant="body-default-l" onBackground="brand-medium">•</Text>
              <Text variant="body-default-l" onBackground="neutral-weak">{point}</Text>
            </Flex>
          ))}
        </Column>
      </Column>

      <Column gap="12">
        <HeroVideo
          src="/images/projects/decor-contractor/payment-failed.mp4"
          label="Decor Contractor payment failure and recovery flow"
          aspectRatio="3024 / 1600"
          background="#062D37"
          objectFit="cover"
        />
        <Text variant="label-default-s" onBackground="neutral-weak">A failure state that helps the contractor recover, and finish payment</Text>
      </Column>

      <Column gap="12" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">Outcome</Text>
        <Text variant="body-default-l" onBackground="neutral-weak">{outcome}</Text>
      </Column>

      <HeroVideo
        src="/images/projects/decor-contractor/payment-outcomes.mp4"
        poster="/images/projects/decor-contractor/payment-outcomes.jpg"
        label="Payment outcomes across the Decor Contractor flow"
        aspectRatio="16 / 9"
        background="#062D37"
        objectFit="cover"
      />
    </Column>
  );
}

function ScanNarrative({ problem: issue, solution, outcome }: { problem: string; solution: string; outcome: string }) {
  return (
    <Column gap="xl">
      <Column gap="12" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">Problem</Text>
        <Text variant="body-default-l" onBackground="neutral-weak">{issue}</Text>
      </Column>

      <Column gap="m" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">Solution</Text>
        <Text variant="body-default-l" onBackground="neutral-weak">{solution}</Text>
        <Column gap="12" paddingLeft="m">
          {scanSolutionPoints.map((point) => (
            <Flex key={point} gap="12" vertical="start">
              <Text variant="body-default-l" onBackground="brand-medium">•</Text>
              <Text variant="body-default-l" onBackground="neutral-weak">{point}</Text>
            </Flex>
          ))}
        </Column>
      </Column>

      <Column gap="12" fillWidth>
        <Flex padding="l" border="neutral-medium" radius="l" vertical="center" horizontal="center" style={{ minHeight: "20rem" }}>
          <Text variant="body-default-m" onBackground="neutral-weak">Scanner screens or a 6–8 second recording: found, not found, manual UPC, and permission denied</Text>
        </Flex>
        <Text variant="label-default-s" onBackground="neutral-weak">Scanner states placeholder</Text>
      </Column>

      <Column gap="12" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">Outcome</Text>
        <Text variant="body-default-l" onBackground="neutral-weak">{outcome}</Text>
      </Column>
    </Column>
  );
}

function IdentityNarrative({ problem: issue, solution, outcome }: { problem: string; solution: string; outcome: string }) {
  return (
    <Column gap="xl">
      <Column gap="12" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">Problem</Text>
        <Text variant="body-default-l" onBackground="neutral-weak">Most contractors do not have a Microsoft account, and they are not motivated to create one. Corporate policy locked the portal to Microsoft Entra ID anyway. The flow is demanding, the UX is not ours to change, and a contractor who stalls here never reaches invoices, payments, or orders. This was one of the most serious problems in the app.</Text>
      </Column>

      <Column gap="m" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">Solution</Text>
        <Text variant="body-default-l" onBackground="neutral-weak">The goal was to cut that friction and close the edge cases — no Microsoft account, returning user, forgotten password — while keeping Epicor branding and a polished UI on every screen we own.</Text>
        <Column gap="12" paddingLeft="m">
          {identitySolutionPoints.map((point) => (
            <Flex key={point} gap="12" vertical="start">
              <Text variant="body-default-l" onBackground="brand-medium">•</Text>
              <Text variant="body-default-l" onBackground="neutral-weak">{point}</Text>
            </Flex>
          ))}
        </Column>
      </Column>

      <Column gap="12" fillWidth>
        <Flex minHeight="160" padding="l" border="neutral-medium" radius="l" vertical="center" horizontal="center">
          <Text variant="body-default-m" onBackground="neutral-weak">A focused detail graphic for the sign-in edge cases will go here.</Text>
        </Flex>
        <Text variant="label-default-s" onBackground="neutral-weak">Flow detail placeholder</Text>
      </Column>

      <Column gap="12" maxWidth="m">
        <Text variant="label-default-s" onBackground="brand-medium">Outcome</Text>
        <Text variant="body-default-l" onBackground="neutral-weak">{outcome}</Text>
      </Column>
    </Column>
  );
}

export function DecorContractorCaseStudy() {
  const nextProject = getNextWorkProject("decor-contractor");

  return (
    <Column fillWidth maxWidth="m" gap="xl" paddingBottom="xl">
      <Button href="/work" variant="tertiary" weight="default" size="m" prefixIcon="chevronLeft">
        Projects
      </Button>

      <Column gap="12" maxWidth="m">
        <Heading as="h1" variant="display-strong-m">{title}</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">{headline}</Text>
      </Column>

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

      <Column id="jason" gap="l" paddingY="l">
        <SectionLabel n="01 The moment" title={protagonist.title} />
        <Grid columns="2" tabletColumns="1" mobileColumns="1" gap="l">
          <Column gap="m">
            <Text variant="heading-default-m">{protagonist.body}</Text>
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
        <div style={{ width: "100%", minWidth: 0, overflow: "hidden" }}>
          <Image
            src="/images/projects/decor-contractor/problem-definition.png"
            alt="Redacted legacy contractor payment portal shown on a desktop browser"
            width={1920}
            height={1080}
            quality={90}
            sizes="(max-width: 1200px) 100vw, 1200px"
            style={{ display: "block", width: "100%", maxWidth: "100%", minWidth: 0, height: "auto", borderRadius: "var(--radius-m)" }}
          />
        </div>
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
        <SectionLabel n="03 The thesis" title="Bring the counter to the job site" />
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
        <SectionLabel n="04 The decisions" title="Make the critical moments feel obvious" />
        {workflowBeats.map((beat) => (
          <Column key={beat.id} id={beat.id} gap="l">
            <Column gap="12" maxWidth="m">
              <Text variant="label-default-s" onBackground="brand-medium">{beat.n}</Text>
              <Heading as="h3" variant="heading-strong-l">{beat.title}</Heading>
              <Text variant="heading-default-m">{beat.claim}</Text>
            </Column>
            {beat.id === "identity" ? (
              <Column gap="12">
                <div style={{ width: "100%", minWidth: 0, overflow: "hidden" }}>
                  <Image
                    src="/images/projects/decor-contractor/entra-id.png"
                    alt="Diagram showing the handoff between Decor Contractor and Microsoft Entra ID"
                    width={6049}
                    height={2906}
                    quality={90}
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    style={{ display: "block", width: "100%", maxWidth: "100%", minWidth: 0, height: "auto", borderRadius: "var(--radius-m)" }}
                  />
                </div>
                <Text variant="label-default-s" onBackground="neutral-weak">One of four detailed user flows, mapping all friction points and their resolution</Text>
              </Column>
            ) : beat.id === "payment" ? (
              <ProductInUseShowcase />
            ) : (
              <DecisionShowcase type="scan" />
            )}
            {beat.id === "payment" ? (
              <PaymentNarrative problem={beat.problem} solution={beat.solution} outcome={beat.outcome} />
            ) : beat.id === "identity" ? (
              <IdentityNarrative problem={beat.problem} solution={beat.solution} outcome={beat.outcome} />
            ) : beat.id === "scan" ? (
              <ScanNarrative problem={beat.problem} solution={beat.solution} outcome={beat.outcome} />
            ) : (
              <BeatCopy problem={beat.problem} solution={beat.solution} outcome={beat.outcome} />
            )}
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

      <Flex
        padding="xl"
        border="neutral-medium"
        vertical="center"
        horizontal="center"
        style={{
          width: "100vw",
          maxWidth: "100vw",
          marginLeft: "calc(50% - 50vw)",
          minHeight: "min(70vh, 52rem)",
          overflow: "hidden",
          background: "var(--neutral-alpha-weak)",
        }}
      >
        <Text variant="heading-default-m" onBackground="neutral-weak">Full-width project image placeholder</Text>
      </Flex>

      <Column id="system" gap="l" paddingY="l">
        <SectionLabel n="05 The system" title="Turn good decisions into reusable behavior" />
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
        <Column gap="l" paddingY="l">
          <Column gap="12" maxWidth="m">
            <Text variant="label-default-s" onBackground="brand-medium">Native color modes</Text>
            <Heading as="h3" variant="display-strong-s">Epicor’s first mobile app designed for light and dark mode</Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Decor Contractor treats color mode as a product capability, not a visual reskin. Semantic tokens keep hierarchy, contrast, status, and brand expression consistent across both native experiences.
            </Text>
          </Column>
          <Grid columns="2" tabletColumns="2" mobileColumns="1" gap="l">
            {[
              { label: "Light mode", background: "#f4f6f5", foreground: "#101817", muted: "#dfe6e4" },
              { label: "Dark mode", background: "#071210", foreground: "#f3f8f7", muted: "#20302d" },
            ].map((mode) => (
              <Flex
                key={mode.label}
                fillWidth
                padding="xl"
                radius="l"
                border="neutral-medium"
                vertical="center"
                horizontal="center"
                style={{ minHeight: "22rem", background: mode.background, color: mode.foreground }}
              >
                <Column fillWidth maxWidth="s" gap="l">
                  <Text variant="label-default-s" style={{ color: mode.foreground }}>{mode.label}</Text>
                  <Column gap="12" padding="l" radius="l" style={{ background: mode.muted }}>
                    <Flex fillWidth height="8" radius="full" style={{ background: mode.foreground, opacity: 0.18 }} />
                    <Flex fillWidth height="8" radius="full" style={{ background: mode.foreground, opacity: 0.12 }} />
                    <Flex width="m" height="8" radius="full" style={{ background: mode.foreground, opacity: 0.12 }} />
                  </Column>
                  <Text variant="body-default-s" style={{ color: mode.foreground, opacity: 0.56 }}>
                    Final light and dark mode graphic will replace this placeholder.
                  </Text>
                </Column>
              </Flex>
            ))}
          </Grid>
        </Column>
      </Column>

      <Column id="outcome" gap="l" paddingY="l">
        <SectionLabel n="06 What success looks like" title="A smaller counter queue. A more confident contractor" />
        <Flex fillWidth padding="xl" radius="l" style={{ background: "#062D37", color: "white" }}>
          <Column gap="12" maxWidth="m">
            <Text variant="label-default-s" style={{ color: "#56e0cb" }}>Impact framework</Text>
            <Heading as="h3" variant="display-strong-s">Phase 1 establishes the mobile foundation. The next releases prove whether it saves time, reduces uncertainty, and takes routine account work off the counter</Heading>
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
