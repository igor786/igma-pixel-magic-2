import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer?: string;
}

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqItems: FAQItem[] = [
    {
      question: 'Когда откроется ранний доступ?',
      answer: 'Мы поэтапно подключаем компании из листа ожидания уже в ближайшие недели.'
    },
    { question: 'Какие модели будут доступны?' },
    { question: 'Нужен ли VPN?' },
    { question: 'Сколько стоит?' },
    { question: 'Есть ли мобильное приложение?' },
    { question: 'Подходит ли для SMB и Enterprise?' },
    { question: 'Как подключить сотрудников?' },
    { question: 'Как храните данные?' }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="items-stretch flex w-[864px] max-w-full flex-col gap-12 rounded-[40px_40px_0_0]">
      <h2 className="text-[#333338] text-center text-[28px] font-semibold leading-none max-md:max-w-full">
        Вопросы и ответы
      </h2>
      <div className="self-center w-full mt-12 border-0 border-solid border-[#E6E9F2] max-md:mt-10">
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
