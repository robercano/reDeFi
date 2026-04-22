import { createPublicClient, http, fallback, type Chain, type Transport } from 'viem'
import { arbitrum, base, mainnet, sonic } from 'viem/chains'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { BlockchainProviderType, hyperliquid, type ChainId, type IChainInfo } from '@thesolidchain/sdk-common'
import { IBlockchainClient, IBlockchainClientProvider } from '@thesolidchain/blockchain-client-common'

/**
 * AlchemyBlockchainProvider implements the IBlockchainClientProvider interface for Alchemy
 */
export class AlchemyBlockchainProvider implements IBlockchainClientProvider {
  public readonly type = BlockchainProviderType.Alchemy
  public readonly configProvider: IConfigurationProvider

  private readonly _blockchainClients: Map<number, IBlockchainClient> = new Map()
  private readonly _supportedChains: Chain[] = [mainnet, arbitrum, base, sonic, hyperliquid]
  private readonly _apiKey: string

  constructor(params: { configProvider: IConfigurationProvider }) {
    this.configProvider = params.configProvider
    
    const alchemyApiKey = this.configProvider.getConfigurationItem({ name: 'ALCHEMY_ENDPOINT_API_KEY' })
    if (!alchemyApiKey) {
      throw new Error('ALCHEMY_ENDPOINT_API_KEY is not defined')
    }
    this._apiKey = alchemyApiKey

    this._initializeClients()
  }

  public getSupportedChainIds(): ChainId[] {
    return this._supportedChains.map((chain) => chain.id as ChainId)
  }

  public getBlockchainClient(params: { chainInfo: IChainInfo; rpcUrl?: string }): IBlockchainClient {
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
      const alchemyUrl = this._getAlchemyUrl(chain.id)
      
      const transports: Transport[] = []
      
      if (alchemyUrl) {
        transports.push(http(alchemyUrl, { batch: true, fetchOptions: { method: 'POST' } }))
      }

      if (chain.rpcUrls.default?.http?.[0]) {
        transports.push(http(chain.rpcUrls.default.http[0], { batch: true, fetchOptions: { method: 'POST' } }))
      }

      if (transports.length === 0) {
        continue // Better to skip than completely fail out for one unsupported default chain
      }

      const client = createPublicClient({
        batch: { multicall: true },
        chain,
        transport: fallback(transports),
      })

      this._blockchainClients.set(chain.id, client as unknown as IBlockchainClient)
    }
  }

  private _getAlchemyUrl(chainId: number): string | undefined {
    if (chainId === mainnet.id) {
      return `https://eth-mainnet.g.alchemy.com/v2/${this._apiKey}`
    } else if (chainId === base.id) {
      return `https://base-mainnet.g.alchemy.com/v2/${this._apiKey}`
    } else if (chainId === arbitrum.id) {
      return `https://arb-mainnet.g.alchemy.com/v2/${this._apiKey}`
    } else if (chainId === sonic.id) {
      return `https://sonic-mainnet.g.alchemy.com/v2/${this._apiKey}`
    }
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
