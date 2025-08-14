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
      icon: '📊',
      gradient: 'bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600',
      benefits: [
        'Ежедневный мониторинг конкурентов и трендов',
        'ИИ-брейншторм: +30% креативных гипотез',
        'Быстрые А/Б-тесты текстов и идей',
        'Готовый контент-план на месяц за 15 минут'
      ]
    },
    {
      name: 'Продаж',
      icon: '💰',
      gradient: 'bg-gradient-to-br from-pink-500 via-red-500 to-orange-500',
      benefits: [
        '+40% эффективных скриптов',
        'Подготовка КП быстрее в 2 раза',
        '+25% обработанных сделок',
        'Автоматизация первичных ответов'
      ]
    },
    {
      name: 'Поддержки',
      icon: '🎧',
      gradient: 'bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600',
      benefits: [
        '-50% нагрузки на операторов за счет ИИ-помощника',
        'Мгновенная генерация типовых ответов и инструкций',
        'Натренированные сценарии разрешения конфликтов',
        'Ускорение первого ответа на 50%'
      ]
    },
    {
      name: 'HR',
      icon: '👥',
      gradient: 'bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600',
      benefits: [
        '-80% времени на составление вакансий',
        'Автоматическая оценка резюме',
        '+45% качество внутренних коммуникаций',
        'Быстрые welcome-пакеты для новых сотрудников'
      ]
    }
  ];

  return (
    <section id={id} className="items-stretch flex w-[1308px] max-w-full flex-col gap-12 animate-fade-in">
      <h2 className="text-[#333338] text-center text-[32px] font-semibold leading-none max-md:max-w-full mb-4">
        Внедрите ИИ в ваш отдел
      </h2>
      <div className="w-full max-w-5xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-6">
          {departments.map((department, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="group relative overflow-hidden rounded-[24px] border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 opacity-5 ${department.gradient}`}></div>
              <AccordionTrigger className="relative px-8 py-6 text-left hover:no-underline group-hover:bg-gray-50/50 transition-colors duration-200">
                <div className="flex items-center gap-4 w-full">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-full ${department.gradient} text-white text-xl shadow-md`}>
                    {department.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#333338] text-xl font-semibold group-hover:text-primary transition-colors duration-200">
                      {department.name}
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="relative px-8 pb-6 pt-2">
                <div className="ml-16">
                  <ul className="space-y-4">
                    {department.benefits.map((benefit, benefitIndex) => (
                      <li 
                        key={benefitIndex} 
                        className="flex items-start gap-4 animate-fade-in"
                        style={{ animationDelay: `${benefitIndex * 50}ms` }}
                      >
                        <div className={`w-3 h-3 rounded-full ${department.gradient} mt-1.5 flex-shrink-0 shadow-sm`}></div>
                        <span className="text-[#555558] text-base leading-relaxed font-medium">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
