import {
  SubscriptionProviderType,
  ISubscriptionManager,
  ISubscriptionProvider,
} from '@thesolidchain/subscriptions-common'
import type { IChainInfo } from '@thesolidchain/sdk-common'
import { IEventBus } from '@thesolidchain/events-common'

/**
 * SubscriptionManager
 * Implementation of ISubscriptionManager
 */
export class SubscriptionManager implements ISubscriptionManager {
  private _providers: Map<SubscriptionProviderType, ISubscriptionProvider>
  private _eventBus?: IEventBus

  constructor(params: {
    providers: Map<SubscriptionProviderType, ISubscriptionProvider>
    eventBus?: IEventBus
  }) {
    this._providers = params.providers
    this._eventBus = params.eventBus
  }

  public getProvider(type: SubscriptionProviderType): ISubscriptionProvider | undefined {
    return this._providers.get(type)
  }

  public hasProvider(type: SubscriptionProviderType): boolean {
    return this._providers.has(type)
  }

  public getProviders(): Map<SubscriptionProviderType, ISubscriptionProvider> {
    return this._providers
  }

  public subscribeToNewBlocks(
    chainInfo: IChainInfo,
    callback: (blockNumber: bigint) => void,
  ): string {
    // Basic implementation: try the first available provider
    // In the future, this should support fallback mechanisms if the primary provider drops
    for (const [_, provider] of this._providers) {
      try {
        return provider.subscribeToNewBlocks(chainInfo, (blockNumber) => {
          if (this._eventBus) {
            this._eventBus.emit('NewBlockMined', { chainInfo, blockNumber })
          }
          callback(blockNumber)
        })
      } catch (_error) {
        console.warn(`Provider failed to subscribe, trying next...`)
      }
    }
    throw new Error('All subscription providers failed to subscribe to new blocks')
  }

  public unsubscribe(subscriptionId: string): void {
    for (const [_, provider] of this._providers) {
      try {
        // Broadly attempt to unsubscribe across all providers
        // since we don't store which provider owns which ID yet
        provider.unsubscribe(subscriptionId)
      } catch (_e) {
        // Ignore unsubscribe errors
      }
    }
  }
}
