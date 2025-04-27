import { Link } from "@/navigation";
import { HiChevronRight } from "react-icons/hi2";
import { useLocale } from "next-intl";
import Image from "next/image";
import head_icon from "../../../../public/icons/head_icon.svg";
import { memo } from "react";

interface SubTitlesProps {
  title_en: string;
  title_ar: string;
  btnTitle_en?: string; // Optional
  btnTitle_ar?: string; // Optional
  pathText: string;
}

const HeadCategory: React.FC<SubTitlesProps> = memo(({
  title_en,
  title_ar,
  btnTitle_en = "Default Button", // Provide default values
  btnTitle_ar = "زر افتراضي", // Provide default values
  pathText,
}) => {
  const locale = useLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Set the title and button title based on the locale
  const title = locale === "ar" ? title_ar : title_en;
  const btnTitle = locale === "ar" ? btnTitle_ar : btnTitle_en;

  return (
    <div className="flex items-center justify-between pt-4">
      <div className="flex items-center gap-2">
        <div className="flex items-center justify-center w-[20px] md:w-[25px] lg:w-[30px] cursor-pointer">
          <Image
            className="w-[60px] md:w-[80px] lg:w-[50px]"
            src={head_icon}
            alt="Head icon" // More descriptive alt text
            width={30}
            height={30}
          />
        </div>

        <h2 className="text-blueMain dark:text-white text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px]">
          {title} {/* Dynamic title based on locale */}
        </h2>
      </div>
      {btnTitle && (
        <Link href={pathText} aria-label={btnTitle}>
          <div
            dir={dir}
            className="group flex items-center gap-1 bg-slate-800 dark:bg-blueMain hover:bg-[#F6AA02] dark:hover:bg-[#F6AA02] text-[12px] px-2 py-1 rounded-lg shadow-lg text-white transition-all duration-300"
          >
            {btnTitle} {/* Dynamic button title based on locale */}
            <HiChevronRight
              className={`transition-transform duration-300 ${
                locale === "ar" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"
              }`}
            />
          </div>
        </Link>
      )}
    </div>
  );
});

// Assign a display name for better debugging
HeadCategory.displayName = "HeadCategory";

export default HeadCategory;
