import { IBlockchainClient } from '@thesolidchain/blockchain-client-common'
import { BlockchainClientProvider } from '@thesolidchain/blockchain-client-provider'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IChainInfo } from '@thesolidchain/sdk-common'

export class BlockchainClientProviderMock extends BlockchainClientProvider {
  public readonly rpcUrl: string

  constructor(params: { configProvider: IConfigurationProvider; rpcUrl: string }) {
    super(params)

    this.rpcUrl = params.rpcUrl
  }

  public getBlockchainClient(params: {
    chainInfo: IChainInfo
    rpcUrl?: string
  }): IBlockchainClient {
    return super.getBlockchainClient({
      rpcUrl: params.rpcUrl ? params.rpcUrl : this.rpcUrl,
      chainInfo: params.chainInfo,
    })
  }
}
