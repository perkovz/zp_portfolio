export const metaItems = [
  { label: "Role", value: "Product design", note: "Designed how associates ask and how Prism answers" },
  { label: "Platform", value: "iOS · Android", note: "Native app shell" },
  { label: "Status", value: "Shipped", note: "Google Play and the App Store" },
  { label: "AI", value: "Prism", note: "Epicor’s proprietary assistant" },
];

export const execSummary = [
  "Fairway+ is an AI assistant for retail associates, built at Epicor with Ace Hardware as its lead customer.",
  "The main purpose of Fairway+ is to empower associates so they can help customers with their projects.",
  "I've designed the end-to-end interaction system: conversational model, answer hierarchy, disambiguation, in-thread comparison, product details.",
];

export const problemPoints = [
  {
    title: "Find the right product, fast",
    body: "Customers have projects to finish. Thousands of similar products make finding the right one hard. Conversation gets them there faster.",
  },
  {
    title: "The floor is hostile to reading",
    body: "Noise, one free hand, a customer waiting. An answer that needs scanning has already failed, so the first line has to say it all.",
  },
  {
    title: "A wrong answer = low trust",
    body: "A wrong answer costs trust twice, with the customer and with the associate. Surface ambiguity instead of silently resolving it.",
  },
];

export const processTitle = "A brief from Ace, then competitive flows";
export const processIntro =
  "There was no classical research program. Ace Hardware wanted an app store clerks could use on the go. I wrote a report on Rundoo, studied how Lowe’s and Home Depot AI chatbots behaved, and started drawing simple design flows.";

const shot = (name: string) => `/images/projects/fairway/${name}`;

export const flowSections = [
  {
    id: "flow-home",
    number: "01",
    title: "Home",
    summary:
      "A greeting and one input remove everything between the associate and the first question. Home is not a dashboard; it is the beginning of a conversation.",
    hero: shot("home-hero.jpg"),
    heroAlt: "Fairway+ splash, ready home, and first reply on three phones",
  },
  {
    id: "flow-message",
    number: "02",
    title: "Message",
    summary:
      "A question is typed in the aisle and answered in the same thread: one product with aisle and price, or a short set to compare, without leaving the conversation.",
    hero: shot("message-hero.jpg"),
    heroAlt: "A hammer request loading, then a single match and a short comparison set",
  },
  {
    id: "flow-followup",
    number: "03",
    title: "Follow-up",
    summary:
      "When the request is still broad, Prism narrows it progressively: a focused question, optional filters, and a short set of matching products.",
    hero: shot("followup-hero.jpg"),
    heroAlt: "Saw-blade follow-up, refine sheet, and matching product list",
  },
  {
    id: "flow-details",
    number: "04",
    title: "Details",
    summary:
      "One tap reveals the information a short answer cannot hold: imagery, item and UPC identifiers, aisle location, availability, features, and specifications.",
    hero: shot("product-detail.png"),
    heroAlt: "Product details for a framing hammer, with specifications on the screen behind",
  },
];

export const outcomes = [
  { label: "Shipped", value: "Google Play and the App Store", detail: "Published as Epicor Fairway+ on both platforms." },
  { label: "Lead customer", value: "Ace Hardware", detail: "Onboarded with access to the shipped product." },
  {
    label: "Distribution",
    value: "Enterprise, limited",
    detail: "Public store-listing data is not a meaningful adoption proxy for a gated enterprise rollout.",
  },
  { label: "Adoption", value: "Pending", detail: "Store and associate usage data has not yet been reported." },
];

export const reflectionPoints = [
  {
    title: "The naming problem was systemic",
    body: "Fairway+ and Prism can appear inconsistent until they are understood as product and platform. Prism is a capability shared across Epicor products; Fairway+ is one client of that platform. I used onboarding to teach the distinction instead of forcing a rename that would weaken the broader product system.",
  },
  {
    title: "I designed the answer, not the screen",
    body: "The most important decision was what belonged in the first two lines of the response: aisle, then price. Once that hierarchy was established, disambiguation, comparison, and product detail could follow the same logic.",
  },
  {
    title: "The floor mattered more than the demo",
    body: "Image first, speech second, type as the last option came from picturing a busy clerk with a customer waiting. I would make that trade again.",
  },
  {
    title: "What I would pressure-test next",
    body: "With adoption data still pending, the first meaningful question is whether associates return after receiving their initial answer. I would measure repeat questions per associate per shift, not public downloads.",
  },
];
