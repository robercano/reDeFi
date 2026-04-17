'use client'

import React, { createContext, useContext, ReactNode } from 'react'
import { useSDK, SdkClient } from '@thesolidchain/sdk-react'

// Create a Context that will hold the instantiated SDK
const AppSDKContext = createContext<SdkClient | null>(null)

export function AppSDKProvider({ children }: { children: ReactNode }) {
  // Initialize the SDK once for the entire application.
  // We can pass the default configurations here, for instance setting mainnet as default.
  const sdk = useSDK({ chainId: 1 })

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
