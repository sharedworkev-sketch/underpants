"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";

import { submitOrder, type OrderFormState } from "@/app/actions/order";

const initialState: OrderFormState = {
  status: "idle",
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="font-headline w-full bg-primary py-6 text-lg font-black uppercase text-white shadow-[0_15px_30px_rgba(234,88,12,0.3)] transition-all hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-70"
      disabled={pending}
      type="submit"
    >
      {pending ? "ОТПРАВЛЯЕМ..." : "ОФОРМИТЬ НАБОР"}
    </button>
  );
}

export function OrderForm() {
  const [state, formAction] = useActionState(submitOrder, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form action={formAction} className="space-y-6" ref={formRef}>
      <input name="source" type="hidden" value="OrderSection" />
      <div>
        <label
          className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-500"
          htmlFor="order-name"
        >
          Ваше имя
        </label>
        <input
          autoComplete="name"
          className="w-full border-0 border-b-2 border-slate-200 bg-slate-50 px-2 py-4 transition-colors focus:border-primary focus:ring-0"
          id="order-name"
          name="name"
          placeholder="Имя Фамилия"
          required
          type="text"
        />
      </div>
      <div>
        <label
          className="mb-2 block text-[10px] font-black uppercase tracking-widest text-slate-500"
          htmlFor="order-phone"
        >
          Телефон для связи
        </label>
        <input
          autoComplete="tel"
          className="w-full border-0 border-b-2 border-slate-200 bg-slate-50 px-2 py-4 transition-colors focus:border-primary focus:ring-0"
          id="order-phone"
          name="phone"
          placeholder="+375 (__) ___-__-__"
          required
          type="tel"
        />
      </div>
      <SubmitButton />
      <p
        aria-live="polite"
        className={
          state.status === "error"
            ? "text-center text-sm font-bold text-error"
            : state.status === "success"
              ? "text-center text-sm font-bold text-green-700"
              : "sr-only"
        }
      >
        {state.message || "Статус отправки формы"}
      </p>
      <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
        Гарантия анонимности и безопасности ваших данных
      </p>
    </form>
  );
}
