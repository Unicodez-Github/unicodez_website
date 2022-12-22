/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.unicodez.com",
  generateRobotsTxt: true, 
  generateIndexSitemap: false
};
