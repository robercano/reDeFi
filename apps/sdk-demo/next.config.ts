import type { NextConfig } from 'next'
import * as fs from 'fs'
import * as path from 'path'

let forkUrl = process.env.E2E_SDK_FORK_URL_MAINNET;
try {
  // Turborepo execution from root
  let rootEnvPath = path.resolve(process.cwd(), '.env');
  
  // Next.js execution from apps/sdk-demo
  if (!fs.existsSync(rootEnvPath)) {
    rootEnvPath = path.resolve(process.cwd(), '../../.env');
  }

  if (fs.existsSync(rootEnvPath)) {
    console.log('[Next.js Config] Found root .env file at:', rootEnvPath);
    const envContent = fs.readFileSync(rootEnvPath, 'utf8');
    const match = envContent.match(/^E2E_SDK_FORK_URL_MAINNET=(.*)$/m);
    if (match) {
      forkUrl = match[1].trim();
      console.log('[Next.js Config] Injected E2E_SDK_FORK_URL_MAINNET:', forkUrl);
    } else {
      console.warn('[Next.js Config] Could not find E2E_SDK_FORK_URL_MAINNET in .env');
    }
  } else {
    console.warn('[Next.js Config] Could not locate root .env file');
  }
} catch (e) {
  console.warn('[Next.js Config] Error reading root .env:', e);
}

const nextConfig: NextConfig = {
  env: {
    E2E_SDK_FORK_URL_MAINNET: forkUrl,
    NEXT_PUBLIC_TENDERLY_RPC_URL: forkUrl,
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
