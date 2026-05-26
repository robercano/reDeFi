import { ChainId, NetworkByChainID } from './domain-types'

export interface IRpcConfig {
  skipCache: boolean
  skipMulticall: boolean
  skipGraph: boolean
  stage: string
  source: string
}

/**
 * Constructs an RPC Gateway Endpoint URL with specified configuration parameters.
 *
 * @param rpcGatewayUrl - The base URL of the RPC Gateway
 * @param chainId - The target blockchain network ID
 * @param rpcConfig - The configuration options (cache, multicall, etc.)
 * @returns The constructed endpoint URL
 */
export function getRpcGatewayEndpoint(
  rpcGatewayUrl: string,
  chainId: ChainId,
  rpcConfig: IRpcConfig,
) {
  const network = NetworkByChainID[chainId]
  return (
    `${rpcGatewayUrl}/?` +
    `network=${network}&` +
    `skipCache=${rpcConfig.skipCache}&` +
    `skipMulticall=${rpcConfig.skipMulticall}&` +
    `skipGraph=${rpcConfig.skipGraph}&` +
    `source=${rpcConfig.source}`
  )
}
