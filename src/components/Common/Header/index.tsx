"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ThemeToggler from "./ThemeToggler";
import lightLogo from "../../../../public/images/logo/light-logo.png";
import darkLogo from "../../../../public/images/logo/dark-logo.png";
import LocaleSwitcher from "@/components/LocalSwitcher/local-switcher";
import Nav from "./Nav";
import { motion, AnimatePresence } from "framer-motion";

import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  // Navbar toggle state
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Toggle navbar visibility
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // Dark mode handling
  const { theme } = useTheme();

  return (
    <header
      dir="ltr"
      className={`header left-0 top-0 z-40 flex w-full items-center  ${
        sticky
          ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] py-3 lg:py-0 bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : "absolute bg-transparent shadow-sm dark:shadow-md py-2"
      }`}
    >
      <div className="container">
        <div className="relative -mx-2 flex items-center justify-between">
          {/* Logo */}
          <div className="w-[100px] md:w-[120px] lg:w-[150px] ">
            <Link
              href="/"
              className="inline-block"
              aria-label="Markup Agency Home"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                  className=" bg-white dark:bg-gray-900 rounded-2xl px-4 py-2 shadow-sm dark:shadow-gray-900/50 flex items-center justify-center border border-gray-200 dark:border-gray-800/50"
                  whileHover={{
                    y: -5,
                    rotate: 2,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                >
                  <Image
                    src={theme === "dark" ? darkLogo : lightLogo}
                    alt="Markup Agency Logo"
                    className="w-full transition-all duration-700 hover:rotate-6 hover:scale-105"
                    width={112}
                    height={112}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </Link>
          </div>

          {/* Nav component - controlled by navbarOpen */}
          <Nav
            navbarOpen={navbarOpen}
            navbarToggleHandler={navbarToggleHandler}
          />

          {/* Menu toggler & Locale Switch */}
          <div className="flex items-center gap-1">
            <LocaleSwitcher />
            <ThemeToggler />
            {/* <HiBars3
              onClick={navbarToggleHandler}
              className="text-[33px] cursor-pointer lg:hidden"
            /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
