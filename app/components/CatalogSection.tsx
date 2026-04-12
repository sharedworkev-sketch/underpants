export function CatalogSection() {
  return (
    <section className="bg-white py-32" id="catalog">
      <div className="container mx-auto px-8">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div>
            <span className="font-label mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
              Наборы из 5 пар
            </span>
            <h2 className="font-headline text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-5xl">
              Готовые решения
            </h2>
            <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
              Полная размерная сетка: 46-68
            </p>
          </div>
          <div className="text-right">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              Осталось на складе
            </p>
            <p className="font-headline text-4xl font-black text-error">ВСЕГО 8 НАБОРОВ</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="group relative">
            <div className="relative mb-8 aspect-[3/4] overflow-hidden bg-slate-100">
              <img
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Stack of 5 black premium boxer briefs"
                src="/cat_1.png"
              />
              <div className="absolute top-4 left-4 bg-error px-3 py-1 text-[11px] font-black uppercase text-white">
                АКЦИЯ: 5 ПАР
              </div>
            </div>
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="font-headline text-2xl font-black uppercase">Классика (5 шт)</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                  Black Edition
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Размеры 46-68
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400 line-through">100,00 BYN</p>
                <p className="font-headline text-2xl font-black text-primary">49,90 BYN</p>
              </div>
            </div>
            <a
              className="block w-full text-center font-headline bg-slate-900 py-5 font-bold uppercase tracking-tighter text-white transition-colors hover:bg-primary active:scale-95"
              href="#order"
            >
              Заказать
            </a>
          </div>
          <div className="group relative">
            <div className="relative mb-8 aspect-[3/4] overflow-hidden bg-slate-100">
              <img
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Mixed collection of 5 premium trunks"
                src="/cat_2.png"
              />
              <div className="absolute top-4 left-4 bg-error px-3 py-1 text-[11px] font-black uppercase text-white">
                ВЫБОР ПОКУПАТЕЛЕЙ
              </div>
            </div>
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="font-headline text-2xl font-black uppercase">Микс (5 шт)</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                  Grey &amp; Black Mix
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Размеры 46-68
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400 line-through">125,00 BYN</p>
                <p className="font-headline text-2xl font-black text-primary">49,90 BYN</p>
              </div>
            </div>
            <a
              className="block w-full text-center font-headline bg-slate-900 py-5 font-bold uppercase tracking-tighter text-white transition-colors hover:bg-primary active:scale-95"
              href="#order"
            >
              Заказать
            </a>
          </div>
          <div className="group relative">
            <div className="relative mb-8 aspect-[3/4] overflow-hidden bg-slate-100">
              <img
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="5 performance navy blue briefs"
                src="/cat_3.png"
              />
              <div className="absolute top-4 left-4 bg-primary px-3 py-1 text-[11px] font-black uppercase text-white">
                ЛИМИТИРОВАННАЯ СЕРИЯ
              </div>
            </div>
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="font-headline text-2xl font-black uppercase">Лимит (5 шт)</h3>
                <p className="text-sm font-bold uppercase tracking-widest text-secondary">
                  Limited
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Размеры 46-68
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400 line-through">150,00 BYN</p>
                <p className="font-headline text-2xl font-black text-primary">49,90 BYN</p>
              </div>
            </div>
            <a
              className="block w-full text-center font-headline bg-slate-900 py-5 font-bold uppercase tracking-tighter text-white transition-colors hover:bg-primary active:scale-95"
              href="#order"
            >
              Заказать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
