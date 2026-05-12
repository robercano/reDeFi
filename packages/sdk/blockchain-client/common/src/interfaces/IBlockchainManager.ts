import { IManagerWithProviders } from '@thesolidchain/api-server-common'
import { BlockchainProviderType, IChainInfo } from '@thesolidchain/sdk-common'
import { IBlockchainClientProvider } from './IBlockchainClientProvider'
import { IBlockchainClient } from './IBlockchainClient'

/**
 * IBlockchainManager
 * Interface for the BlockchainManager.
 */
export interface IBlockchainManager extends IManagerWithProviders<
  BlockchainProviderType,
  IBlockchainClientProvider
> {
  getBlockchainClient(params: { chainInfo: IChainInfo; rpcUrl?: string }): IBlockchainClient
}
