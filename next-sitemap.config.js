/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://tunasgloria.sch.id',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}