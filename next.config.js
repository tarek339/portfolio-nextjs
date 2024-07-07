/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "datenschutz-generator.de",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
