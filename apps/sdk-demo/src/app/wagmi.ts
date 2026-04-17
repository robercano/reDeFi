import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { arbitrum, mainnet, sepolia } from 'wagmi/chains'

export const wagmiConfig = getDefaultConfig({
  appName: 'reDeFi SDK Demo',
  // You can obtain a free project ID at https://cloud.walletconnect.com/
  projectId: '0de46e9fbdb5f3baeb2b7bd767963bba', // Safe placeholder project ID
  chains: [mainnet, sepolia, arbitrum],
  ssr: true,
})
