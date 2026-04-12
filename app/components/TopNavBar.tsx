export function TopNavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 shadow-sm backdrop-blur-md dark:bg-slate-900/80 dark:shadow-none">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
        <div className="font-headline text-2xl font-black uppercase tracking-tighter text-orange-700 italic dark:text-orange-500">
          EURO PLUS
        </div>
        <div className="font-inter hidden items-center gap-8 font-bold tracking-tight md:flex">
          <a
            className="text-sm uppercase text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-400"
            href="#catalog"
          >
            Наборы
          </a>
          <a
            className="text-sm uppercase text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-400"
            href="#features"
          >
            Чем мы лучше
          </a>
          <a
            className="text-sm uppercase text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-400"
            href="#order"
          >
            Заказ
          </a>
          <a
            className="text-sm uppercase text-slate-600 transition-colors hover:text-orange-600 dark:text-slate-400"
            href="#reviews"
          >
            Отзывы
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            className="bg-orange-700 px-6 py-2 font-inter text-sm font-bold uppercase tracking-tight text-white transition-colors duration-150 hover:text-orange-600 active:scale-95"
            href="#order"
          >
            ЗАКАЗАТЬ
          </a>
        </div>
      </div>
    </nav>
  );
}
