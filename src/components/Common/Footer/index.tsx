"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaTwitter, 
  FaDribbble, 
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
  FaChevronRight
} from "react-icons/fa";
import { FaInstagram, FaX } from "react-icons/fa6";
import darklogo from "../../../../public/images/logo/light-logo.png";
import lightlogo from "../../../../public/images/logo/dark-logo.png";
import { useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";


const socialLinks = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/markup4Marketing",
    icon: <FaFacebookF className="text-current" size={14} />,
    bgColor: "bg-[#1877F2]",
    tooltip: "Follow us on Facebook",
    animation: { rotate: 10, scale: 1.1 }
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/markup4marketing?igsh=MTZxZzd0cXdwMXRzMQ==",
    icon: <FaInstagram className="text-current" size={14} />,
    bgColor: "bg-gradient-to-tr from-[#833AB4] via-[#C13584] to-[#E1306C]",
    tooltip: "Follow us on Instagram",
    animation: { rotate: -10, scale: 1.1 }
  },
  {
    name: "Twitter",
    link: "https://x.com/i/flow/login?redirect_after_login=%2FMarkup4market",
    icon: <FaX className="text-current" size={14} />,
    bgColor: "bg-[#1DA1F2]",
    tooltip: "Follow us on Twitter",
    animation: { y: -5 }
  },
  {
    name: "Dribbble",
    link: "https://markup.vip",
    icon: <FaDribbble className="text-current" size={14} />,
    bgColor: "bg-[#EA4C89]",
    tooltip: "View our designs",
    animation: { scale: 1.2 }
  },
  {
    name: "GitHub",
    link: "https://github.com/markupagency",
    icon: <FaGithub className="text-current" size={14} />,
    bgColor: "bg-[#181717] dark:bg-[#f0f0f0]",
    tooltip: "Explore our code",
    animation: { y: 3 }
  },
];

const footerContent = {
  description: {
    en: "We craft digital experiences that inspire, engage, and convert. Let's build something extraordinary together.",
    ar: "نصنع تجارب رقمية تلهم وتجذب وتحول. لنبني شيئًا استثنائيًا معًا."
  },
  links: [
    { 
      en: "Services", 
      ar: "خدماتنا",
      href: "/services"
    },
    { 
      en: "Case Studies", 
      ar: "دراسات الحالة",
      href: "/work"
    },
    { 
      en: "About Us", 
      ar: "من نحن",
      href: "/about"
    },
    { 
      en: "Insights", 
      ar: "رؤى",
      href: "/blog"
    },
    { 
      en: "Careers", 
      ar: "وظائف",
      href: "/careers"
    }
  ],
  services: [
    { 
      en: "Web Design", 
      ar: "تصميم المواقع",
      href: "/services/web-design"
    },
    { 
      en: "App Development", 
      ar: "تطوير التطبيقات",
      href: "/services/app-development"
    },
    { 
      en: "Brand Strategy", 
      ar: "استراتيجية العلامة",
      href: "/services/brand-strategy"
    },
    { 
      en: "Digital Marketing", 
      ar: "التسويق الرقمي",
      href: "/services/digital-marketing"
    },
    { 
      en: "UI/UX Design", 
      ar: "تصميم واجهة المستخدم",
      href: "/services/ui-ux"
    }
  ],
  contact: {
    email: "hello@markupagency.com",
    phone: "https://wa.me/+201015882008",
    address: {
      en: "شارع اللبيني الرئيسي أعلى ماكدونالدز - الهرم, Giza, Egyp",
      ar: "شارع اللبيني الرئيسي أعلى ماكدونالدز - الهرم, Giza, Egyp"
    },
    hours: {
      en: "Mon-Fri: 9AM - 6PM",
      ar: "من الاثنين إلى الجمعة: 9 صباحًا - 6 مساءً"
    }
  }
};

