import * as React from 'react'
import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useSDK } from '../src/hooks/useSDK'
import { SDKProvider } from '../src/components/SDKProvider'
import { makeSDK, makeSDKWithSigner } from '@thesolidchain/sdk-client'

vi.mock('@thesolidchain/sdk-client', () => {
  return {
    makeSDK: vi.fn(() => ({
      eventBus: { on: vi.fn() },
      protocols: { getPosition: vi.fn() },
      tokens: { getTokenBySymbol: vi.fn() },
      oracle: { getSpotPrice: vi.fn() },
      swaps: { getSwapQuote: vi.fn() },
    })),
    makeSDKWithSigner: vi.fn(() => ({
      eventBus: { on: vi.fn() },
      protocols: { getPosition: vi.fn() },
      tokens: { getTokenBySymbol: vi.fn() },
      oracle: { getSpotPrice: vi.fn() },
      swaps: { getSwapQuote: vi.fn() },
    })),
  }
})

describe('SDK React | Unit | useSDK', () => {
  it('should initialize the SDK with context values and return memoized handlers', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SDKProvider apiURL="https://api.example.com" apiKey="test-key">
        {children}
      </SDKProvider>
    )

    const { result } = renderHook(() => useSDK({ chainId: 1, walletAddress: '0x123' }), { wrapper })

    expect(makeSDK).toHaveBeenCalledWith({ apiURL: 'https://api.example.com', apiKey: 'test-key' })

    // Check if handlers are returned
    expect(result.current.getChainInfo).toBeDefined()
    expect(result.current.getSpotPrice).toBeDefined()
    expect(result.current.getWalletAddress).toBeDefined()
    expect(result.current.getSwapQuote).toBeDefined()
  })

  it('should evaluate handlers directly without breaking', async () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SDKProvider apiURL="https://api.example.com">{children}</SDKProvider>
    )

    const { result } = renderHook(() => useSDK({ chainId: 1, walletAddress: '0x123' }), { wrapper })

    const spotPrice = result.current.getSpotPrice
    expect(typeof spotPrice).toBe('function')

    const tokenBySymbol = result.current.getTokenBySymbol
    expect(typeof tokenBySymbol).toBe('function')

    const chainInfo = result.current.getChainInfo()
    expect(chainInfo.chainId).toBe(1)
  })

  it('should call makeSDKWithSigner if a signer is provided', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SDKProvider apiURL="https://api.example.com">{children}</SDKProvider>
    )

    const dummySigner = {} as unknown as import('@thesolidchain/sdk-client').SDKSigner
    renderHook(() => useSDK({ chainId: 1, walletAddress: '0x123', signer: dummySigner }), { wrapper })

    expect(makeSDKWithSigner).toHaveBeenCalledWith({ apiURL: 'https://api.example.com', apiKey: undefined, signer: dummySigner })
  })

  it('getTargetChainInfo should return correct chain info for a specific chainId', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <SDKProvider apiURL="https://api.example.com">{children}</SDKProvider>
    )

    const { result } = renderHook(() => useSDK({ chainId: 1 }), { wrapper })

    const chainInfo = result.current.getTargetChainInfo(8453) // Base chainId
    expect(chainInfo.chainId).toBe(8453)
    expect(chainInfo.name).toBe('Base')
  })
})
