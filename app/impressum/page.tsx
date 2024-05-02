import Image from "next/image";
import LogoEZ from "../../public/assets/images/LogoEZ3.svg";
import React from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Logo01 from "@/public/assets/images/LogoEZ990.svg";
import Portrait from "@/public/assets/images/CorInterno1.jpg";
import ArchGrafik from "@/public/assets/images/grafik70.png";
import "./impressum.module.css";
import Tools from "@/components/Illustrationen/Tools";
import Hook from "@/components/Illustrationen/Hackchen";
import Arrow from "@/public/assets/images/arrow05.svg";
import { transform } from "next/dist/build/swc";
import Signature from "@/public/assets/images/arrow02.png";
import styles from "./impressum.module.css";
import Projekt from "@/public/assets/images/Hotel-SaoPaulo.png";
import Button from "@/components/share/Button";
import SpringModal from "@/components/share/SpringModal";
import Portrait01 from "@/public/assets/images/Portrait01.jpeg";

const page = () => {
  return (
    <>
    <main>
      <section className="mx-auto min-h-screen w-[100vw] bg-zenseGrey">
        <div className="flex flex-col items-center justify-center container">
          <h1 className="w-full py-1 text-center text-xs md:text-sm lg:text-xl bg-slate-900 p-1 font-bold text-white uppercase">
            Impressum
          </h1>

          <div className="relative w-28 h-28">
            <Image src={Logo01} alt="Logo 8zense" sizes="100vw" fill />
          </div>

          {/*<h1 className='text-3xl font-bold text-zenseGrey md:mt-72'>8zense.com</h1>*/}

          <div className="mt-3 relative w-44 h-44 md:w-96 md:h-96">
            <Image
              src={Portrait01}
              alt="Portrait"
              sizes="100vw"
              className="rounded-full"
              fill
            />
          </div>


          

          

          

          <div className="relative w-full h-60 transform scale-110 translate-y-10 lg:w-20vw lg:text-6xl">
            <Image src={Arrow} fill sizes="100vw" alt="pfeil" />
          </div>

          <section className="mt-32">
            
          </section>

          <section className="">
            
          </section>
          <section className="">
          
          
          </section>
          <h1 className="w-full mb-4 p-1 mt-24 text-xs bg-slate-900 font-bold text-white text-center md:text-sm lg:py-5">
            über Fernanda
          </h1>

       
       

          <h1 className="mt-5 px-3 py-2 rounded-xl text-center bg-slate-800 text-white text-2-xl">
            betrachten Sie Referenzprojekte von Fernanda Pereira
          </h1>
          <div className=" mx-auto">
            <SpringModal />
          </div>

          <h1 className="text-white text-[2.45rem] leading-5 sm:text-[1.36rem] mt-5 px-2 md:text-[1.92rem] lg:text-[2.33rem]font-bold uppercase text-left bg-neutral-500 md:text-7xl lg:leading-9 py-3 mb-7">
            Curriculum
          </h1>
          <h1 className="text-[1.145rem] leading-5 sm:text-[1.36rem] mt-5 px-2 md:text-[1.92rem] lg:text-[2.33rem text-zenseGrey font-bold uppercase text-center md:text-7xl lg:leading-9 py-3 mb-7">
            M. Fernanda Pereira
            <br /> PhD Architectura+Design interiore
          </h1>

          <div className="bg-zenseGrey/30  h-1/3 grid grid-cols-[5vw_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]  items-stretch gap-0 w-[100vw]">
           
           
           
           
            <div className="bg-grey-500 col-span-4 row-start-1 row-span-6 col-start-7">
              
            </div>
           
           
           
           

         
            
            
          
          
          </div>
        </div>
      </section>
      </main>
    </>
  );
};
export default page;


