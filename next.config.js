/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  basePath: '/Portfolio-Jeremias-Ahmed',
  assetPrefix: '/Portfolio-Jeremias-Ahmed/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig