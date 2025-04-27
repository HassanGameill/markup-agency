"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState, useRef, useEffect } from "react";
import { useLocale } from "next-intl";
import { HiMiniShieldCheck, HiXMark, HiOutlineChevronRight, HiOutlineInformationCircle } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    nameEn: string;
    nameAr: string;
    imageUrl: string;
    servicesItem: {
      titleEn: string;
      titleAr: string;
      subtitleEn: string;
      subtitleAr: string;
      description: string;
      imageUrl: string;
      features?: string[];
    }[];
  } | null;
}

const PopupServices: React.FC<DialogProps> = ({ isOpen, onClose, data }) => {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const dir = isArabic ? "rtl" : "ltr";
  const listItems = data?.servicesItem || [];
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Enhanced color system with better visual hierarchy
  const serviceVariants = [
    { 
      bg: "bg-blue-50/80 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800/40",
      text: "text-blue-600 dark:text-blue-400",
      hover: "hover:bg-blue-100/60 dark:hover:bg-blue-800/30",
      iconBg: "bg-blue-100/60 dark:bg-blue-800/30",
      accent: "bg-blue-500/10 dark:bg-blue-400/10"
    },
    { 
      bg: "bg-purple-50/80 dark:bg-purple-900/20", 
      border: "border-purple-200 dark:border-purple-800/40", 
      text: "text-purple-600 dark:text-purple-400",
      hover: "hover:bg-purple-100/60 dark:hover:bg-purple-800/30",
      iconBg: "bg-purple-100/60 dark:bg-purple-800/30",
      accent: "bg-purple-500/10 dark:bg-purple-400/10"
    },
    { 
      bg: "bg-emerald-50/80 dark:bg-emerald-900/20", 
      border: "border-emerald-200 dark:border-emerald-800/40", 
      text: "text-emerald-600 dark:text-emerald-400",
      hover: "hover:bg-emerald-100/60 dark:hover:bg-emerald-800/30",
      iconBg: "bg-emerald-100/60 dark:bg-emerald-800/30",
      accent: "bg-emerald-500/10 dark:bg-emerald-400/10"
    },
    { 
      bg: "bg-amber-50/80 dark:bg-amber-900/20", 
      border: "border-amber-200 dark:border-amber-800/40", 
      text: "text-amber-600 dark:text-amber-400",
      hover: "hover:bg-amber-100/60 dark:hover:bg-amber-800/30",
      iconBg: "bg-amber-100/60 dark:bg-amber-800/30",
      accent: "bg-amber-500/10 dark:bg-amber-400/10"
    }
  ];

  const toggleServiceDetail = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  // Auto-scroll to expanded content
  useEffect(() => {
    if (selectedService !== null && contentRef.current) {
      const element = document.getElementById(`service-${selectedService}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [selectedService]);

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="fixed inset-0 z-[9999990] flex items-center justify-center p-4 sm:p-6"
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        initialFocus={contentRef}
      >
        {/* Premium glass morphism backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-pink-500/10 backdrop-blur-[5px]" />
        </Transition.Child>

        {/* Elevated modal panel */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95 translate-y-4"
          enterTo="opacity-100 scale-100 translate-y-0"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100 translate-y-0"
          leaveTo="opacity-0 scale-95 translate-y-4"
        >
          <Dialog.Panel 
            className="relative w-full max-w-2xl bg-white/95 dark:bg-gray-900/95 rounded-2xl shadow-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/40 flex flex-col backdrop-blur-[6px]"
            style={{ 
              maxHeight: "90vh",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.15)"
            }}
          >
            {/* Sticky premium header */}
            <div className="sticky top-0 z-20 bg-gradient-to-r from-indigo-600 to-purple-600 p-6 pt-5 pb-4 border-b border-white/10 dark:border-white/5">
              <div className="flex items-center gap-4">
                <motion.div 
                  className="w-14 h-14 rounded-xl overflow-hidden border-2 border-white/20 shadow-sm flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={data?.imageUrl || "/default-service.svg"}
                    alt={data ? (isArabic ? data.nameAr : data.nameEn) : "Service"}
                    width={156}
                    height={156}
                    className="object-cover w-full h-full"
                    priority
                  />
                </motion.div>
                <div className="flex-1 min-w-0">
                  <Dialog.Title className="text-xl font-bold text-white truncate">
                    {data ? (isArabic ? data.nameAr : data.nameEn) : "Service Details"}
                  </Dialog.Title>
                  {listItems.length > 0 && (
                    <p className="text-sm text-indigo-100/90 mt-1 flex items-center gap-1.5">
                      <HiOutlineInformationCircle className="flex-shrink-0" />
                      {listItems.length} {isArabic ? "خدمات متاحة" : "services available"}
                    </p>
                  )}
                </div>
                {/* Premium close button */}
                <motion.button
                  onClick={onClose}
                  aria-label="Close"
                  className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50 border border-white/20 dark:border-gray-700"
                  whileHover={{ scale: 0.95 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <HiXMark className="text-lg text-gray-700 dark:text-gray-300" />
                </motion.button>
              </div>
            </div>

            {/* Ultra-smooth scrollable content */}
            <div 
              ref={contentRef}
              className="flex-1 overflow-y-auto custom-scrollbar"
            >
              <div className="p-5 bg-white/50 dark:bg-gray-900/50">
                {listItems.length > 0 ? (
                  <div className="grid gap-3">
                    {listItems.map((item, index) => {
                      const variant = serviceVariants[index % serviceVariants.length];
                      return (
                        <motion.div 
                          key={index}
                          id={`service-${index}`}
                          className={`rounded-xl border ${variant.border} ${variant.bg} ${variant.hover} transition-all duration-200 ${selectedService === index ? 'ring-1 ring-indigo-500/30 shadow-sm' : 'hover:shadow-xs'}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <motion.button
                            onClick={() => toggleServiceDetail(index)}
                            className={`w-full p-4  flex items-center justify-between gap-4 focus:outline-none group  ${locale === "en" ? "text-left" : "text-right __rtl_lang"}`}
                            aria-expanded={selectedService === index}
                            whileHover={{ scale: 1.005 }}
                          >
                            <div className="flex items-start gap-4 flex-1 min-w-0">
                              {/* Animated icon container */}
                              <motion.div 
                                className={`mt-0.5 flex-shrink-0 ${variant.iconBg} rounded-lg p-2`}
                                whileHover={{ rotate: 5 }}
                              >
                                <HiMiniShieldCheck className={`text-xl ${variant.text}`} />
                              </motion.div>
                              
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-1">
                                  {isArabic ? item.titleAr : item.titleEn}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-1">
                                  {isArabic ? item.subtitleAr : item.subtitleEn}
                                </p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                              {item.imageUrl && (
                                <motion.div 
                                  className="hidden lg:block w-12 h-12 rounded-lg overflow-hidden border border-gray-200/80 dark:border-gray-700/50 flex-shrink-0 relative"
                                >
                                  <Image
                                    src={item.imageUrl}
                                    alt={isArabic ? item.titleAr : item.titleEn}
                                    fill
                                    className="object-cover"
                                    sizes="248px"
                                  />
                                </motion.div>
                              )}
                              <motion.div
                                animate={{ rotate: selectedService === index ? 90 : 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                              >
                                <HiOutlineChevronRight 
                                  className={`flex-shrink-0 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200`} 
                                />
                              </motion.div>
                            </div>
                          </motion.button>
                          
                          {/* Premium expanded content */}
                          <AnimatePresence>
                            {selectedService === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 pb-4 -mt-1">
                                  <div className="pt-3 border-t border-gray-200/50 dark:border-gray-700/30">
                                    <div className={`text-sm text-gray-700 dark:text-gray-300 p-3 rounded-lg ${variant.accent}`}>
                                      {item.subtitleEn ? (
                                        <p className="whitespace-pre-line">{item.subtitleEn}</p>
                                      ) : (
                                        <p className="text-gray-500 dark:text-gray-400 italic">
                                          {isArabic ? "لا توجد تفاصيل إضافية" : "No additional details provided"}
                                        </p>
                                      )}
                                    </div>

                                    {item.features && item.features.length > 0 && (
                                      <div className="mt-4">
                                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                                          {isArabic ? "المميزات الرئيسية" : "Key Features"}
                                        </h4>
                                        <ul className="space-y-2">
                                          {item.features.map((feature, i) => (
                                            <motion.li
                                              key={i}
                                              className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                                              initial={{ opacity: 0, x: -10 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{ delay: i * 0.1 }}
                                            >
                                              <span className={`mt-0.5 flex-shrink-0 ${variant.text}`}>
                                                <HiMiniShieldCheck className="text-sm" />
                                              </span>
                                              <span>{feature}</span>
                                            </motion.li>
                                          ))}
                                        </ul>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                ) : (
                  <motion.div 
                    className="text-center p-8 flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 mx-auto opacity-70 mb-4 text-indigo-200 dark:text-indigo-400/60">
                      <Image
                        src="/empty-state-illustration.svg"
                        alt="No data"
                        width={80}
                        height={80}
                        priority
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                      {isArabic ? "لا تتوفر خدمات" : "No services available"}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-xs">
                      {isArabic ? "لا توجد معلومات إضافية متاحة حاليًا" : "No additional information is currently available"}
                    </p>
                    <motion.button
                      onClick={onClose}
                      className="px-5 py-2.5 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isArabic ? "العودة" : "Go Back"}
                    </motion.button>
                  </motion.div>
                )}
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default PopupServices;