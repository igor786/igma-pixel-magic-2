import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    'Регистрируетесь в Аспро.ИИ',
    'Приглашаете коллег',
    'Начинаете работу'
  ];

  return (
    <section className="items-stretch flex w-[1308px] max-w-full flex-col font-semibold gap-12 mt-24 max-md:mt-10">
      <h2 className="text-[#333338] text-center text-[28px] leading-none max-md:max-w-full">
        Как это работает
      </h2>
      <div className="content-start flex-wrap self-center flex gap-[24px_24px] mt-12 max-md:max-w-full max-md:mt-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="min-w-80 border overflow-hidden flex-1 shrink basis-[0%] gap-10 bg-white p-8 rounded-[20px] border-solid border-[#E6E9F2] max-md:px-5"
          >
            <div className="justify-center items-center flex w-12 flex-col text-xl text-[#3761E9] whitespace-nowrap text-center h-12 bg-[#F5F7FC] px-[19px] rounded-[20px]">
              <span className="text-[#3761E9]">
                {index + 1}
              </span>
            </div>
            <div className="w-full text-lg text-[#333338] leading-loose gap-6 mt-10">
              <div className="w-full">
                <h3 className="text-[#333338]">
                  {step}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
