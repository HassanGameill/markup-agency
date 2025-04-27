"use client";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import NewList from "@/components/Logic-List/NewList/NewList";
import { useEffect, useState } from "react";
import GetServices from "./getServices";
import ServicesCard from "./ServicesCard";
import GridList from "@/components/Logic-List/GridList/GridList";


const OurServices = () => {
  const [servicesData, setServicesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await GetServices();
          setServicesData(data);
        } catch (err) {
          setError("Failed to load data");
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    
    const firstContent = servicesData?.[0] ?? null;
  
    // Ensure contentHeader is always an array
    const contentHeader = firstContent?.content
      ? Array.isArray(firstContent.content)
        ? firstContent.content
        : [firstContent.content]
      : [];
  
    console.log("contentHeader:", contentHeader);
  
  
    
    const renderCategories = (itemData) => (
      <div className="" key={itemData}>
        <ServicesCard {...itemData} />
      </div>
    );
  
  
  
  
    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
  

  


  return (
    <>
      <section id="services" className="py-10 md:py-20 lg:py-28 bg-[#F5F5F5] dark:bg-slate-900">
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
          

          <GridList
            records={servicesData}
            renderItem={renderCategories}
          />
        </div>
      </section>
    </>
  );
};

export default OurServices;
