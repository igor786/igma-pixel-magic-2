import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer?: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'Для кого Аспро.ИИ?',
      answer: 'Для команд малого и среднего бизнеса: маркетинг/контент, продажи, поддержка и бэк‑офис. Цель — быстро запустить ИИ в рабочих процессах без VPN и сложных оплат.'
    },
    {
      question: 'Нужен ли VPN и зарубежные карты?',
      answer: 'Нет. Сервис работает без VPN и оплат зарубежными картами. Подписывайтесь на ранний доступ — пришлем инструкции по старту.'
    },
    {
      question: 'Какие модели будут доступны?',
      answer: 'Планируем поддерживать ведущие модели мировых провайдеров. Конкретный список и доступность зависят от региона и этапа запуска и будут объявлены ближе к релизу.'
    },
    {
      question: 'Сколько это стоит?',
      answer: 'Участие в раннем доступе бесплатно. Цены и пакеты представим перед публичным запуском.'
    },
    {
      question: 'Как попасть в ранний доступ?',
      answer: 'Оставьте рабочую почту в форме. Приглашаем компаниями волнами и просим обратную связь по опыту использования.'
    },
    {
      question: 'Есть ли мобильное приложение?',
      answer: 'Веб‑версия доступна всегда. Мобильное приложение планируем предоставить участникам раннего доступа для тестирования.'
    },
    {
      question: 'Будет ли интеграция с Аспро.Cloud?',
      answer: 'Сейчас — нет. Рассматриваем интеграции после публичного запуска. Если для вас это важно, отметьте в заявке — пригласим в обсуждение пилота.'
    },
    {
      question: 'Как вы обрабатываете данные и обеспечиваете безопасность?',
      answer: 'На этапе раннего доступа — базовые технические меры и политика конфиденциальности. Мы не используем ваши данные для обучения собственных моделей. Расширенные функции управления и контроля планируем добавлять по мере развития сервиса.'
    },
    {
      question: 'Можно ли указать личную почту?',
      answer: 'Можно, но приоритет в приглашениях — рабочим адресам с доменом компании.'
    },
    {
      question: 'Будут ли счета и документы для юрлиц?',
      answer: 'Да, к моменту публичного запуска. На этапе раннего доступа участие бесплатное, документы не требуются.'
    },
    {
      question: 'Можно ли решать юридические задачи через сервис?',
      answer: 'ИИ помогает готовить черновики и шаблоны типовых документов, но не заменяет профессиональные консультации. Окончательные решения остаются за вами.'
    },
    {
      question: 'Когда официальный запуск?',
      answer: 'Готовим публичный релиз после завершения раннего доступа и сбора кейсов. Подпишитесь — сообщим точные сроки и пригласим первыми.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="items-stretch flex w-[864px] max-w-full flex-col gap-12 rounded-[40px_40px_0_0]">
      <h2 className="text-[#333338] text-center text-[28px] font-semibold leading-none max-md:max-w-full">
        Вопросы и ответы
      </h2>
      <div className="self-center w-full border-0 border-solid border-[#E6E9F2] max-md:mt-10">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`relative w-full bg-[#F5F7FC] pl-6 pr-8 py-6 rounded-xl cursor-pointer transition-all hover:bg-[#eef1f8] ${
              index > 0 ? 'mt-2' : ''
            } max-md:max-w-full max-md:px-5`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="z-0 w-full max-md:max-w-full">
              <h3 className="text-[#333338] text-lg font-semibold leading-loose max-md:max-w-full">
                {item.question}
              </h3>
              {openIndex === index && item.answer && (
                <p className="text-[#555558] text-[15px] font-normal leading-loose mt-4 max-md:max-w-full">
                  {item.answer}
                </p>
              )}
            </div>
            <img
              src={
                openIndex === index
                  ? "https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/75c74ef6ea826c4950fd648facb2917c9c596ce5?placeholderIfAbsent=true"
                  : "https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/d20482d19cb2ab90ea2c4cd7d179a652e1698388?placeholderIfAbsent=true"
              }
              alt={openIndex === index ? "Collapse" : "Expand"}
              className={`aspect-[1] object-contain w-4 absolute z-0 h-4 right-6 transition-transform ${
                openIndex === index ? 'top-8' : 'bottom-7'
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
