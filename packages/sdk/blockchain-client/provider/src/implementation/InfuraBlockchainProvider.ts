import { createPublicClient, http, fallback, type Chain, type Transport } from 'viem'
import { arbitrum, base, mainnet, sonic } from 'viem/chains'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import {
  BlockchainProviderType,
  hyperliquid,
  type ChainId,
  type IChainInfo,
} from '@thesolidchain/sdk-common'
import {
  IBlockchainClient,
  IBlockchainClientProvider,
} from '@thesolidchain/blockchain-client-common'

/**
 * InfuraBlockchainProvider implements the IBlockchainClientProvider interface for Infura
 */
export class InfuraBlockchainProvider implements IBlockchainClientProvider {
  public readonly type = BlockchainProviderType.Infura
  public readonly configProvider: IConfigurationProvider

  private readonly _blockchainClients: Map<number, IBlockchainClient> = new Map()
  private readonly _supportedChains: Chain[] = [mainnet, arbitrum, base, sonic, hyperliquid]
  private readonly _apiKey: string

  constructor(params: { configProvider: IConfigurationProvider }) {
    this.configProvider = params.configProvider

    const infuraApiKey = this.configProvider.getConfigurationItem({
      name: 'INFURA_ENDPOINT_API_KEY',
    })
    if (!infuraApiKey) {
      throw new Error('INFURA_ENDPOINT_API_KEY is not defined')
    }
    this._apiKey = infuraApiKey

    this._initializeClients()
  }

  public getSupportedChainIds(): ChainId[] {
    return this._supportedChains.map((chain) => chain.id as ChainId)
  }

  public getBlockchainClient(params: {
    chainInfo: IChainInfo
    rpcUrl?: string
  }): IBlockchainClient {
    if (params.rpcUrl) {
      const chain = this._supportedChains.find((c) => c.id === params.chainInfo.chainId)
      if (!chain) {
        throw new Error(`Chain not supported: ${params.chainInfo.chainId}`)
      }
      return this._createBlockchainClient({ rpcUrl: params.rpcUrl, chain })
    }

    const client = this._blockchainClients.get(params.chainInfo.chainId)
    if (!client) {
      throw new Error(`No initialized client found for chain: ${params.chainInfo.chainId}`)
    }

    return client
  }

  private _initializeClients(): void {
    for (const chain of this._supportedChains) {
      const infuraUrl = this._getInfuraUrl(chain.id)

      const transports: Transport[] = []

      if (infuraUrl) {
        transports.push(http(infuraUrl, { batch: true, fetchOptions: { method: 'POST' } }))
      }

      if (chain.rpcUrls.default?.http?.[0]) {
        transports.push(
          http(chain.rpcUrls.default.http[0], { batch: true, fetchOptions: { method: 'POST' } }),
        )
      }

      if (transports.length === 0) {
        continue
      }

      const client = createPublicClient({
        batch: { multicall: true },
        chain,
        transport: fallback(transports),
      })

      this._blockchainClients.set(chain.id, client as unknown as IBlockchainClient)
    }
  }

  private _getInfuraUrl(chainId: number): string | undefined {
    if (chainId === mainnet.id) {
      return `https://mainnet.infura.io/v3/${this._apiKey}`
    } else if (chainId === base.id) {
      return `https://base-mainnet.infura.io/v3/${this._apiKey}`
    } else if (chainId === arbitrum.id) {
      return `https://arbitrum-mainnet.infura.io/v3/${this._apiKey}`
    }
    // Sonic and Hyperliquid typically do not have infura endpoints.
    return undefined
  }

  private _createBlockchainClient(params: { rpcUrl: string; chain: Chain }) {
    const transport = http(params.rpcUrl, {
      batch: true,
      fetchOptions: { method: 'POST' },
    })

    return createPublicClient({
      batch: { multicall: true },
      chain: params.chain,
      transport,
    }) as unknown as IBlockchainClient
  }
}
