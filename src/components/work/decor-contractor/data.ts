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
  name: "Maya",
  label: "A representative contractor",
  title: "4:30 PM. One wall left. One price question.",
  body: "Maya is finishing a paint job when the homeowner asks for one more room. She needs the current price of a product, then has to clear an account balance before tomorrow’s pickup. The old portal makes both tasks a desk job. Every extra step risks a store trip, a call to the counter, or a delayed order.",
  note: "Maya is a composite scenario used to frame the jobsite workflow.",
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
    title: "Scan: keep the answer in the camera",
    claim: "When Maya needs a price, the result belongs where the question started.",
    problem: "A conventional scan flow inserts a confirmation screen between the barcode and the answer. That is one extra decision with no value when the task is a fast price check.",
    solution: "The scanner detects the product and returns its price in the camera context. Manual UPC entry, permission recovery, and a quick rescan path protect the fast path without trapping edge cases.",
    outcome: "Price lookup becomes a jobsite task, not a store-counter task.",
  },
  {
    id: "payment",
    n: "04.2",
    title: "Pay: trade a comforting lie for useful certainty",
    claim: "An ACH request is not complete when the contractor presses submit.",
    problem: "“Payment complete” sounds reassuring but overpromises. Funds can still be processing, leaving the contractor unsure what the supplier has actually received.",
    solution: "The review step names the statement period, amount, and payment method. The confirmation says “Payment submitted” and explains what happens next.",
    outcome: "The product earns trust by matching its language to the financial reality.",
  },
  {
    id: "identity",
    n: "04.3",
    title: "Sign in: own the handoff, not the identity provider",
    claim: "A branded entry point can be clear without pretending to control security.",
    problem: "Invitation, authentication, consent, and app access span two systems. Blurring their responsibilities creates a confusing, fragile experience.",
    solution: "The portal owns the invitation, context, redirect, onboarding, and application session. Microsoft Entra ID owns authentication and verification.",
    outcome: "Contractors understand where they are, why they are there, and what will happen when they return.",
  },
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
