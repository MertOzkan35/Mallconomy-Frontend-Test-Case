/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.mallconomy.com"], //make it 'your-domain.com'
  },
};

module.exports = nextConfig;
