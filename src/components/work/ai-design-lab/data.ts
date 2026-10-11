export const title = "Propello AI Design Lab";
export const description =
  "Improving design quality through functional, code-first prototyping.";

export const metaItems = [
  { label: "Role", value: "Creator", note: "Senior Product Designer, Epicor Retail" },
  { label: "Product", value: "Propello", note: "Retail Operations, Inventory & Commerce" },
  { label: "Method", value: "Code-first prototyping", note: "Validate inside a working product environment" },
  { label: "Stack", value: "React · Tailwind · Kendo UI · Figma", note: "Prompts generate from the design system, not from scratch" },
];

export const execSummary = [
  "Within the Retail unit, I initiated the Propello AI Design Lab to improve design quality and help teams reach better product solutions earlier in the development process.",
  "The Design Lab reimagines the traditional workflow of designing static screens in isolation and handing them over for implementation later. Instead, it enables teams to create and evaluate experiences directly within a functional product environment from the beginning.",
];

export const challengePoints = [
  {
    title: "Static mockups, late translation",
    body: "Traditional UI workflows often rely on static mockups that are translated into code much later. This separation between design and implementation can slow delivery, make usability issues harder to identify, and limit the team’s ability to explore and refine the best solution.",
  },
  {
    title: "Appearance without the workflow",
    body: "Designers may validate the appearance of a screen without experiencing how the full workflow behaves in practice. As a result, important interaction problems can remain hidden until development or testing.",
  },
];

export const approachPoints = [
  {
    title: "A code-first workspace",
    body: [
      "The Propello AI Design Lab is built with React and Tailwind and connected to Kendo UI components and Figma libraries.",
      "This enables live prototypes in the same environment as the product.",
    ],
  },
  {
    title: "Prompts that use the system",
    body: "Designers and product teams can use simple prompts to generate functional UI prototypes that draw from the established design system. Rather than producing arbitrary interfaces from scratch, the lab uses structured components and existing design patterns to maintain consistency across experiences.",
  },
  {
    title: "From Figma into a live interface",
    body: "Figma layouts and feature flows can also be brought into the workspace and transformed into live, interactive interfaces with minimal effort.",
  },
];

export const environmentIntro =
  "The most important shift is that design validation happens inside a working product environment rather than through static screens alone.";

export const capabilities = [
  "Generate working prototypes from basic prompts",
  "Interact with realistic user flows early",
  "Test ideas before development is complete",
  "Identify usability issues sooner",
  "Refine workflows continuously during the design phase",
  "Maintain visual and functional consistency through shared components",
];

export const environmentClose =
  "This makes the design process more exploratory, collaborative, and grounded in the realities of the product.";

export const impactPoints = [
  {
    title: "Closer to a testable experience",
    body: "The Design Lab helped establish a faster and more quality-focused way of working within the Retail unit. By bringing design, prototyping, and validation closer together, it reduced the distance between an idea and an experience that could actually be tested.",
  },
  {
    title: "Speed without trading away quality",
    body: "The approach supported faster iteration without treating speed and quality as competing goals. Teams could explore more options, discover issues earlier, and continue refining the experience until they reached a stronger solution.",
  },
];

export const demos = {
  linkingProducts: {
    src: "/images/projects/ai-design-lab/linking-products.webm",
    label: "Linking products demo",
    caption:
      "Linking products feature was a good example of a feature that sounded and looked great as a static user flow, but was just 'ok' once it was built in Design Lab",
  },
  customerPosSearch: {
    src: "/images/projects/ai-design-lab/customer-pos-search.webm",
    label: "Customer POS search demo",
    caption:
      "Customer POS search - brainstorming product ideas as a functional prototypes.",
  },
  arStatements: {
    src: "/images/projects/ai-design-lab/ar-statements-viewer.mp4",
    label: "AR statements viewer demo",
    caption:
      "AR statements viewer; an example of the whole feature flow in AI design lab",
  },
};

export const takeaway = [
  "The Propello AI Design Lab shifts design from producing static representations of a future product to actively shaping the product through functional experimentation.",
  "By combining AI-assisted generation, React and Tailwind, Kendo UI, and Figma libraries, the lab creates a shared environment where teams can move quickly while preserving design-system consistency and product quality.",
  "The result is a more connected design-to-code workflow. The one that helps teams validate ideas earlier, improve usability continuously, and deliver better experiences with greater confidence.",
];
