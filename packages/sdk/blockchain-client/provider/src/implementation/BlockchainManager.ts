import { ManagerWithFallbackProvidersBase } from '@thesolidchain/api-server-common'
import { IBlockchainClientProvider, IBlockchainManager, IBlockchainClient } from '@thesolidchain/blockchain-client-common'
import { BlockchainProviderType, IChainInfo } from '@thesolidchain/sdk-common'

/**
 * @name BlockchainManager
 * @description The implementation of IBlockchainManager
 */
export class BlockchainManager
  extends ManagerWithFallbackProvidersBase<BlockchainProviderType, IBlockchainClientProvider>
  implements IBlockchainManager
{
  /** CONSTRUCTOR */
  constructor(params: { providers: IBlockchainClientProvider[] }) {
    super(params)
  }

  /**
   * @see IBlockchainManager.getBlockchainClient
   */
  public getBlockchainClient(params: { chainInfo: IChainInfo; rpcUrl?: string }): IBlockchainClient {
    const bestProvider = this._getBestProvider({ chainInfo: params.chainInfo })
    return bestProvider.getBlockchainClient(params)
  }
}
