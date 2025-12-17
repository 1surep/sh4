module.exports = {
  siteUrl: 'https://sierrah4.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/dashboard/*',
    '/signin',
    '/signup',
    '/api/*',
    '/dashboard/inbox/*',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/api/', '/signin', '/signup'],
      },
    ],
    additionalSitemaps: [
      'https://sierrah4.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/pan-africa-2027') {
      priority = 0.9;
      changefreq = 'daily';
    } else if (['/about', '/contact', '/gallery', '/shop'].includes(path)) {
      priority = 0.8;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
