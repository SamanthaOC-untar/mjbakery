import React from "react";
import styles from "../app/styles/footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <div className={styles.name}>Minmin Jaya Bakery</div>
          <div className={styles.desc}>Bread, Cakes, &amp; Pastries • Fresh every day</div>
        </div>

        <div className={styles.info}>
          <div>
            <div className={styles.label}>Address</div>
            <div>Cupcakes and Rainbow Road 123</div>
          </div>
          <div>
            <div className={styles.label}>Hours</div>
            <div>Mon-Sun 08:00-20:00</div>
          </div>
          <div>
            <div className={styles.label}>Contact</div>
            <a href="tel:+62123456789">+62 123-456-789</a><br />
            <a href="mailto:hello@minminjaya@gmail.com">hello@minminjaya@gmail.com</a>
          </div>
        </div>

        <div className={styles.copy}>
          © {year} Minmin Jaya Bakery. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
