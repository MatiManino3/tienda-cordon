"use client";

import { C } from "@/lib/theme";
import { CATEGORIES, FilterOption } from "@/lib/products";

interface FiltersProps {
  active: FilterOption;
  onChange: (cat: FilterOption) => void;
}

export function Filters({ active, onChange }: FiltersProps) {
  return (
    <div className="px-6 md:px-10 max-w-6xl mx-auto flex gap-2 mb-6 flex-wrap">
      {CATEGORIES.map((cat) => {
        const sel = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
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
  );
}
