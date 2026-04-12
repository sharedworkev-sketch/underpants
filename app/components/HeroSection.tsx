"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  hours: string;
  minutes: string;
  seconds: string;
};

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const endOfDay = new Date(now);

  endOfDay.setHours(23, 59, 59, 999);

  const difference = Math.max(0, endOfDay.getTime() - now.getTime());
  const totalSeconds = Math.floor(difference / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft());

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 pt-20">
      <div className="absolute inset-0 z-0">
        <img
          alt=""
          className="h-full w-full object-cover opacity-10"
          data-alt="Cinematic close-up of high-quality charcoal gray cotton fabric texture"
          src="/bg.png"
        />
      </div>
      <div className="container relative z-10 mx-auto grid items-center gap-12 px-8 md:grid-cols-2">
        <div className="space-y-8">
          <div className="font-label inline-block animate-pulse bg-error px-4 py-1 text-xs font-black uppercase tracking-widest text-on-primary">
            СУПЕР-АКЦИЯ: 5 ПО ЦЕНЕ 2
          </div>
          <h1 className="font-headline text-5xl leading-tight font-black tracking-tighter text-slate-900 md:text-7xl">
            НАБОР ИЗ 5 ПАР <br /> <span className="text-primary">СО СКИДКОЙ 60%</span>
          </h1>
          <p className="font-body max-w-lg text-xl leading-relaxed text-secondary">
            Забудьте о покупках белья на годы. Набор из 5 премиальных боксеров EURO PLUS из
            анатомического хлопка.
          </p>
          <div className="inline-flex w-full justify-center items-center gap-4 border-l-4 border-primary bg-white/50 p-6 py-4 backdrop-blur-sm min-w-80">
            <div className="flex flex-col items-center">
              <span className="font-headline text-4xl font-black text-primary">{timeLeft.hours}</span>
              <span className="text-[10px] font-bold uppercase text-slate-500">час</span>
            </div>
            <span className="text-3xl font-black text-slate-300">:</span>
            <div className="flex flex-col items-center">
              <span className="font-headline text-4xl font-black text-primary">{timeLeft.minutes}</span>
              <span className="text-[10px] font-bold uppercase text-slate-500">минуты</span>
            </div>
            <span className="text-3xl font-black text-slate-300">:</span>
            <div className="flex flex-col items-center">
              <span className="font-headline text-4xl font-black text-primary">{timeLeft.seconds}</span>
              <span className="text-[10px] font-bold uppercase text-slate-500">секунд</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="font-headline bg-primary px-10 py-5 text-center text-lg font-black uppercase tracking-tighter text-on-primary shadow-[0_10px_30px_rgba(234,88,12,0.3)] transition-all hover:translate-y-[-2px] hover:bg-orange-700 active:scale-95"
              href="#catalog"
            >
              Заказать набор из 5 пар
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/5] w-full bg-slate-200">
            <img
              alt=""
              className="h-full w-full object-cover"
              data-alt="Fit man wearing premium black boxers"
              src="/hero_photo.png"
            />
            <div className="absolute -right-6 -bottom-6 hidden bg-slate-900 p-8 text-white shadow-2xl md:block">
              <p className="font-headline text-5xl font-black text-primary">5/5</p>
              <p className="text-xs font-bold uppercase text-slate-400">ВЫБОР МУЖЧИН №1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
