import { createPublicClient, defineChain, fallback, http, type Chain, type Transport } from 'viem'
import { arbitrum, base, mainnet, sonic } from 'viem/chains'

import {
  IBlockchainClient,
  IBlockchainClientProvider,
} from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { hyperliquid, type IChainInfo } from '@thesolidchain/sdk-common'
import { assert } from 'console'
import { getForkUrl } from './getForkUrl'

/**
 * Blockchain client provider implements the IBlockchainClientProvider interface
 * @implements IBlockchainClientProvider
 */
export class BlockchainClientProvider implements IBlockchainClientProvider {
  private readonly _blockchainClients: Record<number, IBlockchainClient> = {}
  private readonly _chains: Record<number, Chain> = {}
  private readonly _configProvider: IConfigurationProvider

  /** CONSTRUCTOR */
  constructor(params: { configProvider: IConfigurationProvider }) {
    this._configProvider = params.configProvider
    this._loadClients([mainnet, arbitrum, base, sonic, hyperliquid])
  }

  /** PUBLIC */

  /** @see IBlockchainClientProvider.getBlockchainClient */
  public getBlockchainClient(params: {
    chainInfo: IChainInfo
    rpcUrl?: string
  }): IBlockchainClient {
    const chain = this._chains[params.chainInfo.chainId]
    if (!chain) {
      throw new Error(`Chain not supported: ${params.chainInfo}`)
    }

    if (params.rpcUrl) {
      const customChain = defineChain({
        ...chain,
        rpcUrls: {
          default: {
            http: [params.rpcUrl],
          },
        },
      })

      return this._createBlockchainClient({ rpcUrl: params.rpcUrl, chain: customChain })
    } else {
      const client = this._blockchainClients[params.chainInfo.chainId]
      assert(
        client,
        'Chain was found for the given chainInfo but the blockchain client was not, this should never happen',
      )

      return client
    }
  }

  /** PRIVATE */

  private _loadClients(chains: Chain[]) {
    let alchemyApiKey: string | undefined
    try {
      alchemyApiKey = this._configProvider.getConfigurationItem({
        name: 'ALCHEMY_ENDPOINT_API_KEY',
      })
    } catch {
      // It's acceptable for ALCHEMY_ENDPOINT_API_KEY to not be set
    }

    for (const chain of chains) {
      let forkRpc: string | undefined = undefined
      try {
        const useForkEnv = this._configProvider.getConfigurationItem({ name: 'SDK_USE_FORK' })
        const forkConfig = this._configProvider.getConfigurationItem({ name: 'SDK_FORK_CONFIG' })

        const useFork = useForkEnv === 'true'
        if (useFork && forkConfig) {
          forkRpc = getForkUrl(forkConfig, chain.id)
        }
      } catch {
        // FORK CONFIG not found, will not use local fork
      }

      const transports: Transport[] = []

      // If a fork is established, we prepend it as the highest priority
      if (forkRpc) {
        transports.push(http(forkRpc, { batch: true, fetchOptions: { method: 'POST' } }))
      }

      // Add Alchemy if API key is provided
      if (alchemyApiKey) {
        let alchemyUrl: string | undefined

        if (chain.id === mainnet.id) {
          alchemyUrl = `https://eth-mainnet.g.alchemy.com/v2/${alchemyApiKey}`
        } else if (chain.id === base.id) {
          alchemyUrl = `https://base-mainnet.g.alchemy.com/v2/${alchemyApiKey}`
        } else if (chain.id === arbitrum.id) {
          alchemyUrl = `https://arb-mainnet.g.alchemy.com/v2/${alchemyApiKey}`
        } else if (chain.id === sonic.id) {
          alchemyUrl = `https://sonic-mainnet.g.alchemy.com/v2/${alchemyApiKey}`
        }

        if (alchemyUrl) {
          transports.push(
            http(alchemyUrl, {
              batch: true,
              fetchOptions: { method: 'POST' },
            }),
          )
        }
      }

      // Always fallback to the public URL that Viem designates for this chain
      if (chain.rpcUrls.default?.http?.[0]) {
        transports.push(
          http(chain.rpcUrls.default.http[0], {
            batch: true,
            fetchOptions: { method: 'POST' },
          }),
        )
      }

      if (transports.length === 0) {
        throw new Error(`No available RPC transports configured for chain: ${chain.id}`)
      }

      const transport = fallback(transports)

      const client = createPublicClient({
        batch: {
          multicall: true,
        },
        chain,
        transport,
      })

      this._blockchainClients[chain.id] = client
      this._chains[chain.id] = chain
    }
  }

  /**
   * Creates a blockchain client with the given parameters
   *
   * @param rpcUrl RPC URL to be used for this client
   * @param chain Chain for which we want to get the blockchain client
   *
   * @returns The blockchain client
   */
  private _createBlockchainClient(params: { rpcUrl: string; chain: Chain }) {
    const transport = http(params.rpcUrl, {
      batch: true,
      fetchOptions: {
        method: 'POST',
      },
    })

    return createPublicClient({
      batch: {
        multicall: true,
      },
      chain: params.chain,
      transport,
    })
  }
}
