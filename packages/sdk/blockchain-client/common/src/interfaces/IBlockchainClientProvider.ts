import type { IChainInfo } from '@thesolidchain/sdk-common'
import { type IBlockchainClient } from './IBlockchainClient'
import { IManagerProvider } from '@thesolidchain/api-server-common'
import { BlockchainProviderType } from '@thesolidchain/sdk-common'

/**
 * IBlockchainClientProvider
 * Interface for the BlockchainClient provider, which is used to retrieve a BlockchainClient for a particular chain
 */
export interface IBlockchainClientProvider extends IManagerProvider<BlockchainProviderType> {
  /**
   * getBlockchainClient
   * Retrieves a BlockchainClient for a particular chain
   *
   * @param params.chainInfo The chain information for the chain
   * @param params.rpcUrl Custom RPC URL for the chain (optional)
   *
   * @returns IBlockchainClient The client for a particular chain
   *
   * @dev The custom RPC url can be used to create a blockchain client for a fork, for example
   */
  getBlockchainClient(params: { chainInfo: IChainInfo; rpcUrl?: string }): IBlockchainClient
}
