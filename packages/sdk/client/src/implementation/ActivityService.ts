import {
  ActivityStatus,
  ActivityType,
  IActivityRecord,
  IActivityService,
  ChainId,
  getViemChain
} from '@thesolidchain/sdk-common'
import { ISDKManager } from '../interfaces/ISDKManager'
import { createPublicClient, http } from 'viem'

export class ActivityService implements IActivityService {
  private readonly _sdk: ISDKManager
  private readonly _storageKey = 'redefi_activity_history'

  constructor(sdk: ISDKManager) {
    this._sdk = sdk
  }

  private _getStorageKey(walletAddress: string): string {
    return `${this._storageKey}_${walletAddress.toLowerCase()}`
  }

  public async logActivity(record: IActivityRecord): Promise<void> {
    if (typeof window === 'undefined') return

    const key = this._getStorageKey(record.walletAddress)
    const existingStr = window.localStorage.getItem(key)
    let history: IActivityRecord[] = []

    if (existingStr) {
      try {
        history = JSON.parse(existingStr)
      } catch (e) {
        // ignore
      }
    }

    // Overwrite if exists, else prepend
    const index = history.findIndex((a) => a.id === record.id)
    if (index >= 0) {
      history[index] = record
    } else {
      history.unshift(record)
    }

    // Keep only last 100
    if (history.length > 100) {
      history = history.slice(0, 100)
    }

    window.localStorage.setItem(key, JSON.stringify(history))
  }

  public async getHistory(params: { walletAddress: string }): Promise<IActivityRecord[]> {
    if (typeof window === 'undefined') return []

    const key = this._getStorageKey(params.walletAddress)
    const existingStr = window.localStorage.getItem(key)
    if (existingStr) {
      try {
        return JSON.parse(existingStr)
      } catch (e) {
        return []
      }
    }
    return []
  }

  /**
   * Syncs the status of pending activities.
   * Modifies the local storage with any updated statuses.
   */
  public async syncPending(walletAddress: string): Promise<void> {
    const history = await this.getHistory({ walletAddress })
    if (history.length === 0) return

    let hasUpdates = false

    const updated = await Promise.all(
      history.map(async (record) => {
        if (record.status !== ActivityStatus.PENDING) {
          return record
        }

        try {
          if (record.type === ActivityType.INTENT) {
            const res = await this._sdk.intentSwaps.checkOrder({
              orderId: record.id,
              chainId: record.chainId as ChainId,
            })
            if (res?.order?.status) {
              const csStatus = res.order.status
              let mappedStatus: ActivityStatus = record.status
              
              if (csStatus === 'fulfilled') mappedStatus = ActivityStatus.SUCCESS
              else if (csStatus === 'cancelled') mappedStatus = ActivityStatus.CANCELLED
              else if (csStatus === 'expired') mappedStatus = ActivityStatus.EXPIRED
              
              if (mappedStatus !== record.status) {
                hasUpdates = true
                return { ...record, status: mappedStatus }
              }
            }
          } else if (record.type === ActivityType.TRANSACTION) {
            // For transactions, we need to check the blockchain receipt.
            try {
              const viemChain = getViemChain(record.chainId as ChainId)
              const client = createPublicClient({ chain: viemChain, transport: http() })
              
              const receipt = await client.getTransactionReceipt({ hash: record.id as `0x${string}` })
              if (receipt) {
                hasUpdates = true
                return {
                  ...record,
                  status: receipt.status === 'success' ? ActivityStatus.SUCCESS : ActivityStatus.FAILED,
                }
              }
            } catch (err) {
              // Receipt might not be found yet if pending
            }
          }
        } catch (err) {
          console.warn(`[ActivityService] Failed to sync record ${record.id}`, err)
        }

        return record
      })
    )

    if (hasUpdates) {
      const key = this._getStorageKey(walletAddress)
      window.localStorage.setItem(key, JSON.stringify(updated))
    }
  }
}
