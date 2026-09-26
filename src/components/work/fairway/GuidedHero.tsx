"use client";

import { useEffect, useId, useState } from "react";
import styles from "./guided-hero.module.css";

type StepId = 0 | 1 | 2;

type Step = {
  id: StepId;
  label: string;
  hint: string;
  kicker: string;
  title: string;
  body: string;
  action: string;
  image: string;
  alt: string;
  spots: Record<StepId, { x: number; y: number }>;
};

const STEPS: Step[] = [
  {
    id: 0,
    label: "Ask naturally",
    hint: "Start with the customer's words",
    kicker: "01 · Ask naturally",
    title: "Start with the customer’s words.",
    body: "Text, voice, camera, and barcode inputs meet the associate where the conversation already is.",
    action: "Continue",
    image: "home-ready.png",
    alt: "Fairway+ home, ready for a question, with text, voice, and barcode in the composer",
    spots: {
      0: { x: 58, y: 80 },
      1: { x: 36, y: 80 },
      2: { x: 22, y: 80 },
    },
  },
  {
    id: 1,
    label: "Refine intent",
    hint: "One useful question at a time",
    kicker: "02 · Refine intent",
    title: "Ask only what changes the answer.",
    body: "One useful follow-up narrows the search without turning the conversation into a form.",
    action: "Continue",
    image: "followup.png",
    alt: "Fairway+ asking which saw blade, with one focused follow-up and suggestion chips",
    spots: {
      0: { x: 24, y: 68 },
      1: { x: 38, y: 44 },
      2: { x: 58, y: 68 },
    },
  },
  {
    id: 2,
    label: "Ground the answer",
    hint: "Evidence before recommendation",
    kicker: "03 · Ground the answer",
    title: "Evidence, then recommendation.",
    body: "Fit, availability, and product documentation stay visible so the associate can answer with confidence.",
    action: "Restart tour",
    image: "one-product.png",
    alt: "One hammer in stock, with aisle, price, and the product card still visible",
    spots: {
      0: { x: 68, y: 18 },
      1: { x: 36, y: 34 },
      2: { x: 42, y: 58 },
    },
  },
];

type GuidedHeroProps = {
  assetBase?: string;
};

export function GuidedHero({ assetBase = "/fairway/shots" }: GuidedHeroProps) {
  const [active, setActive] = useState<StepId>(0);
  const [preview, setPreview] = useState<StepId>(0);
  const [noteReady, setNoteReady] = useState(true);
  const labelId = useId();
  const step = STEPS[active];
  const shown = STEPS[preview];

  useEffect(() => {
    setNoteReady(false);
    const frame = requestAnimationFrame(() => setNoteReady(true));
    return () => cancelAnimationFrame(frame);
  }, [preview]);

  function activate(id: StepId) {
    setActive(id);
    setPreview(id);
  }

  function reveal(id: StepId) {
    setPreview(id);
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
          <p>Hover a marker to reveal the design decision.</p>
          <p>Click to move through the product story →</p>
        </div>
      </div>

      <div
        className={styles.stage}
        onMouseLeave={() => setPreview(active)}
      >
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
            {STEPS.map((item) => {
              const spot = step.spots[item.id];
              const isActive = item.id === preview;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.hotspot} ${isActive ? styles.hotspotActive : ""}`}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  aria-pressed={item.id === active}
                  aria-label={`${item.label}. ${item.title}`}
                  onMouseEnter={() => reveal(item.id)}
                  onFocus={() => reveal(item.id)}
                  onClick={() => activate(item.id)}
                >
                  <span className={styles.dot} aria-hidden="true">
                    {item.id + 1}
                  </span>
                </button>
              );
            })}
          </div>

          <div className={styles.cards}>
            {STEPS.filter((item) => item.id !== preview).map((item) => (
              <button
                key={item.id}
                type="button"
                className={styles.quiet}
                onMouseEnter={() => reveal(item.id)}
                onFocus={() => reveal(item.id)}
                onClick={() => activate(item.id)}
              >
                <span className={styles.num}>0{item.id + 1}</span>
                <span>
                  <strong>{item.label}</strong>
                  <span>{item.hint}</span>
                </span>
              </button>
            ))}
            <div className={`${styles.note} ${noteReady ? "" : styles.noteEntering}`}>
              <p className={styles.kicker}>{shown.kicker}</p>
              <h3>{shown.title}</h3>
              <p>{shown.body}</p>
              <button
                type="button"
                className={styles.noteAction}
                onClick={() => activate(((preview + 1) % 3) as StepId)}
              >
                {shown.id === 2 ? "Restart the tour ↻" : "Click to continue →"}
              </button>
            </div>
          </div>

          <p className={styles.live} aria-live="polite">
            Step {active + 1} of 3. {step.label}. {step.title}
          </p>
        </div>
      </div>
    </section>
  );
}
