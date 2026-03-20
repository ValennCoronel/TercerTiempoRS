export default function AboutPage() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
      <section className="space-y-6">
        <h1 className="font-display text-3xl uppercase tracking-[0.18em]">
          About Tercer Tiempo
        </h1>
        <p className="text-sm leading-relaxed text-tt-muted">
          Tercer Tiempo es tu tienda de referencia para drops exclusivos de
          indumentaria de rugby retro. Nos enfocamos en camisetas únicas que
          celebran la era dorada del rugby: 80s, 90s y principios de los 2000s.
        </p>
        <div className="space-y-5 text-sm leading-relaxed text-tt-muted">
          <div>
            <h2 className="font-display text-base uppercase tracking-[0.18em] text-tt-beige">
              Archiving rugby culture
            </h2>
            <p className="mt-2">
              Cada drop funciona como un pequeño archivo de momentos históricos:
              Mundiales, giras inolvidables y clubes que marcaron época. No
              trabajamos con colecciones masivas, sino con piezas seleccionadas.
            </p>
          </div>
          <div>
            <h2 className="font-display text-base uppercase tracking-[0.18em] text-tt-beige">
              Limited drops. No restock.
            </h2>
            <p className="mt-2">
              Una vez que un drop se agota, no vuelve. Esto mantiene cada prenda
              realmente única y ligada a un momento específico en el tiempo.
            </p>
          </div>
        </div>
      </section>

      <aside className="rounded-sm border border-tt-beige/20 bg-black/40 p-6 text-sm text-tt-muted">
        <p className="text-xs uppercase tracking-[0.2em] text-tt-beige">
          Nota
        </p>
        <p className="mt-3">
          En el futuro esta sección puede incluir fotos reales de archivo,
          historias de partidos y referencias al contenido de tu WordPress.
        </p>
      </aside>
    </div>
  );
}

