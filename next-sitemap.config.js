/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://parseth.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }
    ],
    additionalSitemaps: [],
  },
  changefreq: "monthly",
  priority: 1.0,
}