export function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-32" id="features">
      <div className="container mx-auto px-8">
        <div className="mb-20 text-center">
          <span className="font-label mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Технологии комфорта
          </span>
          <h2 className="font-headline text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-5xl">
            Больше чем просто белье
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="border-b-4 border-transparent bg-white p-10 transition-all hover:border-primary hover:shadow-xl">
            <span
              className="material-symbols-outlined mb-6 text-4xl text-primary"
              data-icon="body_system"
            >
              body_system
            </span>
            <h3 className="font-headline mb-4 text-xl font-bold uppercase">Анатомия</h3>
            <p className="font-medium leading-relaxed text-secondary">
              Крой, который не стесняет движений и учитывает все особенности.
            </p>
          </div>
          <div className="border-b-4 border-transparent bg-white p-10 transition-all hover:border-primary hover:shadow-xl">
            <span className="material-symbols-outlined mb-6 text-4xl text-primary" data-icon="air">
              air
            </span>
            <h3 className="font-headline mb-4 text-xl font-bold uppercase">Вентиляция</h3>
            <p className="font-medium leading-relaxed text-secondary">
              Ткань пропускает воздух, исключая перегрев и дискомфорт.
            </p>
          </div>
          <div className="border-b-4 border-transparent bg-white p-10 transition-all hover:border-primary hover:shadow-xl">
            <span
              className="material-symbols-outlined mb-6 text-4xl text-primary"
              data-icon="texture"
            >
              texture
            </span>
            <h3 className="font-headline mb-4 text-xl font-bold uppercase">Долговечность</h3>
            <p className="font-medium leading-relaxed text-secondary">
              Сохраняют форму и мягкость даже после 100 стирок.
            </p>
          </div>
          <div className="border-b-4 border-transparent bg-white p-10 transition-all hover:border-primary hover:shadow-xl">
            <span
              className="material-symbols-outlined mb-6 text-4xl text-primary"
              data-icon="check_circle"
            >
              check_circle
            </span>
            <h3 className="font-headline mb-4 text-xl font-bold uppercase">Фиксация</h3>
            <p className="font-medium leading-relaxed text-secondary">
              Широкий пояс из микрофибры не оставляет следов и не сползает.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

