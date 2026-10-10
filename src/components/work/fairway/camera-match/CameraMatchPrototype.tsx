"use client";

import { useCallback, useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { Source_Sans_3 } from "next/font/google";
import { Button, Column, Heading, Text } from "@/once-ui/components";
import styles from "./camera-match.module.css";

const fairwaySans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

type Screen =
  | "home"
  | "camera"
  | "angles"
  | "analyzing"
  | "match"
  | "location"
  | "kit"
  | "ready"
  | "clip"
  | "unconfirmed";

const CART = "/images/projects/fairway/camera-match/cartridge.png";
const GREASE = "/images/projects/fairway/camera-match/grease.png";
const PULLER = "/images/projects/fairway/camera-match/puller.png";

function IconScan() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 8V6a2 2 0 0 1 2-2h2M20 8V6a2 2 0 0 0-2-2h-2M4 16v2a2 2 0 0 0 2 2h2M20 16v2a2 2 0 0 1-2 2h-2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconBack() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconMenu() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2.4" />
    </svg>
  );
}

function StatusBar({ light = true }: { light?: boolean }) {
  return (
    <div className={styles.status} aria-hidden>
      <span className={styles.statusTime} style={light ? undefined : { color: "#f4f4f4" }}>
        9:41
      </span>
      <span className={styles.dynamicIsland} />
      <span className={styles.statusIcons}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.battery} />
      </span>
    </div>
  );
}

