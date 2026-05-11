import { describe, it, expect, vi } from 'vitest'
import { SwapManager } from '../src/implementation/SwapManager'
import { SwapManagerFactory } from '../src/implementation/SwapManagerFactory'
import { OneInchSwapProvider } from '../src/implementation/oneinch/OneInchSwapProvider'
import type { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'

vi.mock('../src/implementation/oneinch/OneInchSwapProvider', () => ({
  OneInchSwapProvider: vi.fn().mockImplementation(() => ({
    getSupportedChainIds: () => [1]
  }))
}))

describe('SwapManagerFactory', () => {
  it('should create a SwapManager instance', () => {
    const mockConfigProvider = {} as IConfigurationProvider
    const manager = SwapManagerFactory.newSwapManager({ configProvider: mockConfigProvider })
    expect(manager).toBeInstanceOf(SwapManager)
    expect(OneInchSwapProvider).toHaveBeenCalledWith({ configProvider: mockConfigProvider })
  })
})
