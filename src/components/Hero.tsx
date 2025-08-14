import React from 'react';
import { Button } from './ui/button';

export const Hero: React.FC = () => {
  return (
    <section className="items-center flex w-full flex-col gap-24 mt-14 pb-24 max-md:max-w-full">
      <div className="max-w-full items-stretch flex w-[864px] flex-col gap-8">
        <div className="w-full text-center gap-5 max-md:max-w-full">
          <div className="items-stretch flex w-full flex-col gap-4 max-md:max-w-full">
            <p className="text-[#969AA5] text-sm font-normal max-md:max-w-full">
              Аспро.ИИ
            </p>
            <div className="flex w-full flex-col items-center text-[56px] text-[#333338] font-semibold leading-[68px] mt-4 max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
              <h1 className="flex w-[806px] max-w-full gap-3.5 max-md:text-[40px] max-md:leading-[54px]">
                <span className="text-[#333338] flex-1 shrink basis-[0%] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px]">
                  Простой корпоративный ИИ для вашего бизнеса
                </span>
              </h1>
            </div>
          </div>
          <div className="flex w-full items-center gap-2.5 text-base text-[#555558] font-normal justify-center mt-5 max-md:max-w-full">
            <p className="text-[#555558] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
              Работайте с лучшими моделями без VPN и проблем с оплатой
            </p>
          </div>
        </div>
        <div className="items-center self-center flex gap-8 text-base font-semibold">
          <Button onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Получить доступ
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' })}>
            Доступные модели
          </Button>
        </div>
      </div>
      <img
        src="https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/b9b85fc9eb1c1056f551a13ff6942c82d1511710?placeholderIfAbsent=true"
        alt="Aspro.AI Interface Preview"
        className="aspect-[2.13] object-contain w-[1308px] max-w-full"
      />
      <div className="justify-center flex w-[1308px] max-w-full gap-6 text-lg text-[#333338] font-semibold text-center leading-7 flex-wrap">
        <div className="max-w-[280px] items-stretch flex min-w-60 flex-col flex-1 shrink basis-[0%] gap-6 px-6 py-0 max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/e037124229ace1d0fa1116c92e307a1f29a8a8d6?placeholderIfAbsent=true"
            alt="No VPN Required"
            className="aspect-[1] object-contain w-10 self-center"
          />
          <div className="flex w-full flex-col gap-2">
            <h3 className="text-[#333338]">
              Используйте без VPN и зарубежной карты
            </h3>
          </div>
        </div>
        <div className="max-w-[280px] items-stretch flex min-w-60 flex-col flex-1 shrink basis-[0%] gap-6 px-6 py-0 max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/53554eedd00b67c80441c4f6c5531dbcbb9561d9?placeholderIfAbsent=true"
            alt="Team Collaboration"
            className="aspect-[1] object-contain w-10 self-center"
          />
          <div className="flex w-full flex-col gap-2">
            <h3 className="text-[#333338]">
              Подключайте сотрудников
            </h3>
          </div>
        </div>
        <div className="max-w-[280px] items-stretch flex min-w-60 flex-col flex-1 shrink basis-[0%] gap-6 px-6 py-0 max-md:px-5">
          <img
            src="https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/643a8d032b3d82fc112a35a6a0569b6e1feca292?placeholderIfAbsent=true"
            alt="Mobile App"
            className="aspect-[1] object-contain w-10 self-center"
          />
          <div className="flex w-full flex-col gap-2">
            <h3 className="text-[#333338]">
              Работайте через мобильное приложение
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
