import React from 'react';

interface ModelsProps {
  id?: string;
}

export const Models: React.FC<ModelsProps> = ({ id }) => {
  return (
    <section id={id} className="w-[1308px] max-w-full gap-12">
      <h2 className="text-[#333338] text-center text-[32px] font-semibold leading-none max-md:max-w-full">
        Доступные модели
      </h2>
      <div className="grid grid-cols-3 gap-8 mt-12 px-0 py-4 max-md:grid-cols-2 max-md:max-w-full">
        <img
          src="https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/b316f72d267194273344c12fb83cf174ea5d119e?placeholderIfAbsent=true"
          alt="AI Model 1"
          className="aspect-[3.16] object-contain w-[152px] justify-self-center"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/39ab0bd1ac13f12b3ead6ab91129985f9e2cd6ce?placeholderIfAbsent=true"
          alt="AI Model 2"
          className="aspect-[3.16] object-contain w-[152px] justify-self-center"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/6d03f176568359c96eb0ab515460ad6ea1c64a27?placeholderIfAbsent=true"
          alt="AI Model 3"
          className="aspect-[3.16] object-contain w-[152px] justify-self-center"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/026994195ab14c0facde9a3ac9f37576/098f392017e226f6c9b551789a55eadbb8b85456?placeholderIfAbsent=true"
          alt="AI Model 4"
          className="aspect-[3.16] object-contain w-[152px] justify-self-center"
        />
        <img
          src="/lovable-uploads/c43c31eb-1626-4c95-bad5-85d9e86ce85e.png"
          alt="YandexGPT"
          className="aspect-[3.16] object-contain w-[152px] justify-self-center brightness-0"
        />
        <img
          src="/lovable-uploads/cb14f0d2-e9ff-41e3-b77f-7265b2ed6d78.png"
          alt="GigaChat"
          className="aspect-[3.16] object-contain w-[152px] justify-self-center brightness-0"
        />
      </div>
    </section>
  );
};
