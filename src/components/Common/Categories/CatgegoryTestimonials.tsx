"use client";
import React from "react";
import { TypeTestimonial } from "../../../types/testimonial";
import Image from "next/image";
import patternImg from "../../../../public/images/partners/obasity_icon.png";
import IMG from "../../../../public/images/Teamework/img.jpg";
import SocialLinks from "../SocialLinks/SocialLinks";

// Named function for the component
function CategoryTestimonials({
  id,
  clientName,
  designation,
  company,
  feedback,
  rating,
}: TypeTestimonial) {
  return (
    <section  className="flex flex-col w-full lg:px-20 mx-auto" aria-label="Testimonial Section">
      <div className="my-6 px-10 hover:grayscale-0 shadow-xl group transition-all rounded-3xl cursor-pointer text-gray-400 bg-slate-50 hover:bg-white dark:hover:bg-white hover:text-black duration-300 hover:shadow-one dark:bg-dark dark:shadow-2xl dark:hover:shadow-gray-dark">
        <div className="container flex flex-col md:flex-row relative z-[10] items-center gap-4 md:gap-6 pt-5 px-4 md:px-10">
          {/* Pattern Image */}
          <div className="absolute top-14 z-[-1] hidden md:block">
            <Image
              src={patternImg}
              alt="pattern"
              className="m-auto inline-block w-[64px] sm:w-[80px] md:w-[80px] lg:w-[120px] text-blue-500 dark:filter-dark"
              width={120}
              height={120}
              loading="lazy" // Lazy loading for offscreen images
            />
          </div>

          {/* User Image */}
          <div className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[120px] rounded-full bg-white border-[4px] border-orangeMain/25 mt-2 mx-auto md:mx-0">
            <Image
              src={IMG} // Using provided or fallback image
              alt={`${clientName}'s testimonial`}
              className="w-full rounded-full"
              width={120}
              height={120}
              loading="lazy" // Lazy loading for offscreen images
              placeholder="blur" // Adding blur placeholder
            />
          </div>

          {/* Headings */}
          <div className="text-center md:text-left">
            <h3 className="text-lightblack text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold mt-4 md:mt-5">
              {clientName}
            </h3>
            <h4 className="text-lightblack text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
              {designation}
            </h4>
            <div className="flex items-center gap-3">
              <div className="w-[30px] sm:w-[30px] md:w-[40px] lg:w-[40px] rounded-full bg-white border-[2px] border-orangeMain/25 mt-2 mx-auto md:mx-0">
                <Image
                  src={IMG} // Company image
                  alt={`${company} logo`}
                  className="w-full rounded-full"
                  width={40}
                  height={40}
                  loading="lazy" // Lazy loading for offscreen images
                  placeholder="blur" // Adding blur placeholder
                />
              </div>
              <span>{company}</span>
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <div className="container pb-8 px-4 md:px-16">
          <span className="text-[18px] md:text-[20px] lg:text-[25px] text-orangeMain font-semibold">
            ,,
          </span>

          <div className="pl-4 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] font-semibold">
            {feedback}
          </div>

          <span className="text-[18px] md:text-[20px] lg:text-[25px] flex justify-end text-orangeMain font-semibold">
            ,,
          </span>

          <div className="">
            <h2 className="">Rating: {rating} / 5</h2>
            <div className="pt-4">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(CategoryTestimonials);
