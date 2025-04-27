"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id?: string;
  nameEn?: string;
  nameAr?: string;
  positionNameEn?: string;
  positionNameAr?: string;
  titleEn?: string;
  titleAr?: string;
  imageUrl?: string;
  brandImageUrl?: string;
  rating?: number;
  date?: string;
}

const DEFAULT = {
  USER_IMAGE: "/images/default-user.png",
  BRAND_IMAGE: "/images/default-brand.png",
  MAX_RATING: 5,
  FALLBACK_RATING: 4,
};

function TestimonialsCard({
  nameEn = "",
  nameAr = "",
  titleEn = "",
  titleAr = "",
  positionNameEn = "",
  positionNameAr = "",
  imageUrl = DEFAULT.USER_IMAGE,
  brandImageUrl = DEFAULT.BRAND_IMAGE,
  rating = DEFAULT.FALLBACK_RATING,
  date = "",
}: Testimonial) {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const [imgError, setImgError] = useState(false);
  const [brandImgError, setBrandImgError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const name = isArabic ? nameAr : nameEn;
  const title = isArabic ? titleAr : titleEn;
  const position = isArabic ? positionNameAr : positionNameEn;

  const Stars = React.useMemo(() => (
    Array.from({ length: DEFAULT.MAX_RATING }, (_, index) => (
      <motion.span
        key={index}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <svg
          className={`w-6 h-6 ${
            index < rating 
              ? "text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.4)]" 
              : "text-gray-300 dark:text-gray-600"
          } transition-all duration-200`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </motion.span>
    ))
  ), [rating]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto my-6 px-4 sm:px-6"
      aria-label={isArabic ? "بطاقة شهادة" : "Testimonial card"}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative cursor-pointer group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 sm:p-10 border border-gray-100 dark:border-gray-700 overflow-hidden">
        {/* Animated background gradient */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-gradient-to-br from-amber-50/30 to-transparent dark:from-amber-900/10 pointer-events-none"
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Floating decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100/20 dark:bg-amber-800/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-amber-200/20 dark:bg-amber-700/10 rounded-full blur-xl"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
          {/* User Image with parallax effect */}
          <motion.div 
            className="relative  w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg"
            whileHover={{ 
              rotate: isHovered ? 2 : 0,
              scale: 1.05
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl"></div>
            <Image
              src={imgError ? DEFAULT.USER_IMAGE : imageUrl}
              alt={isArabic ? `صورة ${nameAr}` : `Portrait of ${nameEn}`}
              width={112}
              height={112}
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
              priority
              placeholder="blur"
              blurDataURL={DEFAULT.USER_IMAGE}
              onError={() => setImgError(true)}
            />
          </motion.div>

          <div className="flex-1 ">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="lg:space-y-2">
                {/* <motion.h3 
                  className="hidden lg:block text-2xl font-bold text-gray-900 dark:text-white"
                  whileHover={{ x: isArabic ? -2 : 2 }}
                >
                  {name}
                </motion.h3> */}
                
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-10 h-10 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 bg-white p-1 shadow-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image
                      src={brandImgError ? DEFAULT.BRAND_IMAGE : brandImageUrl}
                      alt={isArabic ? `شعار ${nameAr}` : `${nameEn}'s company logo`}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                      priority
                      placeholder="blur"
                      blurDataURL={DEFAULT.BRAND_IMAGE}
                      onError={() => setBrandImgError(true)}
                    />
                  </motion.div>
                  <div className="space-y-1">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      {position}
                    </span>
                    {date && (
                      <span className="block text-xs text-gray-400 dark:text-gray-500">
                        {date}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Rating with animation */}
              <motion.div 
                className="flex items-center gap-1"
                aria-label={isArabic ? 
                  `التقييم: ${rating} من ${DEFAULT.MAX_RATING}` : 
                  `Rating: ${rating} out of ${DEFAULT.MAX_RATING}`}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                {Stars}
              </motion.div>
            </div>

            {/* Testimonial Text */}
            <motion.div 
              className="relative "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <svg 
                className="absolute  top-0 left-0 w-8 h-8 text-amber-300/20 dark:text-amber-600/20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-gray-700 dark:text-gray-300">
                <motion.p 
                  className="text-xs z-[999] lg:text-lg leading-relaxed line-clamp-4 "
                  whileHover={{ 
                    scale: 1.01,
                    textShadow: "0 0 8px rgba(0,0,0,0.1)"
                  }}
                >
                  {title}
                </motion.p>
              </blockquote>
            </motion.div>
          </div>
        </div>

        {/* Animated border */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, type: "spring" }}
        />
      </div>
    </motion.article>
  );
}

export default React.memo(TestimonialsCard);