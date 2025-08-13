import React from 'react';
import { BenefitCard } from './ui/BenefitCard';

export const About: React.FC = () => {
  const benefits = [
    {
      title: 'Понятная оплата',
      description: 'Просто оплачиваете подписку за каждого пользователя'
    },
    {
      title: 'Доступ к топовым моделям',
      description: 'Лучшие модели ИИ со всего мира — в ваших руках'
    },
    {
      title: 'Массовое внедрение',
      description: 'Увеличьте производительность каждого члена команды'
    },
    {
      title: 'Быстрый старт',
      description: 'Внедрите ИИ в рабочие процессы, чтобы не отставать от индустрии'
    },
    {
      title: 'Веб‑версия и мобильное приложение',
      description: 'Доступ к ИИ — всегда и везде'
    },
    {
      title: 'Готовые сценарии',
      description: 'Не знаете, с чего начать? Аспро.ИИ подскажет'
    }
  ];

  return (
    <section className="items-stretch flex w-[1308px] max-w-full flex-col gap-12">
      <h2 className="text-[#333338] text-center text-[32px] font-semibold leading-none max-md:max-w-full">
        Что такое Аспро.ИИ
      </h2>
      <div className="justify-center content-start flex-wrap self-center flex gap-[24px_24px] mt-12 max-md:max-w-full max-md:mt-10">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            title={benefit.title}
            description={benefit.description}
            className={index < 4 ? "min-w-80 flex-1 shrink basis-[0%] max-md:px-5" : "min-w-60 min-h-[148px] flex-1 shrink basis-[0%] max-md:px-5"}
          />
        ))}
      </div>
    </section>
  );
};
