"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { BsBrightnessHigh } from "react-icons/bs";
import lightLogo from "../../../../public/images/logo/light-logo.png";
import darkLogo from "../../../../public/images/logo/dark-logo.png";
import styles from "../../../styles/Navbar.module.css";
import { useRouter, usePathname } from "next/navigation";
import { RiMoonClearLine } from "react-icons/ri";
import { useLocale, useTranslations } from "next-intl";
import menuData from "../Header/menuData";
import LocaleSwitcher from "@/components/LocalSwitcher/local-switcher";
import { ThemeToggle } from "./ToogleThems";

export default function NewHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [hamburgerState, setHamburger] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  // Translation and Locale Handling
  const t = useTranslations("Menu");
  const menuLinks = menuData(t);
  const locale = useLocale();

  // Toggle Hamburger Menu
  const toggleHamburger = () => setHamburger(!hamburgerState);

  // Throttle Function
  const throttle = (fn, delay) => {
    let lastCall = 0;
    return () => {
      const now = Date.now();
      if (now - lastCall >= delay) {
        fn();
        lastCall = now;
      }
    };
  };

  // Scroll Handler
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    throttle(() => {
      setIsScrolledDown(window.scrollY > scrollY);
      setScrollY(window.scrollY);
    }, 50),
    [scrollY],
  );

  // Attach & Detach Scroll Event
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Toggle Theme
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const isActive = (url) =>
    pathname === url
      ? `${styles["nav-link"]} ${styles["active"]}`
      : styles["nav-link"];

  return (
    <nav
      dir="ltr"
      className={`${styles["navbar"]} dark:bg-gray-dark ${isScrolledDown ? styles["active"] : ""}`}
    >
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo & Theme Toggle */}
        <div className={styles["nav-left"]}>
          <div className="w-[100px] md:w-[120px] lg:w-[150px] ">
            <Link href="/">
              <Image
                src={theme === "dark" ? darkLogo : lightLogo}
                alt="logo"
                width={0}
                height={0}
                className="w-full"
              />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div
          dir={locale === "en" ? "ltr" : "rtl"}
          className={`${styles["nav-list"]} ${hamburgerState ? styles["active"] : ""}`}
        >
          <div className={styles["nav-menu"]}>
            {menuLinks.map((nav, i) => (
              <Link
                key={i}
                className={`${isActive(nav.path)} text-black lg:text-[16.5px] dark:text-white`}
                href={nav.path}
                onClick={() => setHamburger(false)} // Close menu on navigation
              >
                {nav.title}
              </Link>
            ))}
            <div
              className="toggle-btn block mb-4 w-16 h-8 py-1 px-2 bg-blue-50 dark:bg-gray-700 rounded-full cursor-pointer lg:hidden"
              onClick={toggleTheme}
            >
              <div className="toggle-btn-circle w-6 h-6 flex justify-center items-center bg-blue-500 dark:bg-blue-200 rounded-full transition-transform ease-in-out duration-500 dark:translate-x-full">
                {theme === "light" ? (
                  <RiMoonClearLine className="text-black" />
                ) : (
                  <BsBrightnessHigh className="text-white" />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden lg:block">
          <LocaleSwitcher />


          </span>

          <ThemeToggle
            theme={theme}
            toggleTheme={toggleTheme}
            locale={locale}
          />
        </div>

        {/* Hamburger Menu Button */}
        <div
          className={`${styles["hamburger-btn"]} ${hamburgerState ? styles["active"] : ""}`}
          onClick={toggleHamburger}
          aria-label="Toggle menu"
          aria-expanded={hamburgerState}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}
