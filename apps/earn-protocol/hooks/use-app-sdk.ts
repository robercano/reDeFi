import { useChain } from '@account-kit/react'
import { useUserWallet } from '@thesolidchain/app-earn-ui'
import { useSDK } from '@thesolidchain/sdk-client-react'

/**
 * Custom hook that provides access to the SummerFi SDK with the current chain and wallet configuration
 * @returns SDK instance configured with the current chain ID and wallet address
 */
export const useAppSDK = () => {
  const chain = useChain()
  const chainId = chain.chain.id

  const { userWalletAddress } = useUserWallet()

  const walletAddress = userWalletAddress

  return useSDK({ chainId, walletAddress })
}
