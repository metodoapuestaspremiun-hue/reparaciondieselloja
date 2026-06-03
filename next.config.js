/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Opcional: Configura el path base si tu sitio se sirve desde un subdirectorio
  // basePath: '/tu-subdirectorio',
  // Opcional: Configura el prefijo de assets
  // assetPrefix: '/tu-subdirectorio/',
}

module.exports = nextConfig
