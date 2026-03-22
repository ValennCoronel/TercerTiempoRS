export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[819px] flex flex-col justify-end px-6 pb-20 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <img
            alt="Vintage Rugby Scrum"
            className="w-full h-full object-cover grayscale mix-blend-luminosity opacity-40"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL80aQNZPacwSLi9X-dDurTxsx1X9bRSbyONOKb1TeuYXeu65QD5kQJ-wccpcaVjgOH4QTW-5uQnQKWUbdQoCnJ3e7NZu_ct0dr5bjTlvqoAEfgggQXFYdGQQOljuYzgh5itw1S4eBRL3yhmlBVTm58vpn_SPNp3zdjA2u17Q-Nai3k1h1Z2CzVrShxHib_jxw_jdAmCeGiWjVPQ6IzfwwCS9a4-1EPKeTVGHbSjIacyEuUx5NcJRUWFcmVET-cEeZeHt9CIxJY4I"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <p className="font-label text-[10px] tracking-[0.3em] font-bold text-primary-container mb-4 uppercase">
            EST. 1994 // ARCHIVE DIVISION
          </p>
          <h1 className="font-headline italic font-black text-6xl md:text-9xl leading-[0.85] tracking-tighter uppercase mb-6">
            ABOUT
            <br />
            TERCER
            <br />
            <span className="text-primary-container">TIEMPO</span>
          </h1>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-primary-container py-3 overflow-hidden whitespace-nowrap border-y border-transparent">
        <div className="inline-block animate-marquee font-headline italic font-black text-white text-2xl uppercase tracking-tight">
          MUD SWEAT AND GLORY &nbsp; // &nbsp; NO COLLECTIONS JUST DROPS &nbsp; // &nbsp;
          THE ARCHIVE IS OPEN &nbsp; // &nbsp; MUD SWEAT AND GLORY &nbsp; // &nbsp; NO
          COLLECTIONS JUST DROPS &nbsp; // &nbsp; THE ARCHIVE IS OPEN &nbsp; // &nbsp;
        </div>
      </div>

      {/* Heritage Content */}
      <section className="py-32 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6">
            <h2 className="font-headline italic font-black text-5xl uppercase tracking-tighter leading-none">
              ARCHIVING
              <br />
              RUGBY CULTURE
            </h2>
            <div className="h-1 w-24 bg-primary-container"></div>
            <p className="text-secondary text-xl leading-relaxed max-w-2xl font-body">
              We don't do seasons. We don't do trends. TERCER TIEMPO is a
              visceral response to the sanitization of modern sport. We hunt for
              the grit, the mud-stained collars, and the heavy cotton weight of
              the 90s era.
            </p>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl font-body">
              Our pieces are sourced, restored, or reimagined to carry the weight
              of the pitch. Every drop is a fragment of history, curated for those
              who understand that the real game starts when the whistle blows for
              full-time.
            </p>
          </div>
          <div className="p-8 bg-surface-container-low border-l-8 border-primary-container relative overflow-hidden">
            <h3 className="font-headline italic font-black text-3xl uppercase tracking-tighter mb-4">
              LIMITED DROPS.
              <br />
              NO RESTOCK.
            </h3>
            <p className="text-on-surface-variant font-body">
              Once it's gone, it returns to the archive. We prioritize the rarity
              of the find over the volume of the sale. This is not a store; it is
              a repository of heritage.
            </p>
            <div className="absolute -right-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-9xl" data-icon="inventory_2">
                inventory_2
              </span>
            </div>
          </div>
        </div>

        {/* Polaroid Section */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group">
            {/* Polaroid Frame */}
            <div className="bg-[#e5e2e1] p-4 pb-16 shadow-2xl rotate-3 transition-transform group-hover:rotate-0 duration-500">
              <div className="aspect-[4/5] overflow-hidden bg-black relative">
                <img
                  alt="Rugby Heritage"
                  className="w-full h-full object-cover grayscale contrast-125 mix-blend-multiply opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp1kvxzn3HAgZgwJ0VmReIlHBs3yEIzDiJA3xq73CoNtoMY80-ag1p1OmIjUeP8R8gCoY1cHgFydcdo-mj8_ObDhTuiY9wYs0kclhJUuY9jGC7eVj2x8z9MhxPLDgJduOUXJxspD7B1uGVpoo_ybzlwrmvLohh8S1M44FmWEt-y6Km_C4VTy_n6X9_6gEV8YX81e36fd2aZPacAXBuAAYnXbCHreM-qPGVurtyyCoWgmcJW-FCz6j3pTWDb2wQQpgnB010F1l3fyE"
                />
                <div className="absolute inset-0 bg-primary-container/10"></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-headline italic font-black text-black text-2xl uppercase tracking-tighter">
                  NO COLLECTIONS
                </p>
                <p className="font-label text-[10px] text-black/60 tracking-widest mt-1">
                  REF: TT-092-B
                </p>
              </div>
            </div>
            {/* Decorative Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-white/20 backdrop-blur-sm -rotate-2 z-10 border border-white/10"></div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-surface-container-lowest py-24 px-6 border-t border-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <span className="font-label text-[10px] tracking-[0.3em] font-bold text-primary-container mb-2">
              FABRIC
            </span>
            <span className="font-headline italic font-black text-2xl uppercase">
              400GSM COTTON
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label text-[10px] tracking-[0.3em] font-bold text-primary-container mb-2">
              SOURCE
            </span>
            <span className="font-headline italic font-black text-2xl uppercase">
              GLOBAL ARCHIVE
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label text-[10px] tracking-[0.3em] font-bold text-primary-container mb-2">
              FIT
            </span>
            <span className="font-headline italic font-black text-2xl uppercase">
              BOXER VINTAGE
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label text-[10px] tracking-[0.3em] font-bold text-primary-container mb-2">
              FINISH
            </span>
            <span className="font-headline italic font-black text-2xl uppercase">
              DISTRESSED OIL
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-primary-container opacity-90 mix-blend-multiply"></div>
        <img
          alt="Background Texture"
          className="absolute inset-0 w-full h-full object-cover grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_7XphmkuCnMhgkULZApYLu2fLcZo05Nb2R0kiurjzl1JQdv3ilX7aA8xyyrJ4BfyqVhUpibI9pK-AHM9EzIaOF9A0U0H3nw6Aur2gFGZqNqttt0YMQmn4QJ2rbNN3fVf24k4dX8JZ3epI-2obUscFVYjUl-TORWH2rza8wAUrzCFHTEhi2AY4878HGogfYo_wDGp8tfgZ_s6ZI7sGjxNFXoHs4omjLQaDe1yZmIYFW-Mv2mp7pbjvpMX7JUM54muVjQjKGCCwWAY"
        />
        <div className="relative z-10">
          <h2 className="font-headline italic font-black text-6xl md:text-8xl text-white uppercase tracking-tighter leading-none mb-8">
            JOIN THE
            <br />
            SQUADRON
          </h2>
          <button className="bg-white text-black font-headline italic font-black text-xl px-12 py-4 uppercase tracking-tighter hover:bg-[#a50418] hover:text-white transition-all transform hover:-skew-x-12">
            ACCESS LATEST DROP
          </button>
        </div>
      </section>
    </>
  );
}
