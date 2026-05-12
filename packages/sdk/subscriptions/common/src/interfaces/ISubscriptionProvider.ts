import type { IChainInfo } from '@thesolidchain/sdk-common'
import { IManagerProvider } from '@thesolidchain/api-server-common'
import { SubscriptionProviderType } from '../enums/SubscriptionProviderType'

/**
 * ISubscriptionProvider
 * Interface for a subscription provider which listens to blockchain events
 */
export interface ISubscriptionProvider extends IManagerProvider<SubscriptionProviderType> {
  /**
   * subscribeToNewBlocks
   * Subscribes to new blocks on the blockchain
   *
   * @param chainInfo The chain to listen to
   * @param callback Function to call when a new block is mined
   * @returns string A unique subscription ID to be used for unsubscribing
   */
  subscribeToNewBlocks(chainInfo: IChainInfo, callback: (blockNumber: bigint) => void): string

  /**
   * unsubscribe
   * Cancels a subscription
   *
   * @param subscriptionId The ID of the subscription to cancel
   */
  unsubscribe(subscriptionId: string): void
}
