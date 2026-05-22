import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { arbitrum, mainnet, sepolia, base, bsc, polygon, optimism, avalanche } from 'wagmi/chains'

const isDevBuild = process.env.NEXT_PUBLIC_BUILD_TYPE === 'development'
const rawForkUrl = process.env.NEXT_PUBLIC_TENDERLY_RPC_URL || process.env.E2E_SDK_FORK_URL_MAINNET

// We enforce NEXT_PUBLIC_BUILD_TYPE === 'development' as the single source of truth.
// If it is a development build, we allow the fork URL to override the public RPC.
const forkUrl = isDevBuild ? rawForkUrl : undefined

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
