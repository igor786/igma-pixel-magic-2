import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface OpportunitiesProps {
  id?: string;
}

export const Opportunities: React.FC<OpportunitiesProps> = ({ id }) => {
  const departments = [
    {
      name: 'Маркетинга',
      benefits: [
        'Ежедневный мониторинг конкурентов и трендов',
        'ИИ-брейншторм: +30% креативных гипотез',
        'Быстрые А/Б-тесты текстов и идей',
        'Готовый контент-план на месяц за 15 минут'
      ]
    },
    {
      name: 'Продаж',
      benefits: [
        '+40% эффективных скриптов',
        'Подготовка КП быстрее в 2 раза',
        '+25% обработанных сделок',
        'Автоматизация первичных ответов'
      ]
    },
    {
      name: 'Поддержка',
      benefits: [
        '-50% нагрузки на операторов за счёт ИИ-помощника',
        'Мгновенная генерация типовых ответов и инструкций',
        'Натренированные сценарии разрешения конфликтов',
        'Ускорение первого ответа на 50%'
      ]
    },
    {
      name: 'HR',
      benefits: [
        '-80% времени на составление вакансий',
        'Автоматическая оценка резюме',
        '+45% качество внутренних коммуникаций',
        'Быстрые welcome-пакеты для новых сотрудников'
      ]
    }
  ];

  return (
    <section id={id} className="items-stretch flex w-[1308px] max-w-full flex-col gap-12">
      <h2 className="text-[#333338] text-center text-[32px] font-semibold leading-none max-md:max-w-full">
        Внедрите ИИ в ваш отдел
      </h2>
      <div className="w-full max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {departments.map((department, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-[#E6E9F2] rounded-[20px] bg-white px-8 py-2">
              <AccordionTrigger className="text-[#333338] text-xl font-semibold hover:no-underline">
                {department.name}
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <ul className="space-y-3">
                  {department.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#333338] mt-2 flex-shrink-0"></div>
                      <span className="text-[#555558] text-base leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
