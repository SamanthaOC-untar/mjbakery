import React from "react";
import styles from "./styles/home.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <main>
      <div className={styles.container}>
        {/* HERO */}
        <section className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroText}>
            <h1 id="hero-title">Minmin Jaya Bakery</h1>
            <p>
              Freshly baked bread, cakes, and pastries every day—crafted with real
              butter, premium flour, and a touch of joy.
            </p>
            <div className={styles.ctaRow}>
              <a href="/menus">
                <button className={`${styles.btn} ${styles.btnPrimary}`}>
                  See Our Menus
                </button>
              </a>
              <a href="/contact">
                <button className={`${styles.btn} ${styles.btnGhost}`}>
                  Pre-Order Now
                </button>
              </a>
            </div>
          </div>

          <div className={styles.heroMedia} aria-hidden="true">
            <Image
              src="/loaf.jpeg"
              alt="Chef's pick: a beautifully decorated cake with fresh fruit and cream."
              loading="eager"
              width={1200}
              height={900}
            />
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className={styles.section} aria-labelledby="sec-highlights">
          <h2 id="sec-highlights">Why Choose Minmin Jaya?</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <div className={styles.cardTitle}>Baked Daily</div>
              <p>Fresh every morning, with no preservatives.</p>
            </article>
            <article className={styles.card}>
              <div className={styles.cardTitle}>Premium Ingredients</div>
              <p>Real butter, Belgian chocolate, and choice dairy.</p>
            </article>
            <article className={styles.card}>
              <div className={styles.cardTitle}>Custom Cakes</div>
              <p>Designed for birthdays, weddings, and corporate events.</p>
            </article>
          </div>
        </section>

        {/* TESTIMONIAL / CTA STRIP */}
        <section className={styles.strip} aria-labelledby="sec-quote">
          <h2 id="sec-quote" style={{ marginTop: 0 }}>
            What Customers Say
          </h2>
          <p className={styles.quote}>
            “The texture is soft and the sweetness is just right. The cake
            always steals the show at our events.”
          </p>
          <div className={styles.ctaRow} style={{ marginTop: ".6rem" }}>
            <a href="/about">
              <button className={`${styles.btn} ${styles.btnGhost}`}>
                Learn More
              </button>
            </a>
            <a href="/contact">
              <button className={`${styles.btn} ${styles.btnPrimary}`}>
                Order via WhatsApp
              </button>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          className={`${styles.section} ${styles.faq}`}
          aria-labelledby="sec-faq"
        >
          <h2 id="sec-faq">FAQ</h2>

          <details>
            <summary>Do you accept custom cake designs?</summary>
            <div>
              Yes. Send your reference/design, size, and event date—we’ll
              confirm pricing and the production timeline.
            </div>
          </details>

          <details>
            <summary>How long is the pre-order time?</summary>
            <div>
              For whole cakes: at least 2 days in advance. Daily pastries can be
              same-day while stock lasts.
            </div>
          </details>

          <details>
            <summary>Do you provide delivery?</summary>
            <div>
              Yes. We deliver within the city and nearby areas (fees vary by
              distance). Self-pickup is also available.
            </div>
          </details>
        </section>
      </div>
    </main>
  );
}
