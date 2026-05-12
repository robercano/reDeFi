import { IManagerWithProviders } from '@thesolidchain/api-server-common'
import type { IChainInfo } from '@thesolidchain/sdk-common'
import { SubscriptionProviderType } from '../enums/SubscriptionProviderType'
import { ISubscriptionProvider } from './ISubscriptionProvider'

/**
 * ISubscriptionManager
 * Interface for the SubscriptionManager
 */
export interface ISubscriptionManager extends IManagerWithProviders<
  SubscriptionProviderType,
  ISubscriptionProvider
> {
  /**
   * subscribeToNewBlocks
   * Subscribes to new blocks on the blockchain, utilizing the available providers
   *
   * @param chainInfo The chain to listen to
   * @param callback Function to call when a new block is mined
   * @returns string A unique subscription ID to be used for unsubscribing
   */
  subscribeToNewBlocks(chainInfo: IChainInfo, callback: (blockNumber: bigint) => void): string

  /**
   * unsubscribe
   * Cancels an active subscription
   *
   * @param subscriptionId The ID of the subscription to cancel
   */
  unsubscribe(subscriptionId: string): void
}
