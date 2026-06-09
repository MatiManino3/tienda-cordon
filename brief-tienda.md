# Brief técnico — Tienda / catálogo con carrito (pieza de portfolio + plantilla)

## Objetivo
Tienda online con catálogo de productos, filtros y carrito de compra para comercios y
emprendedores. Doble propósito: (1) pieza de portfolio, (2) plantilla reutilizable que
adaptás cambiando productos, marca y rubro para cada cliente (café, ropa, deco, comida, etc.).

## Stack recomendado
- **Next.js (App Router) + TypeScript** — SSR, rutas limpias, deploy en Vercel.
- **Tailwind CSS** — estilos rápidos y consistentes.
- **Datos:** arrancá con productos mock en memoria (como la base que ya tenés). Cuando quieras
  catálogo real y persistencia, sumá **Supabase** (Postgres) o un CMS headless.
- **Pagos (fase posterior):** **Stripe** o **Mercado Pago** (más conveniente para Argentina).
- **Deploy:** Vercel.

## Alcance MVP (lo que tiene que funcionar sí o sí)
1. **Catálogo en grilla:** productos con imagen/etiqueta, nombre, descripción, precio, botón agregar.
2. **Filtros por categoría:** que el usuario pueda acotar el listado.
3. **Carrito funcional:** agregar, sumar/restar cantidad, eliminar, ver subtotal y total.
4. **Checkout (simulado por ahora):** confirmación de pedido.
5. **Responsive:** impecable en celular (la mayoría compra desde el teléfono).

## Modelo de datos
```
Product  { id, name, description, price, category, image, stock }
CartItem { productId, qty }
Order    { id, items, total, customer, createdAt }   // cuando sumes checkout real
```

## Rutas sugeridas
- `/`                 → catálogo (con filtros)
- `/producto/[id]`    → detalle de producto (opcional, suma)
- carrito             → como drawer lateral (ya está en la base) o ruta `/carrito`

## Nice-to-have (suma para vender, no bloquea el MVP)
- **Pago real** con Mercado Pago o Stripe.
- **Detalle de producto** con galería e info ampliada.
- **Búsqueda** por nombre.
- **Gestión de stock** y panel admin para que el dueño cargue productos.
- **Checkout por WhatsApp:** botón que arma el pedido en un mensaje wa.me (rápido de vender a comercios chicos).

## Imágenes de producto
La base usa bloques con gradiente como placeholder (no dependés de fotos). Para producción real,
cargá imágenes propias en `/public` o desde Supabase Storage y reemplazá el bloque por `<Image>`.

## Cómo presentarla en el portfolio
- **Título:** "Tienda online con carrito para comercios"
- **Caso (3 líneas):** Problema (vender por DM/catálogo de WhatsApp, sin carrito ni orden) →
  Solución (catálogo navegable + carrito + checkout) → Stack (Next.js, TypeScript, Tailwind).
- **Link en vivo** (Vercel) + **repo** (GitHub). Proyecto propio/conceptual, datos de demostración.

## Prompt para Claude Code (una vez dentro de la carpeta con los dos archivos)
> En esta carpeta hay dos archivos: `tienda-demo.jsx` (componente React de un solo archivo, base
> visual y funcional de una tienda) y `brief-tienda.md` (especificación). Leé ambos enteros.
> Después montá un proyecto Next.js (App Router) con TypeScript y Tailwind alrededor de esa base,
> siguiendo el brief. Mantené EXACTAMENTE la estética: tema oscuro, tipografías Syne (display) +
> DM Sans (body), gradientes por producto, micro-interacciones y el drawer de carrito. Cargá las
> fuentes con `next/font`. Separá en componentes (ProductCard, CartDrawer, Filters, etc.) y poné
> los productos mock en un módulo tipado aparte. Conservá las reglas: filtros por categoría,
> agregar/sumar/restar/eliminar del carrito, total en vivo, checkout simulado. Que sea totalmente
> responsive. Creá un README.md con el caso (problema → solución → stack) y pasos para correr y
> deployar en Vercel. Corré la app, verificá que compile sin errores y dejame las instrucciones
> para `npm run dev` y el deploy. No cambies la marca de ejemplo (CORDÓN); datos mock en memoria,
> sin base de datos ni pagos todavía (eso es fase posterior). Al terminar, mostrame la estructura
> de carpetas y qué quedó pendiente del brief.

## Checklist "listo para mostrar"
- [ ] El catálogo carga y los filtros funcionan
- [ ] El carrito suma, resta, elimina y calcula el total bien
- [ ] El checkout muestra confirmación
- [ ] Se ve bien en celular
- [ ] Deploy en Vercel con URL pública
- [ ] Repo en GitHub con README (problema → solución → stack → link)
