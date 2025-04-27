"use client";
import React, { memo, useEffect, useState } from "react";
import OtherBrandsCard from "../../../../Common/Categories/OtherBrandsCard";
import GridList2 from "@/components/Logic-List/GridList/GridList2";
import PartnerHeader from "@/components/Common/PartnerHeader/PartnerHeader";
import GetPartnersTwo from "./getPartnersTwo";

const PartnersCategoryTwo = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetPartnersTwo();
      setRecords(data);
    };
    fetchData();
  }, []);

  const firstPartner = records?.[0];

  // Ensure contentHeder is always an array
  const contentHeder = Array.isArray(firstPartner?.content)
    ? firstPartner.content
    : [firstPartner?.content].filter(Boolean);

  console.log("contentHeder:", contentHeder);

  const renderCategories = (itemData) => (
    <div key={itemData.id}>
      <OtherBrandsCard {...itemData} />
    </div>
  );

  return (
    <div className="container pt-8">
      {contentHeder.length > 0 ? (
        contentHeder.map(
          (item) =>
            item && (
              <PartnerHeader
                key={item.id}
                titleEn={item.subtitleEn || "Default Title"}
                titleAr={item.subtitleAr || "عنوان افتراضي"}
              />
            ),
        )
      ) : (
        <p className="text-center text-gray-500">No content available</p>
      )}

      <GridList2 records={records} renderItem={renderCategories} />
    </div>
  );
};

export default memo(PartnersCategoryTwo);
