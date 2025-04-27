"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import PartnersFlags from "./Partners-Flags/PartnersFlags";
import Atchievements from "../Achievements";
import { useLocale, useTranslations } from "next-intl";
import GetOurTarget from "./GetOurTarget";
// Dynamically import Lottie (Client-side only)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// Import JSON files
import countries from "../../../../public/lotyFiles/countries.json";
import trip from "../../../../public/lotyFiles/hero_jorny.json";

interface BaseTarget {
  id: string;
  sectionTitleEn: string;
  sectionTitleAr: string;
  sectionSubtitleEn: string;
  sectionSubtitleAr: string;
  titleEn: string;
  titleAr: string;
  subtitleEn: string;
  subtitleAr: string;
  descriptionEn: string;
  descriptionAr: string;
}

// Extend the base type
interface OurTargetType {
  items: any;
}

const OurTargetCard: React.FC<OurTargetType> = ({ items }) => {
  const {
    id,
    sectionTitleEn,
    sectionTitleAr,
    sectionSubtitleEn,
    sectionSubtitleAr,
    titleEn,
    titleAr,
    subtitleEn,
    subtitleAr,
    descriptionEn,
    descriptionAr,
  } = items;

  const locale = useLocale();

  //_______ Handle Localizations _____________
  const title = locale === "en" ? titleEn : titleAr;
  const subtitle = locale === "en" ? subtitleEn : subtitleAr;
  const description = locale === "en" ? descriptionEn : descriptionAr;

  return (
    

      <div key={id}>
        <SectionTitle
          titleEn={sectionTitleEn}
          titleAr={sectionTitleAr}
          paragraphEn={sectionSubtitleEn}
          paragraphAr={sectionSubtitleAr}
          center
        />

        <div className="px-8 lg:py-2">
          <div className="rounded-lg shadow-sm text-center flex flex-col lg:flex-row items-center justify-between lg:px-20">
            <div className="w-full lg:w-[500px] ">
              <div>
                <h2 className="text-2xl text-slate-800 dark:text-white font-semibold mb-3 ">
                  <span className="text-[#F6AA02] font-semibold">{title}</span>
                  <div className="text-xl pt-2 text-blueMain dark:text-white">
                    {subtitle}
                  </div>
                </h2>
                <p className="text-sm lg:text-[15px] leading-relaxed text-gray-600 dark:text-gray-400 overflow-hidden">
                  {description}
                </p>
              </div>
              <div className="flex justify-center items-center mt-2">
                <PartnersFlags />
              </div>
            </div>
            <div className="">
          {/* Conditional Rendering for Lottie Animations */}
          <div className="hidden lg:block w-[300px]">
            <Lottie animationData={countries} />
          </div>

          <div className="block lg:hidden w-[300px]">
            <Lottie animationData={trip} />
          </div>
        </div>
          </div>
        </div>
      </div>
  );
};

export default OurTargetCard;