export function CameraMatchPrototype() {
  const [screen, setScreen] = useState<Screen>("home");
  const [clip, setClip] = useState<"u" | "ring">("u");
  const [step, setStep] = useState(0);

  const go = useCallback((next: Screen, dir: "fwd" | "back" = "fwd") => {
    document.documentElement.dataset.cmDir = dir;
    const apply = () => setScreen(next);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { finished: Promise<void> };
    };
    if (!reduce && typeof doc.startViewTransition === "function") {
      doc.startViewTransition(() => {
        flushSync(apply);
      });
      return;
    }
    apply();
  }, []);

  useEffect(() => {
    if (screen !== "analyzing") {
      setStep(0);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(2);
      const t = window.setTimeout(() => go("match"), 3400);
      return () => window.clearTimeout(t);
    }
    const a = window.setTimeout(() => setStep(1), 2200);
    const b = window.setTimeout(() => setStep(2), 4000);
    const c = window.setTimeout(() => go("match"), 5400);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
      window.clearTimeout(c);
    };
  }, [screen, go]);

  return (
    <Column fillWidth horizontal="center" gap="24">
      <style>{`
        ::view-transition-old(root),
        ::view-transition-new(root) {
          animation: none;
          mix-blend-mode: normal;
        }
        ::view-transition-old(cm-phone) {
          animation: 480ms cubic-bezier(0.22, 1, 0.36, 1) both cmPhoneOut;
        }
        ::view-transition-new(cm-phone) {
          animation: 480ms cubic-bezier(0.22, 1, 0.36, 1) both cmPhoneIn;
        }
        ::view-transition-group(cm-phone) {
          animation-duration: 480ms;
        }
        @keyframes cmPhoneOut {
          to { opacity: 0; transform: translateY(-8px) scale(0.992); }
        }
        @keyframes cmPhoneIn {
          from { opacity: 0; transform: translateY(12px) scale(0.992); }
        }
        html[data-cm-dir="back"] ::view-transition-old(cm-phone) {
          animation-name: cmPhoneOutBack;
        }
        html[data-cm-dir="back"] ::view-transition-new(cm-phone) {
          animation-name: cmPhoneInBack;
        }
        @keyframes cmPhoneOutBack {
          to { opacity: 0; transform: translateY(8px) scale(0.992); }
        }
        @keyframes cmPhoneInBack {
          from { opacity: 0; transform: translateY(-10px) scale(0.992); }
        }
        @media (prefers-reduced-motion: reduce) {
          ::view-transition-old(cm-phone),
          ::view-transition-new(cm-phone) {
            animation: none !important;
          }
        }
      `}</style>
      <div className={styles.stage}>
        <div className={styles.intro}>
          <Button href="/work/fairway-plus" variant="tertiary" weight="default" size="s" prefixIcon="chevronLeft">
            Fairway+
          </Button>
          <Text variant="label-default-s" onBackground="brand-medium">
            PROTOTYPE · CAMERA MATCH
          </Text>
          <Heading as="h1" variant="display-strong-s">
            Tap through the repair flow.
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Scan → shutter → Continue → Find in store → Start directions → Add to list. “Not this item?” opens the
            safe failure branch.
          </Text>
        </div>

        <div className={`${styles.phone} ${fairwaySans.className}`} data-screen={screen}>
          {screen === "home" && (
            <div className={styles.screen}>
              <StatusBar />
              <div className={`${styles.nav} ${styles.navLine}`}>
                <span className={styles.iconBtn} aria-hidden>
                  <IconMenu />
                </span>
                <span className={styles.navTitle}>Ace Ohio</span>
                <span className={styles.iconBtn} aria-hidden>
                  <IconPlus />
                </span>
              </div>
              <div className={styles.body}>
                <h1 className={styles.headline}>What can I help you find?</h1>
                <p className={styles.sub}>Ask a question or show Prism the part.</p>
                <button type="button" className={styles.scanCard} onClick={() => go("camera")}>
                  <div className={styles.scanRow}>
                    <span className={styles.scanIcon}>
                      <IconScan />
                    </span>
                    <span className={styles.scanLabel}>SCAN ITEM →</span>
                  </div>
                  <p className={styles.scanTitle}>Scan a product or barcode</p>
                  <p className={styles.sub} style={{ margin: 0 }}>
                    Works with loose parts, packaging, and labels.
                  </p>
                </button>
                <div className={styles.ask}>Ask Prism anything</div>
              </div>
              <span className={styles.homeIndicator} />
            </div>
          )}

          {screen === "camera" && (
            <div className={`${styles.screen} ${styles.camera} ${styles.cameraLive}`}>
              <StatusBar />
              <div className={styles.cameraNav}>
                <button type="button" className={styles.closeBtn} onClick={() => go("home", "back")} aria-label="Close camera">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </button>
              </div>
              <div className={styles.viewfinder}>
                <span className={`${styles.corner} ${styles.tl}`} />
                <span className={`${styles.corner} ${styles.tr}`} />
                <span className={`${styles.corner} ${styles.bl}`} />
                <span className={`${styles.corner} ${styles.br}`} />
                <img src={CART} alt="Broken faucet cartridge" className={styles.cartridge} />
              </div>
              <div className={styles.cameraCopy}>
                <h2>Center the broken part</h2>
                <p>Prism also reads barcodes automatically.</p>
              </div>
              <div className={styles.shutterRow}>
                <span className={styles.shutterSlot} />
                <button type="button" className={styles.shutter} onClick={() => go("angles")} aria-label="Capture photo">
                  <span className={styles.shutterInner} />
                </button>
                <span className={styles.shutterSlot} />
              </div>
            </div>
          )}

          {screen === "angles" && (
            <div className={`${styles.screen} ${styles.camera} ${styles.angles}`}>
              <StatusBar />
              <div className={styles.cameraNav}>
                <button type="button" className={styles.closeBtn} onClick={() => go("camera", "back")} aria-label="Close">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 6l12 12M18 6L6 18" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                </button>
              </div>
              <div className={styles.viewfinder}>
                <img src={CART} alt="Captured cartridge" className={styles.cartridge} />
              </div>
              <div className={styles.sheet}>
                <span className={styles.handle} />
                <div className={styles.savedHead}>
                  <div className={styles.savedRow}>
                    <span className={styles.savedCheck} aria-hidden>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="m5 12 4 4 10-10" stroke="#FFFFFF" strokeWidth="2.5" />
                      </svg>
                    </span>
                    <p className={styles.savedTitle}>1 photo saved</p>
                  </div>
                  <p className={styles.savedSub}>Add another angle to help Prism confirm the match.</p>
                </div>
                <div className={styles.thumbs}>
                  <div className={styles.thumb}>
                    <img src={CART} alt="Saved photo" />
                    <button
                      type="button"
                      className={styles.thumbDelete}
                      onClick={() => go("camera", "back")}
                      aria-label="Delete photo"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M6 6l12 12M18 6L6 18" stroke="#FFFFFF" strokeWidth="2.3" />
                      </svg>
                    </button>
                  </div>
                  <button type="button" className={styles.addThumb} onClick={() => go("camera", "back")}>
                    <svg width="25" height="25" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M4 8h3l2-3h6l2 3h3v11H4z" stroke="#4F74E4" strokeWidth="2" />
                      <circle cx="12" cy="13.5" r="3.5" fill="none" stroke="#4F74E4" strokeWidth="2" />
                    </svg>
                    Add angle
                  </button>
                </div>
                <button type="button" className={styles.primary} onClick={() => go("analyzing")}>
                  Continue
                </button>
              </div>
            </div>
          )}

          {screen === "analyzing" && (
            <div className={styles.screen}>
              <StatusBar />
              <div className={styles.nav}>
                <span className={styles.navTitle}>Identifying item</span>
                <button type="button" className={styles.navAction} onClick={() => go("home", "back")}>
                  Cancel
                </button>
              </div>
              <div className={styles.body}>
                <div className={styles.photoWell}>
                  <span className={styles.scanSweep} aria-hidden />
                  <img src={CART} alt="" />
                </div>
                <h1 className={styles.findingTitle}>
                  Finding the exact part<span aria-hidden />
                </h1>
                <p className={styles.findingSub}>Comparing shape, markings, and nearby inventory.</p>
                <div className={styles.check}>
                  <span className={`${styles.mark} ${styles.markDone}`} aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="m5 12 4 4 10-10" stroke="#FFFFFF" strokeWidth="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className={styles.checkTitle}>Object isolated</p>
                    <p className={styles.checkNote}>Faucet cartridge</p>
                  </div>
                </div>
                <div className={styles.check}>
                  <span
                    className={`${styles.mark} ${step >= 1 ? styles.markDone : styles.markBusy}`}
                    aria-hidden
                  >
                    {step >= 1 ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="m5 12 4 4 10-10" stroke="#FFFFFF" strokeWidth="2.5" />
                      </svg>
                    ) : null}
                  </span>
                  <div>
                    <p className={styles.checkTitle}>Checking compatibility</p>
                    <p className={styles.checkNote}>Brand, dimensions, features</p>
                  </div>
                </div>
                <div className={`${styles.check} ${step < 1 ? styles.checkWait : ""}`}>
                  <span
                    className={`${styles.mark} ${
                      step >= 2 ? styles.markDone : step >= 1 ? styles.markBusy : styles.markWait
                    }`}
                    aria-hidden
                  >
                    {step >= 2 ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="m5 12 4 4 10-10" stroke="#FFFFFF" strokeWidth="2.5" />
                      </svg>
                    ) : null}
                  </span>
                  <div>
                    <p className={styles.checkTitle}>Checking store inventory</p>
                    {step >= 1 ? <p className={styles.checkNote}>Ace Ohio stock</p> : null}
                  </div>
                </div>
                {step >= 2 ? (
                  <button type="button" className={styles.ghost} onClick={() => go("unconfirmed")}>
                    Low confidence path
                  </button>
                ) : null}
              </div>
              <span className={styles.homeIndicator} />
            </div>
          )}

          {screen === "match" && (
            <div className={styles.screen}>
              <StatusBar />
              <div className={`${styles.nav} ${styles.navLine}`}>
                <button type="button" className={styles.iconBtn} onClick={() => go("analyzing", "back")} aria-label="Back">
                  <IconBack />
                </button>
                <span className={styles.navTitle}>Match found</span>
                <span style={{ width: 44 }} />
              </div>
              <div className={styles.matchBody}>
                <div className={styles.matchRow}>
                  <span className={styles.confidence}>
                    <span className={styles.confidenceDot} />
                    <span className={styles.confidenceLabel}>HIGH CONFIDENCE</span>
                  </span>
                  <span className={styles.visualMatch}>Visual match</span>
                </div>
                <h1 className={styles.matchHeadline}>This looks like your replacement.</h1>
                <div className={styles.matchCard}>
                  <div className={styles.matchTop}>
                    <div className={styles.matchThumb}>
                      <img src={CART} alt="" />
                    </div>
                    <div className={styles.matchCopy}>
                      <p className={styles.exactMatch}>EXACT MATCH</p>
                      <p className={styles.matchName}>Moen 1225 replacement cartridge</p>
                      <p className={styles.matchSpec}>Single-handle faucet · Brass/plastic</p>
                      <p className={styles.matchPrice}>$29.99</p>
                    </div>
                  </div>
                  <div className={styles.matchRule} />
                  <div className={styles.attrRow}>
                    {["Shape", "Markings", "Fit"].map((label) => (
                      <span key={label} className={styles.attr}>
                        <span className={styles.attrDot} aria-hidden>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <path d="m5 12 4 4 10-10" stroke="#FFFFFF" strokeWidth="3" />
                          </svg>
                        </span>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
                <button type="button" className={styles.primary} onClick={() => go("location")}>
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M4 10h16v10H4zM7 10V6h10v4M9 14h6" stroke="#FFFFFF" strokeWidth="2" />
                  </svg>
                  Find in this store
                </button>
                <button type="button" className={styles.notItem} onClick={() => go("clip")}>
                  Not this item?
                </button>
              </div>
              <span className={styles.homeIndicator} />
            </div>
          )}

          {screen === "location" && (
            <div className={styles.screen}>
              <StatusBar />
              <div className={`${styles.nav} ${styles.navLine}`}>
                <button type="button" className={styles.iconBtn} onClick={() => go("match", "back")} aria-label="Back">
                  <IconBack />
                </button>
                <span className={styles.navTitle}>In-store location</span>
                <span style={{ width: 44 }} />
              </div>
              <div className={styles.locBody}>
                <div className={styles.locProduct}>
                  <div className={styles.locThumb}>
                    <img src={CART} alt="" />
                  </div>
                  <div>
                    <p className={styles.locName}>Moen 1225 cartridge</p>
                    <p className={styles.locStock}>6 in stock · Ace Ohio</p>
                  </div>
                </div>
                <div className={styles.aisle}>
                  <div>
                    <p className={styles.aisleLabel}>EXACT LOCATION</p>
                    <p className={styles.aisleValue}>Aisle 14</p>
                    <p className={styles.aisleBay}>Bay 06 · Bin C</p>
                  </div>
                  <span className={styles.aisleEdit} aria-hidden>
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="m14 5 5 5-9 9H5v-5z" stroke="#FFFFFF" strokeWidth="2" />
                    </svg>
                  </span>
                </div>
                <div className={styles.map} aria-hidden>
                  <p className={styles.mapLabel}>STORE MAP</p>
                  <p className={styles.mapWalk}>WALK 1 MIN</p>
                  <div className={styles.mapFloor}>
                    <div className={styles.aisleCol} style={{ left: 0 }}>
                      <span className={styles.aisleNum}>12</span>
                    </div>
                    <div className={styles.aisleCol} style={{ left: 52 }}>
                      <span className={styles.aisleNum}>13</span>
                    </div>
                    <div className={`${styles.aisleCol} ${styles.aisleActive}`}>
                      <span className={styles.aisleNum}>14</span>
                      <span className={styles.aisleDept}>Plumbing</span>
                      <span className={styles.aisleBayMark} />
                    </div>
                    <div className={styles.aisleCol} style={{ left: 164 }}>
                      <span className={styles.aisleNum}>15</span>
                    </div>
                    <span className={styles.aisleCol} style={{ left: 216, width: 56, height: 64 }} />
                    <span className={styles.aisleCol} style={{ left: 216, top: 72, width: 56, height: 76 }} />
                    <span className={styles.desk} />
                    <span className={styles.hereLabel}>You are here</span>
                    <span className={styles.you} />
                    <span className={styles.pathH} />
                    <span className={styles.pathV} />
                    <span className={styles.pathDot} />
                  </div>
                  <p className={styles.mapHint}>You are at Aisle 12 → turn into Aisle 14</p>
                </div>
                <button type="button" className={styles.primary} onClick={() => go("kit")}>
                  Start directions →
                </button>
              </div>
              <span className={styles.homeIndicator} />
            </div>
          )}

          {screen === "kit" && (
            <div className={`${styles.screen} ${styles.kitScreen}`}>
              <StatusBar />
              <div className={`${styles.nav} ${styles.navLine}`}>
                <button type="button" className={styles.iconBtn} onClick={() => go("location", "back")} aria-label="Back">
                  <IconBack />
                </button>
                <span className={styles.navTitle}>For this repair</span>
                <span className={styles.kitEdit}>Edit</span>
              </div>
              <div className={styles.kitBody}>
                <div className={styles.kitHead}>
                  <h1 className={styles.kitHeadline}>Leave with everything you need.</h1>
                  <p className={styles.kitSub}>Built for a single-handle bathroom faucet repair.</p>
                </div>
                <div className={styles.compat}>
                  <span className={styles.compatIcon} aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="m5 12 4 4 10-10" stroke="#FFFFFF" strokeWidth="2.5" />
                    </svg>
                  </span>
                  <div>
                    <p className={styles.compatTitle}>COMPATIBILITY CHECKED</p>
                    <p className={styles.compatNote}>Every item works with the matched part.</p>
                  </div>
                </div>
                <div className={styles.kitList}>
                <div className={`${styles.kitCard} ${styles.kitCardRequired}`}>
                  <span className={styles.kitCheck} aria-hidden>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="m5 12 4 4 10-10" stroke="#FFFFFF" strokeWidth="2.8" />
                    </svg>
                  </span>
                  <div className={styles.kitThumb}>
                    <img src={CART} alt="" />
                  </div>
                  <div className={styles.kitCopy}>
                    <p className={styles.kitRequired}>REQUIRED</p>
                    <p className={styles.kitName}>Moen 1225 cartridge</p>
                    <p className={styles.kitMeta}>$29.99 · Aisle 14</p>
                  </div>
                </div>
                <div className={styles.kitCard}>
                  <span className={styles.kitCheck} aria-hidden>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="m5 12 4 4 10-10" stroke="#FFFFFF" strokeWidth="2.8" />
                    </svg>
                  </span>
                  <div className={styles.kitThumb}>
                    <img src={GREASE} alt="" />
                  </div>
                  <div className={styles.kitCopy}>
                    <p className={styles.kitName}>Silicone faucet grease</p>
                    <p className={styles.kitMeta}>$4.99 · Prevents seal damage</p>
                  </div>
                </div>
                <div className={styles.kitCard}>
                  <span className={styles.kitCheckOff} aria-hidden />
                  <div className={styles.kitThumb}>
                    <img src={PULLER} alt="" />
                  </div>
                  <div className={styles.kitCopy}>
                    <p className={styles.kitName}>Cartridge puller</p>
                    <p className={styles.kitMeta}>$14.99 · Helpful for stuck parts</p>
                  </div>
                </div>
                </div>
                <div className={styles.kitActions}>
                  <button type="button" className={`${styles.kitCta} ${fairwaySans.className}`} onClick={() => go("ready")}>
                    <span>Add 2 to list</span>
                    <span>$34.98 →</span>
                  </button>
                  <button type="button" className={`${styles.kitAlts} ${fairwaySans.className}`}>
                    See compatible alternatives
                  </button>
                </div>
              </div>
              <span className={styles.homeIndicator} />
            </div>
          )}

          {screen === "ready" && (
            <div className={`${styles.screen} ${styles.readyScreen}`}>
              <StatusBar />
              <div className={`${styles.nav} ${styles.navLine}`}>
                <button type="button" className={styles.kitEdit} onClick={() => go("home", "back")}>
                  Done
                </button>
                <span className={styles.navTitle}>Repair list</span>
                <button type="button" className={styles.shareBtn} aria-label="Share">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 3v12M7 8l5-5 5 5M5 14v6h14v-6" stroke="#111412" strokeWidth="2" />
                  </svg>
                </button>
              </div>
              <div className={styles.readyBody}>
                <div className={styles.readyHero}>
                  <span className={styles.readyCheck} aria-hidden>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="m5 12 4 4 10-10" stroke="#FFFFFF" strokeWidth="2.5" />
                    </svg>
                  </span>
                  <h1 className={styles.readyHeadline}>Repair list ready.</h1>
                  <p className={styles.readySub}>
                    Two compatible items, ordered by the fastest path through the store.
                  </p>
                </div>
                <div className={styles.readyRule} />
                <div className={styles.readySection}>
                  <p className={styles.readyKicker}>PICKING ORDER</p>
                  <div className={styles.pickCard}>
                    <span className={styles.pickNum}>1</span>
                    <div className={styles.pickCopy}>
                      <p className={styles.pickName}>Moen 1225 cartridge</p>
                      <p className={styles.pickMeta}>Aisle 14 · Bay 06 · Bin C</p>
                    </div>
                    <span className={styles.pickPrice}>$29.99</span>
                  </div>
                  <div className={styles.pickCard}>
                    <span className={styles.pickNum}>2</span>
                    <div className={styles.pickCopy}>
                      <p className={styles.pickName}>Silicone faucet grease</p>
                      <p className={styles.pickMeta}>Aisle 15 · Bay 02 · Bin A</p>
                    </div>
                    <span className={styles.pickPrice}>$4.99</span>
                  </div>
                </div>
                <div className={styles.walkCard}>
                  <span className={styles.walkIcon} aria-hidden>
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                      <path d="M12 21s7-4.4 7-11A7 7 0 1 0 5 10c0 6.6 7 11 7 11z" stroke="#0C6551" strokeWidth="2" />
                      <circle cx="12" cy="10" r="2" fill="none" stroke="#0C6551" strokeWidth="2" />
                    </svg>
                  </span>
                  <div>
                    <p className={styles.walkTitle}>Estimated walk: 3 minutes</p>
                    <p className={styles.walkNote}>Starts near Plumbing Service.</p>
                  </div>
                </div>
                <div className={styles.readyActions}>
                  <button type="button" className={`${styles.readyCta} ${fairwaySans.className}`} onClick={() => go("home", "back")}>
                    Guide customer
                  </button>
                  <button type="button" className={styles.readySend} onClick={() => go("home", "back")}>
                    Send list to customer
                  </button>
                </div>
              </div>
              <span className={styles.homeIndicator} />
            </div>
          )}

          {screen === "clip" && (
            <div className={styles.screen}>
              <StatusBar />
              <div className={styles.nav}>
                <button type="button" className={styles.iconBtn} onClick={() => go("match", "back")} aria-label="Back">
                  <IconBack />
                </button>
                <span className={styles.navTitle}>Confirm part</span>
                <span style={{ width: 44 }} />
              </div>
              <div className={styles.body}>
                <span className={styles.badge}>MEDIUM CONFIDENCE · 1 question</span>
                <h1 className={styles.headline} style={{ fontSize: 24, lineHeight: "30px" }}>
                  Which retaining clip does yours have?
                </h1>
                <div className={styles.choiceGrid}>
                  <button
                    type="button"
                    className={`${styles.choice} ${clip === "u" ? styles.choiceSelected : ""}`}
                    onClick={() => setClip("u")}
                  >
                    <span className={styles.choiceMark}>
                      <span style={{ width: 36, height: 4, background: "#959595", transform: "rotate(-28deg)", display: "block" }} />
                    </span>
                    U-shaped
                  </button>
                  <button
                    type="button"
                    className={`${styles.choice} ${clip === "ring" ? styles.choiceSelected : ""}`}
                    onClick={() => setClip("ring")}
                  >
                    <span className={styles.choiceMark}>
                      <span style={{ width: 28, height: 28, border: "4px solid #959595", borderRadius: 14, display: "block" }} />
                    </span>
                    Round ring
                  </button>
                </div>
                <button type="button" className={styles.primary} onClick={() => go("match")}>
                  Continue
                </button>
              </div>
              <span className={styles.homeIndicator} />
            </div>
          )}

          {screen === "unconfirmed" && (
            <div className={`${styles.screen} ${styles.fail}`}>
              <StatusBar light={false} />
              <div className={styles.body} style={{ paddingTop: 28 }}>
                <span className={styles.warn}>● LOW CONFIDENCE</span>
                <h1 className={styles.headline}>We couldn’t confirm the exact part.</h1>
                <p className={styles.sub}>
                  Try another angle, scan packaging, enter a model number, or ask a department specialist.
                </p>
                <div className={styles.failActions}>
                  <button type="button" className={styles.lightBtn} onClick={() => go("camera", "back")}>
                    Retake photo
                  </button>
                  <button type="button" className={styles.darkBtn} onClick={() => go("home", "back")}>
                    Get help
                  </button>
                </div>
              </div>
              <span className={styles.homeIndicator} />
            </div>
          )}
        </div>
      </div>
    </Column>
  );
}
