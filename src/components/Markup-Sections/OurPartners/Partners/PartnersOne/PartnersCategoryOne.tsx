
import React from "react";
import CategoryCard from "../../../../Common/Categories/CategoryCard";
import GridList from "@/components/Logic-List/GridList/GridList";
import PartnerHeader from "@/components/Common/PartnerHeader/PartnerHeader";
import GetPartnersOne from "./getPartnersOne";

const PartnersCategoryOne = async () =>  {
  
  const records = await GetPartnersOne();

  // Get the first partner
  const firstPartner = records?.[0];

  // Ensure contentHeder is always an array
  const contentHeder = Array.isArray(firstPartner?.content) ? firstPartner.content : [firstPartner?.content].filter(Boolean);

  console.log("contentHeder:", contentHeder);



  const renderCategories = (itemData) => (
    <div className="" key={itemData}>
      <CategoryCard {...itemData} />
    </div>
  );

  return (
    <div className="container pt-10">
      {contentHeder.length > 0 ? (
          contentHeder.map((item) => (
            item && (             
              <PartnerHeader
                key={item.id}
                titleEn={item.titleEn || "Default Title"}
                titleAr={item.titleAr || "عنوان افتراضي"}
              />
            )
          ))
        ) : (
          <p className="text-center text-gray-500">No content available</p>
        )}

      

      <GridList records={records.reverse()} renderItem={renderCategories} />
    </div>
  );
}

export default PartnersCategoryOne;
