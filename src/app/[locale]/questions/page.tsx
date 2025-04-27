import { Metadata } from 'next';
import React from 'react';

interface BlogsProps {
  params: { locale: string };
}

export const generateMetadata = ({ params: { locale } }: BlogsProps): Metadata => {
  const metadata = {
    en: {
      title: 'Questions - English',
      description: 'Learn with us about marketing, sales, paid advertising, and marketing campaigns. Find answers to your questions and enhance your knowledge.',
      keywords: 'marketing, sales, advertising, campaigns, questions',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'Questions - English',
        description: 'Find answers to your marketing and sales questions.',
      },
      openGraph: {
        title: 'Questions - English',
        description: 'Discover valuable insights about marketing, sales, and advertising.',
        url: 'https://markup.vip/questions/en',
        type: 'website',
        image: '/path-to-your-image.jpg',
      },
    },
    ar: {
      title: 'الأسئلة',
      description: 'تعلم معنا الكثير عن التسويق، المبيعات، والإعلانات المدفوعة. اكتشف الإجابات على أسئلتك.',
      keywords: 'التسويق، المبيعات، الإعلانات، الحملات، الأسئلة',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'الأسئلة',
        description: 'اكتشف إجابات لأسئلتك حول التسويق والمبيعات.',
      },
      openGraph: {
        title: 'الأسئلة',
        description: 'اكتشف رؤى قيمة حول التسويق والمبيعات.',
        url: 'https://markup.vip/questions/ar',
        type: 'website',
        image: '/path-to-your-image-ar.jpg',
      },
    },
  };

  return locale === 'ar' ? metadata.ar : metadata.en;
};

function Questions({ params }) {
  const { locale } = params;

  return (
    <section
      id="questions"
      className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <h1 className="text-2xl font-bold mb-4">{locale === 'ar' ? 'مرحبًا بكم في صفحة الأسئلة' : 'Welcome to the Questions Page'}</h1>
            <p className="text-lg">
              {locale === 'ar'
                ? 'هنا ستجد إجابات على الأسئلة الشائعة حول التسويق، المبيعات، والإعلانات.'
                : 'Here you will find answers to common questions about marketing, sales, and advertising.'}
            </p>
          </div>
        </div>

        {/* Additional Content */}
        <div className="container mt-8">
          <h2 className="text-xl font-semibold mb-4">{locale === 'ar' ? 'الأسئلة المتكررة' : 'Frequently Asked Questions'}</h2>
          <ul className="list-disc list-inside">
            <li>{locale === 'ar' ? 'ما هو التسويق؟' : 'What is marketing?'}</li>
            <li>{locale === 'ar' ? 'كيف يمكنني تحسين مبيعاتي؟' : 'How can I improve my sales?'}</li>
            <li>{locale === 'ar' ? 'ما هي خيارات الإعلان المدفوع؟' : 'What are paid advertising options?'}</li>
            <li>{locale === 'ar' ? 'كيف أنشئ حملات تسويقية فعالة؟' : 'How to create effective marketing campaigns?'}</li>
          </ul>
        </div>

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": locale === 'ar' ? "ما هو التسويق؟" : "What is marketing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale === 'ar' ? "التسويق هو عملية التواصل مع العملاء المحتملين." : "Marketing is the process of communicating with potential customers."
                }
              },
              {
                "@type": "Question",
                "name": locale === 'ar' ? "كيف يمكنني تحسين مبيعاتي؟" : "How can I improve my sales?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale === 'ar' ? "يمكنك تحسين مبيعاتك من خلال استراتيجيات تسويقية فعالة." : "You can improve your sales through effective marketing strategies."
                }
              },
              {
                "@type": "Question",
                "name": locale === 'ar' ? "ما هي خيارات الإعلان المدفوع؟" : "What are paid advertising options?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale === 'ar' ? "تشمل الخيارات إعلانات الدفع لكل نقرة والإعلانات الاجتماعية." : "Options include pay-per-click ads and social media advertising."
                }
              },
              {
                "@type": "Question",
                "name": locale === 'ar' ? "كيف أنشئ حملات تسويقية فعالة؟" : "How to create effective marketing campaigns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": locale === 'ar' ? "من المهم تحديد الجمهور المستهدف وتحليل البيانات." : "It's important to identify your target audience and analyze data."
                }
              }
            ]
          })
        }} />
      </div>
    </section>
  );
}

export default Questions;
