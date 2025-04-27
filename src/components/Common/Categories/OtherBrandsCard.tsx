"use client";
import React, { memo } from "react";
import Image from "next/image";

export interface ImageType {
  id: string;
  url: string;
}

interface OtherBrandsCardProps {
  id: string;
  nameEn: string;
  nameAr: string;
  partnerTwoImages: ImageType[];
  className?: string;
}

const OtherBrandsCard: React.FC<OtherBrandsCardProps> = memo(
  ({ id, nameEn, nameAr, partnerTwoImages, className = "" }) => {
    return (
      <div className="grid grid-cols-4 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-8 lg:px-8 pt-5 ">
        {partnerTwoImages.map((image) => (
          <div
            key={image.id}
            className={`flex items-center justify-center cursor-pointer text-gray-400 lg:mx-8  my-2 bg-white  
              w-[62px] h-[60px] sm:w-[90px] sm:h-[70px] md:w-[110px] md:h-[85px] lg:w-[100px] xl:w-[110px] shadow-blue-300 shadow-lg
               dark:shadow-blue-400 rounded-md 
              duration-300 hover:shadow-one hover:scale-110 transform transition-all ease-in-out hover:grayscale-0 ${className}`}
          >
            <Image
              src={image.url}
              alt={nameEn || nameAr || "Brand image"}
              width={300}
              height={300}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
        ))}
      </div>
    );
  },
);

OtherBrandsCard.displayName = "OtherBrandsCard";
export default OtherBrandsCard;
