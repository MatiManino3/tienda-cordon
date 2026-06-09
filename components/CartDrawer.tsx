"use client";

import { X, ShoppingBag, Minus, Plus, Trash2, Check, ArrowRight } from "lucide-react";
import { C } from "@/lib/theme";
import { Product, money } from "@/lib/products";

export interface CartItem extends Product {
  qty: number;
}

interface CartDrawerProps {
  open: boolean;
  items: CartItem[];
  total: number;
  done: boolean;
  onClose: () => void;
  onAdd: (id: string) => void;
  onDec: (id: string) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export function CartDrawer({
  open,
  items,
  total,
  done,
  onClose,
  onAdd,
  onDec,
  onRemove,
  onCheckout,
}: CartDrawerProps) {
  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="cdn-overlay fixed inset-0 z-30"
          style={{ background: "rgba(0,0,0,.55)" }}
        />
      )}

      {/* Drawer */}
      <aside
        className="cdn-drawer fixed top-0 right-0 z-40 h-full w-full max-w-md flex flex-col"
        style={{
          background: C.surface,
          borderLeft: `1px solid ${C.line}`,
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-5"
          style={{ borderBottom: `1px solid ${C.line}` }}
        >
          <span className="cdn-display text-xl" style={{ fontWeight: 700 }}>
            Tu carrito
          </span>
          <button
            onClick={onClose}
            className="cdn-iconbtn p-2 rounded-full"
            aria-label="Cerrar carrito"
          >
            <X size={20} color={C.ink} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {done && (
            <div className="cdn-fade flex flex-col items-center text-center py-10">
              <div
                className="h-14 w-14 rounded-full flex items-center justify-center mb-4"
                style={{ background: C.good }}
              >
                <Check size={26} color="#fff" />
              </div>
              <div className="cdn-display text-xl" style={{ fontWeight: 700 }}>
                ¡Pedido confirmado!
              </div>
              <p className="text-sm mt-2" style={{ color: C.inkSoft }}>
                Te enviamos el detalle por email. Gracias por tu compra.
              </p>
            </div>
          )}

          {!done && items.length === 0 && (
            <div
              className="flex flex-col items-center text-center py-16"
              style={{ color: C.muted }}
            >
              <ShoppingBag size={32} />
              <p className="mt-3 text-sm">Tu carrito está vacío.</p>
            </div>
          )}

          {!done &&
            items.map((it) => (
              <div
                key={it.id}
                className="flex gap-3 p-3 rounded-xl"
                style={{ background: C.surfaceAlt }}
              >
                <div
                  className="h-14 w-14 rounded-lg shrink-0"
                  style={{ background: `linear-gradient(150deg, ${it.g1}, ${it.g2})` }}
                />

                <div className="flex-1 min-w-0">
                  <div className="font-semibold truncate">{it.name}</div>
                  <div className="text-xs" style={{ color: C.muted }}>
                    {it.origin} · {it.weight}
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => onDec(it.id)}
                      className="cdn-iconbtn p-1 rounded-md"
                      style={{ border: `1px solid ${C.line}` }}
                      aria-label="Restar cantidad"
                    >
                      <Minus size={13} color={C.ink} />
                    </button>
                    <span className="text-sm font-semibold w-5 text-center">{it.qty}</span>
                    <button
                      onClick={() => onAdd(it.id)}
                      className="cdn-iconbtn p-1 rounded-md"
                      style={{ border: `1px solid ${C.line}` }}
                      aria-label="Sumar cantidad"
                    >
                      <Plus size={13} color={C.ink} />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => onRemove(it.id)}
                    className="cdn-iconbtn p-1 rounded-md"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 size={15} color={C.muted} />
                  </button>
                  <span className="text-sm font-semibold" style={{ color: C.accent }}>
                    {money(it.price * it.qty)}
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Footer con total y checkout */}
        {!done && items.length > 0 && (
          <div className="p-5" style={{ borderTop: `1px solid ${C.line}` }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm" style={{ color: C.inkSoft }}>
                Total
              </span>
              <span
                className="cdn-display text-2xl"
                style={{ fontWeight: 800, color: C.accent }}
              >
                {money(total)}
              </span>
            </div>
            <button
              onClick={onCheckout}
              className="cdn-btn w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              style={{ background: C.accent, color: "#1a120b" }}
            >
              Finalizar compra <ArrowRight size={17} />
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
