import { describe, it, expect, vi, beforeEach } from 'vitest'
import { SubscriptionManager } from '../src/implementation/SubscriptionManager'
import { ISubscriptionProvider, SubscriptionProviderType } from '@thesolidchain/subscriptions-common'
import type { IChainInfo } from '@thesolidchain/sdk-common'

describe('SubscriptionManager', () => {
  let mockProvider1: ISubscriptionProvider
  let mockProvider2: ISubscriptionProvider
  let providersMap: Map<SubscriptionProviderType, ISubscriptionProvider>
  let manager: SubscriptionManager
  let mockChainInfo: IChainInfo

  beforeEach(() => {
    mockProvider1 = {
      subscribeToNewBlocks: vi.fn(),
      unsubscribe: vi.fn(),
    } as unknown as ISubscriptionProvider

    mockProvider2 = {
      subscribeToNewBlocks: vi.fn(),
      unsubscribe: vi.fn(),
    } as unknown as ISubscriptionProvider

    providersMap = new Map<SubscriptionProviderType, ISubscriptionProvider>()
    providersMap.set(SubscriptionProviderType.ALCHEMY, mockProvider1)
    providersMap.set(SubscriptionProviderType.INFURA, mockProvider2)

    manager = new SubscriptionManager({ providers: providersMap })

    mockChainInfo = { id: 1, name: 'Ethereum' } as unknown as IChainInfo
  })

  describe('constructor', () => {
    it('should initialize with provided providers', () => {
      expect(manager.getProviders()).toBe(providersMap)
    })
  })

  describe('getProvider', () => {
    it('should return the correct provider for a given type', () => {
      expect(manager.getProvider(SubscriptionProviderType.ALCHEMY)).toBe(mockProvider1)
      expect(manager.getProvider(SubscriptionProviderType.INFURA)).toBe(mockProvider2)
    })

    it('should return undefined for a non-existent provider type', () => {
      expect(manager.getProvider('NON_EXISTENT' as SubscriptionProviderType)).toBeUndefined()
    })
  })

  describe('hasProvider', () => {
    it('should return true if provider exists', () => {
      expect(manager.hasProvider(SubscriptionProviderType.ALCHEMY)).toBe(true)
    })

    it('should return false if provider does not exist', () => {
      expect(manager.hasProvider('NON_EXISTENT' as SubscriptionProviderType)).toBe(false)
    })
  })

  describe('subscribeToNewBlocks', () => {
    it('should subscribe using the first available provider', () => {
      vi.mocked(mockProvider1.subscribeToNewBlocks).mockReturnValue('sub-1')

      const callback = vi.fn()
      const result = manager.subscribeToNewBlocks(mockChainInfo, callback)

      expect(result).toBe('sub-1')
      expect(mockProvider1.subscribeToNewBlocks).toHaveBeenCalledWith(mockChainInfo, callback)
      expect(mockProvider2.subscribeToNewBlocks).not.toHaveBeenCalled()
    })

    it('should fallback to the next provider if the first one throws', () => {
      vi.mocked(mockProvider1.subscribeToNewBlocks).mockImplementation(() => {
        throw new Error('Provider 1 failed')
      })
      vi.mocked(mockProvider2.subscribeToNewBlocks).mockReturnValue('sub-2')

      const callback = vi.fn()
      const result = manager.subscribeToNewBlocks(mockChainInfo, callback)

      expect(result).toBe('sub-2')
      expect(mockProvider1.subscribeToNewBlocks).toHaveBeenCalledWith(mockChainInfo, callback)
      expect(mockProvider2.subscribeToNewBlocks).toHaveBeenCalledWith(mockChainInfo, callback)
    })

    it('should throw an error if all providers fail', () => {
      vi.mocked(mockProvider1.subscribeToNewBlocks).mockImplementation(() => {
        throw new Error('Provider 1 failed')
      })
      vi.mocked(mockProvider2.subscribeToNewBlocks).mockImplementation(() => {
        throw new Error('Provider 2 failed')
      })

      const callback = vi.fn()

      expect(() => {
        manager.subscribeToNewBlocks(mockChainInfo, callback)
      }).toThrow('All subscription providers failed to subscribe to new blocks')
    })
  })

  describe('unsubscribe', () => {
    it('should call unsubscribe on all providers and ignore errors', () => {
      vi.mocked(mockProvider1.unsubscribe).mockImplementation(() => {
        throw new Error('Unsubscribe failed')
      })
      
      manager.unsubscribe('sub-1')

      expect(mockProvider1.unsubscribe).toHaveBeenCalledWith('sub-1')
      expect(mockProvider2.unsubscribe).toHaveBeenCalledWith('sub-1')
    })
  })
})
