export function ReviewsSection() {
  return (
    <section className="bg-white py-32" id="reviews">
      <div className="container mx-auto px-8">
        <div className="grid items-center gap-24 md:grid-cols-2">
          <div>
            <h2 className="font-headline mb-8 text-5xl leading-none font-black uppercase tracking-tighter text-primary md:text-7xl">
              45,000+
            </h2>
            <p className="font-headline mb-12 text-2xl font-black uppercase text-slate-900">
              Проданных наборов за 2025 год
            </p>
            <div className="grid grid-cols-1 gap-8">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  data-icon="shield_with_heart"
                  data-weight="fill"
                >
                  shield_with_heart
                </span>
                <div>
                  <p className="text-sm font-black uppercase text-slate-900">Гарантия на износ</p>
                  <p className="text-sm text-secondary">
                    Если порвутся в течение 6 месяцев - заменим бесплатно
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined text-4xl text-primary"
                  data-icon="local_shipping"
                  data-weight="fill"
                >
                  local_shipping
                </span>
                <div>
                  <p className="text-sm font-black uppercase text-slate-900">Экспресс-доставка</p>
                  <p className="text-sm text-secondary">
                    Склад в Минске. Доставка по РБ от 2 дней.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="border-l-4 border-primary bg-slate-50 p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-black text-white">
                  М
                </div>
                <div>
                  <p className="text-sm font-black uppercase">Максим Т.</p>
                  <div className="flex text-primary">
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                </div>
              </div>
              <p className="leading-relaxed italic text-slate-600">
                &quot;Взял набор из 5 штук. Это лучшее вложение в комфорт. Качество ткани на высоте,
                сидят идеально. Теперь только EURO PLUS.&quot;
              </p>
            </div>
            <div className="border-l-4 border-primary bg-slate-50 p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 font-black text-white">
                  И
                </div>
                <div>
                  <p className="text-sm font-black uppercase">Игорь К.</p>
                  <div className="flex text-primary">
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                </div>
              </div>
              <p className="leading-relaxed italic text-slate-600">
                &quot;Реально анатомические. Никаких швов, ничего не мешает. По такой цене за 5 штук
                - это просто подарок.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

