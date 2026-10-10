export const metaItems = [
  { label: "Role", value: "Art direction and Product design", note: "Worked in a team with Product manager and Mobile developer" },
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
    title: "Questions arrive in customer language",
    body: "Associates repeat what a customer said, not what a catalog indexes: “the black deck screws—the long ones.” Search punishes imprecision. Conversation can absorb it, clarify it, and keep the interaction moving.",
  },
  {
    title: "The floor is hostile to reading",
    body: "There is noise, one free hand, and a customer waiting. An answer that requires scanning a results page has already failed. The first line must carry the most useful information.",
  },
  {
    title: "A wrong answer costs trust",
    body: "Sending someone to the wrong aisle damages trust twice: with the customer and with the associate who may stop using the tool. Ambiguity needed to be surfaced, not silently resolved.",
  },
];

export const decisions = [
  {
    index: "01",
    title: "Chat is the operating system",
    premise: "Not another feature inside the app",
    body: "Lookup, comparison, stock checks, and product details all begin and resolve in one thread. Associates have one place to return to, one history to scan, and no modes to switch while helping a customer.",
  },
  {
    index: "02",
    title: "Lead with aisle and price",
    premise: "Answer before detail",
    body: "The response bubble begins with the information associates are most likely being asked for. Specifications, alternatives, and imagery remain available without getting in the way of the immediate answer.",
  },
  {
    index: "03",
    title: "Disambiguate; never dump results",
    premise: "Two to four choices, not a catalog page",
    body: "When a request maps to multiple products, Prism asks one focused question and presents a small set of distinguishable options. A long result list is not thoroughness—it is unresolved ambiguity passed back to the associate.",
  },
  {
    index: "04",
    title: "Compare without leaving the thread",
    premise: "No detour to a separate comparison screen",
    body: "Product differences appear in a compact table inside the conversation. The associate keeps their place, sees only the attributes that matter, and can continue asking questions.",
  },
  {
    index: "05",
    title: "Put deep detail one layer down",
    premise: "One tap away, never two",
    body: "A full product view provides imagery, specifications, identifiers, and multi-store availability. It opens from the answer and returns the associate to the same position in the conversation.",
  },
  {
    index: "06",
    title: "Design for noise and one-handed use",
    premise: "Type-first; speech opt-in",
    body: "Voice input remains available, but typing is the default because it works in a noisy store and does not broadcast the customer’s question. Spoken responses remain off unless the associate deliberately enables them.",
  },
];

const shot = (name: string) => `/images/projects/fairway/${name}`;

export const flowSections = [
  {
    id: "flow-onboarding",
    number: "00",
    title: "Onboarding",
    summary:
      "Enterprise setup, not consumer signup. The device is connected to a store instance before anyone signs in, keeping first run short and operational.",
    kind: "hero" as const,
    hero: shot("onboarding-end.jpg?v=2"),
    heroAlt: "Fairway+ onboarding: store signup behind the welcome screen",
    screens: [],
  },
  {
    id: "flow-home",
    number: "01",
    title: "Home",
    summary:
      "A greeting and one input remove everything between the associate and the first question. Home is not a dashboard; it is the beginning of a conversation.",
    kind: "hero" as const,
    hero: shot("home-hero.jpg?v=2"),
    heroAlt: "Fairway+ splash, ready home, and first reply on three phones",
    screens: [],
  },
  {
    id: "flow-message",
    number: "02",
    title: "Message",
    summary:
      "A question is typed in the aisle and answered in the same thread: one product with aisle and price, or a short set to compare—without leaving the conversation.",
    kind: "hero" as const,
    hero: shot("message-hero.jpg?v=2"),
    heroAlt: "A hammer request loading, then a single match and a short comparison set",
    screens: [],
  },
  {
    id: "flow-followup",
    number: "03",
    title: "Follow-up",
    summary:
      "When the request is still broad, Prism narrows it progressively: a focused question, optional filters, and a short set of matching products.",
    kind: "hero" as const,
    hero: shot("followup-hero.jpg?v=2"),
    heroAlt: "Saw-blade follow-up, refine sheet, and matching product list",
    screens: [],
  },
  {
    id: "flow-details",
    number: "04",
    title: "Details",
    summary:
      "One tap reveals the information a short answer cannot hold: imagery, item and UPC identifiers, aisle location, availability, features, and specifications.",
    kind: "hero" as const,
    hero: shot("product-detail.png?v=2"),
    heroAlt: "Product details for a framing hammer, with specifications on the screen behind",
    screens: [],
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
    body: "Type-first input and opt-in speech came from picturing a noisy aisle with a customer waiting. Those decisions made the demo less theatrical and the shipped product more usable—a trade I would make again.",
  },
  {
    title: "What I would pressure-test next",
    body: "With adoption data still pending, the first meaningful question is whether associates return after receiving their initial answer. I would measure repeat questions per associate per shift, not public downloads.",
  },
];
