export function SpecialOfferSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
      <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="container relative z-10 mx-auto px-8 text-center">
        <h2 className="font-headline mb-6 text-4xl font-black uppercase tracking-tighter md:text-7xl">
          5 ПАР ЗА 49,90 BYN{" "}
          <span className="text-primary block italic md:ml-4 md:inline">ВМЕСТО 150,00 BYN</span>
        </h2>
        <p className="font-body mb-10 text-2xl text-slate-400">
          Ваша выгода:{" "}
          <span className="font-black text-white">100 BYN + Бесплатная доставка</span>
        </p>
        <div className="flex flex-col items-center gap-6">
          <a
            className="font-headline inline-block bg-primary px-16 py-7 text-2xl font-black uppercase text-white shadow-[0_20px_40px_rgba(234,88,12,0.4)] transition-all hover:scale-105"
            href="#order"
          >
            ЗАБРАТЬ СВОЙ НАБОР
          </a>
          <p className="animate-bounce text-sm font-black uppercase tracking-widest text-error">
            Акция до конца сегодняшнего дня!
          </p>
        </div>
      </div>
    </section>
  );
}

