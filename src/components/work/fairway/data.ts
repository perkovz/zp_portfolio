export const navSections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "decisions", label: "Decisions" },
  { id: "flows", label: "Flows" },
  { id: "outcomes", label: "Outcomes" },
  { id: "reflection", label: "Reflection" },
] as const;

export const metaItems = [
  { label: "Role", value: "UX/UI", note: "Research & PM owned by others" },
  { label: "Platform", value: "iOS · Android", note: "Native app shell" },
  { label: "Status", value: "Shipped", note: "Play Store & App Store" },
  { label: "AI", value: "Prism", note: "Epicor proprietary assistant" },
];

export const execSummary = [
  "Fairway+ is an AI associate assistant for in-store retail, built at Epicor with Ace Hardware as lead customer. A floor associate gets stopped mid-aisle with a half-remembered product question, and needs an answer — price, aisle, availability — before the customer walks away.",
  "The assistant inside the app is Prism, Epicor’s proprietary AI. The two names are deliberate: Fairway+ is the product an associate installs and logs into; Prism is the intelligence they talk to, and it also powers other Epicor surfaces. The home splash reads “Welcome to Prism” by PM direction, so the associate learns the name of the thing answering them — not the name of the icon they tapped.",
  "I owned UX and UI end to end: the conversational model, the answer hierarchy inside a chat bubble, disambiguation behavior, comparison in-thread, and the detail surface underneath it. Research and product direction sat with partners; my job was turning a broad “put AI in the app” mandate into a floor-usable interaction system.",
];

export const problemPoints = [
  {
    title: "The question is vague by nature",
    body: "Associates repeat what a customer said, not what a catalog indexes: “the black deck screws, the long ones.” A search box punishes that. A conversation absorbs it.",
  },
  {
    title: "The environment is hostile to reading",
    body: "Noise, one free hand, a customer standing there waiting. Any answer that requires scanning a results page has already lost. The first line has to carry the payload.",
  },
  {
    title: "Wrong answers cost more than slow ones",
    body: "Sending someone to the wrong aisle burns trust twice — with the customer and with the associate who stops using the tool. Ambiguity had to be surfaced, not silently resolved.",
  },
];

export const decisions = [
  {
    index: "01",
    title: "Chat as the operating system",
    premise: "Not a feature inside the app",
    body: "Every task — lookup, compare, stock check, detail — resolves in one thread instead of separate tabs. One place to return to, one history to scroll, no mode switching while holding a box of screws.",
  },
  {
    index: "02",
    title: "Answer in the bubble",
    premise: "Price and aisle before detail",
    body: "The response bubble leads with the two facts an associate is actually being asked for. Specs, alternates, and imagery sit below the fold of the bubble, reachable but never in the way of the answer.",
  },
  {
    index: "03",
    title: "Disambiguate, don’t dump",
    premise: "Two to four choices, never a list",
    body: "When a query maps to multiple SKUs, Prism asks one clarifying question with a small set of distinguishable options. A 40-row result set is a failure state disguised as thoroughness.",
  },
  {
    index: "04",
    title: "Compare inside the thread",
    premise: "No detour to a compare screen",
    body: "Comparison renders as a compact table in the conversation, scoped to the attributes that differ. The associate keeps their place and can keep talking to it.",
  },
  {
    index: "05",
    title: "Deep detail when needed",
    premise: "One layer down, never two",
    body: "A full product surface — carousel, specs, multi-store quantity — is one tap from the bubble and returns to the exact scroll position. Depth exists for the 20% of questions that need it.",
  },
  {
    index: "06",
    title: "Designed for the floor",
    premise: "Type preferred, TTS off by default",
    body: "Voice input is available but typing is the default path: it survives store noise and doesn’t broadcast a customer’s question. Spoken responses stay off unless deliberately enabled — nobody wants an assistant talking over them in aisle 12.",
  },
];

const shot = (name: string) => `/images/projects/fairway/${name}`;

