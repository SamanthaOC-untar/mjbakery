import React from "react";
import styles from "../styles/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} aria-label="Minmin Jaya Bakery Home">
          <span className={styles.title}>Minmin Jaya Bakery</span>
          <span className={styles.tagline}>Cake &amp; Pastry</span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
