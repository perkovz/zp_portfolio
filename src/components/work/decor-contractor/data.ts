export const title = "Decor Contractor: the store counter on the job site";
export const headline = "Mobile account, payments, and ordering for contractors.";
export const description =
  "Decor Contractor brings the supplier account relationship out of the desktop portal and into the moments that keep a job moving.";

export const metaItems = [
  { label: "Role", value: "Lead product designer", note: "Strategy, IA, flows, content, interaction, and Mobile Core adoption" },
  { label: "Team", value: "Product, engineering, identity, supplier operations", note: "Cross-functional partners across account, payment, and access workflows" },
  { label: "Timeline", value: "Three phased releases", note: "Mobile foundations, payments, then ordering" },
  { label: "Status", value: "Phase 1 shipped", note: "Payments and ordering are sequenced as the next releases" },
];

export const protagonist = {
  name: "Jason",
  label: "A representative contractor",
  title: "4:30 PM. One wall left. One price question",
  body: "Jason is finishing a paint job when the homeowner asks for one more room. He needs the current price of a product, then has to clear an account balance before tomorrow’s pickup. The old portal makes both tasks a desk job. Every extra step risks a store trip, a call to the counter, or a delayed order.",
};

export const problem = {
  title: "A supplier relationship that disappeared outside the store",
  subtitle: "The old portal made contractors leave the work to manage the work.",
  description:
    "Pricing, invoices, payment methods, and account history lived in a desktop-first portal. On site, a contractor could not confidently check a price or pay a statement without a laptop, a counter call, or a return trip. That friction costs the contractor time and leaves the supplier carrying avoidable payment and support load.",
};

export const tensionPoints = [
  {
    title: "Desk-only account",
    body: "A price check or invoice question became a context switch: find a computer, call the counter, or wait until after the job.",
  },
  {
    title: "Payment anxiety",
    body: "An unclear balance, payment method, or ACH status made a financial task feel risky when the contractor was trying to move quickly.",
  },
  {
    title: "Borrowed identity",
    body: "The product had to feel like a single experience while respecting the boundary between the portal and Microsoft Entra ID.",
  },
];

export const research = [
  "Reviewed five contractor and supplier-platform patterns to understand how accounts, products, and pickup work connect.",
  "Mapped the contractor journey across jobsite, truck, store aisle, counter, and after-hours account work.",
  "Turned account, payment, and identity constraints into an information architecture instead of a collection of isolated screens.",
];

export const phases = [
  { number: "01", title: "Mobile foundations", body: "Account home, navigation, product lookup, scan, and reusable Mobile Core patterns.", state: "Shipped" },
  { number: "02", title: "Pay with confidence", body: "Statements, payment methods, review, and honest ACH status language.", state: "Next" },
  { number: "03", title: "Order without detours", body: "Build an order flow only after account context and payment trust are in place.", state: "Planned" },
];

export const workflowBeats = [
  {
    id: "scan",
    n: "04.1",
    title: "Ordering: scan the exact product in the exact amount",
    claim: "Wrong size or amount means another trip or a loss",
    problem: "A contractor is not browsing. They are checking a price and ordering what the job needs before they leave the aisle. Hardware and paint are specific. One screw comes in many lengths, head sizes, materials, and uses. One paint bucket is mixed for a color, then sized to the job. Contractor margins are as thin as the store’s. Too little means another trip. Too much is leftover they cannot reuse. Either way they work at a loss.",
    solution: "The job was to find that specific product, and the right amount, right away. Camera scan, intuitive interactions, and a skimmable result do that work. No shutter button and no confirm screen. The price appears over the live camera, so the next scan is one tap away.",
    outcome: "The contractor confirms the exact product and the exact amount before they order. No second trip, no leftover they cannot use.",
  },
  {
    id: "payment",
    n: "04.2",
    title: "Payments: ACH, on the job",
    claim: "Make ACH primary and the easy path, and say exactly what the money is doing.",
    problem: "Contractors could only pay on a dated web app, never during the workday. States were unclear while a payment processed.\n\nEdge cases were poorly documented, and the feedback was generic. Paint and hardware margins are thin; the store earns more when a contractor pays by ACH than by card.",
    solution: "The new flow makes ACH the easy choice and tells the contractor what is actually happening.",
    outcome: "Contractors can pay during the workday, not only on the web. ACH is the easy path, which is the one the store earns more on. And “Payment submitted” with timing means no one thinks the money has cleared when it has not. In build; validating with pilot contractors that they take ACH and read the state correctly before rollout.",
  },
  {
    id: "identity",
    n: "04.3",
    title: "Sign in: Microsoft Entra, with less friction",
    claim: "Customer feedback, user research and our own testing discovered critical sign-in issues that had to be resolved",
    problem: "Invitation, authentication, consent, and app access span two systems. Blurring their responsibilities creates a confusing, fragile experience.",
    solution: "The portal owns the invitation, context, redirect, onboarding, and application session. Microsoft Entra ID owns authentication and verification.",
    outcome: "Contractors still authenticate through Entra. They see Epicor, not a raw Microsoft handoff, and the common failure paths, especially no Microsoft account, have a designed response instead of a dead end that stops the rest of the app.",
  },
];

export const paymentSolutionPoints = [
  "ACH takes days to settle. Confirmation changed from a done state to “Payment submitted,” with expected timing, so a contractor never thinks a payment cleared when it has not.",
  "States, edge cases, and failure copy are specific, not generic.",
  "Pay works from the contractor app, during the workday, not only on the web.",
];

export const scanSolutionPoints = [
  "Scan returns the specific SKU, not a family of products.",
  "Result is readable in the aisle: price, size, and enough detail to order.",
  "Next scan is one tap, so a contractor can check a job list without leaving the camera.",
];

export const identitySolutionPoints = [
  "The portal owns the invite, branding, redirect, and session. Microsoft owns verification.",
  "Every branch is mapped so each screen says who is asking and why.",
  "Edge cases get a specific path, not a generic error: no Microsoft account, returning user, forgotten password.",
];

export const authSteps = [
  "Portal creates and contextualizes the invitation",
  "Contractor accepts it from a familiar supplier touchpoint",
  "Microsoft Entra ID authenticates and verifies the user",
  "Portal validates access and starts the application session",
];

export const systemStats = [
  { value: "22", label: "Buttons", note: "Mapped to semantic primary and secondary variants" },
  { value: "26", label: "Selection rows", note: "Replaced with reusable selectable-row components" },
  { value: "1", label: "Selection model", note: "Round for one choice; square for many" },
  { value: "Core", label: "Shared language", note: "Labels, amounts, states, sizing, and overflow" },
];

export const systemPoints = [
  "Mobile Core is Epicor’s shared mobile design system. It gave the product a reliable vocabulary for rows, buttons, headers, and selected states.",
  "Round controls signal one payment method. Square checkboxes signal multiple invoices or jobs. The distinction removes an avoidable selection error.",
  "Engineering received component-level recommendations for labels, subtitle behavior, amount alignment, sizing, and overflow so the designed states could survive implementation.",
];

export const measurementPlan = [
  { title: "Time to a price", body: "Target: verify a product price in under 30 seconds from the jobsite. Validate with task timing after release." },
  { title: "Payment confidence", body: "Target: reduce payment-related support contacts and review-step abandonment. Establish the baseline in Phase 2." },
  { title: "Counter load", body: "Target: measure the share of account questions resolved in mobile rather than at the counter or by phone." },
];

export const contribution =
  "I led the product narrative and information architecture, then translated it into mobile workflows, payment content, interaction details, Mobile Core component guidance, and build-ready recommendations with product and engineering partners.";
