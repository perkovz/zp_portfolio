export const metaItems = [
  { label: "Role", value: "UX/UI", note: "Research and product direction: partner-led" },
  { label: "Platform", value: "iOS · Android", note: "Native app shell" },
  { label: "Status", value: "Shipped", note: "Google Play and the App Store" },
  { label: "AI", value: "Prism", note: "Epicor’s proprietary assistant" },
];

export const execSummary = [
  "Fairway+ is an AI assistant for retail associates, built at Epicor with Ace Hardware as its lead customer. It helps an associate answer an in-the-moment product question—price, aisle, availability—before the customer walks away.",
  "I designed the end-to-end interaction system: the conversational model, answer hierarchy, disambiguation behavior, in-thread comparison, and product details. Research and product direction were partner-led. My task was turning “put AI in the app” into an experience that works one-handed on a noisy store floor.",
  "Fairway+ is the app; Prism is the AI inside it and across other Epicor products. Onboarding introduces Prism explicitly so associates understand which product they opened and which assistant they are talking to.",
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
    screens: [
      { label: "Server configuration", caption: "Tenant, server, and service URL", state: "Config", image: shot("signup.png") },
      { label: "Login", caption: "Credentials and store selection", state: "Auth", image: shot("login.png") },
      { label: "Welcome to Fairway+", caption: "Introduce Prism before the first question", state: "First run", image: shot("welcome.png") },
    ],
  },
  {
    id: "flow-home",
    number: "01",
    title: "Home",
    summary:
      "A greeting and one input remove everything between the associate and the first question. Home is not a dashboard; it is the beginning of a conversation.",
    screens: [
      { label: "Welcome to Prism", caption: "Introduce the assistant by name", state: "Splash", image: shot("splash.png") },
      { label: "Ready to ask", caption: "A greeting followed by one clear input", state: "Ready", image: shot("home-ready.png") },
      { label: "First reply", caption: "A broad faucet request becomes a focused conversation", state: "Answered", image: shot("home-faucet.png") },
    ],
  },
  {
    id: "flow-message",
    number: "02",
    title: "Message",
    summary:
      "Text is the default in noisy stores; voice remains an equal-access alternative. Both are sized for one-handed use while the associate handles a product or assists a customer.",
    screens: [
      { label: "Voice compose", caption: "Microphone active for a spoken request", state: "Voice", image: shot("voice.png") },
      { label: "Text compose", caption: "Query entered and ready to send", state: "Typing", image: shot("text.png") },
      { label: "Sent · loading", caption: "Request committed while Prism prepares a response", state: "Pending", image: shot("message.png") },
    ],
  },
  {
    id: "flow-response",
    number: "03",
    title: "Response",
    summary:
      "A vague request becomes an aisle-and-price answer in the thread. Product details remain attached to the response, and comparison stays inside the conversation.",
    screens: [
      { label: "Loading", caption: "Prism processes the request", state: "Pending", image: shot("response-loading.png") },
      { label: "Aisle + price", caption: "The immediate answer appears first", state: "Answered", image: shot("one-product.png") },
      { label: "Compare table", caption: "Relevant product differences shown in-thread", state: "Compare", image: shot("compare.png") },
    ],
  },
  {
    id: "flow-followup",
    number: "04",
    title: "Follow-up",
    summary:
      "When the request is still broad, Prism narrows it progressively: a focused question, a family selection, optional filters, and a short set of matching products.",
    screens: [
      { label: "Clarify", caption: "Related products presented as choices", state: "Follow-up", image: shot("followup.png") },
      { label: "Refine sheet", caption: "Material and length filters", state: "Refine", image: shot("followup-drawer.png") },
      { label: "Related products", caption: "A short list of matching sets", state: "Results", image: shot("followup-products.png") },
    ],
  },
  {
    id: "flow-details",
    number: "05",
    title: "Details",
    summary:
      "One tap reveals the information a short answer cannot hold: imagery, item and UPC identifiers, aisle location, availability, features, and specifications.",
    screens: [
      { label: "Product detail", caption: "Carousel, location, identifiers, and product features", state: "Detail", image: shot("product-detail.png") },
    ],
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
