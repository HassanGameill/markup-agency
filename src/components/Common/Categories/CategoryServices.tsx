
"use client";
import React, { useState } from "react";
import { TCategory } from "../../../types/CategoryType";
import Image from "next/image";
import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";

function CategoryServices(itemData: TCategory) {
  const { id, heading, heading2, imgSrc} = itemData;

  // popup ........
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<any>(null);

  const handleCardClick = (data: any) => {
    setSelectedData(data);
    setIsOpen(true);
  };

  return (
    <>
      <DialogPopUp
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        data={selectedData}
      />

      <div
        onClick={() => handleCardClick(itemData)}
        className={`flex items-center justify-center  w-[160px]  h-[190px] sm:w-[175px]  sm:h-[195px]  md:w-[190px]  md:h-[230px]   lg:w-[250px] lg:h-[265px]  mx-auto  hover:grayscale-0  shadow-xl   rounded-3xl    cursor-pointer text-gray-400   bg-white hover:bg-white dark:hover:bg-white hover:text-black    duration-300 hover:shadow-one  dark:bg-dark dark:shadow-2xl my-6 dark:hover:shadow-gray-dark `}
      >
        <div className={`m-3 py-11 text-center md:my-10`}>
          <div className="relative ">
            <Image
              src={imgSrc}
              alt="user-image"
              width={100}
              height={0}
              className="m-auto inline-block "
            />
          </div>
          <div className="">
            <h3 className="text-lightblack text-md md:text-lg lg:text-xl  font-semibold pt-2">
              {heading}
            </h3>

          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryServices;
