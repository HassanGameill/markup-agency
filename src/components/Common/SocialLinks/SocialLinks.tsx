import React from "react";
import Link from "next/link";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


interface socialLinks {
  link: string;
  width: number;
  iconLink: React.ReactNode;
}

const socialLinks: socialLinks[] = [
  {
    link: "https://www.facebook.com/markup4Marketing?mibextid=ZbWKwL",
    width: 10,
    iconLink: <FaFacebookF />,
  },

  {
    link: "https://www.instagram.com/markup4marketing?igsh=MTZxZzd0cXdwMXRzMQ==",
    width: 14,
    iconLink: <FaInstagram />,
  },

  {
    link: "https://wa.me/+201015882008",
    width: 14,
    iconLink: <FaWhatsapp />,
  },
];

function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((items, i) => (
        <Link href={items.link} key={i} target="_blank">
          <div className="bg-white text-slate-900 hover:text-white  h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center footer-icons hover:bg-orangeMain  hover:-translate-y-1 hover:transition-all duration-300">
            <span className="">{items.iconLink}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SocialLinks;