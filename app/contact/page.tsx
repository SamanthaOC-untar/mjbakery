"use client";

import React, { useMemo, useState } from "react";
import styles from "../styles/contact.module.css";

type CategoryKey = "breads" | "cakes" | "pastries";

const CATALOG: Record<CategoryKey, string[]> = {
  breads: ["Country Sourdough", "Milk Bread", "Garlic Butter Roll", "Whole Wheat Loaf"],
  cakes: ["Chocolate Ganache (6\")", "Strawberry Shortcake (6\")", "Tiramisu Slice", "Red Velvet (6\")"],
  pastries: ["Butter Croissant", "Almond Croissant", "Pain au Chocolat", "Danish Custard"],
};

// set number WhatsApp (ubah sesuai kebutuhan)
const WA_PHONE = "+62123456789";
// set email fallback
const EMAIL = "hello@minminjaya.id";

export default function ContactPage() {
  const [tab, setTab] = useState<"availability" | "preorder">("availability");
  const [category, setCategory] = useState<CategoryKey>("breads");

  const items = useMemo(() => CATALOG[category], [category]);

  function openWhatsApp(message: string) {
    const url = `https://wa.me/${WA_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function openEmail(subject: string, body: string) {
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const intent = form.get("intent") as string; // availability | preorder
    const name = (form.get("name") as string).trim();
    const contact = (form.get("contact") as string).trim();
    const category = form.get("category") as string;
    const item = form.get("item") as string;
    const qty = form.get("qty") as string;
    const date = form.get("date") as string;
    const time = (form.get("time") as string) || "";
    const notes = (form.get("notes") as string || "").trim();
    const channel = (form.get("channel") as string) || "whatsapp";

    const base =
      `Minmin Jaya Bakery\n` +
      `Request Type: ${intent === "availability" ? "Availability Check" : "Pre-Order"}\n\n` +
      `Name: ${name}\n` +
      `Contact: ${contact}\n` +
      `Category: ${category}\n` +
      `Item: ${item}\n` +
      `Quantity: ${qty}\n` +
      `Date: ${date}${time ? `, Time: ${time}` : ""}\n` +
      (notes ? `Notes: ${notes}\n` : "") +
      `\nPlease confirm. Thank you!`;

    if (channel === "email") {
      openEmail(
        intent === "availability" ? `Availability Inquiry - ${item}` : `Pre-Order - ${item}`,
        base
      );
    } else {
      openWhatsApp(base);
    }
  }

  return (
    <main>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.lead}>
            Check today’s availability or place a pre-order. We’ll get back to you shortly.
          </p>
        </header>

        <div className={styles.tabs} role="tablist" aria-label="Contact type">
          <button
            role="tab"
            aria-selected={tab === "availability"}
            className={`${styles.tab} ${tab === "availability" ? styles.tabActive : ""}`}
            onClick={() => setTab("availability")}
          >
            Availability
          </button>
          <button
            role="tab"
            aria-selected={tab === "preorder"}
            className={`${styles.tab} ${tab === "preorder" ? styles.tabActive : ""}`}
            onClick={() => setTab("preorder")}
          >
            Pre-Order
          </button>
        </div>

        <section className={styles.panel}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input type="hidden" name="intent" value={tab} />

            <div className={styles.row2}>
              <div className={styles.field}>
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" required placeholder="Your name" />
              </div>

              <div className={styles.field}>
                <label htmlFor="contact">Phone or Email</label>
                <input id="contact" name="contact" required placeholder="+62… or email@example.com" />
              </div>
            </div>

            <div className={styles.row3}>
              <div className={styles.field}>
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as CategoryKey)}
                >
                  <option value="breads">Breads</option>
                  <option value="cakes">Cakes</option>
                  <option value="pastries">Pastries</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="item">Item</label>
                <select id="item" name="item" required>
                  {items.map((it) => (
                    <option key={it} value={it}>{it}</option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="qty">Quantity</label>
                <input id="qty" name="qty" type="number" min={1} defaultValue={1} required />
              </div>
            </div>

            <div className={styles.row3}>
              <div className={styles.field}>
                <label htmlFor="date">{tab === "availability" ? "Desired Date" : "Pickup/Delivery Date"}</label>
                <input id="date" name="date" type="date" required />
              </div>

              <div className={styles.field}>
                <label htmlFor="time">Time (optional)</label>
                <input id="time" name="time" type="time" />
              </div>

              <div className={styles.field}>
                <label htmlFor="channel">Send Via</label>
                <select id="channel" name="channel" defaultValue="whatsapp">
                  <option value="whatsapp">WhatsApp</option>
                  <option value="email">Email</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="notes">Notes</label>
              <textarea id="notes" name="notes" rows={4} placeholder="Allergies, custom message on cake, etc." />
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.btnPrimary}>
                {tab === "availability" ? "Send Availability Request" : "Send Pre-Order"}
              </button>
              <a className={styles.btnGhost} href="/menus">Back to Menus</a>
            </div>

            <p className={styles.helper}>
              We respond during business hours. For urgent requests, please use WhatsApp.
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}
