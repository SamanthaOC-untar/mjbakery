import React from "react";
import Link from "next/link";
import styles from "../styles/menu.module.css";

export default function MenusLandingPage() {
  return (
    <main>
      <div className={styles.container}>
        {/* Top intro */}
        <header className={styles.intro} aria-labelledby="menus-title">
          <h1 id="menus-title" className={styles.title}>Our Menus</h1>
          <p className={styles.lead}>
            Discover freshly baked selections made with honest ingredients.
            Choose a category below to explore our breads, cakes, and pastries.
          </p>
        </header>

        {/* Category grid */}
        <section className={styles.grid} aria-label="Menu categories">
          <Link href="/menus/breads" className={styles.card} aria-label="Explore Breads">
            <div className={styles.emoji} aria-hidden>🍞</div>
            <h2 className={styles.cardTitle}>Breads</h2>
            <p className={styles.cardText}>
              Daily loaves, soft rolls, and indulgent specialties—baked fresh every morning.
            </p>
            <span className={styles.cardCta}>Explore Breads →</span>
          </Link>

          <Link href="/menus/cakes" className={styles.card} aria-label="Explore Cakes">
            <div className={styles.emoji} aria-hidden>🎂</div>
            <h2 className={styles.cardTitle}>Cakes</h2>
            <p className={styles.cardText}>
              Signature whole cakes and slices—perfect for birthdays, gatherings, and treats.
            </p>
            <span className={styles.cardCta}>Explore Cakes →</span>
          </Link>

          <Link href="/menus/pastries" className={styles.card} aria-label="Explore Pastries">
            <div className={styles.emoji} aria-hidden>🥐</div>
            <h2 className={styles.cardTitle}>Pastries</h2>
            <p className={styles.cardText}>
              Flaky, buttery, and light—our pastries pair beautifully with your favorite drink.
            </p>
            <span className={styles.cardCta}>Explore Pastries →</span>
          </Link>
        </section>

        {/* Bottom reassurance / copy */}
        <section className={styles.bottomNote} aria-label="Freshness note">
          <p>
            Baked in small batches for freshness, using real butter and carefully sourced ingredients.
            Pre-order is available for custom requests and large quantities.
          </p>
          <p className={styles.sub}>
            Questions? <a href="/contact">Contact us</a>—we’re happy to help you choose.
          </p>
        </section>
      </div>
    </main>
  );
}
