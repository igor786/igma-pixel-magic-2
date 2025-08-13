import React from 'react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-[#F5F7FC]">
      <div className="flex w-full items-center gap-[40px_100px] text-sm text-[#333338] font-normal leading-loose justify-between flex-wrap px-[306px] py-5 max-md:max-w-full max-md:px-5">
        <img
          src="https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/8d4711a412525223ddc37e5af3e94068e0466249?placeholderIfAbsent=true"
          alt="Aspro.AI Logo"
          className="aspect-[5.38] object-contain w-[129px] self-stretch shrink-0 my-auto"
        />
        <nav className="items-center self-stretch flex min-w-60 gap-6 my-auto">
          <div className="items-center self-stretch flex overflow-hidden my-auto rounded-lg">
            <span className="text-[#333338] self-stretch my-auto cursor-pointer hover:text-[#3761E9] transition-colors">
              Что это
            </span>
          </div>
          <div className="items-center self-stretch flex overflow-hidden whitespace-nowrap my-auto rounded-lg">
            <span className="text-[#333338] self-stretch my-auto cursor-pointer hover:text-[#3761E9] transition-colors">
              Возможности
            </span>
          </div>
          <Button className="text-[13px] px-3 py-1.5">
            Получить доступ
          </Button>
        </nav>
      </div>
    </header>
  );
};
