'use client'

import { SDKProvider } from '@thesolidchain/sdk-react'
import React from 'react'
import { AppSDKProvider } from './AppSDKContext'

export function Providers({ children }: { children: React.ReactNode }) {
  const apiURL = process.env.NEXT_PUBLIC_API_URL
  const apiKey = process.env.NEXT_PUBLIC_API_KEY
  
  return (
    <SDKProvider apiURL={apiURL ?? ''} apiKey={apiKey ?? ''}>
      <AppSDKProvider>
        {children}
      </AppSDKProvider>
    </SDKProvider>
  )
}