export const flowSections = [
  {
    id: "flow-onboarding",
    number: "00",
    title: "Onboarding",
    summary:
      "Enterprise setup, not consumer signup. The associate’s device is configured against a store instance before anyone logs in, so first run is three short steps and out.",
    screens: [
      { label: "Server configuration", caption: "Tenant ID, server & service URL", state: "Config", image: shot("signup.png") },
      { label: "Login", caption: "Credentials and store picker", state: "Auth", image: shot("login.png") },
      { label: "Welcome to Fairway+", caption: "Prism intro before the first ask", state: "First run", image: shot("welcome.png") },
    ],
  },
  {
    id: "flow-home",
    number: "01",
    title: "Home",
    summary:
      "A splash that names the assistant, then a greeting and a single input. Home is not a dashboard — it is a prompt with as little standing between the associate and their first question as possible.",
    screens: [
      { label: "Welcome to Prism", caption: "Assistant splash — intentional", state: "Splash", image: shot("splash.png") },
      { label: "Ready to ask", caption: "Greeting, then one field", state: "Ready", image: shot("home-ready.png") },
      { label: "First reply", caption: "Disambiguating a faucet ask", state: "Answered", image: shot("home-faucet.png") },
    ],
  },
  {
    id: "flow-message",
    number: "02",
    title: "Message",
    summary:
      "Composing a question. Text is the primary path with voice as an equal-access alternate, sized for one thumb while the other hand holds product.",
    screens: [
      { label: "Voice compose", caption: "Mic armed, faucet ask", state: "Voice", image: shot("voice.png") },
      { label: "Text compose", caption: "Hammers query, send armed", state: "Typing", image: shot("text.png") },
      { label: "Sent · loading", caption: "Long SKU committed, Prism thinking", state: "Pending", image: shot("message.png") },
    ],
  },
  {
    id: "flow-response",
    number: "03",
    title: "Response",
    summary:
      "The core of the product. A vague ask goes to thinking, then an aisle-and-price answer in the thread — with a product card underneath, and compare still in the conversation when the associate needs it.",
    screens: [
      { label: "Loading", caption: "Prism thinking on faucet ask", state: "Pending", image: shot("response-loading.png") },
      { label: "Aisle + price", caption: "One in stock, card expanded", state: "Answered", image: shot("one-product.png") },
      { label: "Compare table", caption: "Three hammers, in-thread", state: "Compare", image: shot("compare.png") },
    ],
  },
  {
    id: "flow-followup",
    number: "04",
    title: "Follow-up",
    summary:
      "When the ask is still broad, Prism offers related SKUs in the thread — clarifying questions, a chip to pick a family, a refine sheet for material and length, then a short list of matching sets.",
    screens: [
      { label: "Clarify", caption: "Related SKUs as chips", state: "Follow-up", image: shot("followup.png") },
      { label: "Refine sheet", caption: "Material and length filters", state: "Refine", image: shot("followup-drawer.png") },
      { label: "Related products", caption: "Three matching blade sets", state: "Results", image: shot("followup-products.png") },
    ],
  },
  {
    id: "flow-details",
    number: "05",
    title: "Details",
    summary:
      "The layer underneath the answer. Full imagery, item and UPC, aisle, and the spec sheet — for the questions a single line cannot close.",
    screens: [
      { label: "Product detail", caption: "Carousel, aisle, features", state: "Detail", image: shot("product-detail.png") },
    ],
  },
];

export const outcomes = [
  { label: "Shipped", value: "Google Play & App Store", detail: "Published as Epicor Fairway+ on both platforms." },
  { label: "Lead customer", value: "Ace Hardware", detail: "Onboarded with access to the shipped build." },
  {
    label: "Distribution",
    value: "Enterprise, limited",
    detail: "Public Play listing shows 1+ downloads — expected for a gated enterprise rollout, not a usage signal.",
  },
  { label: "Adoption", value: "Pending", detail: "Store and associate usage counts are not yet reported." },
];

export const reflectionPoints = [
  {
    title: "The naming question was a systems question",
    body: "Two names in one app reads as a bug until you see the surface map. Prism is a platform capability; Fairway+ is one of its clients. I designed the moment of introduction so the distinction teaches itself rather than arguing for a rename that would have cost Epicor its cross-product identity.",
  },
  {
    title: "I designed the answer, not the screen",
    body: "Most of the work was deciding what belongs in the first two lines of a bubble. Once aisle-then-price was settled, layout, disambiguation, and the detail layer all fell out of it. Fixing the hierarchy first is what kept five flows coherent.",
  },
  {
    title: "Constraints from the floor, not the mock",
    body: "Type-first and TTS-off were unglamorous calls that came from picturing a noisy aisle with a customer waiting. They made demos less impressive and the product more usable — a trade I would make again.",
  },
  {
    title: "What I would pressure-test next",
    body: "Adoption data is still pending, so the honest open question is whether associates return to the thread after their first answer. That is the metric I would instrument first: repeat questions per shift, not downloads.",
  },
];
