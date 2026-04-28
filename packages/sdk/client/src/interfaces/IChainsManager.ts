import { ChainInfo, Maybe } from '@thesolidchain/sdk-common'
import { Chain } from '../implementation/Chain'

/**
 * @interface IChainsManagerClient
 * Interface for the ChainsManager client implementation. Allows to retrieve information for
 *             a Chain given its ChainInfo. It also supports to lookup a chain by its name or chain ID
 */
export interface IChainsManagerClient {
  /**
   * getSupportedChains
   * Retrieves the list of supported chains
   *
   * @returns The list of supported chains
   */
  getSupportedChains(): Promise<ChainInfo[]>

  /**
   * getChain
   * Retrieves a chain by its chain info
   *
   * @param params.chainInfo The info associated with the chain to retrieve
   *
   * @returns The chain for the given chain info
   */
  getChain(params: { chainInfo: ChainInfo }): Promise<Chain>

  /**
   * getChainById
   * Retrieves a network by its chain ID
   *
   * @param params.chainId The chain ID of the network to retrieve
   *
   * @returns The network with the given chain ID
   */
  getChainById(params: { chainId: number }): Promise<Maybe<Chain>>
}
