20;
import { getListPage } from "@/lib/contentParser";
import link from "next/link";
import { ClientAnimationWrapper } from "@/components/share/ClientAnimationWrapper";
import LogoEZ from "@/public/assets/images/Logo990.svg";
import Diagramm from "@/public/assets/images/diagramm.svg";
import { any, array } from "zod";
import dataSlider from "@/constants/sliderData.json";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import SlightShow2 from "@/components/share/SlightShow2";
import styles from "./styles.module.css";
import HorizontalSrollCarousel from "@/components/share/HorizontalScrollCarousel";
import { StaggerTestimonials } from "@/components/share/Testimonial";
import ColCardFeature from "@/components/share/CollapsCardFeature";
import { VanishText } from "@/components/share/VanishText";
import Space from "@/public/assets/images/space.png";
import ColorChangeCards from "@/components/share/ColorChangeCard";
import FeatureAnimation from "@/components/share/FeatureAnimated";
import LottiAnimation from "@/components/share/LottiAnimation";
import IlluTestimonial from "@/public/assets/images/illustration.png";
import Image from "next/image";
import Skizze from "@/public/assets/images/skizze.png";
import Button from "@/components/share/Button";
import Animation from "@/components/share/Lotticreator";
import Animation2 from "@/components/share/Lottiwalking";
import Email from "@/components/share/ContactUsForm";
import EmailModal from "@/components/share/EmailModal";
export default function Home() {
  return (
    <>
      {/*====================================================grid start ===============*/}

      <section className={'mx-auto min-h-screen") '}>
        {/*<div className="/Users/fgirse/Downloads/WhatsApp Image 2024-04-24 at 2.50.03 PM (3).jpeg /Users/fgirse/Downloads/WhatsApp Image 2024-04 /Users/fgirse/Downloads/WhatsApp lg:hidden">
  <Image src="/assets/images/interiore11.jpg" alt="background hero mobile" fill sizes="100vw"/>
  </div>*/}

        <div className="lg:block lg:w-full h-screen bg-[url('/assets/images/interiore14.jpg')] bg-cover lg:bg-cover lg:bg-no-repeat">
          <div className="relative top-[12vh]flex flex-col items-center justify-center lg:relative bg-black/20 lg:flex lg:flex-row lg:justify-evenly lg:items-stretch lg:gap-x-3 lg:top-[32vh] xl:top-[43vh] 2xl:[40vh]">
            {/*============================== LINKS =======================*/}
            <div className="px-2 sm:px-5 flex flex-col justify-center lg:w-2/3 lg:py-20">
              <h1 className="mt-5 py-3 text-zenseWhite font-black leading-3 text-4xl uppercase sm:text-7xl sm-leading-3 lg:py-12 lg:mt-3 lg:relative lg:text-zenseWhite lg:text-[4.666rem] lg:leading-3 lg:font-black  lg:uppercase lg:text-left xl:text-[7.166rem]">
                design interiore
              </h1>
              <h1 className=" -mt-2 font-black lg:text-left leading-3 text-5xl text-lime-200 uppercase sm:text-8xl lg:-mt-3 lg:text-[8.33rem] lg:font-black xl:text-[11.33rem] lg:leading-3 ">
                8zenSe.com
              </h1>
              <p className=" text-zenseWhite sm:text-3xl lg:text-4xl lg:font-black lg:text-left">
                Timeless Design rund um den Werkstoff Beton
              </p>
            </div>
            {/*============================== ENDE =======================*/}

            {/*============================== RECHTS =======================*/}
            <div className="mt-20 mx-auto w-72 h-72 sm:w-96 sm-h-96 lg:mt-16 lg:py-3 lg:w-72 lg:h-72">
              <Animation />
            </div>
            {/*============================== ENDE =======================*/}
          </div>
        </div>
        <div className=" grid grid-cols-12 grid-rows-16 gap-1">
          <div className="col-span-7 row-span-3 col-start-1 row-start-4"></div>

          <div className="relative mr-5 px-1 col-span-6 row-span-7 col-start-7 row-start-1">
            <p className="mb-5 lg:mr-12 bg-slate-900  rounded-xl  mt-7 py-1 text-slate-50 font-black text-right text-[.9rem] px-3 sm:text-2xl md:font-semibold md:text-[2.33rem] md:leading-9 lg:px-5 lg:py-3 lg:font-semibold lg:text-6xl lg:p-5 ">
              &laquo;the beauty of a living thing is not the atoms that go into
              it -but the way those atoms are put together...&raquo;
            </p>

            <div className=" relative -top-2 left-10 shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs sm:text-2xl md:text-2xl lg:text-3xl text-white leading-3 bg-orange-400 rounded-full w-16 h-16 transform translate-x-16 md:transform md:translate-x-44 sm:w-20 sm:h-20 md:w-24 md:h-24 md:-top-1  lg:left-2/4 lg:w-32 lg:h-32">
              <p className="relative z-10 text-sm md:text-2xl md:leading-4 lg:text-3xl font-black ">
                Carl
              </p>

              <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black">
                Sagan
              </p>
            </div>
          </div>
        </div>

        <section className="lg:w-2/3 mx-auto h-33vh lg:bg-[url('/assets/images/space.png')] lg:bg-contain lg:bg-no-repeat">
          <div className="relative -z-10 -mt-60 w-[77vw] h-[33vh] lg:w-[90vw] lg:h-[100vh]">
            <Image src={Space} sizes="100vw" alt="space Illustration" />
          </div>

          <section className="container mt-16 w-full px-8 py-12 grid grid-cols-1 lg:grid-cols-1 items-center gap-8 max-w-6xl mx-auto">
            <h1 className="relative -top-20 px-1 uppercase leading-10 text-[3.0rem] font-black md:text-center md:leading-[4rem] md:text-[3.750rem] bg-gradient-to-b from-slate-900 via bg-slate-600 to-slate-500 bg-clip-text text-transparent lg:top  lg:tracking-wider lg:leading-0 lg:text-8xl">
              Interiore Design
            </h1>

            <div className="relative -top-20 w-[75vw] h-[24vh] lg:w-[45vw]">
              <Image src={Skizze} fill sizes="100vw" alt="Skizze" />
            </div>

            <p className="-mt-12 text-base md:text-lg text-slate-700 my-4 md:my-6">
              <span className="text-zenseSignal2 font-bold">8zenSe.com</span>{" "}
              begleitet, beratet und unterstützt Sie professionell bei der
              Planung und Umsetzung Ihres individuellen Interieure Desings in
              Wohnung, Haus, Büro ofer Praxis. Sprechen Sie uns an - Wir freuen
              uns auf Sie!
            </p>
            <EmailModal/>
          
          </section>
          <section className="container w-full px-8 grid grid-cols-1 lg:grid-cols-1 items-center gap-8 max-w-6xl mx-auto">
            <h1 className="relative px-1 uppercase -mt-12 leading-10 text-[3.0rem] font-black md:text-center md:text-[3.750rem] lg:leading-0 lg:text-[4rem] bg-gradient-to-b from-slate-900 via bg-slate-600 to-slate-500 bg-clip-text text-transparent lg:top  lg:tracking-wider lg:leading-0 lg:text-9xl">
              Timeless Design
            </h1>

            <div className="mt-3 relative w-[75vw] h-[24vh] lg:w-[45vw]">
              <Image src={Skizze} fill sizes="100vw" alt="Skizze" />
            </div>

            <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
              <span className="text-zenseSignal2 font-bold">8zenSe.com</span>{" "}
              steht für individuelles, extravagantes und exklusives Desing aus
              dem Marterial Beton in unterschiedlichen Designvariationen und
              Designform{" "}
            </p>

            <Button />
          </section>
        </section>

        {/*  <section className="shuffle-Hero -mt-44 ">
    <ShuffleHero/>
  </section>*/}
        <section id="section-features" className="lg:h-[66vh]">
          <div className="bg-black mt-24">
            <h1 className="text-center text-zenseWhite uppercase text-3xl md:text-6xllg:mb-24  ">
              Features
            </h1>
          </div>
          <ColCardFeature />
        </section>

        <section id="section-itworks" className="lg:h-[66vh]">
          <div className="bg-black mt-24">
            <h1 className="text-center text-zenseWhite uppercase text-3xl md:text-6xllg:mb-24  ">
              How it works
            </h1>
          </div>
          <FeatureAnimation />
        </section>

        <section id="section-projRef" className="lg:h-[66vh]">
          <div className="bg-black mt-24">
            <h1 className="text-center text-zenseWhite uppercase text-3xl md:text-6xl lg:mb-24  ">
              Referenz Projekte
            </h1>
          </div>
          <ColorChangeCards />
        </section>

        <VanishText />

        <section id="section-testimonials" className="-mt-24 lg:h-[70vh]">
          <div className="bg-black mb-7 mt-24">
            <h1 className="text-center text-zenseWhite uppercase text-3xl md:text-6xllg:mb-24  ">
              Testimonials
            </h1>
          </div>
          <div className="m-7 lg:mb-12 mx-auto w-[66vw] h-[22vh]">
            <Image src={IlluTestimonial} alt="illustration" sizes="100vw" />
          </div>
          <StaggerTestimonials />
        </section>
        {/*====================================================grid ende ===============*/}
        <Animation />
        <Animation2 />
        <section className="">
          <HorizontalSrollCarousel />
        </section>
        <section className=""></section>
      </section>
    </>
  );
}

{
  /*====================================================grid ende ===============*/
}
