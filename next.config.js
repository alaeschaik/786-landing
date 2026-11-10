/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set when the site is served from a subpath, e.g. /786-landing on GitHub Pages
  basePath: process.env.BASE_PATH || '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
