export const title = "Decor Contractor";
export const headline = "Making contractor account management faster, clearer, and more dependable";
export const description =
  "Decor Contractor extends the supplier relationship from the store counter to the job site";

export const metaItems = [
  { label: "Role", value: "End to end", note: "Strategy, UX flows, interaction, content, design system" },
  { label: "Product", value: "Decor Contractor", note: "Epicor Decor — paint and decorating retail" },
  { label: "Audience", value: "Contractors", note: "Jobsite, truck, and after-hours account work" },
  { label: "Focus", value: "Account relationship", note: "Lookup, invoices, payments, and identity" },
];

export const execSummary = [
  "Contractors often manage several jobs, purchase materials repeatedly, and rely on supplier accounts to keep work moving. The Decor Contractor portal was designed to extend that supplier relationship beyond the store counter, giving contractors faster access to products, pricing, payments, invoices, and account information.",
  "The challenge was to make complex business processes (purchasing materials, checking prices, paying balances) feel clear and useful where contractors spend the most time: on the job site.",
];

export const problem = {
  title: "Account work that only worked at a desk",
  subtitle: "Contractors had a dated web app, and not much of one",
  description:
    "Invoices, payments, and account lookups lived in a desktop portal with limited functionality. A contractor on a job site, in a truck, or between jobs had no way to use them without sitting down at a computer. The work was to modernize those features and put them in a mobile app they could open on the go.",
};

export const challengeIntro =
  "The existing experience brought together several high-value workflows. These workflows had different levels of urgency and complexity. A contractor checking the price of a product on a jobsite needed speed. Someone paying a statement needed confidence and accurate financial context. Someone accepting an invitation needed a clear transition between the portal and Microsoft’s authentication system.";

export const challengeClose =
  "The design needed to support all of these moments without making the product feel like a collection of disconnected enterprise screens.";

export const existingWorkflows = [
  "Finding products and checking current pricing",
  "Scanning barcodes for faster product lookup",
  "Reviewing invoices and transaction history",
  "Paying a statement or account balance",
  "Managing payment methods",
  "Signing in through Microsoft Entra ID",
  "Supporting supplier relationships beyond individual transactions",
];

export const directionIntro =
  "Research into contractor-focused supplier platforms suggested that the portal should behave less like a simple ordering tool and more like an ongoing account relationship. This direction helped frame the portal around continuity: helping contractors pick up where they left off, rather than forcing them to reconstruct context every time they return.";

export const directionPoints = [
  {
    title: "Convenient account access",
    body: "Give existing customers convenient access to account information and payments.",
  },
  {
    title: "Faster repeat purchasing",
    body: "Make repeat purchasing and product lookup faster.",
  },
  {
    title: "Connected history",
    body: "Treat invoices, saved jobs, and purchase history as connected information.",
  },
  {
    title: "Local supplier workflows",
    body: "Design around local supplier relationships and pickup-based workflows.",
  },
  {
    title: "Familiar business actions",
    body: "Use clear language and familiar interaction patterns for complex business actions.",
  },
];

export const scannerPath = ["Open scanner", "Detect product", "Show price"];

export const scannerFeatures = [
  "Automatic barcode detection without a shutter button",
  "Flashlight access",
  "A clear framing guide",
  "Manual UPC entry as a fallback",
  "Product-found and product-not-found states",
  "The ability to scan another product quickly",
  "Recovery paths for camera permission and unreadable barcodes",
];

export const paymentRevisions = [
  "A clear statement period",
  "Explicit payment amount",
  "A secondary path to view statement details",
  "Clear distinction between current balance and balance after payment",
  "Payment-method selection and change actions",
  "More descriptive calls to action such as “Review payment”",
  "Accurate processing language for ACH payments",
];

export const hierarchyMoments = [
  {
    title: "Make a payment",
    body: "Choose what to pay.",
  },
  {
    title: "Review payment",
    body: "Confirm the amount and method.",
  },
  {
    title: "Payment submitted",
    body: "Understand the status and next steps.",
  },
];

export const authSteps = [
  "The portal creates an invitation",
  "The contractor receives and accepts the invitation",
  "Microsoft Entra identifies the authentication route",
  "The contractor signs in through their organization or an appropriate fallback",
  "Entra completes verification and consent",
  "The user returns to the portal",
  "The portal validates the invitation and creates the application session",
];

export const systemStats = [
  { value: "22", label: "Buttons", note: "Mapped to semantic primary and secondary variants" },
  { value: "26", label: "Selection rows", note: "Replaced with shared selectable row components" },
  { value: "1", label: "Selection model", note: "Round controls for single choice, square checkboxes for multi-select" },
  { value: "Core", label: "Shared patterns", note: "Labels, subtitles, amounts, selected states, sizing, and overflow" },
];

export const systemPoints = [
  "Round controls for single-selection payment choices",
  "Square checkboxes for multi-selection invoice and job lists",
  "Consistent labels, subtitles, amounts, and selected states",
  "Corrected checkbox sizing and overflow behavior inside list rows",
];

export const outcomes = [
  {
    title: "Faster product lookup",
    body: "Scanning and manual UPC entry keep price checks close to the jobsite, truck, or store aisle.",
  },
  {
    title: "Stronger payment context",
    body: "A payment flow with clearer context and more accurate status language, including ACH processing time.",
  },
  {
    title: "Clearer financial hierarchy",
    body: "Multi-step screens no longer compete with repeated “payment” headings.",
  },
  {
    title: "Honest identity boundaries",
    body: "Better separation between portal-owned and identity-provider-owned experiences.",
  },
  {
    title: "Shared components",
    body: "One-off interaction designs replaced with Mobile Core patterns that future workflows can reuse.",
  },
  {
    title: "A connected account",
    body: "A shift from isolated feature screens toward an experience that supports the ongoing supplier relationship.",
  },
];

export const reflectionQuestions = [
  "What product is this?",
  "What does it cost?",
  "What exactly am I paying?",
  "Has my payment been submitted or completed?",
  "What happens after I accept this invitation?",
  "Can I return to the task without losing my place?",
];

export const contribution =
  "I worked across product strategy, UX flows, interaction design, content clarity, design-system application, and component refinement. The work included product research, payment-flow redesign, barcode-scanning exploration, authentication mapping, visual hierarchy reviews, and systematic replacement of bespoke UI patterns with reusable components.";
