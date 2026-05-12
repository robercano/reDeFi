import { describe, it, expect } from 'vitest'
import { SubscriptionManagerFactory } from '../src/implementation/SubscriptionManagerFactory'
import { SubscriptionProviderType } from '@thesolidchain/subscriptions-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { SubscriptionManager } from '../src/implementation/SubscriptionManager'
import { DefaultRpcSubscriptionProvider } from '../src/implementation/providers/DefaultRpcSubscriptionProvider'

describe('SubscriptionManagerFactory', () => {
  it('should create a new SubscriptionManager with DefaultRpcSubscriptionProvider', () => {
    const mockConfigProvider = {} as unknown as IConfigurationProvider
    const mockBlockchainClientProvider = {} as unknown as IBlockchainManager

    const manager = SubscriptionManagerFactory.newSubscriptionManager({
      configProvider: mockConfigProvider,
      blockchainClientProvider: mockBlockchainClientProvider,
    })

    expect(manager).toBeInstanceOf(SubscriptionManager)

    expect(manager.hasProvider(SubscriptionProviderType.DEFAULT_RPC)).toBe(true)

    const provider = manager.getProvider(SubscriptionProviderType.DEFAULT_RPC)
    expect(provider).toBeInstanceOf(DefaultRpcSubscriptionProvider)
  })
})
