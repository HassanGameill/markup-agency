"use client";

import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import Atchievements from "../Achievements";
import { useLocale, useTranslations } from "next-intl";
import GetOurTarget from "./GetOurTarget";
import { OurTargetType } from "@/lib/Actions/types";
// Dynamically import Lottie (Client-side only)
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
// Import JSON files
import countries from "../../../../public/lotyFiles/countries.json";
import trip from "../../../../public/lotyFiles/hero_jorny.json";
import OurTargetClient from "./OurTargetClient";

const OurTarget: React.FC = () => {
  const locale = useLocale();

  const [ourTargetData, setOurTargetData] = useState<OurTargetType[]>([]);

  useEffect(() => {
    const fetchTargetData = async () => {
      try {
        const data = await GetOurTarget();
        setOurTargetData(data);
        console.log("Fetched Data:", data);
      } catch (error) {
        console.error("Error fetching target data:", error);
      }
    };

    fetchTargetData();
  }, []);

  // Memoized content data
  const ContentData = useMemo(
    () =>
      ourTargetData
        ?.filter((item) => item.content) // Ensure content exists
        .map((item) => item.content)
        .flat(), // Flatten if content is an array
    [ourTargetData],
  );

  // _______ Handle Content Localization ___________

  // Memoized target content

  return (
    <section
      className="py-10 md:py-20 lg:py-28 bg-[#F5F5F5] dark:bg-slate-900"
    >
      {/* Render only if data exists */}

      <div>
        <div className="px-8 lg:py-2">
          <div className="rounded-lg shadow-sm text-center flex flex-col lg:flex-row items-center justify-between lg:px-20">
            <OurTargetClient />

            {/* Conditional Rendering for Lottie Animations */}
            <div className="hidden lg:block w-[300px] ">
              <Lottie animationData={countries} />
            </div>

            <div className="block lg:hidden w-[300px] ">
              <Lottie animationData={trip} />
            </div>
          </div>

          <div>
            <Atchievements />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTarget;
