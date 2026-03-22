export default function Shop() {
  return (
    <>
      <main className="relative min-h-screen px-6 py-12 md:px-12">
        {/* Editorial Header */}
        <header className="mb-20">
          <h1 className="font-headline font-black italic text-[5rem] md:text-[8rem] leading-[0.8] tracking-tighter text-on-surface skew-title mb-2">
            THE ARCHIVE
          </h1>
          <p className="font-label uppercase tracking-[0.4em] text-xs md:text-sm font-bold text-primary-container pl-4 border-l-4 border-primary-container">
            1990S RUGBY HERITAGE COLLECTIONS
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 shrink-0 space-y-12">
            <section>
              <h3 className="font-label uppercase tracking-[0.3em] text-[10px] font-bold text-secondary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-container"></span> DROPS
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border-2 border-outline-variant group-hover:border-primary-container transition-colors"></div>
                  <span className="font-label uppercase tracking-widest text-xs font-bold text-on-surface-variant group-hover:text-on-surface">
                    SPRING '99
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-4 h-4 border-2 border-primary-container bg-primary-container"></div>
                  <span className="font-label uppercase tracking-widest text-xs font-bold text-on-surface">
                    VINTAGE CLASSICS
                  </span>
                </label>
              </div>
            </section>

            <section>
              <h3 className="font-label uppercase tracking-[0.3em] text-[10px] font-bold text-secondary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-container"></span> COUNTRIES
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2 border border-outline-variant text-[10px] font-bold uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all">
                  ARGENTINA
                </button>
                <button className="px-3 py-2 border border-outline-variant text-[10px] font-bold uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all">
                  NZ
                </button>
                <button className="px-3 py-2 border border-outline-variant text-[10px] font-bold uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all">
                  FRANCE
                </button>
                <button className="px-3 py-2 border border-outline-variant text-[10px] font-bold uppercase tracking-widest hover:bg-on-surface hover:text-surface transition-all">
                  UK
                </button>
              </div>
            </section>

            <section>
              <h3 className="font-label uppercase tracking-[0.3em] text-[10px] font-bold text-secondary mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary-container"></span> STATUS
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="font-label uppercase tracking-widest text-xs font-bold text-on-surface-variant">
                    LIMITED DROP
                  </span>
                  <span className="text-[10px] font-bold text-primary-container">
                    12
                  </span>
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="font-label uppercase tracking-widest text-xs font-bold text-on-surface-variant">
                    NO RESTOCK
                  </span>
                  <span className="text-[10px] font-bold text-primary-container">
                    05
                  </span>
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                  <span className="font-label uppercase tracking-widest text-xs font-bold text-on-surface-variant">
                    UNIQUE SIZE
                  </span>
                  <span className="text-[10px] font-bold text-primary-container">
                    03
                  </span>
                </div>
              </div>
            </section>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
              {/* Product Card 1 */}
              <div className="group relative bg-surface-container-low">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfpQM43_GDKDxbJfd1oWo6mM64kR3lJHFlNwltYTslbjEzVIthdlI8YREbgF9qwO8GPpwGGlisQ2IogewdGAu4ebf4hFbRUabuiqNghQoN82q1BIXxo5Z4UGC-jHPmYhJD7SrsIrSSnW0plQwjYuxuYHS1UD0sHlQM2aq4O1QFsYXFgvPRJnQS4sBGHehptQL0MB0mP-CYTJssK9sC7i9crdv_uXg5awtsxvYjy-R6wIlP4GDha87rBMZedtMM3YPAn4VTB-qPcQ8"
                    alt="Pumas 1999 Jersey"
                  />
                  <div className="absolute top-4 left-[-10px] bg-primary-container text-white px-4 py-1 skew-x-[-15deg] z-20">
                    <span className="font-label uppercase tracking-[0.2em] text-[10px] font-black italic block skew-x-[15deg]">
                      LIMITED DROP
                    </span>
                  </div>
                </div>
                <div className="pt-6 pb-2 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-black italic text-xl tracking-tighter uppercase leading-none group-hover:text-primary-container transition-colors">
                      PUMAS 1999 JERSEY
                    </h3>
                    <span className="font-headline italic font-black text-lg text-on-surface">
                      $245
                    </span>
                  </div>
                  <p className="font-label uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
                    ARGENTINA ARCHIVE / SIZE L
                  </p>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="group relative bg-surface-container-low">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQEvt806VefhjLGX1DrEvZbz3ZLD4YXG7JKhyphu4HwLDamHlYMzsz4bxBy-8fdDX-fVZIcdQ_-Mn01HSM1gTSyEXbd3U1ua0wF7V5wlgpixjlFwTxnNeFm65RcFrxoCT-KzTDsYlmqi-C1T7At8GEhWzL-yiQPZajpgqFqORInsVT28taZRD9EWh3O310kyuJUtFsLQBbsGn7qc2qPA-lMO33xNHKdEgzqgs7Fx_J5ui40nj4zo7owQuGaX2ZVTkLCcyDmDaIPOw"
                    alt="All Blacks Classic"
                  />
                  <div className="absolute bottom-4 right-4 bg-on-surface text-surface px-4 py-1 z-20">
                    <span className="font-label uppercase tracking-[0.2em] text-[10px] font-black italic block">
                      NO RESTOCK
                    </span>
                  </div>
                </div>
                <div className="pt-6 pb-2 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-black italic text-xl tracking-tighter uppercase leading-none group-hover:text-primary-container transition-colors">
                      ALL BLACKS CLASSIC
                    </h3>
                    <span className="font-headline italic font-black text-lg text-on-surface">
                      $280
                    </span>
                  </div>
                  <p className="font-label uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
                    NZ HERITAGE / SIZE XL
                  </p>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="group relative bg-surface-container-low">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP8sQJoYCk1Ums2F7SYAhWrD9wyB15vfHymOK5-mRLyXXAci7JCm_uHy8wyGqj5kz7hj7Fz01usw7JlveT6LS0mjILeYZ9LTaeLuAWejSkVKuk2tfUjw-_x52VkIxa6_hcmIoi-6rnRpi5OvAelNY9A9nKbNVW3wjoEjVh77fmm5bQ1nrSoR1wUxvq2ysodnD-J5pVjY1UdhabhLQnpqGS5UlRYAFffVARTzFllrnBZLEenRDJgMe-UIKbXsZ1N620EPLvsoMdMDo"
                    alt="Red Dragon 92"
                  />
                  <div className="absolute top-4 right-[-10px] bg-primary-container text-white px-4 py-1 skew-x-[-15deg] z-20">
                    <span className="font-label uppercase tracking-[0.2em] text-[10px] font-black italic block skew-x-[15deg]">
                      UNIQUE SIZE
                    </span>
                  </div>
                </div>
                <div className="pt-6 pb-2 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-black italic text-xl tracking-tighter uppercase leading-none group-hover:text-primary-container transition-colors">
                      RED DRAGON '92
                    </h3>
                    <span className="font-headline italic font-black text-lg text-on-surface">
                      $195
                    </span>
                  </div>
                  <p className="font-label uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
                    WALES ARCHIVE / SIZE M
                  </p>
                </div>
              </div>

              {/* Product Card 4 */}
              <div className="group relative bg-surface-container-low">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9bv1ffKixVckDOmViLU0Vvdw-p74OfG713FerEfFacWFYox6WM9pBb_o1Sxv9AcQ_Muy9e61LXDCHPvihhLHnJZZR3XG_fP5wzLjj_0GywP3VOUhaSm_u1-DkofrHgyeJXg5YHmctJaax0qP9mhXrpFIKqMwiKoFnQPwJRFfILr6GUBhPA8AFeopJQ9Hot7VorwMtbjAff0mcBG0FGfX3aDt-5_4SmE0K1qMj1xL_eoErArxMlylpJgYC5z1tGblznQu5DTVaDig"
                    alt="Springboks 95"
                  />
                </div>
                <div className="pt-6 pb-2 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-black italic text-xl tracking-tighter uppercase leading-none group-hover:text-primary-container transition-colors">
                      SPRINGBOKS '95
                    </h3>
                    <span className="font-headline italic font-black text-lg text-on-surface">
                      $310
                    </span>
                  </div>
                  <p className="font-label uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
                    SA HERITAGE / SIZE XL
                  </p>
                </div>
              </div>

              {/* Product Card 5 */}
              <div className="group relative bg-surface-container-low">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsANGJnXbN143sdPu6db_TmWxmSylBMe5hvpMgOX3VcVGIGjL-qLm4mX7epri2C9l9kdCO-OMetQ5nSevvGgCkTqwjOsXc25fb999tcHptLFlkVCGyTFMw7G1eF3v-d0dD79ym71VgGCn3XI8R0-TzisDV_kKkrq3i1UVAsB96DGuvHA_IOfQNoNMn6u9TW1IqHolMu6irrawIO0cbehd1dpuA4q-8WNNdLjVGLMQbQpoa5UtZpYyi9mL3--45KONv9OkjuhidIiI"
                    alt="Les Bleus Archive"
                  />
                  <div className="absolute top-4 left-[-10px] bg-primary-container text-white px-4 py-1 skew-x-[-15deg] z-20">
                    <span className="font-label uppercase tracking-[0.2em] text-[10px] font-black italic block skew-x-[15deg]">
                      LIMITED DROP
                    </span>
                  </div>
                </div>
                <div className="pt-6 pb-2 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-black italic text-xl tracking-tighter uppercase leading-none group-hover:text-primary-container transition-colors">
                      LES BLEUS ARCHIVE
                    </h3>
                    <span className="font-headline italic font-black text-lg text-on-surface">
                      $225
                    </span>
                  </div>
                  <p className="font-label uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
                    FRANCE 90S / SIZE L
                  </p>
                </div>
              </div>

              {/* Product Card 6 */}
              <div className="group relative bg-surface-container-low">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwtZUfXhXLWlHfMthEC_WK4unOUlRzE45xTPHM3AdpgLtomVuFdqcVS_lDzhpZUWDPgq91pV3MKMWDD6UtEFlshGII0jmQBM47CFhUlSFG6u_TVLK7-W_kxrr5SsFeT9int_s0PIvxZ5kZRDj4JQC7JrI1FXQrEOnziG8VOjl-C7Rmr3HhrJdSrtkWsHnkalntIFdlQ-8QoA1-qwI3lco4UiuV4YVDi6EPcZnG27Rp0_cABfpyiqK3Z3WmMbGG5USglx-JWaA5Lcg"
                    alt="Wallabies 91"
                  />
                </div>
                <div className="pt-6 pb-2 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-headline font-black italic text-xl tracking-tighter uppercase leading-none group-hover:text-primary-container transition-colors">
                      WALLABIES '91
                    </h3>
                    <span className="font-headline italic font-black text-lg text-on-surface">
                      $180
                    </span>
                  </div>
                  <p className="font-label uppercase tracking-[0.2em] text-[10px] text-secondary font-bold">
                    AUS ARCHIVE / SIZE M
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Marquee Ticker */}
      <div className="w-full bg-primary-container overflow-hidden py-3 mb-20 relative z-20">
        <div className="whitespace-nowrap flex animate-marquee">
          <span className="font-headline font-black italic text-white text-2xl tracking-tighter uppercase px-4">
            THE BLOOD AND MUD ARCHIVE — 1990S RUGBY HERITAGE — LIMITED DROPS
            ONLY — WORLDWIDE SHIPPING — VINTAGE RESTORED —{" "}
          </span>
          <span className="font-headline font-black italic text-white text-2xl tracking-tighter uppercase px-4">
            THE BLOOD AND MUD ARCHIVE — 1990S RUGBY HERITAGE — LIMITED DROPS
            ONLY — WORLDWIDE SHIPPING — VINTAGE RESTORED —{" "}
          </span>
        </div>
      </div>
    </>
  );
}
