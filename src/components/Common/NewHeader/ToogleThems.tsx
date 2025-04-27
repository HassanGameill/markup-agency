"use client";
import {  useState} from "react";
import { BsBrightnessHigh } from "react-icons/bs";

import { RiMoonClearLine } from "react-icons/ri";


const throttle = (fn, delay) => {
  let lastCall = 0;
  return (...args) => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      fn(...args);
      lastCall = now;
    }
  };
};

export const ThemeToggle = ({ theme, toggleTheme, locale }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const isRTL = locale === "ar";
  
  return (
    <div
      className="toggle-btn w-16 h-8 py-1 px-2 bg-blue-50 dark:bg-gray-700 rounded-full cursor-pointer hidden lg:block relative"
      onClick={toggleTheme}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className={`toggle-btn-circle w-6 h-6 flex justify-center items-center bg-orange-400 dark:bg-slate-800 rounded-full transition-transform ease-in-out duration-500 ${
          theme === "dark" ? (isRTL ? "-translate-x-full" : "translate-x-full") : ""
        }`}
      >
        {theme === "light" ? (
          <BsBrightnessHigh className="text-white" />
        ) : (
          <RiMoonClearLine className="text-black dark:text-white" />
        )}
      </div>
      
    </div>
  );
};