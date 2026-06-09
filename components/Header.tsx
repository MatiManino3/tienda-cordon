"use client";

import { ShoppingBag } from "lucide-react";
import { C } from "@/lib/theme";

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

export function Header({ cartCount, onOpenCart }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-20 px-6 md:px-10 py-4 flex items-center justify-between"
      style={{
        background: "rgba(21,16,12,.85)",
        backdropFilter: "blur(10px)",
        borderBottom: `1px solid ${C.line}`,
      }}
    >
      <div className="cdn-display text-2xl" style={{ fontWeight: 800 }}>
        CORDÓN<span style={{ color: C.accent }}>.</span>
      </div>

      <button
        onClick={onOpenCart}
        className="cdn-iconbtn relative p-2.5 rounded-full"
        style={{ border: `1px solid ${C.line}` }}
        aria-label="Abrir carrito"
      >
        <ShoppingBag size={20} color={C.ink} />
        {cartCount > 0 && (
          <span
            className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs font-bold flex items-center justify-center"
            style={{ background: C.accent, color: "#1a120b" }}
          >
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
}
