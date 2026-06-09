import React, { useState, useMemo } from "react";
import {
  ShoppingBag,
  Plus,
  Minus,
  X,
  Trash2,
  Check,
  ArrowRight,
} from "lucide-react";

/*
  CORDÓN · café de especialidad — Demo de tienda / catálogo
  Pieza de portfolio. Frontend de muestra con carrito en memoria.
*/

const C = {
  bg: "#15100c",
  surface: "#1f1812",
  surfaceAlt: "#291f16",
  ink: "#f1e8db",
  inkSoft: "#c8b9a6",
  muted: "#94816c",
  accent: "#d18a4e",
  accentSoft: "#3a2a1a",
  line: "#352a1f",
  good: "#5a8a5f",
};

const PRODUCTS = [
  { id: "p1", name: "Yirgacheffe", origin: "Etiopía", notes: "Jazmín · durazno · té negro", price: 8900, weight: "250g", cat: "Frutal", g1: "#c0506a", g2: "#7a2f44" },
  { id: "p2", name: "Huila", origin: "Colombia", notes: "Caramelo · naranja · chocolate", price: 7800, weight: "250g", cat: "Clásico", g1: "#d18a4e", g2: "#8a5523" },
  { id: "p3", name: "Cerrado", origin: "Brasil", notes: "Maní · cacao · dulce", price: 7200, weight: "250g", cat: "Intenso", g1: "#7a5236", g2: "#4a2f1d" },
  { id: "p4", name: "Antigua", origin: "Guatemala", notes: "Chocolate · nuez · especias", price: 8200, weight: "250g", cat: "Clásico", g1: "#5b7050", g2: "#33422c" },
  { id: "p5", name: "Blend Casa", origin: "Sudamérica", notes: "Cacao · caramelo · cuerpo", price: 6900, weight: "500g", cat: "Intenso", g1: "#b56f3a", g2: "#6e3f1c" },
  { id: "p6", name: "Kenia AA", origin: "Kenia", notes: "Grosella · vino · cítrico", price: 9500, weight: "250g", cat: "Frutal", g1: "#8a4a72", g2: "#4d2742" },
];

const CATS = ["Todos", "Frutal", "Clásico", "Intenso"];
const money = (n) => "$" + n.toLocaleString("es-AR");

