import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";
import React from "react";

import PartnersCategoryOne from "./Partners/PartnersOne/PartnersCategoryOne";
import HeadCategory from "@/components/Common/Head-Category/HeadCategory";

import PartnersCategoryTwo from "./Partners/PartnersTwo/PartnersCategoryTwo";
import GetPartnersOne from "./Partners/PartnersOne/getPartnersOne";

const OurPartners = async () => {
  
  const partnersHeder = await GetPartnersOne();
  console.log("partnersHeder:", partnersHeder);

  // Get the first partner
  const firstPartner = partnersHeder?.[0];

  // Ensure contentHeder is always an array
  const contentHeder = Array.isArray(firstPartner?.content) ? firstPartner.content : [firstPartner?.content].filter(Boolean);

  console.log("contentHeder:", contentHeder);

  return (
    <section id="partners" className="bg-[#F5F5F5] dark:bg-slate-900 py-10 md:py-20 lg:py-28">
      <div className="container">

        {contentHeder.length > 0 ? (
          contentHeder.map((item) => (
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
          ))
        ) : (
          <p className="text-center text-gray-500">No content available</p>
        )}

        {/* <HeadCategory
          title_en="All Partners"
          title_ar="جميع شركائنا"
          btnTitle_en="More"
          btnTitle_ar="المزيد"
          pathText="/partners"
        /> */}

        <div className="flex flex-col gap-8 ">
        
          <PartnersCategoryOne />
          <PartnersCategoryTwo />
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
