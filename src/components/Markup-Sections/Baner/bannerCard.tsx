"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import ramdapattern from "../../../../public/images/bannar/ramdan-banner.png";
import { Link } from "@/navigation";

const BannerCard = (itemsData) => {
  const { id, titleEn, titleAr, subtitleEn, subtitleAr,nameEn, nameAr, bannerImages } =
    itemsData;
  const locale = useLocale();

  // Localization Content
  const name = locale === "en" ? nameEn : nameAr;
  const title = locale === "en" ? titleEn : titleAr;
  const subtitle = locale === "en" ? subtitleEn : subtitleAr;

  const ConntactUs = locale === "en" ? "Conntact US" : "تواصل معنا الان"

  return (
  //   <div className="relative z-10 dark:bg-slate-900 shadow-xl py-16 lg:py-24 text-center overflow-hidden">
  //   {/* Background Image */}
  //   {bannerImages?.[0]?.url && (
  //     <div className="absolute inset-0">
  //       <Image
  //         src={bannerImages[0].url}
  //         alt="Banner Background"
  //         layout="fill"
  //         objectFit="cover"
  //         priority
  //         className="opacity-85"
  //       />
  //     </div>
  //   )}

  //   {/* Overlay for better readability */}
  //   <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

  //   {/* Content */}
  //   <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 md:p-12 gap-6">
  //     {/* Text Content */}
  //     <div className="max-w-[600px] text-white space-y-4">
  //       <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
  //         {title} <span className="text-[#FFD500]">{name}</span>
  //       </h2>
  //       <p className="text-base md:text-lg opacity-90">{subtitle}</p>

  //       <div className="pt-5">
  //         <Link
  //           href=""
  //           className="inline-block bg-[#E71B20] hover:bg-[#FFD500] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ease-in-out shadow-lg transform hover:scale-105"
  //         >
  //           {ConntactUs}
  //         </Link>
  //       </div>
  //     </div>
  //   </div>
  // </div>



  <div className=" relative z-10 dark:bg-slate-800 shadow-sm  py-16 lg:py-24 text-center overflow-hidden">
    

    <div className="container mx-auto px-4">
      
        <div  className="">
          <div className="max-w-3xl mx-auto">
          <h1 className={`text-blueMain dark:text-white mb-6 font-bold ${
              locale === "ar"
                ? "text-3xl lg:text-5xl leading-tight"
                : "text-2xl lg:text-4xl leading-tight"
            }`}
          >
            {locale === "en" ? titleEn : titleAr}
          </h1>
          <p
            className={`text-orangeMain dark:text-orange-300 mb-8 ${
              locale === "ar"
                ? "text-lg lg:text-xl"
                : "text-base lg:text-lg"
            }`}
          >
            {locale === "en" ? subtitleEn : subtitleAr}
          </p>

          </div>
          
        </div>
     

      {/* Contact Button */}
      <Link
        href="https://wa.me/+201015882008"
        className="inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
          aria-label={locale === "en" ? "Contact Us" : "تواصل معنا"}
        >
          {locale === "en" ? "Contact Us" : "تواصل معنا"}
        </button>
      </Link>
    </div>
  </div>
  );
};

export default BannerCard;












