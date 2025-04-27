"use client";

import { useEffect, useState, useMemo, useCallback, memo } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useLocale } from "next-intl";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";

// Lazy load CountUp to reduce bundle size
const CountUp = dynamic(() => import("react-countup"), { 
  ssr: false,
  loading: () => <span className="inline-block w-20 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
});

interface AchievementItem {
  id: string;
  name: string;
  evalNumber: number;
  imageUrl: string;
}

const AchievementCard = memo(({ item, index, isInView, locale }: { 
  item: AchievementItem;
  index: number;
  isInView: boolean;
  locale: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200/70 dark:border-gray-700/50 hover:border-blue-300/50 dark:hover:border-blue-500/30"
      aria-labelledby={`achievement-${item.id}-title`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
      
      <div className="p-6 md:p-8 flex flex-col items-center">
        <div className="relative mb-4 md:mb-6 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
          
          <div className="relative w-12 h-12 md:w-20 md:h-20 flex items-center justify-center">
            <Image
              src={item.imageUrl}
              alt=""
              fill
              className={`object-contain drop-shadow-md ${locale === "en" ? "" : "dark:brightness-0 dark:invert"}`}
              loading={index > 2 ? "lazy" : "eager"}
              sizes="(max-width: 768px) 50px, 80px"
            />
          </div>
        </div>

        <motion.div 
          className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2"
          whileInView={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.8, delay: 0.5 }}
          aria-live="polite"
        >
          {isInView && (
            <CountUp
              start={0}
              end={item.evalNumber}
              duration={2.5}
              separator=","
              delay={index * 0.15}
            />
          )}
          <span className="text-blue-500">+</span>
        </motion.div>

        <h3 
          id={`achievement-${item.id}-title`}
          className="text-base md:text-lg font-medium text-gray-800 dark:text-gray-100 text-center leading-tight"
        >
          {item.name}
        </h3>
      </div>
    </motion.div>
  );
});
AchievementCard.displayName = "AchievementCard";

const Achievements = () => {
  const locale = useLocale();
  const [ourTargetData, setOurTargetData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const fetchData = useCallback(async () => {
    try {
      const data = await import("../Our-Target/GetOurTarget").then(mod => mod.default());
      setOurTargetData(data?.flatMap((item) => item.ourTargetEval || []) || []);
    } catch (error) {
      console.error("Error fetching achievements:", error);
      setError(locale === "en" 
        ? "Failed to load achievements. Please try again later." 
        : "فشل تحميل الإنجازات. يرجى المحاولة مرة أخرى لاحقًا.");
    } finally {
      setLoading(false);
    }
  }, [locale]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const formattedData = useMemo(() => {
    return ourTargetData.map((item) => ({
      id: item.id,
      name: locale === "en" ? item.nameEn : item.nameAr,
      evalNumber: item.evalNumber,
      imageUrl: item.imageUrl || "/placeholder-image.png",
    }));
  }, [ourTargetData, locale]);

  const handleRetry = useCallback(() => {
    setError(null);
    setLoading(true);
    fetchData();
  }, [fetchData]);

  if (error) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-64"
      >
        <div className="text-center p-8 max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-red-100 dark:border-red-900/50">
          <div className="text-red-500 text-5xl mb-4" aria-hidden="true">⚠️</div>
          <p className="text-red-500 text-lg font-medium mb-6">{error}</p>
          <button 
            onClick={handleRetry}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-blue-500/20"
            aria-label={locale === "en" ? "Try again" : "حاول مرة أخرى"}
          >
            {locale === "en" ? "Try Again" : "حاول مرة أخرى"}
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <section 
      id="achievements"
      ref={containerRef}
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50/30 to-white dark:from-gray-900 dark:to-gray-800/30 relative overflow-hidden"
      aria-labelledby="achievements-heading"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : {}}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div 
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            transition: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          className="absolute right-0 top-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"
        />
        <motion.div 
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            transition: { duration: 25, repeat: Infinity, ease: "linear" }
          }}
          className="absolute left-0 bottom-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            id="achievements-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-transparent inline-block"
          >
            {locale === "en" ? "Our Achievements" : "إنجازاتنا"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 md:mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            {locale === "en" 
              ? "Celebrating our journey's milestones with pride" 
              : "نحتفل بمعالم رحلتنا بكل فخر"}
          </motion.p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden p-6 h-64 md:h-72 border border-gray-200/50 dark:border-gray-700/50"
                aria-hidden="true"
              >
                <div className="flex flex-col items-center h-full">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 dark:bg-gray-700 mb-4 md:mb-6 animate-pulse" />
                  <div className="h-10 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2 md:mb-4 animate-pulse" />
                  <div className="h-6 md:h-8 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mt-auto animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <AnimatePresence>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              {formattedData.map((item, index) => (
                <AchievementCard 
                  key={item.id} 
                  item={item} 
                  index={index} 
                  isInView={isInView}
                  locale={locale}
                />
              ))}
            </div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default Achievements;