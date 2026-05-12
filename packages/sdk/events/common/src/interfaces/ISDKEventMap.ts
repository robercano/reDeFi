import type { IChainInfo } from '@thesolidchain/sdk-common'

/**
 * ISDKEventMap
 * Strongly typed mapping of event names to their payload structures
 */
export interface ISDKEventMap {
  /**
   * Fired when a new block is mined on a specific chain
   */
  NewBlockMined: {
    chainInfo: IChainInfo
    blockNumber: bigint
  }

  /**
   * Fired when a user's portfolio or position is updated
   */
  PositionUpdated: {
    userAddress: string
    protocolId?: string
    chainId?: number
  }

  // Add more events here as the SDK expands
}
