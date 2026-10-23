import styles from "./DecisionShowcase.module.scss";

type DecisionType = "scan" | "selection";

const copy = {
  scan: {
    kicker: "The scan decision",
    before: "Extra confirmation",
    after: "Answer in context",
    beforeSteps: ["Scan barcode", "Confirm product", "See price"],
    afterSteps: ["Scan barcode", "See price", "Scan another"],
    note: "Remove the step that does not answer Jason’s question.",
  },
  selection: {
    kicker: "The selection decision",
    before: "One choice",
    after: "Many choices",
    beforeSteps: ["◉ Bank ending 4821", "○ Visa ending 1042", "○ Add payment method"],
    afterSteps: ["☑ Invoice 10492", "☑ Invoice 10495", "☐ Invoice 10501"],
    note: "The control teaches whether a person chooses one item or several.",
  },
} satisfies Record<DecisionType, { kicker: string; before: string; after: string; beforeSteps: string[]; afterSteps: string[]; note: string }>;

export function DecisionShowcase({ type }: { type: DecisionType }) {
  const decision = copy[type];

  return (
    <figure className={styles.frame} aria-label={decision.kicker}>
      <figcaption className={styles.kicker}>{decision.kicker}</figcaption>
      <div className={styles.comparison}>
        <section className={styles.panel}>
          <p className={styles.label}>Before</p>
          <h4>{decision.before}</h4>
          <ol>{decision.beforeSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
        <section className={`${styles.panel} ${styles.after}`}>
          <p className={styles.label}>After</p>
          <h4>{decision.after}</h4>
          <ol>{decision.afterSteps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
      </div>
      <p className={styles.note}>{decision.note}</p>
    </figure>
  );
}
