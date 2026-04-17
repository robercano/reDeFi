'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useSDK, SdkClient } from '@thesolidchain/sdk-react'
import { useAccount, useChainId } from 'wagmi'

// Create a Context that will hold the instantiated SDK
const AppSDKContext = createContext<SdkClient | null>(null)

export function AppSDKProvider({ children }: { children: ReactNode }) {
  // Capture the dynamically injected state from the user's Web3 Wallet
  const chainId = useChainId()
  const { address } = useAccount()

  // Initialize the SDK, syncing it perfectly with the connected wallet.
  // The server handles data, but formulating write operations requires awareness of who the user is.
  // Fall back to mainnet (1) if no chain is actively connected.
  const sdk = useSDK({ 
    chainId: chainId ?? 1, 
    walletAddress: address 
  })

  return (
    <AppSDKContext.Provider value={sdk}>
      {children}
    </AppSDKContext.Provider>
  )
}

// A custom hook so components can easily consume the pre-initialized SDK
export function useAppSDK() {
  const context = useContext(AppSDKContext)
  if (!context) {
    throw new Error('useAppSDK must be used within an AppSDKProvider')
  }
  return context
}
