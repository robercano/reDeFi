export enum ActivityType {
  TRANSACTION = 'transaction',
  INTENT = 'intent',
}

export enum ActivityStatus {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
  EXPIRED = 'expired',
}

export interface IActivityRecord {
  /** The unique ID. TX hash for transactions, Order ID for intents. */
  id: string
  /** The type of activity */
  type: ActivityType
  /** The current status */
  status: ActivityStatus
  /** The chain ID on which this activity takes place */
  chainId: number
  /** The UNIX timestamp (ms) when this activity was created */
  timestamp: number
  /** The user's wallet address this activity belongs to */
  walletAddress: string
  /** Human-readable metadata */
  metadata: {
    /** Main title (e.g., "Wrap ETH to WETH") */
    title: string
    /** Optional detailed description */
    description?: string
    /** Optional link to explorer */
    explorerLink?: string
  }
}

export interface IActivityService {
  /**
   * Logs a new activity record or overwrites an existing one with the same ID.
   */
  logActivity(record: IActivityRecord): Promise<void>

  /**
   * Retrieves the activity history for a specific wallet address.
   */
  getHistory(params: { walletAddress: string }): Promise<IActivityRecord[]>
}
