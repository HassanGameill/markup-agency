/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://markup.vip', // Replace with your domain
    generateRobotsTxt: true, // Optionally generate a robots.txt file
    sitemapSize: 7000, // Adjust sitemap size if necessary
    changefreq: 'daily', // Optional: change frequency of updates
    priority: 0.7, // Optional: priority of the pages
    alternateRefs: [
      {
        href: 'https://markup.vip/en',
        hreflang: 'en',
      },
      {
        href: 'https://markup.vip/ar',
        hreflang: 'ar',
      },
    ],
  };
  