import Image from "next/image";
import { Metadata } from "next";
import { useState } from 'react';

import SparklesHero from "@/components/home-brew-ui/Sparkels";
import ShowNotTell from "@/components/home-page/show-not-tell";
import CeoQuote from "@/components/home-page/ceo-quote";
import FAQ from "@/components/home-page/faq";
import CalendarForm from "@/components/home-page/book-a-call"



export const metadata: Metadata = {
  title: "Hot Beans | Home",
  description: "Skyrocket Your Success",
};

export default function Home() {

  return (
    <>
      <main>
        <div id="trailer">
        
        </div>
        <SparklesHero/>
        <div className="py-12 px-6 lg:px-12 lg:py-12 bg-gradient-to-b from-[#ffffff] to-[#dbe8ff] dark:bg-gradient-to-b dark:from-[#030712] dark:to-[#ff9124] relative">
          <div className="relative z-10">
            <CalendarForm />
            <FAQ />
          </div>
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#030712] bg-[#afccff] [mask-image:linear-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </main>
    </>
    
  );
}
