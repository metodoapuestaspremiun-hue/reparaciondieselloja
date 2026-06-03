const fs = require('fs');
const path = require('path');

const domain = 'https://reparaciondieselloja.com';
const buildDir = path.join(process.cwd(), 'out');
const sitemapPath = path.join(buildDir, 'sitemap.xml');

// List of your website's routes
const routes = [
  '/',
  '/servicios',
  '/nosotros',
  '/contacto',
  '/blog',
  '/preguntas-frecuentes',
  '/terminos-y-condiciones',
  '/politica-de-privacidad'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${domain}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

// Ensure the out directory exists
if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir, { recursive: true });
}

// Write sitemap.xml to the out directory
fs.writeFileSync(sitemapPath, sitemap);

console.log('Sitemap generated successfully!');
