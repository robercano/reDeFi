import * as React from 'react'
import { SDKContextProvider } from './SDKContext'

export function SDKProvider({ children, apiURL, apiKey }: { children: React.ReactNode; apiURL: string; apiKey?: string }) {
  const value = {
    apiURL,
    apiKey,
  }

  return <SDKContextProvider value={value}>{children}</SDKContextProvider>
}