const Footer = () => {
  const { theme, resolvedTheme } = useTheme();
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const hoverVariants = {
    hover: { 
      y: -4,
      transition: { 
        type: "spring", 
        stiffness: 400,
        damping: 10
      } 
    },
    tap: { 
      scale: 0.96 
    }
  };

  const linkHover = {
    hover: {
      x: locale === "ar" ? -6 : 6,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <footer
      dir={locale === "ar" ? "rtl" : "ltr"}
      className="relative z-10 bg-white dark:bg-slate-800 border-t border-gray-100 dark:border-gray-800/50"
    >
      

      <div className="container px-6 mx-auto relative">
        {/* Main Footer Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-16 py-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={containerVariants}
        >
          
          {/* Brand Column */}
          <motion.div 
            variants={itemVariants}
            className="space-y-8 xl:col-span-2"
          >
            {/* Animated Logo */}
            <Link href="/" className="inline-block" aria-label="Markup Agency Home">
              <AnimatePresence mode="wait">
                <motion.div
                  key={resolvedTheme}
                  initial={{ opacity: 0, rotate: -5 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                  className="w-28 h-28 bg-white dark:bg-gray-900 rounded-2xl p-3 shadow-xl dark:shadow-gray-900/50 flex items-center justify-center border border-gray-200 dark:border-gray-800/50"
                  whileHover={{ 
                    y: -5,
                    rotate: 2,
                    transition: { type: "spring", stiffness: 300 } 
                  }}
                >
                  <Image
                    src={resolvedTheme === "dark" ? lightlogo : darklogo}
                    alt="Markup Agency Logo"
                    className="w-full transition-all duration-700 hover:rotate-6 hover:scale-105"
                    width={112}
                    height={112}
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </Link>
            
            {/* Agency Description */}
            <motion.p 
              className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg max-w-md"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              {locale === "en" 
                ? footerContent.description.en 
                : footerContent.description.ar}
            </motion.p>
            
            {/* Newsletter Form */}
            <motion.div 
              className="space-y-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 rtl:mr-0 rtl:ml-2"></span>
                {locale === "en" ? "Stay Updated" : "ابق على اطلاع"}
              </h4>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex space-x-3 rtl:space-x-reverse"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((social) => (
                
                  // eslint-disable-next-line react/jsx-key
                  <motion.a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-all duration-300 ${social.bgColor} shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-800/50`}
                    variants={hoverVariants}
                    whileHover="hover"
                    whileTap="tap"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    whileFocus="hover"
                  >
                    <motion.div whileHover={social.animation}>
                      {social.icon}
                    </motion.div>
                  </motion.a>
              
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
              <span className="w-2.5 h-2.5 bg-primary rounded-full mr-3 rtl:mr-0 rtl:ml-3"></span>
              {locale === "en" ? "Explore" : "اكتشف"}
            </h3>
            <ul className="space-y-4">
              {footerContent.links.map((link) => (
                <motion.li 
                  key={link.en}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 group text-base font-medium"
                  >
                    <motion.span 
                      className="mr-3 rtl:mr-0 rtl:ml-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      variants={linkHover}
                    >
                      <FaChevronRight size={10} className="rtl:rotate-180" />
                    </motion.span>
                    {locale === "en" ? link.en : link.ar}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
              <span className="w-2.5 h-2.5 bg-secondary rounded-full mr-3 rtl:mr-0 rtl:ml-3"></span>
              {locale === "en" ? "Services" : "الخدمات"}
            </h3>
            <ul className="space-y-4">
              {footerContent.services.map((service) => (
                <motion.li 
                  key={service.en}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <Link
                    href={service.href}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-secondary dark:hover:text-secondary transition-colors duration-300 group text-base font-medium"
                  >
                    <motion.span 
                      className="mr-3 rtl:mr-0 rtl:ml-3 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      variants={linkHover}
                    >
                      <FaChevronRight size={10} className="rtl:rotate-180" />
                    </motion.span>
                    {locale === "en" ? service.en : service.ar}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center">
              <span className="w-2.5 h-2.5 bg-tertiary rounded-full mr-3 rtl:mr-0 rtl:ml-3"></span>
              {locale === "en" ? "Contact" : "اتصل بنا"}
            </h3>
            <ul className="space-y-5">
              <motion.li 
                className="flex items-start"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="w-9 h-9 rounded-lg bg-primary-50 dark:bg-primary-900/10 flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 border border-primary-100 dark:border-primary-900/20">
                  <FaEnvelope className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {locale === "en" ? "Email" : "البريد الإلكتروني"}
                  </p>
                  <Link target="_blank"
                    href={`mailto:${footerContent.contact.email}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 font-medium text-base"
                  >
                    {footerContent.contact.email}
                  </Link>
                </div>
              </motion.li>

              <motion.li 
                className="flex items-start"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="w-9 h-9 rounded-lg bg-secondary-50 dark:bg-secondary-900/10 flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 border border-secondary-100 dark:border-secondary-900/20">
                  <FaPhoneAlt className="w-4 h-4 text-secondary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {locale === "en" ? "Phone" : "الهاتف"}
                  </p>
                  <a 
                    href={`tel:${footerContent.contact.phone.replace(/\D/g, '')}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors duration-300 font-medium text-base"
                  >
                    {footerContent.contact.phone}
                  </a>
                </div>
              </motion.li>

              <motion.li 
                className="flex items-start"
                variants={itemVariants}
                whileHover="hover"
              >
                <div className="w-9 h-9 rounded-lg bg-tertiary-50 dark:bg-tertiary-900/10 flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3 mt-0.5 border border-tertiary-100 dark:border-tertiary-900/20">
                  <FaMapMarkerAlt className="w-4 h-4 text-tertiary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {locale === "en" ? "Address" : "العنوان"}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 font-medium text-base">
                    {locale === "en" 
                      ? footerContent.contact.address.en 
                      : footerContent.contact.address.ar}
                  </p>
                  {/* <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">
                    {footerContent.contact.hours[locale as 'en' | 'ar']}
                  </p> */}
                </div>
              </motion.li>

              <motion.li 
                variants={itemVariants}
                className="pt-2"
                whileHover={{ y: -2 }}
              >
                
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          className="border-t border-gray-200 dark:border-gray-800/50 py-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Markup Agency. {locale === "en" 
              ? "All rights reserved." 
              : "جميع الحقوق محفوظة."}
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href="/privacy"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
            >
              {locale === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
            >
              {locale === "en" ? "Terms of Service" : "شروط الخدمة"}
            </Link>
            <Link
              href="/cookies"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
            >
              {locale === "en" ? "Cookies" : "الكوكيز"}
            </Link>
            <Link
              href="/accessibility"
              className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-sm"
            >
              {locale === "en" ? "Accessibility" : "إمكانية الوصول"}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;