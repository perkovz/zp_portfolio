"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";
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
  const [line, setLine] = useState<{ x1: number; y1: number; x2: number; y2: number } | null>(null);
  const labelId = useId();
  const bodyRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLSpanElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const step = STEPS[active];

  function activate(id: StepId) {
    setActive(id);
  }

  useLayoutEffect(() => {
    const body = bodyRef.current;
    const spot = spotRef.current;
    const num = numRef.current;
    if (!body || !spot || !num) return;

    let frame = 0;
    const measure = () => {
      const root = body.getBoundingClientRect();
      const from = spot.getBoundingClientRect();
      const to = num.getBoundingClientRect();
      const x1 = from.left + from.width / 2 - root.left;
      const y1 = from.top + from.height / 2 - root.top;
      const x2 = to.left - root.left;
      const y2 = to.top + to.height / 2 - root.top;
      if (x2 < x1 + 24) {
        setLine(null);
        return;
      }
      const dx = x2 - x1;
      const dy = y2 - y1;
      const len = Math.hypot(dx, dy) || 1;
      const rim = 14;
      setLine({
        x1: x1 + (dx / len) * rim,
        y1: y1 + (dy / len) * rim,
        x2,
        y2,
      });
    };

    const started = performance.now();
    const tick = (now: number) => {
      measure();
      if (now - started < 520) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    const observer = new ResizeObserver(measure);
    observer.observe(body);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [active]);

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

        <div className={styles.stageBody} ref={bodyRef}>
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
              ref={spotRef}
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
                    <span className={styles.num} ref={open ? numRef : undefined}>
                      0{item.id + 1}
                    </span>
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

          {line ? (
            <svg className={styles.leader} aria-hidden="true">
              <line x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2} />
            </svg>
          ) : null}

          <p className={styles.live} aria-live="polite">
            Step {active + 1} of 3. {step.label}. {step.title}
          </p>
        </div>
      </div>
    </section>
  );
}
