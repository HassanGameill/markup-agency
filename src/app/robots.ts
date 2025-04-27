import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://markup.vip";

    return {
      rules: {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/admin', '/login'], // Example of restricted paths
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
}
