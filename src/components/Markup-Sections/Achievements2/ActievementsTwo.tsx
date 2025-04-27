"use client";
import React from "react";
import dynamic from "next/dynamic";
import SectionTitle from "@/components/Common/SectionTitle/SectionTitle";

// Define the type for each achievement item
type Achievement = {
  metric: string;
  value: string;
  prefix?: string;
  postfix?: string;
};

// Define the type for the achievements list
const achievementsList: Achievement[] = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

// Dynamic import for AnimatedNumbers with SSR disabled
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const AchievementsTwo: React.FC = () => {
  return (
    <section id="atchievements" className="">
      
        <div className="bg-slate-100 shadow-sm dark:bg-slate-800 rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {achievementsList.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 bg-blue-400 shadow-lg  py-3 px-3 rounded-lg"
            >
              <h2 className="text-white dark:text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(
                    achievement.value.replace(/,/g, ""),
                  )}
                  locale="en-US"
                  className="text-white dark:text-white text-4xl font-bold"
                />
                {achievement.postfix}
              </h2>
              <p className="text-white dark:text-white text-base pt-2">
                {achievement.metric}
              </p>
            </div>
          ))}
        </div>
      
    </section>
  );
};

export default AchievementsTwo;
