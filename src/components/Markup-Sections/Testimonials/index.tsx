"use client"
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import Image from "next/image";
import patternImg from "../../../../public/images/partners/obasity_icon.png";

import OneListSlider from "@/components/Logic-List/NewList/OneListSlider";
import TestimonialsCard from "./TestimonialsCard";
import getTestimonials from "./getTestimonials";
import { useEffect, useState } from "react";

// CAROUSEL DATA

const OurServices =  () => {
  const [teamworkData, setTeamworkData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTestimonials();
        setTeamworkData(data);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  
  const firstContent = teamworkData?.[0] ?? null;

  // Ensure contentHeader is always an array
  const contentHeader = firstContent?.content
    ? Array.isArray(firstContent.content)
      ? firstContent.content
      : [firstContent.content]
    : [];

  console.log("contentHeader:", contentHeader);


  
  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <TestimonialsCard {...itemData} />
    </div>
  );




  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <section id="services" className="relative py-10 md:py-20 lg:py-28 z-10 bg-[#F5F5F5] dark:bg-slate-900">

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


          <div
            className={`absolute  top-14 z-[-1] `}
          >
            <Image
              src={patternImg}
              alt="user-image"
              width={0}
              height={0}
              className="m-auto inline-block w-[100px] md:w-[300px] "
            />
          </div>

          <OneListSlider
            records={teamworkData}
            renderItem={renderCategories}
            emptyMessage="There is no category"
          />
          
        </div>
      </section>
    </>
  );
};

export default OurServices;