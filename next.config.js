/** @type {import('next').NextConfig} */

const nextConfig = {
  // Другие настройки конфигурации...
  // output: 'export',
  sitemap: {
    // Конфигурация sitemap
    siteUrl: 'http://localhost:3000/', // Замените на URL вашего сайта
    generateRobotsTxt: true, // Генерировать файл robots.txt (необязательно)
    exclude: ['/secret-page'], // Список путей, которые нужно исключить из sitemap (необязательно)
    // Дополнительные настройки, см. документацию next-sitemap
  },
  // async redirects() {
  //   return [
  //     {
  //     source: '/blog/',
  //     destination: '/blog',
  //     permanent: true,
  //     }, 
  //   ]
  // },
};

module.exports = nextConfig;



