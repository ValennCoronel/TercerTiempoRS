import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero con logo centrado y botones */}
      <section className="border-b border-tt-red/60 pb-14 text-center">
        <div className="mt-6 flex justify-center">
          <div className="relative mt-4 h-44 w-80 md:h-64 md:w-[28rem]">
            <Image
              src="/Logos/LogoRojoSimpleS.png"
              alt="Tercer Tiempo Rugby Store"
              fill
              className="object-contain opacity-90"
              priority
            />
          </div>
        </div>
        <p className="mt-6 font-display text-lg uppercase tracking-[0.3em] text-tt-cream">
          Rugby Store
        </p>
        <p className="mt-3 font-display text-3xl uppercase tracking-[0.28em] text-tt-cream">
          New Drop — Drop 03
        </p>
        <p className="mt-2 font-display text-base uppercase tracking-[0.32em] text-tt-cream">
          Available now
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="/nuevo-drop"
            className="rounded-sm bg-tt-red px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-tt-beige"
          >
            Shop Drop
          </a>
        </div>
      </section>

      {/* Sección último drop tipo banner */}
      <section className="space-y-6">
        <div className="h-px w-full bg-tt-red/60" />

        <div className="overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row md:items-stretch">
            {/* Texto - ~25% ancho en desktop */}
            <div className="w-full px-6 py-6 md:w-1/4 md:px-8 md:py-10">
              <p className="font-display text-xl uppercase tracking-[0.24em] text-tt-cream">
                Drop 03
              </p>
              <p className="mt-1 font-display text-lg uppercase tracking-[0.24em] text-tt-cream">
                Retro Collection
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.24em] text-tt-muted">
                Limited units
              </p>
              <div className="mt-6">
                <a
                  href="/nuevo-drop"
                  className="rounded-sm border border-tt-cream px-7 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-tt-cream"
                >
                  View Drop
                </a>
              </div>
            </div>

            {/* Imagen - ~75% ancho en desktop, apoyada sobre línea roja derecha */}
            <div className="relative w-full border-b border-tt-red/60 md:w-3/4">
              <div className="relative h-64 w-full md:h-80">
                <Image
                  src="/media/AllBlacksRetro.png"
                  alt="Drop 03 - All Blacks Retro Jersey"
                  fill
                  className="object-contain object-right-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección drops pasados con dos cuadrados */}
      <section className="mt-4 border-t border-tt-red/40 pt-8">
        <h2 className="font-display text-lg uppercase tracking-[0.2em]">
          Past Drops
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <a
            href="/shop?drop=02"
            className="group block overflow-hidden rounded-sm border border-tt-beige/20 bg-black/40"
          >
            <div className="relative aspect-square w-full">
              <Image
                src="/media/CamisetaPumas.png"
                alt="Drop 02 - Pumas Retro Jersey"
                fill
                className="object-contain object-center transition-transform duration-150 group-hover:scale-[1.02]"
              />
            </div>
            <div className="border-t border-tt-beige/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-tt-muted">
                Drop 02
              </p>
              <div className="mt-2 flex items-center justify-between text-sm uppercase">
                <span className="font-semibold">Pumas Retro Jersey</span>
                <span className="rounded-sm border border-tt-beige/40 px-2 py-1 text-[0.65rem] tracking-[0.18em]">
                  Sold Out
                </span>
              </div>
            </div>
          </a>

          <a
            href="/shop?drop=01"
            className="group block overflow-hidden rounded-sm border border-tt-beige/20 bg-black/40"
          >
            <div className="relative aspect-square w-full">
              <Image
                src="/media/CamisetaEngland.png"
                alt="Drop 01 - England Retro Jersey"
                fill
                className="object-contain object-center transition-transform duration-150 group-hover:scale-[1.02]"
              />
            </div>
            <div className="border-t border-tt-beige/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-tt-muted">
                Drop 01
              </p>
              <div className="mt-2 flex items-center justify-between text-sm uppercase">
                <span className="font-semibold">England Retro Jersey</span>
                <span className="rounded-sm border border-tt-red/60 bg-tt-red px-2 py-1 text-[0.65rem] tracking-[0.18em] text-tt-beige">
                  Few Left
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
