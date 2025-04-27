import { Metadata } from 'next';
import React from 'react';

interface BlogsProps {
  params: { locale: string };
}

export const generateMetadata = ({ params: { locale } }: BlogsProps): Metadata => {
  const metadata = {
    en: {
      title: 'Our Partners - Marketing Solutions',
      description: 'Discover our partners who empower us with exceptional marketing solutions. Learn how we collaborate for success.',
      keywords: 'partners, marketing, sales, advertising, business solutions',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'Our Partners - Marketing Solutions',
        description: 'Explore our trusted partners in marketing.',
      },
      openGraph: {
        title: 'Our Partners - Marketing Solutions',
        description: 'Discover our partners who empower us with exceptional marketing solutions.',
        url: 'https://markup.vip/our-clients/en',
        type: 'website',
        image: '/path-to-your-image.jpg', // Add an image for OpenGraph
      },
    },
    ar: {
      title: 'شركائنا - حلول التسويق',
      description: 'اكتشف شركائنا الذين يساعدوننا في تقديم حلول تسويقية مميزة.',
      keywords: 'شركاء، تسويق، مبيعات، إعلانات، حلول الأعمال',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'شركائنا - حلول التسويق',
        description: 'اكتشف شركائنا في التسويق.',
      },
      openGraph: {
        title: 'شركائنا - حلول التسويق',
        description: 'اكتشف شركائنا الذين يساعدوننا في تقديم حلول تسويقية مميزة.',
        url: 'https://markup.vip/our-clients/ar',
        type: 'website',
        image: '/path-to-your-image-ar.jpg', // Add an image for OpenGraph
      },
    },
  };

  return locale === 'ar' ? metadata.ar : metadata.en;
};

function OurClients({ params }: BlogsProps) {
  const { locale } = params;

  return (
    <section
      id="our-clients"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark"
    >
      <div className="container">
        <h1 className="text-2xl font-bold mb-4">{locale === 'ar' ? 'شركاؤنا' : 'Our Partners'}</h1>
        <p className="text-lg">
          {locale === 'ar'
            ? 'اكتشف شركائنا الذين يساعدوننا في تقديم حلول تسويقية مميزة.'
            : 'Discover our trusted partners who empower us with exceptional marketing solutions.'}
        </p>

        {/* Clients List */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">
            {locale === 'ar' ? 'شركاؤنا' : 'Our Partners'}
          </h2>
          <ul className="list-disc list-inside">
            <li>Partner 1</li>
            <li>Partner 2</li>
            <li>Partner 3</li>
            <li>Partner 4</li>
            <li>Partner 5</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
