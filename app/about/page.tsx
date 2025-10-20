import React from "react";
import styles from "../styles/about.module.css";

export default function AboutPage() {
  return (
    <main className={styles.snapWrap}>
      {/* SECTION 1 — INTRO */}
      <section className={`${styles.section} ${styles.center}`} aria-labelledby="about-title">
        <div className={styles.container}>
          <h1 id="about-title" className={styles.title}>About Minmin Jaya Bakery</h1>
          <p className={styles.lead}>
            From a childhood dream to a neighborhood favorite — our story is about patience,
            saving up, and perseverance that finally rose, just like our dough.
          </p>
        </div>
      </section>

      {/* SECTION 2 — ORIGINS (TIMELINE) */}
      <section className={styles.section} aria-labelledby="sec-origins">
        <div className={styles.container}>
          <h2 id="sec-origins" className={styles.heading}>Origins — A Dream That Never Faded</h2>
          <ol className={styles.timeline}>
            <li className={styles.timeItem}>
              <div className={styles.timeBadge}>Childhood</div>
              <div className={styles.timeBody}>
                <h3 className={styles.itemTitle}>Baking with Wonder</h3>
                <p>
                  It began in a small kitchen — curiosity, flour on the table, and the joy
                  of watching cakes rise. A child’s dream was born: one day, a bakery of our own.
                </p>
              </div>
            </li>
            <li className={styles.timeItem}>
              <div className={styles.timeBadge}>Growing Up</div>
              <div className={styles.timeBody}>
                <h3 className={styles.itemTitle}>Learning & Saving</h3>
                <p>
                  Through school and early jobs, every spare coin was saved. We studied flavors,
                  textures, and techniques — turning passion into skill and vision into a plan.
                </p>
              </div>
            </li>
            <li className={styles.timeItem}>
              <div className={styles.timeBadge}>Launch</div>
              <div className={styles.timeBody}>
                <h3 className={styles.itemTitle}>Doors Finally Open</h3>
                <p>
                  After years of patience and preparation, Minmin Jaya Bakery opened its doors —
                  serving cakes and pastries made with premium ingredients and honest care.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* SECTION 3 — STRUGGLES */}
      <section className={styles.section} aria-labelledby="sec-struggles">
        <div className={styles.container}>
          <h2 id="sec-struggles" className={styles.heading}>Resilience — Falling, Rising, Learning</h2>
          <div className={styles.split}>
            <article className={styles.block}>
              <h3 className={styles.blockTitle}>Challenges We Faced</h3>
              <p>
                From tight budgets and supplier issues to long nights perfecting recipes —
                our journey wasn’t smooth. Some days sales were low, some batches failed,
                and some ideas simply didn’t work.
              </p>
            </article>
            <article className={styles.block}>
              <h3 className={styles.blockTitle}>How We Kept Going</h3>
              <p>
                We listened to customers, refined our menu, and kept quality first.
                We built trust one order at a time, turning setbacks into lessons and
                lessons into better products.
              </p>
            </article>
          </div>

          <div className={styles.faqMini}>
            <details>
              <summary>What helped us the most?</summary>
              <div>Consistency, honest ingredients, and genuine service.</div>
            </details>
            <details>
              <summary>What was the hardest part?</summary>
              <div>Balancing quality with cost while growing sustainably.</div>
            </details>
          </div>
        </div>
      </section>

      {/* SECTION 4 — GOALS */}
      <section className={styles.section} aria-labelledby="sec-goals">
        <div className={styles.container}>
          <h2 id="sec-goals" className={styles.heading}>Goals — Where We’re Headed</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Elevate Craft</h3>
              <p>Continuously refine recipes, explore seasonal flavors, and keep every bite memorable.</p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Serve More People</h3>
              <p>Expand delivery coverage, collaborate with local events, and simplify pre-orders.</p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Grow Sustainably</h3>
              <p>Support local suppliers, reduce waste, and invest in team development.</p>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CLOSING NOTE */}
      <section className={`${styles.section} ${styles.center}`} aria-label="closing note">
        <div className={styles.container}>
          <p className={styles.noteText}>
            Our promise is simple: thoughtful baking, dependable service, and a little joy in every box.
          </p>
        </div>
      </section>
    </main>
  );
}
