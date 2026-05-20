import { getChainInfoByChainId } from '@thesolidchain/sdk-common'

export const getChainInfoHandler = (chainId?: number) => () => {
  if (chainId == null) {
    throw new Error('ChainId is not defined')
  }

  // Map Tenderly fork ID to mainnet
  const mappedChainId = chainId === 9991 ? 1 : chainId
  return getChainInfoByChainId(mappedChainId)
}
