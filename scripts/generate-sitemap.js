const fs = require('fs');
const path = require('path');

const domain = 'https://reparaciondieselloja.com';
const buildDir = path.join(process.cwd(), 'out');
const sitemapPath = path.join(buildDir, 'sitemap.xml');

// List of website routes with priorities
const routes = [
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/agendamiento', priority: '0.95', changefreq: 'daily' },
  { path: '/motores-diesel', priority: '0.9', changefreq: 'weekly' },
  { path: '/camionetas', priority: '0.9', changefreq: 'weekly' },
  { path: '/vehiculos-pesados', priority: '0.9', changefreq: 'weekly' },
  { path: '/vehiculos-livianos', priority: '0.9', changefreq: 'weekly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${domain}${route.path}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>${route.changefreq}</changefreq>
      <priority>${route.priority}</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

// Write to public folder
const publicDir = path.join(process.cwd(), 'public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

// Ensure the out directory exists if building static export
if (fs.existsSync(buildDir)) {
  fs.writeFileSync(sitemapPath, sitemap);
}

console.log('Sitemap generated successfully in public and out!');
