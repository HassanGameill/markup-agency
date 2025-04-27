import React from "react";
import Image, { StaticImageData } from "next/image";
import { useLocale } from "next-intl";

import Egypt from "../../../../../public/images/countries-flags/Egypt.png";
import Saudi_Arabia from "../../../../../public/images/countries-flags/Saudi_Arabia.png";
import Emirates from "../../../../../public/images/countries-flags/Emirates.png";
import European_Union from "../../../../../public/images/countries-flags/European-Union.png";

interface IData {
  titleAr: string;
  titleEn: string;
  width: number;
  imgSrc: StaticImageData; // StaticImageData for TypeScript support with Next.js Image
}

const countriesFlags: IData[] = [
  {
    titleAr: "القاهرة، جمهورية مصر العربية",
    titleEn: "Cairo,Arab Republic of Egypt",
    width: 10,
    imgSrc: Egypt,
  },
  {
    titleAr: "الرياض، المملكة العربيه السعودية",
    titleEn: "Riyadh,Kingdom of Saudi Arabia",
    width: 14,
    imgSrc: Saudi_Arabia,
  },
  {
    titleAr: "ابوظبي، الإمارات",
    titleEn: "Abu Dhabi,United Arab Emirates",
    width: 14,
    imgSrc: Emirates,
  },
  {
    titleAr: "نسعي ان يكون عملنا يتضمن بعض البلاد الأوروبية",
    titleEn: "We aim to expand our work to include European countries",
    width: 14,
    imgSrc: European_Union,
  },
];

function PartnersFlags() {
  const locale = useLocale();

  return (
    <div className="grid grid-cols-4 lg:grid-cols-4 gap-2 my-2 md:mt-5">
      {countriesFlags.map((item, i) => (
        <div
          key={i}
          className="flex justify-center items-center flex-col gap-2 px-18 py-1 bg-[#FEF9D9] shadow-md rounded-lg"
        >
          <div className="text-center hover:transition-transform cursor-pointer">
            <Image
              className="w-[25px] sm:w-[30px] md:w-[30px] lg:w-[30px]"
              src={item.imgSrc}
              alt={`Flag of ${locale === "ar" ? item.titleAr : item.titleEn}`}
              width={500} // Adjust the width dynamically
              height={500} // Adjust the height based on width
            />
          </div>
          <h3 className="px-1 text-[5px] sm:text-[8px] md:text-[9px] text-center text-slate-900 font-semibold">
            {locale === "ar" ? item.titleAr : item.titleEn}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default PartnersFlags;
