import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from './ui/Button';

const formSchema = z.object({
  name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  company: z.string().min(2, 'Название компании обязательно'),
  email: z.string().email('Введите корректный email')
});

type FormData = z.infer<typeof formSchema>;

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    reset();
  };

  return (
    <section className="items-stretch flex w-[858px] max-w-full flex-col gap-12 mt-24 max-md:mt-10">
      <div className="w-full text-center gap-5 max-md:max-w-full">
        <div className="flex w-full flex-col text-[32px] text-[#333338] font-semibold leading-none gap-3 max-md:max-w-full">
          <h2 className="text-[#333338] max-md:max-w-full">
            Станьте одним из первых
          </h2>
        </div>
        <div className="flex w-full items-center gap-2.5 text-base text-[#555558] font-normal leading-[26px] justify-center mt-5 max-md:max-w-full">
          <p className="text-[#555558] self-stretch flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
            Присоединяйтесь к листу ожидания и получите возможность протестировать Аспро.ИИ до официального запуска
          </p>
        </div>
      </div>
      <div className="items-stretch border self-center flex w-[642px] max-w-full flex-col justify-center bg-white mt-12 p-12 rounded-[20px] border-solid border-[#E6E9F2] max-md:mt-10 max-md:px-5">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-md:max-w-full">
          <div className="w-full text-[13px] text-[#333338] font-normal leading-loose max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <label htmlFor="name" className="text-[#333338] block">
                Ваше имя
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                className="border flex min-h-12 w-full gap-2.5 bg-[#F5F7FC] mt-1 px-3 py-[11px] rounded-lg border-solid border-[#E6E9F2] max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-[#3761E9] focus:border-transparent"
                placeholder="Введите ваше имя"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="w-full mt-4 max-md:max-w-full">
              <label htmlFor="company" className="text-[#333338] block">
                Название компании
              </label>
              <input
                id="company"
                type="text"
                {...register('company')}
                className="border flex min-h-12 w-full gap-2.5 bg-[#F5F7FC] mt-1 px-3 py-[11px] rounded-lg border-solid border-[#E6E9F2] max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-[#3761E9] focus:border-transparent"
                placeholder="Введите название компании"
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
              )}
            </div>
            <div className="flex w-full gap-[16px_20px] whitespace-nowrap flex-wrap mt-4 max-md:max-w-full">
              <div className="min-w-40 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
                <label htmlFor="email" className="text-[#333338] block">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  className="border flex min-h-12 w-full gap-2.5 bg-[#F5F7FC] mt-1 px-3 py-[11px] rounded-lg border-solid border-[#E6E9F2] max-md:max-w-full focus:outline-none focus:ring-2 focus:ring-[#3761E9] focus:border-transparent"
                  placeholder="Введите ваш email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="w-full text-base text-white font-semibold whitespace-nowrap leading-loose mt-10 max-md:max-w-full">
            <Button type="submit" className="w-full">
              Присоединиться
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
