export default function ShopPage() {
  return (
    <div className="grid gap-10 md:grid-cols-[260px,1fr]">
      <aside className="space-y-6 border-r border-tt-beige/15 pr-6">
        <h2 className="font-display text-sm uppercase tracking-[0.2em]">
          Filter by
        </h2>

        <div className="space-y-3 text-xs uppercase tracking-[0.18em] text-tt-muted">
          <p className="text-[0.7rem] text-tt-beige">Drops</p>
          <ul className="space-y-1">
            <li>Drop 03</li>
            <li>Drop 02</li>
            <li>Drop 01</li>
          </ul>
        </div>

        <div className="space-y-3 text-xs uppercase tracking-[0.18em] text-tt-muted">
          <p className="text-[0.7rem] text-tt-beige">Countries</p>
          <ul className="space-y-1">
            <li>Argentina</li>
            <li>New Zealand</li>
            <li>Wales</li>
          </ul>
        </div>

        <div className="space-y-3 text-xs uppercase tracking-[0.18em] text-tt-muted">
          <p className="text-[0.7rem] text-tt-beige">Status</p>
          <ul className="space-y-1">
            <li>Limited drop</li>
            <li>No restock</li>
            <li>Unique size</li>
          </ul>
        </div>
      </aside>

      <section className="space-y-4">
        <header className="flex items-baseline justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-tt-muted">
              Drop 03
            </p>
            <h1 className="mt-2 font-display text-xl uppercase tracking-[0.18em]">
              Retro Collection
            </h1>
          </div>
          <span className="text-[0.7rem] uppercase tracking-[0.2em] text-tt-muted">
            Limited release · Mock data
          </span>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          {["Pumas 1999 Jersey", "NZL 1997 Jersey", "Wales 1995 Jersey"].map(
            (name) => (
              <article
                key={name}
                className="rounded-sm border border-tt-beige/20 bg-black/40 p-4 text-sm"
              >
                <div className="mb-4 h-44 w-full bg-gradient-to-br from-tt-red/25 via-tt-black to-tt-black" />
                <p className="text-xs uppercase tracking-[0.18em] text-tt-muted">
                  Limited Drop · Unique size
                </p>
                <p className="mt-2 text-sm font-semibold uppercase">{name}</p>
                <p className="mt-1 text-xs text-tt-muted">$89</p>
              </article>
            ),
          )}
        </div>
      </section>
    </div>
  );
}

