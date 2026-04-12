export function ComparisonSection() {
  return (
    <section className="bg-slate-50 py-32">
      <div className="container mx-auto px-8">
        <h2 className="font-headline mb-16 text-center text-4xl font-black uppercase text-slate-900">
          Почему выбирают наборы UERO PLUS?
        </h2>
        <div className="mx-auto max-w-4xl overflow-hidden border border-slate-200 bg-white shadow-xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="font-headline p-6 text-sm uppercase hidden">Преимущества набора</th>
                <th className="font-headline bg-primary p-6 text-center text-sm uppercase">
                  UERO PLUS (5 ПАР)
                </th>
                <th className="font-headline p-6 text-center text-sm uppercase">ДРУГИЕ БРЕНДЫ</th>
              </tr>
            </thead>
            <tbody className="font-medium text-slate-900">
              <tr className="border-b border-slate-100">
                <td className="p-6 hidden">Цена за 1 пару</td>
                <td className="p-6 text-center font-black text-primary">10 BYN (Выгодно)</td>
                <td className="p-6 text-center text-slate-400">от 25 BYN</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-6 hidden">Качество хлопка</td>
                <td className="p-6 text-center font-black text-primary">Premium Supima</td>
                <td className="p-6 text-center text-slate-400">Обычный хлопок</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="p-6 hidden">Доставка</td>
                <td className="p-6 text-center font-black text-primary">БЕСПЛАТНО</td>
                <td className="p-6 text-center text-slate-400">Платная</td>
              </tr>
              <tr>
                <td className="p-6 hidden">Срок службы набора</td>
                <td className="p-6 text-center font-black text-primary">1.5 - 2 года</td>
                <td className="p-6 text-center text-slate-400">3 - 6 месяцев</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

