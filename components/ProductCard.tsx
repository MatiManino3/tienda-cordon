"use client";

import { Plus } from "lucide-react";
import { C } from "@/lib/theme";
import { Product, money } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  onAdd: (id: string) => void;
}

export function ProductCard({ product: p, onAdd }: ProductCardProps) {
  return (
    <div
      className="cdn-card cdn-fade rounded-2xl overflow-hidden flex flex-col"
      style={{ background: C.surface, border: `1px solid ${C.line}` }}
    >
      {/* Gradient visual placeholder (reemplazable con <Image> en producción) */}
      <div
        className="h-40 flex items-end p-4"
        style={{ background: `linear-gradient(150deg, ${p.g1}, ${p.g2})` }}
      >
        <span
          className="text-xs uppercase tracking-widest px-2.5 py-1 rounded-full"
          style={{ background: "rgba(0,0,0,.35)", color: "#fff" }}
        >
          {p.origin}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="cdn-display text-xl" style={{ fontWeight: 700 }}>
          {p.name}
        </div>
        <div className="text-sm mt-1.5" style={{ color: C.muted }}>
          {p.notes}
        </div>

        <div className="flex items-center justify-between mt-auto pt-5">
          <div>
            <div className="text-xs" style={{ color: C.muted }}>
              {p.weight}
            </div>
            <div className="cdn-display text-lg" style={{ fontWeight: 700, color: C.accent }}>
              {money(p.price)}
            </div>
          </div>

          <button
            onClick={() => onAdd(p.id)}
            className="cdn-btn flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
            style={{ background: C.accent, color: "#1a120b" }}
          >
            <Plus size={15} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
