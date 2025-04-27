"use client";
import React, { useState, useMemo } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "@/navigation";
import Lottie from "lottie-react";
import { useLocale } from "next-intl";
import Image from "next/image";
import { HiOutlinePhone } from "react-icons/hi2";
import { Typewriter } from "react-simple-typewriter";
import Vonders from "./vonder";
import { IHeroDtaType } from "./HeroTypes";

// Assets
import obasty from "../../../../public/images/partners/obasity_icon.png";
import DealImg2 from "../../../../public/lotyFiles/hero.json";
import videoClick from "../../../../public/lotyFiles/videoClick.json";

const HeroCard: React.FC<IHeroDtaType> = (items) => {
  const {
    id,
    titleEn,
    titleAr,
    subtitleEn,
    subtitleAr,
    btnOneEn,
    btnOneAr,
    btnTwoEn,
    btnTwoAr,
    heroWords,
  } = items;

  const [isOpen, setOpen] = useState(false);
  const locale = useLocale();

  const { title, subtitle, btnOne, btnTwo } = useMemo(
    () => ({
      title: locale === "en" ? titleEn : titleAr,
      subtitle: locale === "en" ? subtitleEn : subtitleAr,
      btnOne: locale === "en" ? btnOneEn : btnOneAr,
      btnTwo: locale === "en" ? btnTwoEn : btnTwoAr,
    }),
    [
      locale,
      titleEn,
      titleAr,
      subtitleEn,
      subtitleAr,
      btnOneEn,
      btnOneAr,
      btnTwoEn,
      btnTwoAr,
    ],
  );

  const words = useMemo(
    () =>
      Array.isArray(heroWords)
        ? heroWords.map((item) => (locale === "en" ? item.wordEn : item.wordAr))
        : [],
    [heroWords, locale],
  );

  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-slate-900 
                 md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 
                 2xl:pb-[100px] 2xl:pt-[210px]"
    >
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="hjnQfaml14s"
        onClose={() => setOpen(false)}
      />

      {/* Floating Image */}
      <div
        className={`absolute top-14 z-[-1] ${locale === "ar" ? "left-0" : "right-0"}`}
      >
        <Image
          src={obasty}
          alt="Obasity Icon"
          width={100}
          height={100}
          priority
          className="m-auto inline-block md:w-[300px] transition-transform duration-300 hover:scale-110"
        />
      </div>

      <Vonders />

      <div className="container">
        <div
          className={`grid grid-cols-1 xl:grid-cols-2 lg:gap-[8rem] items-center ${locale === "ar" ? "__rtl_lang" : ""}`}
        >
          {/* Left Content */}
          <div>
            <div key={id}>
              <h1 className="mb-5 text-[0.8rem] font-bold text-blue-900  dark:text-white sm:text-[1.4rem] md:text-[1.5rem]">
                {title}{" "}
                <span className="text-[#F6AA02]" aria-live="polite">
                  <Typewriter
                    words={words}
                    loop
                    cursor
                    cursorStyle=""
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="mb-8 text-[11px] text-body-color dark:text-body-color-dark sm:text-[14px] md:text-sm">
                {subtitle}
              </p>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <Link
                  href="https://wa.me/+201015882008"
                  target="_blank"
                  aria-label="WhatsApp Contact"
                  className="flex items-center gap-2 rounded-3xl border-2 border-orangeMain shadow-lg 
                             transition-all duration-300 px-6 py-2.5 font-semibold text-black 
                             hover:bg-orangeMain hover:text-white dark:text-white lg:px-8 lg:py-4 
                             hover:scale-105 active:scale-95"
                >
                  <span className="text-[10px] sm:text-[12px] md:text-[14px]">
                    {btnOne}
                  </span>
                  <HiOutlinePhone className="text-[20px]" />
                </Link>

                {/* Play Video Button */}
                <button
                  onClick={() => setOpen(true)}
                  aria-label="Play Video"
                  className="flex items-center justify-center text-slate-800 dark:text-white 
                             hover:scale-105 transition-transform duration-300"
                >
                  <Lottie
                    animationData={videoClick}
                    className="w-[60px] lg:w-[70px]"
                  />
                  <span className="text-[11px] sm:text-[14px] md:text-[16px] lg:text-[17px]">
                    {btnTwo}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content (Lottie Animation) */}
          <div className="px-10 pb-10 w-[20rem] md:w-[30rem]">
            <Lottie animationData={DealImg2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroCard);
