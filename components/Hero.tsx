import { C } from "@/lib/theme";

export function Hero() {
  return (
    <section className="px-6 md:px-10 pt-12 pb-8 max-w-6xl mx-auto">
      <div className="text-xs uppercase tracking-widest mb-3" style={{ color: C.accent }}>
        Tostaduría · Bahía Blanca
      </div>
      <h1
        className="cdn-display text-4xl md:text-5xl max-w-2xl leading-tight"
        style={{ fontWeight: 800 }}
      >
        Café de origen, tostado en lotes chicos.
      </h1>
      <p className="mt-4 max-w-md text-base" style={{ color: C.inkSoft }}>
        Seleccionamos granos de productores que conocemos. Elegí tu perfil y te lo mandamos
        recién tostado.
      </p>
    </section>
  );
}
