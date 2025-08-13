import React from 'react';
import { BenefitCard } from './ui/BenefitCard';

export const Opportunities: React.FC = () => {
  const opportunities = [
    {
      title: 'Создавать любой контент',
      description: 'Генерируйте маркетинговые материалы, обучающие статьи или описание для товаров за один запрос.',
      icon: 'https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/704b42ed02381a95b8e4ca532ce949aaa8fab0a6?placeholderIfAbsent=true'
    },
    {
      title: 'Разгрести повседневные задачи',
      description: 'Лучшие модели ИИ со всего мира — в ваших руках',
      icon: 'https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/dfe7f323f192b168c2eb0778078df65c56e4a288?placeholderIfAbsent=true'
    },
    {
      title: 'Эффективно общаться с клиентами',
      description: 'Менеджеры смогут быстро составить письма, скрипты, follow‑up и отработать сложные возражения.',
      icon: 'https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/ae1ac907939749f6f70f88cc610444e57a45faae?placeholderIfAbsent=true'
    },
    {
      title: 'Принимать важные решения',
      description: 'Получайте краткие и емкие саммари из длинных отчетов, статей или отзывов клиентов.',
      icon: 'https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/4aeb117ef29d3b4479b01b35a07a7157e0360478?placeholderIfAbsent=true'
    },
    {
      title: 'Нанимать и сохранять сотрудников',
      description: 'За секунды составляйте описания вакансий, welcome‑письма для новичков и тексты для внутренних новостей.',
      icon: 'https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/fb62e7aedf21a9aadcbe1bf0d7d9cf021b206d5b?placeholderIfAbsent=true'
    },
    {
      title: 'Решать юридические вопросы',
      description: 'Составляйте договоры, анализируйте документы и получайте разъяснения по законодательству.',
      icon: 'https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/9e681a9c2c4ea840a1982f519a881a79f8887abe?placeholderIfAbsent=true'
    },
    {
      title: 'Планировать стратегию компании',
      description: 'Анализируйте конкурентов, прогнозируйте тренды и разрабатывайте бизнес‑планы.',
      icon: 'https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/ef66464a91887c92663eb2f5f116662585b12cfb?placeholderIfAbsent=true'
    },
    {
      title: 'Генерировать и докручивать идеи',
      description: 'Выйдите из тупика — ИИ поможет придумать новые варианты привлечения клиентов.',
      icon: 'https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/dabf222dc03ef7bb13932fb4935f5e9c96adab74?placeholderIfAbsent=true'
    }
  ];

  return (
    <section className="items-stretch flex w-[1308px] max-w-full flex-col gap-12 mt-24 max-md:mt-10">
      <h2 className="text-[#333338] text-center text-[32px] font-semibold leading-none max-md:max-w-full">
        Аспро.ИИ поможет
      </h2>
      <div className="justify-center content-start flex-wrap self-center flex w-full gap-[24px_24px] mt-12 max-md:mt-10">
        {opportunities.map((opportunity, index) => (
          <BenefitCard
            key={index}
            title={opportunity.title}
            description={opportunity.description}
            icon={opportunity.icon}
            className={`min-w-60 ${index < 4 ? 'min-h-[300px]' : ''} overflow-hidden grow shrink w-[247px] gap-10 max-md:px-5`}
          />
        ))}
      </div>
    </section>
  );
};
