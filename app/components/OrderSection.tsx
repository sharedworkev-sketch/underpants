import { OrderForm } from "./OrderForm";

export function OrderSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-32" id="order">
      <div className="container relative z-10 mx-auto px-8">
        <div className="mx-auto grid max-w-4xl items-center gap-16 bg-white p-8 shadow-[0_50px_100px_rgba(0,0,0,0.5)] md:grid-cols-2 md:p-20">
          <div>
            <h2 className="font-headline mb-6 text-4xl font-black uppercase tracking-tighter text-slate-900">
              Заказать набор
            </h2>
            <p className="mb-8 font-medium leading-relaxed text-slate-500">
              Оставьте заявку сейчас, и мы закрепим за вами цену со скидкой 60% и
              бесплатную доставку.
            </p>
            <div className="mb-8 border-l-4 border-error bg-error/10 p-4">
              <p className="text-xs font-black uppercase text-error">Внимание!</p>
              <p className="text-sm font-bold text-error">Осталось 8 наборов по этой цене.</p>
            </div>
          </div>
          <OrderForm />
        </div>
      </div>
    </section>
  );
}
