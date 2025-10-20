import React from "react";
import styles from "../app/styles/header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.brand} aria-label="Minmin Jaya Bakery Home">
          <span className={styles.title}>Minmin Jaya Bakery</span>
          <span className={styles.tagline}>Bread, Cakes, &amp; Pastries</span>
        </a>

        <nav className={styles.nav} aria-label="Main navigation">
          <a href="/">Home</a>
          <a href="/menus">Menus</a>
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
