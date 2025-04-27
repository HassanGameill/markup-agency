import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BannerProps {
  titleEn?: string;
  titleAr?: string;
  subtitleEn?: string;
  subtitleAr?: string;
}

const BannerData: BannerProps[] = [
  {
    titleEn: "Transform Your Business into a Market Leader with Our Winning Strategies",
    titleAr: "حوّل عملك إلى قائد في السوق مع استراتيجياتنا المجربه",
    subtitleEn: "Unlock your brand’s full potential with innovative strategies, local expertise, and data-driven campaigns that connect you with your audience and drive growth.",
    subtitleAr: "اكتشف الإمكانيات الكاملة لعلامتك التجارية من خلال استراتيجيات مبتكرة وخبرة محلية وحملات تعتمد على البيانات لربطك بجمهورك وتحقيق النمو .",
  },
];





const Banner = () => {
  const locale = useLocale();

  return (
    <div className="bg-white relative z-10 dark:bg-slate-900 shadow-xl py-16 lg:py-24 text-center overflow-hidden">
    

      <div className="container mx-auto px-4">
        {BannerData.map((item, index) => (
          <div key={index} className="">
            <div className="max-w-3xl mx-auto">
            <h1
              className={`text-blueMain dark:text-white mb-6 font-bold ${
                locale === "ar"
                  ? "text-3xl lg:text-5xl leading-tight"
                  : "text-2xl lg:text-4xl leading-tight"
              }`}
            >
              {locale === "en" ? item.titleEn : item.titleAr}
            </h1>
            <p
              className={`text-orangeMain dark:text-orange-300 mb-8 ${
                locale === "ar"
                  ? "text-lg lg:text-xl"
                  : "text-base lg:text-lg"
              }`}
            >
              {locale === "en" ? item.subtitleEn : item.subtitleAr}
            </p>

            </div>
            
          </div>
        ))}

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

export default Banner;