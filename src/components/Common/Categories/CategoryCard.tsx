"use client";
import React, { useState } from "react";
import Image from "next/image";
import DialogPopUp from "@/components/Common/Dialog-PopUp/PopUp";
import { useLocale } from "next-intl";

interface ItemsDataProps {
  id: string;
  nameEn: string;
  nameAr: string;
  imageUrl: string;
}

function CategoryCard(itemData: ItemsDataProps) {
  const { id, nameEn, nameAr, imageUrl} = itemData;
  const locale = useLocale()

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
        className={`flex justify-center   w-[135px] sm:w-[180px] md:w-[180px] bg-white    h-[140px] md:h-[190px] lg:w-[180px] xl:w-[210px] my-6 hover:grayscale-0  shadow-md rounded-3xl cursor-pointer text-gray-400    hover:bg-white dark:hover:bg-white hover:text-black  shadow-[#222]/20   duration-300 hover:shadow-one  dark:bg-slate-800  dark:shadow-lg dark:shadow-blue-950  dark:hover:shadow-gray-dark `}
      >
        <div className={`my-3 pt-2 text-center `}>
          <div className="relative ">
            <Image
              src={imageUrl}
              alt="user-image"
              width={300}
              height={300}
              className="m-auto inline-block w-[70px] md:w-[120px] bg-[#FCFAEE] dark:bg-white shadow-lg dark:shadow-2xl rounded-full dark:p-1"
            />
          </div>
          <div className="">
            <h3 className="text-sm pt-3 md:pt-2 md:text-md lg:text-lg font-semibold">
              {locale === "en" ? nameEn : nameAr}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
