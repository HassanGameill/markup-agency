"use client";

import { useEffect, useState } from "react";
import SectionTitle from "../../Common/SectionTitle/SectionTitle";
import NewList from "@/components/Logic-List/NewList/NewList";
import getTeamwork from "./getTeamwork";
import CategoryCardTeamework from "@/components/Common/Categories/CategoryCardTeamework";

const Teamwork = () => {
  const [teamworkData, setTeamworkData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTeamwork();
        setTeamworkData([...data].reverse()); // Prevent modifying original array
      } catch (err) {
        console.error("Error fetching teamwork data:", err);
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const firstContent = teamworkData?.[0] ?? null;
  const contentHeader = [].concat(firstContent?.content || []);

  const renderCategories = (itemData) => (
    <div key={itemData.id}>
      <CategoryCardTeamework {...itemData} />
    </div>
  );

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  // Slice data to pass only 10 items to each list
  const firstTenItems = teamworkData.slice(0, 10);
  const secondTenItems = teamworkData.slice(10, 20);
  const threeTenItems = teamworkData.slice(20, 30);

  return (
    <section
      id="teamwork"
      className="py-5 md:py-15 lg:py-20 bg-[#F5F5F5] dark:bg-slate-900"
    >
      <div className="container flex flex-col gap-5">
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

        <NewList
          records={firstTenItems}
          renderItem={renderCategories}
          emptyMessage="There is no category"
        />
        <NewList
          records={secondTenItems}
          renderItem={renderCategories}
          emptyMessage="There is no category"
        />

        <NewList
          records={threeTenItems}
          renderItem={renderCategories}
          emptyMessage="There is no category"
        />

        
      </div>
    </section>
  );
};

export default Teamwork;
