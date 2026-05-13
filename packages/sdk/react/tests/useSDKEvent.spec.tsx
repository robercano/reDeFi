import * as React from 'react'
import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { useSDKEvent } from '../src/hooks/useSDKEvent'
import { SDKProvider } from '../src/components/SDKProvider'

const mockOn = vi.fn()
const mockOff = vi.fn()

vi.mock('../src/hooks/useSDK', () => {
  return {
    useSDK: vi.fn(() => ({
      eventBus: { 
        on: mockOn,
        off: mockOff
      }
    })),
  }
})

describe('SDK React | Unit | useSDKEvent', () => {
  it('should register and unregister event listeners on mount and unmount', () => {
    const callback = vi.fn()
    const { unmount } = renderHook(
      () => useSDKEvent({ chainId: 1, walletAddress: '0x123' }, 'NewBlockMined', callback)
    )

    expect(mockOn).toHaveBeenCalledWith('NewBlockMined', callback)
    
    unmount()
    
    expect(mockOff).toHaveBeenCalledWith('NewBlockMined', callback)
  })
})
