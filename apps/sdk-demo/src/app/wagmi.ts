import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { arbitrum, mainnet, sepolia, base, bsc, polygon, optimism, avalanche } from 'wagmi/chains'

export const wagmiConfig = getDefaultConfig({
  appName: 'reDeFi SDK Demo',
  // You can obtain a free project ID at https://cloud.walletconnect.com/
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '0de46e9fbdb5f3baeb2b7bd767963bba',
  chains: [mainnet, sepolia, arbitrum, base, bsc, polygon, optimism, avalanche],
  ssr: true,
})
