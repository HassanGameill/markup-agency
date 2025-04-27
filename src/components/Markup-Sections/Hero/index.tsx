"use client";

import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";
import { Typewriter } from "react-simple-typewriter";
import { useState, memo } from "react";
import dynamic from 'next/dynamic';
import { HiOutlinePhone } from "react-icons/hi2";
import { useLocale, useTranslations } from "next-intl";
import heroData from "./heroData";
import videoClick from "../../../../public/lotyFiles/videoClick.json";
import obasty from "../../../../public/images/partners/obasity_icon.png";
import DealImg2 from "../../../../public/lotyFiles/hero.json";
import Vonders from "./vonder";

// Dynamically import Lottie for better performance
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  const local = useLocale();
  const t = useTranslations("Hero");
  const heroContent = heroData(t);

  const handleOpenModal = () => setOpen(true);

  return (
    <section
      id="home"
      className={`relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-slate-900 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]`}
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hjnQfaml14s"
        onClose={() => setOpen(false)}
      />

      <div className={`absolute top-14 z-[-1] ${local === 'ar' ? 'left-0' : 'right-0'}`}>
        <Image
          src={obasty}
          alt="Obasity Icon"
          width={0}
          height={0}
          loading="lazy"
          className="m-auto inline-block w-[100px] md:w-[300px] text-blue-500"
        />
      </div>

      <Vonders />

      <div className="container">
        <div className={`grid grid-cols-1 xl:grid-cols-2 lg:gap-[8rem] items-center ${local === "ar" ? "__rtl_lang" : ""}`}>
          <div className="">
            {heroContent.length >= 1 ? heroContent.map((item) => (
              <div key={item.id}>
                <h1 className="mb-5 overflow-hidden text-[0.8rem] font-bold leading-tight text-blue-900 dark:text-white sm:text-[1.4rem] sm:leading-tight md:text-[1.5rem] md:leading-tight">
                  {item.title}{" "}
                  <span className="text-[#F6AA02]">
                    <Typewriter
                      words={local === "ar" ? ["تحدي", "مثابره", "تخطيط", "تحقيق"] : ["Effective", "Fun"]}
                      loop
                      cursor
                      cursorStyle=""
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </h1>
                <p className="mb-8 text-[11px] leading-relaxed text-body-color dark:text-body-color-dark sm:text-[14px] md:text-sm lg:text-md">
                  {item.description}
                </p>
                <div className="flex items-center">
                  <Link
                    href="https://wa.me/+201000936297"
                    target="_blank"
                    className="mr-4 flex items-center gap-4 rounded-3xl border-2 border-orangeMain shadow-lg group transition-all duration-300 px-6 py-2.5 font-semibold text-black hover:bg-orangeMain hover:text-white dark:text-white lg:px-8 lg:py-4"
                  >
                    <span className="text-[10px] sm:text-[12px] md:text-[14px]">
                      {item.btnTitle1}
                    </span>
                    <span className="text-[20px]">
                      <HiOutlinePhone />
                    </span>
                  </Link>
                  <button
                    onClick={handleOpenModal}
                    className="flex items-center justify-center text-slate-800 dark:text-white"
                  >
                    <span className="w-[60px] lg:w-[70px]">
                      <Lottie animationData={videoClick} />
                    </span>
                    <span className="text-[11px] sm:text-[14px] md:text-[16px] lg:text-[17px]">
                      {item.btnTitle2}
                    </span>
                  </button>
                </div>
              </div>
            )) : "There is no content data."}
          </div>

          <div className="px-10 pb-10 w-[20rem] md:w-[30rem]">
            <Lottie animationData={DealImg2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
