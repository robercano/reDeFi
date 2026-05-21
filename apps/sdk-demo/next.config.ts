import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    E2E_SDK_FORK_URL_MAINNET: process.env.E2E_SDK_FORK_URL_MAINNET,
  },
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
