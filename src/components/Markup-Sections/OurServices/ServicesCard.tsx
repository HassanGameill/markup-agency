
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import PopupServices from "./PopupServices";

interface ItemsDataProps {
  id: string;
  nameEn: string;
  nameAr: string;
  imageUrl: string;
}




function ServicesCard(itemData: ItemsDataProps) {
  const { nameEn, nameAr, imageUrl } = itemData;
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [selectedData, setSelectedData] = useState<any>(null);

  const handleCardClick = (data: any) => {
    setSelectedData(data);
    setIsOpen(true);
  };

  return (
    <>
      <PopupServices
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={selectedData}
      />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => handleCardClick(itemData)}
        onKeyDown={(e) => e.key === "Enter" && setIsOpen(true)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="button"
        tabIndex={0}
        className={`
          group relative flex flex-col items-center justify-between
          w-[145px] sm:w-[180px] md:w-[240px]
          h-[160px] md:h-[220px]
          p-4 mx-auto rounded-3xl cursor-pointer
          bg-gradient-to-br from-white to-gray-50
          dark:from-gray-800 dark:to-gray-900
          shadow-lg hover:shadow-xl
          border border-gray-200 dark:border-gray-700
          overflow-hidden
          transition-all duration-400 ease-out
          focus:outline-none focus:ring-3 focus:ring-primary/40
          my-5
        `}
      >
        {/* Animated background element */}
        <motion.div 
          className="absolute inset-0 bg-primary/5 dark:bg-primary/10"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative w-full h-24 md:h-24 flex items-center justify-center">
          {/* PNG Color Transformation Container */}
          <div className={`
            relative w-[50%] h-full
            transition-all duration-500
            ${isHovered ? 'scale-110' : 'scale-100'}
          `}>
            <Image
              src={imageUrl}
              alt={locale === "en" ? nameEn : nameAr}
              fill
              className={`
                object-contain
                dark:filter dark:brightness-0 dark:invert 
                dark:hue-rotate-180 dark:saturate-150
                transition-all duration-700 ease-[cubic-bezier(0.45,0,0.55,1)]
                ${isHovered ? 'dark:opacity-90' : 'dark:opacity-80'}
              `}
              priority={false}
            />
          </div>
        </div>

        <motion.h3
          className={`
            text-center font-medium text-gray-800 dark:text-gray-200
            text-sm sm:text-base
            mb-5
            transition-colors duration-300
          `}
          animate={{
            y: isHovered ? 2 : 0,
          }}
        >
          {locale === "en" ? nameEn : nameAr}
        </motion.h3>

       
      </motion.div>
    </>
  );
}

export default ServicesCard;