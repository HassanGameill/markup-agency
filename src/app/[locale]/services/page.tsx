import { Metadata } from 'next';
import React from 'react';

// Metadata Generation
export const generateMetadata = ({ params: { locale } }) => {
  const metadata = {
    en: {
      title: 'Our Services - English',
      description: 'Explore the range of marketing services we offer, tailored to help businesses succeed in the competitive market.',
      keywords: 'marketing services, digital marketing, branding, advertising, business solutions',
      openGraph: {
        title: 'Our Services - English',
        description: 'Discover our comprehensive marketing services designed to boost your business.',
        url: 'https://markup.vip/services/en',
        type: 'website',
        image: '/path-to-your-service-image.jpg',
      },
    },
    ar: {
      title: 'خدماتنا',
      description: 'استكشف مجموعة خدمات التسويق التي نقدمها، مصممة لمساعدة الأعمال على النجاح في السوق التنافسية.',
      keywords: 'خدمات التسويق، التسويق الرقمي، العلامة التجارية، الإعلان، حلول الأعمال',
      openGraph: {
        title: 'خدماتنا',
        description: 'اكتشف خدمات التسويق الشاملة التي تهدف إلى تعزيز أعمالك.',
        url: 'https://markup.vip/services/ar',
        type: 'website',
        image: '/path-to-your-service-image-ar.jpg',
      },
    },
  };

  return locale === 'ar' ? metadata.ar : metadata.en;
};

function Services({ params }) {
  const { locale } = params;

  return (
    <section id="services" className="py-16 pt-[120px] bg-gray-100 ">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">{locale === 'ar' ? 'خدماتنا' : 'Our Services'}</h1>
        <p className="mb-4">
          {locale === 'ar'
            ? 'نقدم مجموعة واسعة من خدمات التسويق لمساعدتك في تحقيق النجاح في السوق التنافسية اليوم.'
            : 'We offer a wide range of marketing services to help your business thrive in today’s competitive landscape.'}
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          {locale === 'ar' ? 'التسويق الرقمي' : 'Digital Marketing'}
        </h2>
        <p className="mb-4">
          {locale === 'ar'
            ? 'تشمل خدماتنا في التسويق الرقمي تحسين محركات البحث، إعلانات الدفع لكل نقرة، والتسويق عبر وسائل التواصل الاجتماعي.'
            : 'Our digital marketing services include SEO, PPC, and social media marketing to boost your online presence.'}
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          {locale === 'ar' ? 'العلامة التجارية' : 'Branding'}
        </h2>
        <p className="mb-4">
          {locale === 'ar'
            ? 'نساعد الشركات على تأسيس هوية علامة تجارية قوية والوصول إلى جمهورها المستهدف بشكل فعال.'
            : 'We help businesses establish a strong brand identity and reach their target audience effectively.'}
        </p>

        <h2 className="text-2xl font-semibold mb-4">
          {locale === 'ar' ? 'الإعلان' : 'Advertising'}
        </h2>
        <p className="mb-4">
          {locale === 'ar'
            ? 'تم تصميم استراتيجيات الإعلان لدينا لتعظيم عائد الاستثمار الخاص بك وزيادة المبيعات من خلال حملات مستهدفة.'
            : 'Our advertising strategies are designed to maximize your ROI and drive sales through targeted campaigns.'}
        </p>

        <p className="mt-6">
          {locale === 'ar'
            ? 'للحصول على مزيد من المعلومات، تحقق من مدونتنا أو قم بزيارة صفحة من نحن.'
            : 'For more insights, check out our <a href="/blog" className="text-blue-600 underline">Blog</a> or visit our <a href="/about" className="text-blue-600 underline">About Us</a> page.'}
        </p>

        

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": locale === 'ar' ? "خدمات التسويق" : "Marketing Services",
            "provider": {
              "@type": "Organization",
              "name": "Your Company Name",
              "url": "https://markup.vip",
              "logo": "https://markup.vip/path-to-logo.png"
            },
            "description": locale === 'ar' ? "خدمات التسويق المخصصة التي نقدمها." : "Tailored marketing services we offer.",
            "offers": {
              "@type": "Offer",
              "url": "https://markup.vip/services",
              "priceCurrency": "USD",
              "price": "100.00",
              "itemOffered": {
                "@type": "Service",
                "name": locale === 'ar' ? "خدمة التسويق الرقمي" : "Digital Marketing Service",
              },
            },
          })
        }} />
      </div>
    </section>
  );
}

export default Services;
