import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.amazonaws.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // @ts-expect-error - NextConfig type might be missing this in the current version, but it's valid
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
