import {
  SubscriptionProviderType,
  ISubscriptionProvider,
} from '@thesolidchain/subscriptions-common'
import { ChainIds, type IChainInfo, type ChainId } from '@thesolidchain/sdk-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'

/**
 * DefaultRpcSubscriptionProvider
 * Implementation of ISubscriptionProvider using standard viem client
 */
export class DefaultRpcSubscriptionProvider implements ISubscriptionProvider {
  public type: SubscriptionProviderType
  public configProvider: IConfigurationProvider
  private _blockchainManager: IBlockchainManager

  // Track active unwatch functions by a generated subscription ID
  private _subscriptions: Map<string, () => void>
  private _subIdCounter: number

  constructor(params: {
    type: SubscriptionProviderType
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
  }) {
    this.type = params.type
    this.configProvider = params.configProvider
    this._blockchainManager = params.blockchainClientProvider
    this._subscriptions = new Map()
    this._subIdCounter = 0
  }

  public getSupportedChainIds(): ChainId[] {
    return Object.values(ChainIds) as ChainId[]
  }

  /**
   * subscribeToNewBlocks
   * Subscribes to new blocks on the blockchain
   *
   * @param params.chainInfo The chain to listen to
   * @param params.callback Function to call when a new block is mined
   * @returns string A unique subscription ID to be used for unsubscribing
   */
  public subscribeToNewBlocks(
    chainInfo: IChainInfo,
    callback: (blockNumber: bigint) => void,
  ): string {
    const client = this._blockchainManager.getBlockchainClient({ chainInfo })

    // viem watchBlockNumber
    const unwatch = client.watchBlockNumber({
      onBlockNumber: (blockNumber: bigint) => {
        callback(blockNumber)
      },
      onError: (error: Error) => {
        console.error(`[SubscriptionProvider] Error watching blocks on ${chainInfo.name}:`, error)
      },
    })

    const subId = `${this.type}-block-${++this._subIdCounter}`
    this._subscriptions.set(subId, unwatch)

    return subId
  }

  /**
   * unsubscribe
   * Cancels a subscription
   *
   * @param params.subscriptionId The ID of the subscription to cancel
   */
  public unsubscribe(subscriptionId: string): void {
    const unwatch = this._subscriptions.get(subscriptionId)
    if (unwatch) {
      unwatch()
      this._subscriptions.delete(subscriptionId)
    }
  }
}
