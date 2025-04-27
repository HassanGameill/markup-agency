"use client";
import { Link, usePathname } from "@/navigation";
import React, { useEffect, useState, useCallback } from "react";
import { SiPkgsrc } from "react-icons/si";
import {
  IoBagCheckOutline,
  IoHomeOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { HiOutlineChartPie } from "react-icons/hi";
import { RiNotification3Line } from "react-icons/ri";
import Image from "next/image";
import logoLight from "../../../../public/logos/markup-logo-1.png";
import logoDark from "../../../../public/logos/markup-logo-2.png";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { PiUsersThreeLight, PiUsersThreeThin } from "react-icons/pi";
import { BsQuestionSquare } from "react-icons/bs";
import { useTheme } from "next-themes";
import { BiBookReader } from "react-icons/bi";

interface MenuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  notification?: boolean;
}

const menuItems: MenuItem[] = [
  {
    name: "Home",
    path: "#",
    icon: (
      <IoHomeOutline className="group-hover:scale-110 transition-transform" />
    ),
  },
  {
    name: "Services",
    path: "#services",
    icon: (
      <IoBagCheckOutline className="group-hover:scale-110 transition-transform" />
    ),
  },
  {
    name: "Partners",
    path: "#partners",
    icon: (
      <PiUsersThreeLight className="group-hover:scale-110 transition-transform" />
    ),
    notification: true,
  },
  {
    name: "Questions",
    path: "#questions",
    icon: (
      <BsQuestionSquare className="group-hover:scale-110 transition-transform" />
    ),
  },
  {
    name: "Blogs",
    path: "#news",
    icon: (
      <MdOutlineVideoLibrary className="group-hover:scale-110 transition-transform" />
    ),
  },
  {
    name: "About",
    path: "#about",
    icon: (
      <BiBookReader className="group-hover:scale-110 transition-transform" />
    ),
  },
];

// Throttle function to limit how often a function can be called
const throttle = (func: (...args: any[]) => void, limit: number) => {
  let lastFunc: NodeJS.Timeout;
  let lastRan: number;
  
  return function(this: any, ...args: any[]) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(this, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

function MobileHeader() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const { theme } = useTheme();

  // Memoize the scroll handler with useCallback
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Only update state if scroll position changes significantly (10px threshold)
    if (Math.abs(currentScrollY - lastScrollY) > 10) {
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    // Throttle the scroll handler to improve performance
    const throttledScrollHandler = throttle(handleScroll, 100);
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [handleScroll]);

  return (
    <header
      dir="rtl"
      className={`lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[99%] z-[999] transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      style={{
        // Will-change hint for browser optimization
        willChange: 'transform, opacity',
        // Backface visibility for hardware acceleration
        backfaceVisibility: 'hidden',
      }}
    >
      <nav 
        className="relative bg-white/90 dark:bg-gray-900 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 p-1.5"
        // Reduce repaints by promoting to own layer
        style={{ transform: 'translateZ(0)' }}
      >
        <div className="flex justify-around items-center relative">
          {menuItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className={`group relative p-2 rounded-xl transition-all duration-200 ${
                pathname === item.path
                  ? "text-primary dark:text-primary"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
              onMouseEnter={() => setActiveHover(item.path)}
              onTouchStart={() => setActiveHover(item.path)} // Add touch support
              onTouchEnd={() => setActiveHover(null)}
              onMouseLeave={() => setActiveHover(null)}
              aria-label={item.name}
            >
              <div className="relative flex flex-col items-center">
                <span className="text-2xl relative">
                  {item.icon}
                  {item.notification && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-gray-800" />
                  )}
                </span>
                <span className="text-[0.65rem] mt-1 font-medium tracking-tight">
                  {item.name}
                </span>
              </div>

              {/* Animated active indicator */}
              <div
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-primary rounded-full transition-all duration-300 ${
                  pathname === item.path
                    ? "scale-100 opacity-100"
                    : activeHover === item.path
                      ? "scale-50 opacity-50"
                      : "scale-0 opacity-0"
                }`}
                aria-hidden="true"
              />
            </Link>
          ))}
        </div>

        {/* Floating Logo (Center) */}
        <Link
          href="/"
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-900 rounded-full shadow-lg border-2 dark:border-white border-blue-700 flex items-center justify-center transform hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 will-change-transform"
          aria-label="Home"
        >
          <Image
            src={theme === "dark" ? logoDark : logoLight}
            alt="Logo"
            width={236}
            height={236}
            className="object-contain"
            priority // Preload important image
          />
        </Link>
      </nav>
    </header>
  );
}

export default MobileHeader;