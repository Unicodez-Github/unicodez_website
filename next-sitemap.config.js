/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://unicodez.com",
  generateRobotsTxt: true, 
  generateIndexSitemap: false
};
