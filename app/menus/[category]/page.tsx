import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "../../styles/menu-category.module.css";

type Item = { name: string; desc: string; price: string; img: string };
type CategoryKey = "breads" | "cakes" | "pastries";
type Catalog = Record<CategoryKey, { title: string; items: Item[] }>;

const CATALOG: Catalog = {
  breads: {
    title: "Breads",
    items: [
      { name: "Country Sourdough", desc: "Slow-fermented, rustic loaf.", price: "$4.8", img: "/images/breads/sourdough.jpeg" },
      { name: "Milk Bread", desc: "Soft, slightly sweet, super fluffy.", price: "$3.2", img: "/images/breads/bread.jpeg" },
      { name: "Garlic Butter Roll", desc: "Savory roll with real butter.", price: "$1.2", img: "/images/breads/garlic-roll.jpeg" },
      { name: "Whole Wheat Loaf", desc: "Hearty and fiber-rich.", price: "$4.5", img: "/images/breads/wholewheat.jpg" },
    ],
  },
  cakes: {
    title: "Cakes",
    items: [
      { name: "Chocolate Ganache", desc: "Belgian chocolate, rich & silky.", price: "$3.5 / pcs", img: "/images/cakes/ganache.jpg" },
      { name: "Strawberry Shortcake", desc: "Fresh cream with seasonal berries.", price: "$4 / pcs", img: "/images/cakes/shortcake.jpg" },
      { name: "Tiramisu Slice", desc: "Espresso-soaked layers, mascarpone.", price: "$3.5 / slice", img: "/images/cakes/tiramisu.jpg" },
      { name: "Red Velvet", desc: "Classic cocoa cake with cream cheese.", price: "$20 / 6-inch", img: "/images/cakes/redvelvet.jpg" },
    ],
  },
  pastries: {
    title: "Pastries",
    items: [
      { name: "Butter Croissant", desc: "Flaky layers, airy crumb.", price: "$2.0", img: "/images/pastries/croissant.jpg" },
      { name: "Almond Croissant", desc: "Frangipane filling, toasted almonds.", price: "$2.6", img: "/images/pastries/almond-croissant.jpg" },
      { name: "Pain au Chocolat", desc: "Dark chocolate batons inside.", price: "$2.4", img: "/images/pastries/pain-au-chocolat.jpg" },
      { name: "Danish Custard", desc: "Vanilla custard, glossy finish.", price: "$2.3", img: "/images/pastries/danish-custard.jpg" },
    ],
  },
};

export default async function CategoryPage(
  { params }: { params: Promise<{ category?: string }> }
) {
  const { category } = await params;              // ⟵ wajib await di Next 15
  const key = (category ?? "").toLowerCase() as "breads" | "cakes" | "pastries";
  const data = CATALOG[key];
  if (!data) return notFound();

  return (
    <main>
      <div className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.breadcrumb}>
            <a href="/menus">Menus</a><span>/</span>
            <span className={styles.current}>{data.title}</span>
          </nav>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.lead}>
            Freshly made with honest ingredients. Browse our {data.title.toLowerCase()} below.
          </p>
        </header>

        <section className={styles.grid} aria-label={`${data.title} list`}>
          {data.items.map((it) => (
            <article key={it.name} className={styles.card}>
              <div className={styles.thumb}>
                <Image
                  src={it.img}
                  alt={it.name}
                  fill
                  sizes="(max-width: 560px) 100vw, 50vw"
                  className={styles.thumbImg}
                />
              </div>

              <div className={styles.cardHead}>
                <h3 className={styles.cardTitle}>{it.name}</h3>
                <div className={styles.price}>{it.price}</div>
              </div>
              <p className={styles.cardDesc}>{it.desc}</p>

              <div className={styles.cardActions}>
                <a className={styles.btnGhost} href="/contact">Ask Availability</a>
                <a className={styles.btnPrimary} href="/contact">Pre-Order</a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return ["breads", "cakes", "pastries"].map((category) => ({ category }));
}
