/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      new URL('https://placehold.co/**')
    ],
  },
}

module.exports = nextConfig
