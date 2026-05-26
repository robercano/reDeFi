import * as React from 'react'
import { SDKContextProvider } from './SDKContext'

/**
 * @name SDKProvider
 * @description The main context provider for the SDK. It wraps the application and provides the SDK
 *              configuration parameters (API URL and optional API key) to all descendant components.
 *
 * @param props - Component props
 * @param props.children - React child elements to render
 * @param props.apiURL - The URL of the backend API server
 * @param props.apiKey - An optional API key for authenticated requests
 */
export function SDKProvider({
  children,
  apiURL,
  apiKey,
}: {
  children: React.ReactNode
  apiURL: string
  apiKey?: string
}) {
  const value = {
    apiURL,
    apiKey,
  }

  return <SDKContextProvider value={value}>{children}</SDKContextProvider>
}
