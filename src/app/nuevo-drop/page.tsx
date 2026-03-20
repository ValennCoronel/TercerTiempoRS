export default function NuevoDropPage() {
  return (
    <div className="space-y-8">
      <section className="border-b border-tt-red/60 pb-8">
        <p className="text-xs uppercase tracking-[0.25em] text-tt-muted">
          Drop 03
        </p>
        <h1 className="mt-3 font-display text-3xl uppercase tracking-[0.18em]">
          Nuevo Drop — Retro Collection
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-tt-muted">
          Descubrí el último drop de camisetas de rugby retro. Unidades
          limitadas, talles únicos y sin reposición. Muy pronto esta sección se
          conectará al catálogo real de WooCommerce vía GraphQL.
        </p>
      </section>

      <section>
        <p className="text-xs uppercase tracking-[0.2em] text-tt-muted">
          Grid de productos del drop (placeholder)
        </p>
        <div className="mt-4 rounded-sm border border-dashed border-tt-beige/30 bg-black/30 p-6 text-sm text-tt-muted">
          Acá vamos a renderizar las cards de productos del Drop 03, consumiendo
          WPGraphQL for WooCommerce.
        </div>
      </section>
    </div>
  );
}

