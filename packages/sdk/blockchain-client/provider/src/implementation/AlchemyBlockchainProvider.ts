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
 * AlchemyBlockchainProvider implements the IBlockchainClientProvider interface for Alchemy
 */
export class AlchemyBlockchainProvider implements IBlockchainClientProvider {
  /** The unique identifier representing this provider type. */
  public readonly type = BlockchainProviderType.Alchemy
  /** The configuration provider used to fetch API keys and other settings. */
  public readonly configProvider: IConfigurationProvider

  private readonly _blockchainClients: Map<number, IBlockchainClient> = new Map()
  private readonly _supportedChains: Chain[] = [mainnet, arbitrum, base, sonic, hyperliquid]
  private readonly _apiKey: string
  private readonly _tenderlyForkUrl: string | undefined

  /**
   * Initializes a new instance of the AlchemyBlockchainProvider.
   *
   * @param params - The initialization parameters.
   * @param params.configProvider - The configuration provider dependency.
   * @throws {Error} If ALCHEMY_ENDPOINT_API_KEY is missing from configuration.
   */
  constructor(params: { configProvider: IConfigurationProvider }) {
    this.configProvider = params.configProvider

    const alchemyApiKey = this.configProvider.getConfigurationItem({
      name: 'ALCHEMY_ENDPOINT_API_KEY',
    })
    this._apiKey = alchemyApiKey || ''

    try {
      this._tenderlyForkUrl = this.configProvider.getConfigurationItem({
        name: 'E2E_SDK_FORK_URL_MAINNET',
      }) as string

      const environmentTag = this.configProvider.getConfigurationItem({
        name: 'ENVIRONMENT_TAG',
      }) as string
      
      // Safety check: Ensure the fork is ONLY used in development mode
      if (environmentTag !== 'development' && environmentTag !== 'dev') {
        this._tenderlyForkUrl = undefined
      }
    } catch (e) {
      // Optional for production, only required for E2E testing
      this._tenderlyForkUrl = undefined
    }

    this._initializeClients()
  }

  /**
   * Returns a list of chain IDs supported by this provider.
   *
   * @returns An array of supported ChainId values.
   */
  public getSupportedChainIds(): ChainId[] {
    return this._supportedChains.map((chain) => chain.id as ChainId)
  }

  /**
   * Retrieves a blockchain client instance for the specified chain.
   * If an `rpcUrl` is provided, a new temporary client is created and returned.
   * Otherwise, the shared initialized client for the chain is returned.
   *
   * @param params - The parameters required to get a blockchain client.
   * @param params.chainInfo - The chain information.
   * @param params.rpcUrl - Optional custom RPC URL to use for the client.
   * @returns The viem public client cast to IBlockchainClient.
   * @throws {Error} If the chain is unsupported or no client has been initialized.
   */
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

  /**
   * Initializes viem public clients for all supported chains.
   * Uses fallback transports with the Alchemy URL prioritized over the chain's default HTTP RPC.
   * @internal
   */
  private _initializeClients(): void {
    for (const chain of this._supportedChains) {
      const alchemyUrl = this._getAlchemyUrl(chain.id)

      const transports: Transport[] = []

      if (alchemyUrl) {
        transports.push(http(alchemyUrl, { batch: true, fetchOptions: { method: 'POST' } }))
      }

      if (chain.rpcUrls.default?.http?.[0]) {
        transports.push(
          http(chain.rpcUrls.default.http[0], { batch: true, fetchOptions: { method: 'POST' } }),
        )
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
    if (chainId === mainnet.id && this._tenderlyForkUrl) {
      return this._tenderlyForkUrl
    }
    
    if (!this._apiKey) return undefined
    
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
