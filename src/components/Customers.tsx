import React from 'react';

export const Customers: React.FC = () => {
  const stats = [
    { number: '250+', description: 'Компании в листе ожидания' },
    { number: '95%', description: 'Удовлетворенность тестирующих' },
    { number: '40%', description: 'Рост продуктивности каждого сотрудника' },
    { number: '10 мин', description: 'От внедрения до первых результатов' }
  ];

  return (
    <section className="items-stretch flex w-[1308px] max-w-full flex-col text-center gap-12">
      <h2 className="text-[#333338] text-2xl font-semibold leading-none max-md:max-w-full">
        Наши первые пользователи
      </h2>
      <div className="justify-center self-center flex w-full gap-6 flex-wrap px-0 py-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="max-w-60 items-stretch flex flex-col flex-1 shrink basis-[0%] gap-4 px-6 py-0 max-md:px-5"
          >
            <div className="text-[#333338] text-[44px] font-semibold leading-none self-center">
              {stat.number}
            </div>
            <div className="flex w-full flex-col text-[15px] text-[#555558] font-normal leading-[23px] gap-2">
              <p className="text-[#555558]">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
