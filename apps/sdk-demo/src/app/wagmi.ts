import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { arbitrum, mainnet, sepolia, base, bsc, polygon, optimism, avalanche } from 'wagmi/chains'

const forkUrl = process.env.NEXT_PUBLIC_TENDERLY_RPC_URL || process.env.E2E_SDK_FORK_URL_MAINNET

// We rely on the presence of forkUrl rather than NODE_ENV === 'development'
// because Next.js forces NODE_ENV='production' during AWS Amplify builds.
// To disable this in true production, simply do not set these environment variables.
const customMainnet = {
  ...mainnet,
  ...(forkUrl
    ? {
        rpcUrls: {
          ...mainnet.rpcUrls,
          default: { http: [forkUrl] },
          public: { http: [forkUrl] },
        },
      }
    : {}),
}

export const wagmiConfig = getDefaultConfig({
  appName: 'reDeFi SDK Demo',
  // You can obtain a free project ID at https://cloud.walletconnect.com/
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '0de46e9fbdb5f3baeb2b7bd767963bba',
  chains: [customMainnet, sepolia, arbitrum, base, bsc, polygon, optimism, avalanche],
  ssr: true,
})
