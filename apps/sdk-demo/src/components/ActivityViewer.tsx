'use client'

import React, { useState, useEffect } from 'react'
import { useAppSDK } from '../app/AppSDKContext'
import { useAccount } from 'wagmi'
import { ActivityStatus, IActivityRecord } from '@thesolidchain/sdk-common'

export function ActivityViewer() {
  const [isOpen, setIsOpen] = useState(false)
  const [activities, setActivities] = useState<IActivityRecord[]>([])
  const { address } = useAccount()
  const sdk = useAppSDK()

  // Load and poll for activities
  useEffect(() => {
    if (!address || !isOpen) return

    const fetchActivities = async () => {
      // 1. Ask SDK to sync pending statuses on chain / api
      await sdk.activity.syncPending(address)
      // 2. Fetch the updated list
      const list = await sdk.activity.getHistory({ walletAddress: address })
      setActivities(list)
    }

    fetchActivities()

    // Poll every 5 seconds while open
    const interval = setInterval(fetchActivities, 5000)

    return () => clearInterval(interval)
  }, [address, isOpen, sdk])

  const pendingCount = activities.filter((a) => a.status === ActivityStatus.PENDING).length

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        data-testid="activity-btn"
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-700 hover:border-neutral-500 transition-colors"
      >
        <span className="text-sm font-semibold">Activity</span>
        {pendingCount > 0 && (
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[var(--neon-orange)] text-black text-xs font-bold animate-pulse">
            {pendingCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 max-h-[400px] overflow-y-auto bg-black/90 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] z-50">
          <div className="p-4 border-b border-neutral-800 flex justify-between items-center sticky top-0 bg-black/90 backdrop-blur-xl">
            <h3 className="text-white font-bold">Activity History</h3>
            <button onClick={() => setIsOpen(false)} className="text-neutral-400 hover:text-white">
              ✕
            </button>
          </div>

          <div className="p-2 space-y-1">
            {!address ? (
              <div className="p-4 text-center text-sm text-neutral-500">
                Connect wallet to view history.
              </div>
            ) : activities.length === 0 ? (
              <div className="p-4 text-center text-sm text-neutral-500">
                No recent activity found.
              </div>
            ) : (
              activities.map((act) => (
                <div
                  key={act.id}
                  className="p-3 rounded-lg hover:bg-white/5 transition-colors flex flex-col gap-1 border border-transparent hover:border-neutral-800"
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-semibold text-white">{act.metadata.title}</span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase
                      ${act.status === ActivityStatus.SUCCESS ? 'bg-green-500/20 text-green-400' : ''}
                      ${act.status === ActivityStatus.PENDING ? 'bg-orange-500/20 text-orange-400 animate-pulse' : ''}
                      ${act.status === ActivityStatus.FAILED || act.status === ActivityStatus.CANCELLED || act.status === ActivityStatus.EXPIRED ? 'bg-red-500/20 text-red-400' : ''}
                    `}
                    >
                      {act.status}
                    </span>
                  </div>

                  <div className="text-xs text-neutral-500 flex justify-between items-center">
                    <span>{new Date(act.timestamp).toLocaleTimeString()}</span>

                    {act.type === 'intent' && (
                      <a
                        href={`https://explorer.cow.fi/sepolia/orders/${act.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--neon-cyan)] hover:underline"
                      >
                        View Intent ↗
                      </a>
                    )}
                    {act.type === 'transaction' && (
                      <a
                        href={`https://sepolia.etherscan.io/tx/${act.id}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[var(--neon-cyan)] hover:underline"
                      >
                        View Tx ↗
                      </a>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
