import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ChainFamilyMap, ChainIds } from '@thesolidchain/sdk-common'
import assert from 'assert'
import { TestManagerProvider, TestProviderType } from './mocks/TestManagerProvider'
import { TestManager } from './mocks/TestManagerWithFallbackProviders'

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

  it('should throw when the forced provider is not found', () => {
    expect(() =>
      testManager.getBestProvider({
        chainInfo: ChainFamilyMap.Ethereum.Mainnet,
        forceUseProvider: 'UnknownProvider' as TestProviderType,
      })
    ).toThrow('Forced provider not found: UnknownProvider')
  })

  it('should execute action with the correct provider in _executeWithFallback', async () => {
    const result = await testManager.executeWithFallback({
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      action: async (provider) => provider.type,
    })
    expect(result).toBe(TestProviderType.MainnetProvider)
  })

  it('should execute action with forced provider in _executeWithFallback', async () => {
    const result = await testManager.executeWithFallback({
      chainInfo: ChainFamilyMap.Arbitrum.ArbitrumOne,
      forceUseProvider: TestProviderType.MainnetProvider,
      action: async (provider) => provider.type,
    })
    expect(result).toBe(TestProviderType.MainnetProvider)
  })

  it('should throw in _executeWithFallback when forced provider is not found', async () => {
    await expect(
      testManager.executeWithFallback({
        chainInfo: ChainFamilyMap.Ethereum.Mainnet,
        forceUseProvider: 'UnknownProvider' as TestProviderType,
        action: async (provider) => provider.type,
      })
    ).rejects.toThrow('Forced provider not found: UnknownProvider')
  })

  it('should throw in _executeWithFallback when no provider for chain is found', async () => {
    await expect(
      testManager.executeWithFallback({
        chainInfo: ChainFamilyMap.Optimism.Optimism,
        action: async (provider) => provider.type,
      })
    ).rejects.toThrow('No provider found for chainId: 10')
  })

  it('should fallback to the next provider if the first fails in _executeWithFallback', async () => {
    // Create a manager with two providers for the same chain
    const fallbackManager = new TestManager({
      providers: [
        new TestManagerProvider({
          type: TestProviderType.MainnetProvider,
          configProvider: {} as unknown as IConfigurationProvider,
          supportedChainIds: [ChainIds.Mainnet],
        }),
        new TestManagerProvider({
          type: TestProviderType.ArbitrumProvider, // Re-using type for testing
          configProvider: {} as unknown as IConfigurationProvider,
          supportedChainIds: [ChainIds.Mainnet],
        }),
      ],
    })

    const result = await fallbackManager.executeWithFallback({
      chainInfo: ChainFamilyMap.Ethereum.Mainnet,
      action: async (provider) => {
        if (provider.type === TestProviderType.MainnetProvider) {
          throw new Error('First provider failed')
        }
        return provider.type
      },
    })
    
    expect(result).toBe(TestProviderType.ArbitrumProvider)
  })

  it('should throw the last error if all providers fail in _executeWithFallback', async () => {
    await expect(
      testManager.executeWithFallback({
        chainInfo: ChainFamilyMap.Ethereum.Mainnet,
        action: async () => {
          throw new Error('All providers failed exception')
        },
      })
    ).rejects.toThrow('All providers failed exception')
  })
})
