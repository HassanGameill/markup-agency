"use client";

import Link from "next/link";
import Image from "next/image";
import ModalVideo from "react-modal-video";

import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";

import DealImg from "../../../../public/images/hero/banner1-2.png";
import { HiOutlinePhone } from "react-icons/hi2";
import { useLocale, useTranslations } from "next-intl";
import Lottie from "lottie-react";
import videoClick from "../../../../public/lotyFiles/videoClick.json";

const BlogsHero = () => {
  const [isOpen, setOpen] = useState(false);

  // Content translation
 

  const local = useLocale();

  // pop Up Contect

  let [isOpens, setIsOpens] = useState(false);

  return (
    <>
      <section
        id="home"
        className={`bg-orange-50 relative z-10 overflow-hidden  pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px] `}
      >

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              Welcome In blogs Page
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsHero;
