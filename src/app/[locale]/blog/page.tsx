import { Metadata } from 'next';
import React from 'react';

interface BlogsProps {
  params: { locale: string };
}

export const generateMetadata = ({ params: { locale } }: BlogsProps): Metadata => {
  const metadata = {
    en: {
      title: 'Blogs - Marketing Insights',
      description: 'Explore our blogs to learn about marketing strategies, sales techniques, paid advertising, and effective marketing campaigns.',
      keywords: 'blogs, marketing, sales, advertising, campaigns, insights',
      author: 'Your Name or Company',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'Blogs - Marketing Insights',
        description: 'Dive into our blogs for valuable insights on marketing and sales.',
      },
      openGraph: {
        title: 'Blogs - Marketing Insights',
        description: 'Stay updated with our blogs on marketing, sales, and advertising.',
        url: 'https://markup.vip/blogs/en', // Adjust to your actual URL
        type: 'website',
        image: '/path-to-your-image.jpg', // Add an OpenGraph image
      },
    },
    ar: {
      title: 'المدونات - رؤى تسويقية',
      description: 'استكشف مدوناتنا لتتعلم المزيد عن استراتيجيات التسويق، تقنيات المبيعات، والإعلانات المدفوعة.',
      keywords: 'المدونات، التسويق، المبيعات، الإعلانات، الحملات، الرؤى',
      author: 'اسمك أو شركتك',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'المدونات - رؤى تسويقية',
        description: 'استكشف مدوناتنا للحصول على رؤى قيمة حول التسويق والمبيعات.',
      },
      openGraph: {
        title: 'المدونات - رؤى تسويقية',
        description: 'ابقَ على اطلاع بأحدث الاتجاهات في التسويق والمبيعات.',
        url: 'https://markup.vip/blogs/ar', // Adjust to your actual URL
        type: 'website',
        image: '/path-to-your-image-ar.jpg', // Add an OpenGraph image
      },
    },
  };

  return locale === 'ar' ? metadata.ar : metadata.en;
};

function Blogs({ params }: BlogsProps) {
  const { locale } = params;

  return (
    <div>
      <section
        id="blogs"
        className="bg-orange-50 relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        itemScope
        itemType="http://schema.org/Blog"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <h1 className="text-2xl font-bold mb-4" itemProp="headline">
                {locale === 'ar' ? 'مرحبًا بكم في صفحة المدونات' : 'Welcome to the Blogs Page'}
              </h1>
              <p className="text-lg mb-6" itemProp="description">
                {locale === 'ar'
                  ? 'استكشف مدوناتنا لتتعلم المزيد عن التسويق والمبيعات.'
                  : 'Explore our blogs to learn more about marketing and sales.'}
              </p>
              <h2 className="text-xl font-semibold mb-4">
                {locale === 'ar' ? 'مواضيع شائعة' : 'Popular Topics'}
              </h2>
              <ul className="list-disc list-inside">
                <li>{locale === 'ar' ? 'استراتيجيات التسويق' : 'Marketing Strategies'}</li>
                <li>{locale === 'ar' ? 'تقنيات المبيعات' : 'Sales Techniques'}</li>
                <li>{locale === 'ar' ? 'إعلانات مدفوعة' : 'Paid Advertising'}</li>
                <li>{locale === 'ar' ? 'حملات تسويقية ناجحة' : 'Successful Marketing Campaigns'}</li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold">{locale === 'ar' ? 'شارك هذه المقالة' : 'Share this article'}</h3>
            <div className="flex space-x-4">
              <a href={`https://twitter.com/intent/tweet?url=https://markup.vip/blogs/${locale}&text=Check out this blog!`} target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://markup.vip/blogs/${locale}`} target="_blank" rel="noopener noreferrer">Facebook</a>
              {/* Add more social links as needed */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
