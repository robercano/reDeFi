import type { NextConfig } from 'next'
import * as fs from 'fs'
import * as path from 'path'

let forkUrl = process.env.E2E_SDK_FORK_URL_MAINNET;
try {
  const rootEnvPath = path.resolve(process.cwd(), '../../.env');
  if (fs.existsSync(rootEnvPath)) {
    const envContent = fs.readFileSync(rootEnvPath, 'utf8');
    const match = envContent.match(/^E2E_SDK_FORK_URL_MAINNET=(.*)$/m);
    if (match) {
      forkUrl = match[1].trim();
    }
  }
} catch (e) {
  console.warn('Failed to read root .env file:', e);
}

const nextConfig: NextConfig = {
  env: {
    E2E_SDK_FORK_URL_MAINNET: forkUrl,
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
