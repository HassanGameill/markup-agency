
"use client";
import React, { useState } from "react";
import Image from "next/image";
import IMG from '../../../../public/images/Teamework/img.jpg';
import LogoLight from '../../../../public/logos/markup-logo-1.png';
import LogoDark from '../../../../public/logos/markup-logo-2.png';
import { Link } from "@/navigation";

interface TeameworkProps {
  id: string;
  nameEn?: string;
  nameAr?: string;
  imageUrl?: string;
  titleEn?: string;
  titleAr?: string;
  socialLinks?: {
    linkedIn?: string;
    twitter?: string;
    github?: string;
  };
  status?: 'online' | 'offline' | 'busy';
}

function CategoryCardTeamework(itemData: TeameworkProps) {
  const { id, nameEn, nameAr, titleEn, imageUrl, socialLinks, status = 'online' } = itemData;
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(imageUrl || IMG);

  const statusColors = {
    online: 'bg-green-400',
    offline: 'bg-gray-400',
    busy: 'bg-yellow-400'
  };

  return (
    <div 
      className="relative w-full mx-auto my-4 sm:my-6 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <button
        className={`
          relative flex flex-col items-center justify-center 
          bg-dark  dark:bg-gray-800 rounded-2xl sm:rounded-3xl
          overflow-hidden border border-dark-100 mx-auto dark:border-gray-700
          w-[150px]  h-[195px]  sm:w-[195px]  sm:h-[195px] md:w-[220px]  md:h-[230px]   lg:w-[240px] lg:h-[275px] xl:w-[230px] xl:h-[275px] xxl:w-[250px]
          grayscale hover:grayscale-0  dark:shadow-three dark:hover:shadow-gray-dark hover:bg-white text-gray-400 hover:text-slate-900 dark:hover:text-white
          transition-all duration-300 ease-out cursor-pointer
          ${isHovered ? 'shadow-lg sm:shadow-xl -translate-y-1 sm:-translate-y-2 scale-[1.01] sm:scale-[1.02]' : 'shadow-sm sm:shadow-md'}
        `}
        aria-label={`View ${nameEn || 'team member'} details`}
      >
        {/* Background Elements */}
        <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-400/10 via-purple-500/10 to-pink-500/10 opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-500`}></div>
        <div className="absolute inset-0 bg-[url('/images/dots-pattern.svg')] opacity-[3%] dark:opacity-[1%]"></div>

        {/* Profile Image */}
        <div className="relative w-full   md:h-60 overflow-hidden  shadow-md">
          <div className={`w-full h-full transition-all duration-500 ease-out 
            ${isHovered ? 'scale-105 grayscale-0' : 'scale-100 grayscale-[10%]'}`}>
            <figure className="relative overflow-hidden ">
          <Image
            src={imageUrl || IMG}
            alt={nameEn || "Team member image"}
            width={200}
            height={200}
            className="m-auto inline-block  w-full  duration-100"
          />
        </figure>
          </div>
          
          {/* Status Indicator */}
          <div className="group relative">
            <div className={`absolute bottom-2 right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 ${statusColors[status]} rounded-full border-2 border-white dark:border-gray-800 ${status === 'online' ? 'animate-pulse' : ''}`}></div>
            <span className="absolute bottom-0 right-6 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity capitalize whitespace-nowrap">
              {status}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="text-center px-4 sm:px-6 pt-4 sm:pt-4 w-full space-y-1 sm:space-y-2">
          <h3 className="text-sm sm:text-md font-bold   tracking-tight leading-tight">
            {nameEn}
          </h3>
          <h4 className="text-xs  font-medium text-gray-600 dark:text-gray-300 line-clamp-2">
            {titleEn}
          </h4>
          
          {/* Divider */}
          <div className={`w-12 sm:w-16 h-0.5 bg-blue-400 mx-auto transition-all duration-400 ${isHovered ? 'w-16 sm:w-24 opacity-100' : 'opacity-60'}`}></div>

          {/* Social Links */}
          <div className="flex justify-center space-x-2 sm:space-x-3 pt-1 sm:pt-2">
            {socialLinks?.linkedIn && (
              <a 
                href={socialLinks.linkedIn} 
                className={`
                  w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-50 dark:bg-gray-700
                  text-blue-600 dark:text-blue-400 flex items-center justify-center
                  transition-all duration-300 ease-out
                  ${isHovered ? 'opacity-100 translate-y-0 hover:scale-110' : 'opacity-0 translate-y-3'}
                `}
                style={{ transitionDelay: isHovered ? '100ms' : '0ms' }}
                aria-label="LinkedIn profile"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            )}
            {/* Other social links with similar structure */}
          </div>
        </div>

        {/* Floating Action Button */}
        <button 
          className={`
            absolute top-3 right-3 sm:top-4 sm:right-4
            w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-dark 
            shadow-sm sm:shadow-lg flex items-center justify-center
            text-blue-500 border-2 border-blue-500 transition-all duration-300 ease-out
            ${isHovered ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'}
            hover:bg-slate-950 dark:hover:bg-slate-950 hover:text-blue-600
          `}
          aria-label="Quick contact"
        >
          <Image src={LogoDark}  alt="image" width={1400} height={1400}  className="w-[400px] "/>
        </button>
      </button>
    </div>
  );
}

export default React.memo(CategoryCardTeamework);