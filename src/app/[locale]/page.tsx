import Head from "next/head";
import { useLocale } from "next-intl";
import OurPartners from "@/components/Markup-Sections/OurPartners";
import Baner from "@/components/Markup-Sections/Baner/Baner";
import OurServices from "@/components/Markup-Sections/OurServices";
import Features from "@/components/Markup-Sections/Qestions";
import NewsUs from "@/components/Markup-Sections/NewsUs/NewsUs";
import Temework from "@/components/Markup-Sections/Temework/Temework";
import Testimonials from "@/components/Markup-Sections/Testimonials";
import HeroRender from "@/components/Markup-Sections/Hero/HeroRender";
import OurTargetClient from "@/components/Markup-Sections/Our-Target/OurTargetClient";
import { BannerClientTwo } from "@/components/Markup-Sections/Baner/BannerClientTwo";
import { BannerClientOne } from "@/components/Markup-Sections/Baner/BannerClientOne";

interface BlogsProps {
  params: { locale: string };
}

type MetadataType = {
  title: string;
  description: string;
  twitter: {
    card: string;
    site: string;
    title: string;
    description: string;
    image?: string;
  };

  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    image?: string;
  };
  canonical: string;
};

// Improved Metadata Generator with Fallback
export const generateMetadata = ({
  params: { locale },
}: BlogsProps): MetadataType => {
  const baseMetadata = {
    twitter: {
      card: "summary_large_image",
      site: "@markup_vip",
      image: "/path-to-image.jpg",
    },
    openGraph: {
      type: "website",
      image: "/path-to-image.jpg",
    },
  };

  const metadata = {
    en: {
      title: "Markup",
      description:
        "Learn with us a lot about marketing, sales, paid advertising, and marketing campaigns.",
      openGraph: {
        ...baseMetadata.openGraph,
        title: "Home - English",
        description:
          "Learn with us a lot about marketing, sales, and paid advertising.",
        url: "https://markup.vip/en",
      },
      twitter: {
        ...baseMetadata.twitter,
        title: "Home - English",
        description: "Learn with us about marketing, sales, and advertising.",
      },
      canonical: "https://markup.vip/en",

      keywords: [
        "markup",
        "markup agency",
        "markup marketing",
        "markup business",
        "markup business solutions",
        "restaurant marketing"
      ],
    },
    ar: {
      title: "Markup",
      description:
        "التسويق للمطاعم ,حملات الاعلانات المدفوعه,زياده المبيعات للمنتجات",
      openGraph: {
        ...baseMetadata.openGraph,
        title: "الرئسيه - العربية",
        description:
          "التسويق للمطاعم ,حملات الاعلانات المدفوعه,زياده المبيعات للمنتجات",
        url: "https://markup.vip/ar",
      },
      twitter: {
        ...baseMetadata.twitter,
        title: "الرئسيه - العربية",
        description:
          "التسويق للمطاعم ,حملات الاعلانات المدفوعه,زياده المبيعات للمنتجات",
      },
      canonical: "https://markup.vip/ar",
      keywords: [
        "markup",
        "التسويق",
        "markup agency",
        "markup marketing",
        "markup business",
        "markup business solutions",
        "restaurant marketing",
        "الحلول التجارية",
        "التسويق للمطاعم"
      ],
    },
  };

  // Default to English if locale is not 'ar'
  return locale === "ar" ? metadata.ar : metadata.en;
};

export default function HomePage() {
  const locale = useLocale() as "en" | "ar";
  const metadata = generateMetadata({ params: { locale } });

  return (
    <>
      <Head>
        {/* SEO Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={metadata.canonical} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        {metadata.openGraph.image && (
          <meta property="og:image" content={metadata.openGraph.image} />
        )}

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        {metadata.twitter.image && (
          <meta name="twitter:image" content={metadata.twitter.image} />
        )}

        {/* Hreflang Tags for Language */}
        <link rel="alternate" href="https://markup.vip/en" hrefLang="en" />
        <link rel="alternate" href="https://markup.vip/ar" hrefLang="ar" />
        <link rel="alternate" href="https://markup.vip" hrefLang="x-default" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: metadata.title,
            description: metadata.description,
            url: metadata.canonical,
            inLanguage: locale,
          })}
        </script>
      </Head>

      {/* <Hero /> */}
      <HeroRender />
      {/* <OurTarget /> */}
      <OurTargetClient />
      <OurPartners />
      <BannerClientOne />

      <OurServices />
      <Features />
      <NewsUs />
      <BannerClientTwo />
      <Temework />
      <Testimonials />
    </>
  );
}
