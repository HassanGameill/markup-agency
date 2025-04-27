"use client";
import dynamic from "next/dynamic";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import questionImg from "../../../../public/lotyFiles/question3.json";
import getQuestions from "./getQuestions";
import { useLocale } from "next-intl";
import Image from "next/image";

// Lazy load Lottie for better performance
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const LoadingSkeleton = () => (
  <div className="flex flex-col items-center space-y-4 mt-6">
    {[48, 64, 40].map((w, i) => (
      <div key={i} className={`h-6 w-${w} bg-gray-300 animate-pulse rounded-md`} />
    ))}
  </div>
);

const Features = () => {
  const [questionsData, setQuestionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    (async () => {
      try {
        const data = await getQuestions({});
        setQuestionsData(data || []);
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const contentHeader = useMemo(() => {
    return questionsData[0]?.content
      ? Array.isArray(questionsData[0]?.content)
        ? questionsData[0].content
        : [questionsData[0]?.content]
      : [];
  }, [questionsData]);

  return (
    <section id="questions" className="py-16 px-4 bg-gray-100 dark:bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        {contentHeader.length > 0 ? (
          contentHeader.map(
            (item) =>
              item && (
                <SectionTitle
                  key={item.id}
                  titleEn={item.sectionTitleEn || "Default Title"}
                  titleAr={item.sectionTitleAr || "عنوان افتراضي"}
                  paragraphEn={item.sectionSubtitleEn || ""}
                  paragraphAr={item.sectionSubtitleAr || ""}
                  center
                />
              )
          )
        ) : (
          <p className="text-center text-gray-500">No content available</p>
        )}

        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* FAQ Section */}
            <div>
              {questionsData.map((item, index) => (
                <motion.div
                  key={item.id || `${item.qEn}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-white dark:bg-slate-800 shadow-md border-l-4 border-orange-500 rounded-lg p-5 mb-4"
                >
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button
                          className="flex justify-between items-center w-full text-left text-base md:text-lg font-semibold text-gray-900 dark:text-gray-200 hover:text-orange-600 transition"
                          aria-expanded={open}
                        >
                          <span className="text-sm">{locale === "en" ? item.qEn : item.qAr}</span>
                          <ChevronUpIcon
                            className={`h-6 w-6 text-orange-500 transition-transform ${
                              open ? "rotate-180" : ""
                            }`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel
                          className="mt-2 text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-300 ease-in-out"
                        >
                          <div className="flex flex-col sm:flex-row items-start gap-4">
                            <span className="text-[12px] ">
                              {locale === "en" ? item.aEn : item.aAr}
                            </span>
                            {item.imageUrl && (
                              <div className="w-20 h-20 relative flex-shrink-0 dark:bg-white rounded-lg shadow-lg">
                                <Image
                                  src={item.imageUrl}
                                  fill
                                  className="object-cover rounded-lg"
                                  alt={item.qEn || "Feature image"}
                                  priority={false}
                                  loading="lazy"
                                />
                              </div>
                            )}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </motion.div>
              ))}
            </div>

            {/* Animation Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex justify-center"
            >
              <Lottie animationData={questionImg} className="max-w-full w-[80%] sm:w-[60%] md:w-[50%] lg:w-[350px]" />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Features;
