'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleLocale = () => {
    const nextLocale = currentLocale === 'ar' ? 'en' : 'ar';

    startTransition(() => {
      // Remove the current locale from the pathname
      const segments = pathname.split('/').filter(Boolean); // Split and filter empty segments
      if (segments[0] === currentLocale) {
        segments.shift(); // Remove the current locale prefix
      }

      // Construct the new pathname with the next locale
      const newPathname = `/${nextLocale}/${segments.join('/')}`;
      const queryString = searchParams.toString();
      const newUrl = queryString ? `${newPathname}?${queryString}` : newPathname;

      router.replace(newUrl);
    });
  };

  const buttonLabel = currentLocale === 'ar' ? 'EN' : 'AR';

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className={`text-white p-1 rounded-md text-[11px] hover:opacity-45 ${
          currentLocale === 'en' ? 'bg-[#F6AA02] font-medium' : 'bg-blue-800'
        }`}
        onClick={toggleLocale}
        aria-pressed={isPending}
        disabled={isPending}
        aria-label="Toggle language"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
