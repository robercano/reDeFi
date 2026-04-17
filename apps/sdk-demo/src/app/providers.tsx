'use client'

import React, { useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'

import { wagmiConfig } from './wagmi'
import { SDKProvider } from '@thesolidchain/sdk-react'
import { AppSDKProvider } from './AppSDKContext'

export function Providers({ children }: { children: React.ReactNode }) {
  // Setup query client with stable instance suitable for Next.js App Router
  const [queryClient] = useState(() => new QueryClient())
  
  const apiURL = process.env.NEXT_PUBLIC_API_URL
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <SDKProvider apiURL={apiURL ?? ''} apiKey={apiKey ?? ''}>
            <AppSDKProvider>
              {children}
            </AppSDKProvider>
          </SDKProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
