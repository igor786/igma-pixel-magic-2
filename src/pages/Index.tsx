import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Models } from '@/components/Models';
import { Opportunities } from '@/components/Opportunities';
import { HowItWorks } from '@/components/HowItWorks';
import { Customers } from '@/components/Customers';
import { ContactFormNew } from '@/components/ContactFormNew';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="overflow-hidden bg-white">
      <div className="w-full bg-[#F5F7FC] max-md:max-w-full">
        <Header />
        <Hero />
      </div>
      
      <main className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <section id="about" className="items-center flex w-full flex-col gap-24 bg-white px-0 py-24 rounded-[0_0_0_0] max-md:max-w-full">
            <About />
            <Models id="models" />
            <div className="flex min-h-px w-[1308px] max-w-full bg-[#E6E9F2]" />
            <Opportunities id="opportunities" />
            <HowItWorks />
          </section>
          
          <section className="items-center flex w-full flex-col overflow-hidden gap-24 bg-[#F5F7FC] px-0 py-24 max-md:max-w-full">
            <Customers />
            <div className="flex min-h-px w-[1308px] max-w-full bg-[#E6E9F2]" />
            <ContactFormNew />
          </section>
          
          <section className="items-center flex w-full flex-col justify-center gap-24 bg-white px-0 py-24 rounded-[0_0_0_0] max-md:max-w-full">
            <FAQ />
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
