export default function CartPage() {
  return (
    <div className="space-y-8">
      <header className="border-b border-tt-red/60 pb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-tt-muted">
          Cart
        </p>
        <h1 className="mt-3 font-display text-2xl uppercase tracking-[0.18em]">
          My Cart
        </h1>
      </header>

      <section className="space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] text-tt-muted">
          Mock del carrito
        </p>
        <div className="space-y-4 rounded-sm border border-tt-beige/20 bg-black/40 p-5 text-sm">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-tt-beige/15 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-tt-muted">
                Drop 03 · Unique size
              </p>
              <p className="mt-1 text-sm font-semibold uppercase">
                Pumas 1999 Jersey
              </p>
            </div>
            <p className="text-sm">$89</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs uppercase tracking-[0.18em] text-tt-muted">
              Subtotal
            </span>
            <span className="text-base font-semibold">$89</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="/shop"
            className="rounded-sm border border-tt-beige/40 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em]"
          >
            Continue shopping
          </a>
          <button className="rounded-sm bg-tt-red px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-tt-beige">
            Checkout
          </button>
        </div>
      </section>
    </div>
  );
}

