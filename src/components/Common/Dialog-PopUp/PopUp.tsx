"use client"
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { HiMiniShieldCheck, HiXMark } from "react-icons/hi2";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  data: {
    nameEn: string;
    nameAr: string;
    imageUrl: string;
    partnerOneInfo: {
      titleEn: string;
      titleAr: string;
      subtitleEn: string;
      subtitleAr: string;
      description: string;
    }[];
  } | null;
}

const DialogPopUp: React.FC<DialogProps> = ({ isOpen, onClose, data }) => {
  const locale = useLocale();
  const listItems = data?.partnerOneInfo || [];
  const dir = locale === "ar" ? "rtl" : "ltr";

  // Subtle background colors for list items
  const bgColors = [
    "bg-blue-50 dark:bg-blue-900",
    "bg-green-50 dark:bg-green-900",
    "bg-purple-50 dark:bg-purple-900",
    "bg-orange-50 dark:bg-orange-900",
    "bg-pink-50 dark:bg-pink-900",
  ];

  if (!data) {
    return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-[9999990]">
        <div className="fixed inset-0 bg-black/30 dark:bg-white/30" aria-hidden="true" />
        <div className="fixed inset-0 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="mx-auto max-w-sm rounded-lg bg-white dark:bg-[#1A1F2B] p-6 shadow-xl">
              <p className="text-lightblack dark:text-gray-200">No data available.</p>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    );
  }

  const { nameEn, nameAr, imageUrl } = data;

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-[9999990]"
    >
      {/* Backdrop with transition */}
      <div
        className="fixed inset-0 bg-black/30 dark:bg-white/30 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Full-screen scrollable container */}
      <div className="fixed inset-0 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          {/* Dialog panel with animation */}
          <Dialog.Panel
            className="mx-auto w-full max-w-md rounded-lg bg-white dark:bg-[#1A1F2B] shadow-2xl transform transition-all duration-300 ease-out"
            style={{
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button
                aria-label="Close"
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={onClose}
              >
                <HiXMark className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            {/* Content */}
            <div dir={dir} className={`${locale === "ar" ? "__rtl_lang " : ""} p-6`}>
              {/* Header with image and name */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-blue-500 dark:border-blue-700">
                  <Image
                    src={imageUrl}
                    alt={nameEn}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {locale === "en" ? nameEn : nameAr}
                </h3>
              </div>

              {/* List of titles and descriptions */}
              <div className="space-y-4">
                {listItems.length > 0 ? (
                  listItems.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg shadow-sm ${
                        bgColors[index % bgColors.length]
                      }`}
                    >
                      <h5 className="text-sm font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <HiMiniShieldCheck className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                        {locale === "en" ? item.titleEn : item.titleAr}
                      </h5>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                        {locale === "en" ? item.subtitleEn : item.subtitleAr}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    No additional information available.
                  </p>
                )}
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogPopUp;