/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: isProd ? '/Portfolio-Jeremias-Ahmed' : '',
    assetPrefix: isProd ? '/Portfolio-Jeremias-Ahmed/' : '',
    trailingSlash: true,
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig