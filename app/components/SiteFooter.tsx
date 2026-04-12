export function SiteFooter() {
  return (
    <footer className="font-inter w-full border-t-0 bg-slate-100 py-12 text-sm font-medium uppercase tracking-widest dark:bg-slate-950">
      <div className="flex w-full flex-col items-center justify-between gap-8 px-12 md:flex-row">
        <div className="text-xl font-black uppercase text-slate-900 dark:text-white">EURO PLUS</div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className=" text-center text-slate-500 transition-all hover:text-red-600 dark:text-slate-400" href="#order">
            Политика конфиденциальности
          </a>
          <a className="text-slate-500 transition-all hover:text-red-600 dark:text-slate-400" href="#order">
            Заказ &amp; Доставка
          </a>
          <a className="text-slate-500 transition-all hover:text-red-600 dark:text-slate-400" href="#order">
            Связаться с нами
          </a>
        </div>
        <div className="text-center text-[10px] text-slate-500 dark:text-slate-400 md:text-right">
          © 2026 EURO PLUS PERFORMANCE. ENGINEERED FOR PRECISION.
        </div>
      </div>
    </footer>
  );
}

