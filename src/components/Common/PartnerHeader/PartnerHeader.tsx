import { useLocale } from "next-intl";
import Image from "next/image";
import React, { memo } from "react";
import head_icon from "../../../../public/icons/head_icon.svg";


type HeadingProps = {
  children?: React.ReactNode;
  titleEn: string; // English title
  titleAr: string; // Arabic title
};

// eslint-disable-next-line react/display-name
const PartnerHeader = memo(({ children, titleEn, titleAr }: HeadingProps) => {
  // Select the title based on the locale
  const locale = useLocale();

  const title = locale === "ar" ? titleAr : titleEn;

  return (
    <div className="mb-3 text-[26px] flex justify-center gap-3 py-3">
      <div className=" flex items-center justify-center   w-[15px] md:w-[20px] lg:w-[25px]  cursor-pointer">
          <Image
            className="w-[60px] md:w-[80px] lg:w-[50px]"
            src={head_icon}
            alt={"head-icon"}
            width={0}
            height={0}
          />
        </div>
      <h2
        className={`text-blue-950 dark:text-white text-[0.8rem] sm:text-[0.9rem] md:text-[1.4rem] lg:text-lg ${locale === "ar" ? "__rtl_lang font-semibold" : ""}`}
      >
        {title}
      </h2>
      {children && <div>{children}</div>}
    </div>
  );
});

export default PartnerHeader;
