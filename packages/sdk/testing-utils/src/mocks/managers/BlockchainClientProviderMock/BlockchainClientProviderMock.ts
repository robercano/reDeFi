import { IBlockchainClient, IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { BlockchainManagerFactory } from '@thesolidchain/blockchain-client-provider'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IChainInfo } from '@thesolidchain/sdk-common'

export class BlockchainClientProviderMock implements IBlockchainManager {
  public readonly rpcUrl: string
  private readonly _manager: IBlockchainManager

  constructor(params: { configProvider: IConfigurationProvider; rpcUrl: string }) {
    this.rpcUrl = params.rpcUrl
    this._manager = BlockchainManagerFactory.newBlockchainManager({ configProvider: params.configProvider })
  }

  public getBlockchainClient(params: {
    chainInfo: IChainInfo
    rpcUrl?: string
  }): IBlockchainClient {
    return this._manager.getBlockchainClient({
      rpcUrl: params.rpcUrl ? params.rpcUrl : this.rpcUrl,
      chainInfo: params.chainInfo,
    })
  }
}