export default function App() {
  const [cart, setCart] = useState({}); // { id: qty }
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const [done, setDone] = useState(false);

  const shown = useMemo(
    () => (filter === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === filter)),
    [filter]
  );

  const count = Object.values(cart).reduce((a, b) => a + b, 0);
  const items = Object.entries(cart).map(([id, qty]) => ({
    ...PRODUCTS.find((p) => p.id === id),
    qty,
  }));
  const total = items.reduce((sum, it) => sum + it.price * it.qty, 0);

  const add = (id) => { setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 })); setDone(false); };
  const dec = (id) =>
    setCart((c) => {
      const n = (c[id] || 0) - 1;
      const next = { ...c };
      if (n <= 0) delete next[id];
      else next[id] = n;
      return next;
    });
  const remove = (id) => setCart((c) => { const n = { ...c }; delete n[id]; return n; });
  const checkout = () => { setDone(true); setCart({}); };

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');
    .cdn-root{font-family:'DM Sans',sans-serif;color:${C.ink};}
    .cdn-display{font-family:'Syne',sans-serif;letter-spacing:-.01em;}
    .cdn-card{transition:transform .2s ease, border-color .2s ease;}
    .cdn-card:hover{transform:translateY(-3px);border-color:${C.accent};}
    .cdn-btn{transition:all .16s ease;}
    .cdn-btn:hover{filter:brightness(1.08);transform:translateY(-1px);}
    .cdn-btn:disabled{opacity:.4;cursor:not-allowed;transform:none;}
    .cdn-pill{transition:all .18s ease;}
    .cdn-fade{animation:cdnIn .35s ease both;}
    @keyframes cdnIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:none;}}
    .cdn-drawer{transition:transform .3s cubic-bezier(.22,.61,.36,1);}
    .cdn-overlay{transition:opacity .3s ease;}
    .cdn-iconbtn:hover{background:${C.surfaceAlt};}
  `;

  return (
    <div className="cdn-root min-h-screen w-full" style={{ background: C.bg }}>
      <style>{css}</style>

      {/* Header */}
      <header
        className="sticky top-0 z-20 px-6 md:px-10 py-4 flex items-center justify-between"
        style={{ background: "rgba(21,16,12,.85)", backdropFilter: "blur(10px)", borderBottom: `1px solid ${C.line}` }}
      >
        <div className="cdn-display text-2xl" style={{ fontWeight: 800 }}>
          CORDÓN<span style={{ color: C.accent }}>.</span>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="cdn-iconbtn relative p-2.5 rounded-full"
          style={{ border: `1px solid ${C.line}` }}
        >
          <ShoppingBag size={20} color={C.ink} />
          {count > 0 && (
            <span
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs font-bold flex items-center justify-center"
              style={{ background: C.accent, color: "#1a120b" }}
            >
              {count}
            </span>
          )}
        </button>
      </header>

      {/* Hero */}
      <section className="px-6 md:px-10 pt-12 pb-8 max-w-6xl mx-auto">
        <div className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent }}>
          Tostaduría · Bahía Blanca
        </div>
        <h1 className="cdn-display text-4xl md:text-5xl max-w-2xl leading-tight" style={{ fontWeight: 800 }}>
          Café de origen, tostado en lotes chicos.
        </h1>
        <p className="mt-4 max-w-md text-base" style={{ color: C.inkSoft }}>
          Seleccionamos granos de productores que conocemos. Elegí tu perfil y te lo mandamos recién tostado.
        </p>
      </section>

      {/* Filtros */}
      <div className="px-6 md:px-10 max-w-6xl mx-auto flex gap-2 mb-6 flex-wrap">
        {CATS.map((cat) => {
          const sel = filter === cat;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="cdn-pill px-4 py-1.5 rounded-full text-sm font-semibold"
              style={
                sel
                  ? { background: C.ink, color: C.bg }
                  : { background: C.surface, color: C.inkSoft, border: `1px solid ${C.line}` }
              }
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grilla de productos */}
      <section className="px-6 md:px-10 pb-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {shown.map((p) => (
          <div
            key={p.id}
            className="cdn-card cdn-fade rounded-2xl overflow-hidden flex flex-col"
            style={{ background: C.surface, border: `1px solid ${C.line}` }}
          >
            {/* "bolsa" representada con gradiente */}
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
              <div className="cdn-display text-xl" style={{ fontWeight: 700 }}>{p.name}</div>
              <div className="text-sm mt-1.5" style={{ color: C.muted }}>{p.notes}</div>
              <div className="flex items-center justify-between mt-auto pt-5">
                <div>
                  <div className="text-xs" style={{ color: C.muted }}>{p.weight}</div>
                  <div className="cdn-display text-lg" style={{ fontWeight: 700, color: C.accent }}>
                    {money(p.price)}
                  </div>
                </div>
                <button
                  onClick={() => add(p.id)}
                  className="cdn-btn flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold"
                  style={{ background: C.accent, color: "#1a120b" }}
                >
                  <Plus size={15} /> Agregar
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="cdn-overlay fixed inset-0 z-30"
          style={{ background: "rgba(0,0,0,.55)" }}
        />
      )}

      {/* Drawer carrito */}
      <aside
        className="cdn-drawer fixed top-0 right-0 z-40 h-full w-full max-w-md flex flex-col"
        style={{
          background: C.surface,
          borderLeft: `1px solid ${C.line}`,
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex items-center justify-between p-5" style={{ borderBottom: `1px solid ${C.line}` }}>
          <span className="cdn-display text-xl" style={{ fontWeight: 700 }}>Tu carrito</span>
          <button onClick={() => setOpen(false)} className="cdn-iconbtn p-2 rounded-full">
            <X size={20} color={C.ink} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {done && (
            <div className="cdn-fade flex flex-col items-center text-center py-10">
              <div className="h-14 w-14 rounded-full flex items-center justify-center mb-4" style={{ background: C.good }}>
                <Check size={26} color="#fff" />
              </div>
              <div className="cdn-display text-xl" style={{ fontWeight: 700 }}>¡Pedido confirmado!</div>
              <p className="text-sm mt-2" style={{ color: C.inkSoft }}>
                Te enviamos el detalle por email. Gracias por tu compra.
              </p>
            </div>
          )}

          {!done && items.length === 0 && (
            <div className="flex flex-col items-center text-center py-16" style={{ color: C.muted }}>
              <ShoppingBag size={32} />
              <p className="mt-3 text-sm">Tu carrito está vacío.</p>
            </div>
          )}

          {!done && items.map((it) => (
            <div key={it.id} className="flex gap-3 p-3 rounded-xl" style={{ background: C.surfaceAlt }}>
              <div className="h-14 w-14 rounded-lg shrink-0" style={{ background: `linear-gradient(150deg, ${it.g1}, ${it.g2})` }} />
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate">{it.name}</div>
                <div className="text-xs" style={{ color: C.muted }}>{it.origin} · {it.weight}</div>
                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => dec(it.id)} className="cdn-iconbtn p-1 rounded-md" style={{ border: `1px solid ${C.line}` }}>
                    <Minus size={13} color={C.ink} />
                  </button>
                  <span className="text-sm font-semibold w-5 text-center">{it.qty}</span>
                  <button onClick={() => add(it.id)} className="cdn-iconbtn p-1 rounded-md" style={{ border: `1px solid ${C.line}` }}>
                    <Plus size={13} color={C.ink} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => remove(it.id)} className="cdn-iconbtn p-1 rounded-md">
                  <Trash2 size={15} color={C.muted} />
                </button>
                <span className="text-sm font-semibold" style={{ color: C.accent }}>{money(it.price * it.qty)}</span>
              </div>
            </div>
          ))}
        </div>

        {!done && items.length > 0 && (
          <div className="p-5" style={{ borderTop: `1px solid ${C.line}` }}>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm" style={{ color: C.inkSoft }}>Total</span>
              <span className="cdn-display text-2xl" style={{ fontWeight: 800, color: C.accent }}>{money(total)}</span>
            </div>
            <button
              onClick={checkout}
              className="cdn-btn w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2"
              style={{ background: C.accent, color: "#1a120b" }}
            >
              Finalizar compra <ArrowRight size={17} />
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
