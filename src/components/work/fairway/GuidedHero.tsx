"use client";

import { useId, useState } from "react";
import styles from "./guided-hero.module.css";

type StepId = 0 | 1 | 2;

type Step = {
  id: StepId;
  label: string;
  hint: string;
  kicker: string;
  title: string;
  body: string;
  image: string;
  alt: string;
  spot: { x: number; y: number };
};

const STEPS: Step[] = [
  {
    id: 0,
    label: "Ask naturally",
    hint: "Start with the customer's words",
    kicker: "01 · Ask naturally",
    title: "Start with the customer’s words.",
    body: "Text, voice, camera, and barcode inputs meet the associate where the conversation already is.",
    image: "home-ready.png",
    alt: "Fairway+ home, ready for a question, with the keyboard open",
    spot: { x: 58, y: 80 },
  },
  {
    id: 1,
    label: "Refine intent",
    hint: "One useful question at a time",
    kicker: "02 · Refine intent",
    title: "Ask only what changes the answer.",
    body: "One useful follow-up narrows the search without turning the conversation into a form.",
    image: "followup.png",
    alt: "Fairway+ asking which saw blade, with one focused follow-up and suggestion chips",
    spot: { x: 38, y: 44 },
  },
  {
    id: 2,
    label: "Ground the answer",
    hint: "Evidence before recommendation",
    kicker: "03 · Ground the answer",
    title: "Evidence, then recommendation.",
    body: "Fit, availability, and product documentation stay visible so the associate can answer with confidence.",
    image: "one-product.png",
    alt: "One hammer in stock, with aisle, price, and the product card still visible",
    spot: { x: 42, y: 58 },
  },
];

type GuidedHeroProps = {
  assetBase?: string;
};

export function GuidedHero({ assetBase = "/fairway/shots" }: GuidedHeroProps) {
  const [active, setActive] = useState<StepId>(0);
  const labelId = useId();
  const step = STEPS[active];

  function activate(id: StepId) {
    setActive(id);
  }

  return (
    <section className={styles.hero} aria-labelledby={labelId}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Fairway+ · Guided product tour</p>
        <h1 id={labelId} className={styles.headline}>
          Ask less.
          <br />
          Know more.
        </h1>
        <p className={styles.summary}>
          An AI sales assistant that turns a customer question into the right product, evidence, and next step.
        </p>
        <div className={styles.instructions}>
          <p>Use Next, or pick a step, to move through the product story.</p>
        </div>
      </div>

      <div className={styles.stage}>
        <div className={styles.stageHeader}>
          <span>Live walkthrough · 0{active + 1} / 03</span>
          <div className={styles.progress} role="group" aria-label="Tour progress">
            {STEPS.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-label={`${item.label}, step ${item.id + 1} of 3`}
                aria-current={item.id === active ? "step" : undefined}
                onClick={() => activate(item.id)}
              />
            ))}
          </div>
        </div>

        <div className={styles.stageBody}>
          <div className={styles.phone}>
            <div className={styles.screenStack}>
              {STEPS.map((item) => (
                <img
                  key={item.id}
                  className={`${styles.screen} ${item.id === active ? styles.screenActive : ""}`}
                  src={`${assetBase}/${item.image}`}
                  alt={item.id === active ? item.alt : ""}
                  aria-hidden={item.id !== active}
                />
              ))}
            </div>
            <span
              className={`${styles.hotspot} ${styles.hotspotActive}`}
              style={{ left: `${step.spot.x}%`, top: `${step.spot.y}%` }}
              aria-hidden="true"
            >
              <span className={styles.dot}>{active + 1}</span>
            </span>
          </div>

          <div className={styles.cards}>
            {STEPS.map((item) => {
              const open = item.id === active;
              return (
                <article key={item.id} className={`${styles.step} ${open ? styles.stepOpen : ""}`}>
                  <button
                    type="button"
                    className={styles.stepHit}
                    aria-expanded={open}
                    aria-current={open ? "step" : undefined}
                    onClick={() => activate(item.id)}
                  >
                    <span className={styles.num}>0{item.id + 1}</span>
                    <span>
                      <strong>{item.label}</strong>
                      <span className={styles.hint}>{item.hint}</span>
                    </span>
                  </button>
                  <div className={styles.expand}>
                    <div className={styles.expandInner}>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      <button
                        type="button"
                        className={styles.noteAction}
                        onClick={() => activate(((item.id + 1) % 3) as StepId)}
                      >
                        {item.id === 2 ? "Restart the tour ↻" : "Next →"}
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <p className={styles.live} aria-live="polite">
            Step {active + 1} of 3. {step.label}. {step.title}
          </p>
        </div>
      </div>
    </section>
  );
}
