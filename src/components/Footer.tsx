import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="justify-center items-center flex w-full text-[13px] font-normal text-center bg-white px-0 py-16 max-md:max-w-full">
      <div className="self-stretch flex min-w-60 w-[1308px] items-center gap-[40px_100px] justify-between flex-wrap my-auto">
        <p className="text-[#969AA5] self-stretch my-auto">
          © 2025 Все права защищены
        </p>
        <div className="self-stretch flex min-w-60 items-center gap-8 text-[#555558] my-auto">
          <a
            href="#"
            className="text-[#555558] self-stretch my-auto hover:text-[#3761E9] transition-colors"
          >
            Политика конфиденциальности
          </a>
          <a
            href="mailto:ai@aspro.cloud"
            className="text-[#555558] self-stretch my-auto hover:text-[#3761E9] transition-colors"
          >
            ai@aspro.cloud
          </a>
        </div>
      </div>
    </footer>
  );
};
