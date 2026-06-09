"use client";

import { useState, useMemo } from "react";
import { PRODUCTS, FilterOption } from "@/lib/products";
import { C } from "@/lib/theme";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Filters } from "@/components/Filters";
import { ProductCard } from "@/components/ProductCard";
import { CartDrawer, CartItem } from "@/components/CartDrawer";

type Cart = Record<string, number>;

export function CatalogClient() {
  const [cart, setCart] = useState<Cart>({});
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<FilterOption>("Todos");
  const [done, setDone] = useState(false);

  const shown = useMemo(
    () => (filter === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter)),
    [filter]
  );

  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  const items: CartItem[] = Object.entries(cart).map(([id, qty]) => ({
    ...PRODUCTS.find((p) => p.id === id)!,
    qty,
  }));

  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  const add = (id: string) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
    setDone(false);
  };

  const dec = (id: string) =>
    setCart((c) => {
      const qty = (c[id] || 0) - 1;
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  const remove = (id: string) =>
    setCart((c) => {
      const next = { ...c };
      delete next[id];
      return next;
    });

  const checkout = () => {
    setDone(true);
    setCart({});
  };

  return (
    <div
      className="min-h-screen w-full"
      style={{ background: C.bg, color: C.ink }}
    >
      <Header cartCount={count} onOpenCart={() => setOpen(true)} />

      <main>
        <Hero />
        <Filters active={filter} onChange={setFilter} />

        <section className="px-6 md:px-10 pb-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={add} />
          ))}
        </section>
      </main>

      <CartDrawer
        open={open}
        items={items}
        total={total}
        done={done}
        onClose={() => setOpen(false)}
        onAdd={add}
        onDec={dec}
        onRemove={remove}
        onCheckout={checkout}
      />
    </div>
  );
}
