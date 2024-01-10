/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'localhost',
      'chess-strapi-aws-media-bucket.s3.sa-east-1.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
