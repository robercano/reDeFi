import { SubscriptionProviderType, ISubscriptionManager, ISubscriptionProvider } from '@thesolidchain/subscriptions-common'
import type { IChainInfo } from '@thesolidchain/sdk-common'

/**
 * @name SubscriptionManager
 * @description Implementation of ISubscriptionManager
 */
export class SubscriptionManager implements ISubscriptionManager {
  private _providers: Map<SubscriptionProviderType, ISubscriptionProvider>

  constructor(params: { providers: Map<SubscriptionProviderType, ISubscriptionProvider> }) {
    this._providers = params.providers
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

  public subscribeToNewBlocks(chainInfo: IChainInfo, callback: (blockNumber: bigint) => void): string {
    // Basic implementation: try the first available provider
    // In the future, this should support fallback mechanisms if the primary provider drops
    for (const [_, provider] of this._providers) {
      try {
        return provider.subscribeToNewBlocks(chainInfo, callback)
      } catch (error) {
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
      } catch (e) {
        // Ignore unsubscribe errors
      }
    }
  }
}
