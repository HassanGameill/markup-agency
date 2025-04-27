import { Metadata } from 'next';
import React from 'react';

interface BlogsProps {
  params: { locale: string };
}

export const generateMetadata = ({ params: { locale } }: BlogsProps): Metadata => {
  const metadata = {
    en: {
      title: 'Contact Us - English',
      description: 'Contact us to learn more about marketing, sales, paid advertising, and marketing campaigns.',
      keywords: 'contact, marketing, sales, advertising, marketing campaigns',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'Contact Us - English',
        description: 'Contact us to learn more about marketing, sales, paid advertising, and marketing campaigns.',
      },
      openGraph: {
        title: 'Contact Us - English',
        description: 'Reach out for inquiries on marketing, sales, advertising, and campaigns.',
        url: 'https://yoursite.com/contact',
        type: 'website',
        image: '/images/contact-us.jpg',
      },
    },
    ar: {
      title: 'أتصل بنا',
      description: 'تواصل معنا لتعلم المزيد عن التسويق، المبيعات، الإعلانات المدفوعة، وحملات التسويق.',
      keywords: 'اتصل بنا، تسويق، مبيعات، إعلانات، حملات تسويق',
      twitter: {
        card: 'summary_large_image',
        site: '@yoursite',
        title: 'أتصل بنا',
        description: 'تواصل معنا لتعلم المزيد عن التسويق، المبيعات، الإعلانات المدفوعة، وحملات التسويق.',
      },
      openGraph: {
        title: 'أتصل بنا',
        description: 'تواصل معنا للاستفسار عن التسويق، المبيعات، الإعلانات والحملات.',
        url: 'https://yoursite.com/contact/ar',
        type: 'website',
        image: '/images/contact-us-ar.jpg',
      },
    },
  };

  return locale === 'ar' ? metadata.ar : metadata.en;
};

function ContactPage({ params }) {
  const { locale } = params;

  return (
    <main>
      <section className="relative z-10 overflow-hidden pb-16 pt-[120px] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <header className="text-center">
            <h1 className="text-3xl font-bold mb-4 md:text-4xl">{locale === 'ar' ? 'أتصل بنا' : 'Contact Us'}</h1>
            <p className="text-lg mb-8 md:text-xl">
              {locale === 'ar' ? 'نحن هنا لمساعدتك في استفساراتك حول التسويق والمبيعات.' : 'We’re here to help you with your inquiries on marketing and sales.'}
            </p>
          </header>

          <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full mx-auto">
            <h2 className="text-2xl font-semibold mb-4">{locale === 'ar' ? 'تواصل معنا' : 'Get in Touch'}</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {locale === 'ar' ? 'الاسم' : 'Name'}
                </label>
                <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {locale === 'ar' ? 'موبيل' : 'Phone'}
                </label>
                <input type="text" id="name" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {locale === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                </label>
                <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {locale === 'ar' ? 'الرسالة' : 'Message'}
                </label>
                <textarea id="message" className="mt-1 block w-full p-2 border border-gray-300 rounded"  required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                {locale === 'ar' ? 'إرسال' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": locale === 'ar' ? "أتصل بنا" : "Contact Us",
          "description": locale === 'ar' ? "تواصل معنا لتعلم المزيد عن التسويق، المبيعات، الإعلانات المدفوعة، وحملات التسويق." : "Contact us to learn more about marketing, sales, paid advertising, and marketing campaigns.",
          "url": locale === 'ar' ? "https://yoursite.com/contact/ar" : "https://yoursite.com/contact",
          "potentialAction": {
            "@type": "CommunicateAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": locale === 'ar' ? "https://yoursite.com/contact/ar" : "https://yoursite.com/contact",
              "actionPlatform": [
                "http://schema.org/WebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "result": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "support@yoursite.com"
            }
          }
        })
      }} />
    </main>
  );
}

export default ContactPage;
