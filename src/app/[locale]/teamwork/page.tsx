import { Metadata } from 'next';
import React from 'react';

interface TeamworkProps {
  params: { locale: string };
}

export const generateMetadata = ({ params: { locale } }: TeamworkProps): Metadata => {
  const metadata = {
    en: {
      title: 'Teamwork - English',
      description: 'Discover the power of teamwork in achieving goals and fostering collaboration.',
      keywords: 'teamwork, collaboration, goals, teamwork benefits',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'Teamwork - English',
        description: 'Learn about the importance of teamwork and collaboration.',
      },
      openGraph: {
        title: 'Teamwork - English',
        description: 'Explore the benefits of teamwork in organizations.',
        url: 'https://markup.vip/teamwork/en', // Adjust to your actual URL
        type: 'website',
        image: '/path-to-your-image.jpg', // Optional: Add an OpenGraph image
      },
    },
    ar: {
      title: 'العمل الجماعي',
      description: 'اكتشف قوة العمل الجماعي في تحقيق الأهداف وتعزيز التعاون.',
      keywords: 'العمل الجماعي، التعاون، الأهداف، فوائد العمل الجماعي',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'العمل الجماعي - العربية',
        description: 'تعرف على أهمية العمل الجماعي والتعاون.',
      },
      openGraph: {
        title: 'العمل الجماعي',
        description: 'استكشف فوائد العمل الجماعي في المؤسسات.',
        url: 'https://markup.vip/teamwork/ar', // Adjust to your actual URL
        type: 'website',
        image: '/path-to-your-image-ar.jpg', // Optional: Add an OpenGraph image
      },
    },
  };

  return locale === 'ar' ? metadata.ar : metadata.en;
};

function Teamwork({ params }) {
  const { locale } = params;

  return (
    <section
      id="teamwork"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <h1 className="text-2xl font-bold mb-4">{locale === 'ar' ? 'مرحبًا بكم في صفحة العمل الجماعي' : 'Welcome to the Teamwork Page'}</h1>
            <p className="text-lg">
              {locale === 'ar'
                ? 'هنا ستكتشف أهمية العمل الجماعي في تحقيق الأهداف.'
                : 'Here you will discover the importance of teamwork in achieving goals.'}
            </p>
          </div>
        </div>

        {/* Additional Content */}
        <div className="container mt-8">
          <h2 className="text-xl font-semibold mb-4">{locale === 'ar' ? 'فوائد العمل الجماعي' : 'Benefits of Teamwork'}</h2>
          <ul className="list-disc list-inside">
            <li>{locale === 'ar' ? 'زيادة الإنتاجية.' : 'Increased productivity.'}</li>
            <li>{locale === 'ar' ? 'تعزيز الابتكار.' : 'Enhanced innovation.'}</li>
            <li>{locale === 'ar' ? 'تحسين التواصل.' : 'Improved communication.'}</li>
            <li>{locale === 'ar' ? 'تعزيز الروح المعنوية.' : 'Boosted morale.'}</li>
          </ul>
        </div>

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": locale === 'ar' ? "العمل الجماعي" : "Teamwork",
            "description": locale === 'ar' ? "اكتشف قوة العمل الجماعي في تحقيق الأهداف." : "Discover the power of teamwork in achieving goals."
          })
        }} />
      </div>
    </section>
  );
}

export default Teamwork;
