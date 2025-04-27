import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://markup.vip";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en`,
          ar: `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          ar: `${baseUrl}/ar/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog`,
          ar: `${baseUrl}/ar/blog`,
        },
      },
    },

    {
      url: `${baseUrl}/partners`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/partners`,
          ar: `${baseUrl}/ar/partners`,
        },
      },
    },

    {
      url: `${baseUrl}/questions`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/questions`,
          ar: `${baseUrl}/ar/questions`,
        },
      },
    },

  ];
}
