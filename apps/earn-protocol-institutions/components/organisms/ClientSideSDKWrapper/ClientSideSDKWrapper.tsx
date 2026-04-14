'use client'
import { SDKContextProvider } from '@thesolidchain/sdk-client-react'

import { sdkApiUrl } from '@/constants/sdk'

export const ClientSideSdkWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SDKContextProvider value={{ apiURL: sdkApiUrl }}>{children}</SDKContextProvider>
}
