import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section: Nuevo Drop */}
      <section className="relative min-h-[921px] flex flex-col justify-center px-6 md:px-12 py-20 border-b-0">
        <div className="absolute top-10 right-10 md:right-20 z-0 opacity-20 hidden md:block">
          <span className="font-headline italic font-black text-[12rem] leading-none text-outline">
            DROP 02
          </span>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block bg-primary-container text-white px-3 py-1 mb-4 font-label text-[10px] font-bold tracking-[0.3em] uppercase">
              NUEVO DROP - Marzo 2026
            </div>
            <h1 className="font-headline text-6xl md:text-9xl italic font-black uppercase tracking-tighter leading-[0.85] mb-6">
              DROP <span className="text-primary-container">02</span>
              <br />
              MARZO26
            </h1>
            <p className="max-w-md text-secondary font-body text-lg mb-8 leading-relaxed">
              Ya llego el nuevo DROP a 3T-RS, viene recargado de ropa de entrenamiento, luquidacion de shorts y mallas y muchas prendas retro imperdibles!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-white px-8 py-4 font-label font-bold tracking-[0.2em] uppercase hover:bg-[#820313] transition-colors">
                NUEVO DROP
              </button>
              <button className="border-2 border-primary-container text-primary-container px-8 py-4 font-label font-bold tracking-[0.2em] uppercase hover:bg-primary-container hover:text-white transition-all">
                STORE
              </button>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[3/4] relative overflow-hidden flex items-center justify-center">
              <img
                alt="Tercer Tiempo Logo"
                className="w-full h-full object-contain lg:object-scale-down transition-all duration-700 scale-105 hover:scale-100 drop-shadow-2xl"
                src="/Logos/LogoRojoCompleto.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <div className="w-full bg-primary-container py-3 overflow-hidden whitespace-nowrap border-y border-transparent">
        <div className="flex animate-marquee">
          <span className="font-headline italic font-black text-white text-2xl uppercase tracking-tighter mx-4">
            ENVIOS A TODO EL PAIS • NUEVO DROP OUT •
            HISTORIA MARCADA EN CADA PRENDA •{" "}
          </span>
          <span className="font-headline italic font-black text-white text-2xl uppercase tracking-tighter mx-4">
            ENVIOS A TODO EL PAIS • NUEVO DROP OUT •
            HISTORIA MARCADA EN CADA PRENDA •{" "}
          </span>
          <span className="font-headline italic font-black text-white text-2xl uppercase tracking-tighter mx-4">
            ENVIOS A TODO EL PAIS • NUEVO DROP OUT •
            HISTORIA MARCADA EN CADA PRENDA •{" "}
          </span>
        </div>
      </div>

      {/* Featured Products Grid */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-headline text-5xl italic font-black uppercase tracking-tighter leading-none">
              NUESTRA <span className="text-primary-container">SELECCIÓN</span>
            </h2>
            <a
              className="font-label text-[12px] font-bold tracking-[0.3em] uppercase border-b-2 border-primary-container pb-1 hover:text-primary-container transition-colors"
              href="/shop"
            >
              VER TODO
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-variant/20">
            {/* Product 1 */}
            <div className="group bg-surface-container-low p-6 transition-all hover:bg-surface-container-high relative">
              <div className="aspect-square mb-6 overflow-hidden bg-black/20">
                <img
                  alt="Retro Hoody"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvC49trOxY3j6g_TzJyW64vm9o9CzqTcvex7-tHKyANLEbMI58P907Oe5sKVbHCVhRBo17FBd9S-twYOVdmoZU3ktjlsHcFp-N0zOw7VFlJwFIf8HmxaDtEom3FmVSaKsYBYizRHQIgmr8JzouQ1ys4hbDcY3aJqBK8AOfdh0cbSbXrAQQ3-a1h_rujeW6EQcHEepIapQVP9UOJ6CoRqEPb9j6u-xnQdUdekSkY_8RbyL78NrusQDIjOZpAfPyLIvhEh4POM6hbmw"
                />
              </div>
              <div className="absolute top-4 left-4 bg-primary-container text-white px-2 py-0.5 font-label text-[10px] font-bold tracking-widest">
                UNIDADES LIMITADAS
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label text-[10px] text-primary-container font-bold tracking-[0.2em] uppercase">
                  SUDADERAS
                </span>
                <h3 className="font-headline italic font-black text-xl uppercase tracking-tight">
                  VINTAGE PITCH HOODY
                </h3>
                <span className="font-body font-bold text-lg">€85.00</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-surface-container-low p-6 transition-all hover:bg-surface-container-high relative">
              <div className="aspect-square mb-6 overflow-hidden bg-black/20">
                <img
                  alt="Rugby Shorts"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-umJvVxz0E8EkMGlRXyTe_HX6OOHNLzlYufH-_f0-WlZEWHr_gtAfkiuWuLN4amppJMNMU6RwYdLFYWQd22jgjxQ5hEjMsreXqE4Hp3cmdyOOjs_LIhnBJZS0Xo_6X0oJe52qDdFPXbgcKYVhk7No5FdquApLMFcRdE6e6xyZdfECPmHsgSvmQsN6Jx7G2VIqdfY6y7ZaKbQuylvRhwjvOdus2EkhoNVPE1F4UPTywHl6envR9pp6ahcUdizdwKdIFp2Y3hIrU9o"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label text-[10px] text-primary-container font-bold tracking-[0.2em] uppercase">
                  PANTALONES
                </span>
                <h3 className="font-headline italic font-black text-xl uppercase tracking-tight">
                  HEAVY COTTON SHORTS
                </h3>
                <span className="font-body font-bold text-lg">€45.00</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-surface-container-low p-6 transition-all hover:bg-surface-container-high relative">
              <div className="aspect-square mb-6 overflow-hidden bg-black/20">
                <img
                  alt="Rugby Tee"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3OXDQX8OdTlKUpTJBJCzKR6nKZnVwXXFww8OvGmmAXBg7iMODyLhcAB105RTqFVHKB9CULKM1oJshjlUAvSc2viBARUpRsNQYh3DhDu840ddN677qEbryAirvSYNTaG7uQkrzLS5XjozZTmAXouCY0fNPy3foMfZwYC3-XS0WHI9UuFb9TLzdiJCbIh5fNYn4Sc-CYxIjaK_bq8pWwaiLWhx24mG4ql2d8RO3KxFf3B9dlr8mrg8HMbzJlAfeTCv_S6gmMqK3_Ig"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label text-[10px] text-primary-container font-bold tracking-[0.2em] uppercase">
                  CAMISETAS
                </span>
                <h3 className="font-headline italic font-black text-xl uppercase tracking-tight">
                  TRAINING TEE V.02
                </h3>
                <span className="font-body font-bold text-lg">€35.00</span>
              </div>
            </div>

            {/* Product 4 */}
            <div className="group bg-surface-container-low p-6 transition-all hover:bg-surface-container-high relative">
              <div className="aspect-square mb-6 overflow-hidden bg-black/20">
                <img
                  alt="Rugby Ball"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDljwjv1T3s4RRAt3JYD0VruBPgWFMdbrAOKyftvwiiIr66_ENB8veQMdis-_slVomFDm6DURWgF0yProQd477YPeB7zskD8hB6F2f96GDiTOawM8v1PLgGN6cXrcFPzjmFvAE-ksa86q8k9gbDGYGZzatpSTq5-ky1JsZGfeH8ADKkTWwF8ITvmiF_3xZm-vOSRA-WjAhbOReagKzFfGkjtr478CDcZkCekVksQajvepplzMvfLg1rwQ6aqrIe1sb0HKprifewEX4"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white text-black px-2 py-0.5 font-label text-[10px] font-bold tracking-widest uppercase">
                RESTOCK
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label text-[10px] text-primary-container font-bold tracking-[0.2em] uppercase">
                  ACCESORIOS
                </span>
                <h3 className="font-headline italic font-black text-xl uppercase tracking-tight">
                  HERITAGE LEATHER BALL
                </h3>
                <span className="font-body font-bold text-lg">€120.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 px-6 md:px-12 bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="font-label text-[10px] text-primary-container font-bold tracking-[0.4em] uppercase">
              EXPLORA NUESTRO ARCHIVO
            </span>
            <h2 className="font-headline text-5xl md:text-7xl italic font-black uppercase tracking-tighter leading-none mt-2">
              CATEGORIAS DESTACADAS
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category: Camisetas */}
            <a
              className="group relative aspect-[4/5] overflow-hidden bg-surface-container-low"
              href="/shop?category=camisetas"
            >
              <img
                alt="Camisetas"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuIJlSZGUJm3NKkBKU5NJVWm4eoGqc2KL366k_S_hS-TzA3bosIWCi8zExFAytO57-Wg5ChjggaF9Yj3FLChrZKuQdThFtKKeQ1bow-l_M3nhC-8-QcDyFuT2uxo2nTpjo5LZx20-VtdBfTADPpvAk_newZ_TKo9ZRZilxtJwFMDOwCeNaqQC73ARZEckZ30axE2SGXzuP9OHT1c0_SDwY-4BeT4j9sAV02XAW8Vxshva9uS_TWaZfKSGAsU3ZPPx59f3UEed3FA4"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-headline text-4xl italic font-black uppercase tracking-tighter text-white">
                  CAMISETAS
                </h3>
                <span className="text-primary font-label text-[12px] font-bold tracking-[0.2em] mt-2 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  COMPRAR{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </a>

            {/* Category: Sudaderas */}
            <a
              className="group relative aspect-[4/5] overflow-hidden bg-surface-container-low"
              href="/shop?category=sudaderas"
            >
              <img
                alt="Sudaderas"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOKH13zztLT-OGYBhR3p3QgoD1E4W1nAOiG87eu9vMfUpR66QDTrltjWY3Zy400bzxa0-ZFLrFelCMPm_l1W6f4MSti4AkU3Mv6Tzvbs9OngDG6OOgJBFSV9g78a7aiqMfZDqIixfy9G2gN0h59ZJNVTuur9aSlWDYMMaZjQ0DH0J1OtpLdwMpA87mTiWowBgwsfL905e_vfcPb-GdEJ6wyHSeDUQPGU5I1sfGlPmuPCyyaUIQ6CV5mzp9IyYIoMZYoqTz0EElwMM"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-headline text-4xl italic font-black uppercase tracking-tighter text-white">
                  SUDADERAS
                </h3>
                <span className="text-primary font-label text-[12px] font-bold tracking-[0.2em] mt-2 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  COMPRAR{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </a>

            {/* Category: Accesorios */}
            <a
              className="group relative aspect-[4/5] overflow-hidden bg-surface-container-low"
              href="/shop?category=accesorios"
            >
              <img
                alt="Accesorios"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7wYGznipHOD-xQnrsGqtCxsPX_WI2Q8hG8Fy6umQtIcw9Oji01uPiZ7ZSE-75eRV1W6LIqbqBj83m88s9iQ-XYjoWJJftjSQJxC0TJBd6UspF4h0v-05rMFTXIvcWOI-2HsAd0YXFvhok1MToaTtWt6yrwjiNzDXj6t1WzmVe9dyN8QAhD6pAbmSdCxWNzs_oDxiMiSwWR2E__JUb5tC6WsHCyichqn-vvg7yfbhBn_jwoI2r3dqGlvQPvEacIU7L_vEZO51mPUY"
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="font-headline text-4xl italic font-black uppercase tracking-tighter text-white">
                  ACCESORIOS
                </h3>
                <span className="text-primary font-label text-[12px] font-bold tracking-[0.2em] mt-2 group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  COMPRAR{" "}
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-32 px-6 md:px-12 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-primary-container z-0 opacity-50 translate-x-4 translate-y-4"></div>
              <img
                alt="Vintage Rugby"
                className="w-full relative z-10 grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwGCRSFlqCpR94-PprUL5yGhnJoGue-cjbeTDjfI987fJhYTwU_sPdAe3UXxemGAlc7sddajx5WFUzW2HUQNvdgCu9m46JODdAclJM6tED6BfoGiNbzGecNCm9wDW32Lt0UgZqXzvSbHmk1QlLhSJwzyN7bNG5YEELBpHFpFIQeeypk7yHPw8wY85XkS7-5Ep2iTL4KlnWwGrtosiBoU0gNqfcnvr5Ri1qqS0esDqaWvctz3ULAyKl7Og2v7fKfB6qa3v6z9RseEY"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="font-label text-[10px] text-primary-container font-bold tracking-[0.4em] uppercase">
              DESDE 2025
            </span>
            <h2 className="font-headline text-5xl md:text-7xl italic font-black uppercase tracking-tighter leading-tight mt-4 mb-8">
              NUESTRA <span className="text-primary-container">HISTORIA</span>
            </h2>
            <div className="space-y-6 font-body text-secondary text-lg leading-relaxed">
              <p>
                Nacido del barro y la pasión de la cultura del rugby clásico.
                Tercer Tiempo no es solo una tienda, es un archivo vivo de la era
                dorada del deporte.
              </p>
              <p>
                Rescatamos, restauramos y reinventamos prendas que cuentan
                historias de vestuarios sudados, campos helados y la camaradería
                inquebrantable que solo el rugby puede forjar.
              </p>
              <p className="font-bold text-white italic">
                "PARA LOS QUE CONOCEN EL PESO DE LA CAMISETA."
              </p>
            </div>
            <a href="/about" className="mt-12 group flex items-center gap-4 text-white font-headline italic font-black uppercase text-2xl tracking-tighter">
              CONOCER MÁS{" "}
              <span className="material-symbols-outlined text-primary-container group-hover:translate-x-4 transition-transform">
                trending_flat
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
