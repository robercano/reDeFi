import { useWalletClient } from 'wagmi'
import { providers } from 'ethers'
import { useMemo } from 'react'

/** Structural subset of a viem Wallet Client needed to build an ethers v5 signer. */
interface WalletClientLike {
  account: { address: string }
  chain: {
    id: number
    name: string
    contracts?: { ensRegistry?: { address?: string } }
  }
  transport: unknown
}

export function clientToSigner(client: WalletClientLike) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  const provider = new providers.Web3Provider(transport as providers.ExternalProvider, network)
  const signer = provider.getSigner(account.address)
  return signer
}

/** Hook to convert a viem Wallet Client to an ethers.js Signer. */
export function useEthersSigner({ chainId }: { chainId?: number } = {}) {
  const { data: walletClient } = useWalletClient({ chainId })
  return useMemo(() => (walletClient ? clientToSigner(walletClient) : undefined), [walletClient])
}
