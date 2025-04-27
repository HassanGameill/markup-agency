"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { BsLink45Deg } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import ModalVideo from "react-modal-video";
import { motion } from "framer-motion";
import HeadCategory from "@/components/Common/Head-Category/HeadCategory";
import Video from "../Video/Video";
import getNews from "./getNews";
import { useLocale } from "next-intl";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="bg-gray-300 h-40 w-full rounded-lg"></div>
    <div className="mt-2 bg-gray-300 h-4 w-3/4 rounded"></div>
    <div className="mt-2 bg-gray-300 h-4 w-1/2 rounded"></div>
  </div>
);

function NewsUs() {
  const [newsData, setNewsData] = useState([]);
  const [openVideoId, setOpenVideoId] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews({});
        setNewsData(data.reverse());

        if (data.length > 0) {
          const firstCategory = data[0]?.newsCategory?.id;
          setActiveCategory(firstCategory);
          setFilteredData(data.filter((item) => item.newsCategory.id === firstCategory));
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  // Memoized Unique Categories
  const allCategories = useMemo(
    () =>
      Array.from(new Map(newsData.map((item) => [item.newsCategory.id, item.newsCategory])).values()),
    [newsData]
  );

  // Filter news by category
  const filterByCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setFilteredData(newsData.filter((item) => item.newsCategory.id === categoryId));
  };

  const firstContent = newsData?.[0] ?? null;
  const contentHeader = firstContent?.content
    ? Array.isArray(firstContent.content)
      ? firstContent.content
      : [firstContent.content]
    : [];

  return (
    <section id="news" className="py-10 md:py-20 lg:py-28 bg-[#F5F5F5] dark:bg-gray-900">
      <div className="container">
        {contentHeader.length > 0 ? (
          contentHeader.map((item) =>
            item ? (
              <SectionTitle
                key={item.id}
                titleEn={item.sectionTitleEn || "Default Title"}
                titleAr={item.sectionTitleAr || "عنوان افتراضي"}
                paragraphEn={item.sectionSubtitleEn || ""}
                paragraphAr={item.sectionSubtitleAr || ""}
                center
              />
            ) : null
          )
        ) : (
          <p className="text-center text-gray-500">No content available</p>
        )}

        {/* <Video /> */}

        <div className="pb-5">
          <HeadCategory title_en="Learning With Us" title_ar="تعلم معنا" btnTitle_en="More" btnTitle_ar="المزيد" pathText="/blog" />
        </div>

        <div className="lg:flex lg:items-center gap-8">
          {/* Category Buttons */}
          {allCategories.length > 0 && (
            <div className="flex lg:flex-col gap-2 pb-5">
              {allCategories.map((category) => (
                <button
                  key={category.id}
                  className={`news_btn bg-slate-800 text-white shadow-md text-sm py-2 px-4 transition-all duration-300 
                    ${activeCategory === category.id ? "bg-yellow text-black" : "hover:bg-slate-700"}`}
                  onClick={() => filterByCategory(category.id)}
                >
                  {locale === "en" ? category.nameEn : category.nameAr}
                </button>
              ))}
            </div>
          )}

          {/* News Articles */}
          <div className="w-full">
            {isLoading ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <SkeletonLoader key={index} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
              >
                {filteredData.map((item) => (
                  <article className="border rounded-md border-[#5d9dfc] shadow-lg bg-white dark:bg-transparent dark:shadow-slate-700" key={item.id}>
                    <ModalVideo
                      channel="youtube"
                      isOpen={openVideoId === item.linkOne}
                      videoId={item.linkOne}
                      onClose={() => setOpenVideoId(null)}
                    />

                    <div className="relative">
                      <span
                        className="absolute text-[2rem] left-[40%] top-[35%] hover:text-blue-600 cursor-pointer bg-white/50 dark:bg-black/70 rounded-full p-2 z-10"
                        onClick={() => setOpenVideoId(item.linkOne)}
                      >
                        <MdOutlineSlowMotionVideo />
                      </span>
                      <div className="relative h-24 lg:h-32 overflow-hidden rounded-t-md">
                        <Image
                          src={item.imageUrl}
                          alt={item.titleEn}
                          layout="fill"
                          objectFit="cover"
                          className="hover:scale-105 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      </div>
                    </div>

                    <div className="px-2 py-2">
                      <h1 className="text-sm font-semibold line-clamp-1">{item.titleEn}</h1>
                      <p className="text-xs text-[#555] dark:text-gray-300 line-clamp-2">{item.subtitleEn}</p>

                      <div className="flex items-center justify-between mt-2">
                        <span className="cursor-pointer hover:text-blue-600">
                          <BsLink45Deg />
                        </span>
                        <span className="cursor-pointer hover:text-blue-600">
                          <FaLinkedin />
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {!isLoading && filteredData.length === 0 && (
          <div className="text-center py-10 text-gray-500 dark:text-gray-400">
            <p>No news available in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default NewsUs;
