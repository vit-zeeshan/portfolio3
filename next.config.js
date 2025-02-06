/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: false,
    domains: ['localhost', 'media.licdn.com'],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig 