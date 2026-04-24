import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ChainFamilyMap, ChainIds } from '@thesolidchain/sdk-common'
import assert from 'assert'
import { TestManagerProvider, TestProviderType } from './mocks/TestManagerProvider'
import { TestManager } from './mocks/TestManagerWithFallbackProviders'
import { ICacheService } from '../src'

describe('SDK Server Common | Unit | ManagerProviderBase', () => {
  let testManager: TestManager

  beforeAll(async () => {
    testManager = new TestManager({
      providers: [
        new TestManagerProvider({
          type: TestProviderType.MainnetProvider,
          configProvider: {} as unknown as IConfigurationProvider,
          supportedChainIds: [ChainIds.Mainnet],
        }),
        new TestManagerProvider({
          type: TestProviderType.ArbitrumProvider,
          configProvider: {} as unknown as IConfigurationProvider,
          supportedChainIds: [ChainIds.ArbitrumOne],
        }),
      ],
    })
  })

  it('should return the best provider for the given chain', () => {
    const providerMainnet = testManager.getBestProvider({
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
    })
    assert(providerMainnet, 'Provider not found')

    expect(providerMainnet.type).toBe(TestProviderType.MainnetProvider)

    const providerArbitrum = testManager.getBestProvider({
      chainInfo: ChainFamilyMap.Arbitrum.ArbitrumOne,
    })
    assert(providerArbitrum, 'Provider not found')

    expect(providerArbitrum.type).toBe(TestProviderType.ArbitrumProvider)
  })

  it('should return the forced provider when requested, ignoring the chain', () => {
    const providerMainnet = testManager.getBestProvider({
      chainInfo: ChainFamilyMap.Arbitrum.ArbitrumOne,
      forceUseProvider: TestProviderType.MainnetProvider,
    })
    assert(providerMainnet, 'Provider not found')

    expect(providerMainnet.type).toBe(TestProviderType.MainnetProvider)

    const providerArbitrum = testManager.getBestProvider({
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      forceUseProvider: TestProviderType.ArbitrumProvider,
    })
    assert(providerArbitrum, 'Provider not found')

    expect(providerArbitrum.type).toBe(TestProviderType.ArbitrumProvider)
  })

  it('should throw when no provider is found for the given chain', () => {
    expect(() =>
      testManager.getBestProvider({
        chainInfo: ChainFamilyMap.Optimism.Optimism, // ChainId 10 is not supported
      }),
    ).toThrow('No provider found for chainId: 10')
  })

  describe('caching', () => {
    let mockCache: Map<string, string>
    let mockCacheService: ICacheService

    beforeEach(() => {
      mockCache = new Map()
      mockCacheService = {
        get: jest.fn().mockImplementation(async <T>(key: string) => mockCache.get(key) as unknown as T),
        set: jest.fn().mockImplementation(async <T>(key: string, value: T) => {
          mockCache.set(key, value as unknown as string)
        }),
      }

      testManager = new TestManager({
        providers: [
          new TestManagerProvider({
            type: TestProviderType.MainnetProvider,
            configProvider: {} as unknown as IConfigurationProvider,
            supportedChainIds: [ChainIds.Mainnet],
          }),
        ],
        cacheService: mockCacheService,
        cacheTTLSeconds: 60,
      })
    })

    it('should hit cache if available and not call action', async () => {
      mockCache.set('test-key', 'cached-value')
      const actionSpy = jest.fn().mockResolvedValue('fresh-value')

      const result = await testManager.execute({
        cacheKey: 'test-key',
        chainInfo: ChainFamilyMap.Ethereum.Mainnet,
        action: actionSpy,
      })

      expect(result).toBe('cached-value')
      expect(actionSpy).not.toHaveBeenCalled()
      expect(mockCacheService.get).toHaveBeenCalledWith('test-key')
      expect(mockCacheService.set).not.toHaveBeenCalled()
    })

    it('should miss cache, call action, and store in cache', async () => {
      const actionSpy = jest.fn().mockResolvedValue('fresh-value')

      const result = await testManager.execute({
        cacheKey: 'test-key',
        chainInfo: ChainFamilyMap.Ethereum.Mainnet,
        action: actionSpy,
      })

      expect(result).toBe('fresh-value')
      expect(actionSpy).toHaveBeenCalled()
      expect(mockCacheService.get).toHaveBeenCalledWith('test-key')
      expect(mockCacheService.set).toHaveBeenCalledWith('test-key', 'fresh-value', 60)
      expect(mockCache.get('test-key')).toBe('fresh-value')
    })

    it('should bypass cache if forceUseProvider is set', async () => {
      mockCache.set('test-key', 'cached-value')
      const actionSpy = jest.fn().mockResolvedValue('fresh-value')

      const result = await testManager.execute({
        cacheKey: 'test-key',
        chainInfo: ChainFamilyMap.Ethereum.Mainnet,
        forceUseProvider: TestProviderType.MainnetProvider,
        action: actionSpy,
      })

      expect(result).toBe('fresh-value')
      expect(actionSpy).toHaveBeenCalled()
      expect(mockCacheService.get).not.toHaveBeenCalled()
      expect(mockCacheService.set).not.toHaveBeenCalled()
    })
  })
})
