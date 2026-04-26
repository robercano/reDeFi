import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { ITokensManager } from '@thesolidchain/tokens-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { TokensManagerFactory } from '../src'
import type { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import type { IContractsProvider } from '@thesolidchain/contracts-provider-common'

describe('TokensManagerFactory', () => {
  let tokensManager: ITokensManager

  beforeEach(() => {
    TokensManagerFactory.providers = [] // Reset singleton state
    tokensManager = TokensManagerFactory.newTokensManager({
      configProvider: {} as IConfigurationProvider,
      blockchainClientProvider: {} as IBlockchainManager,
      contractsProvider: {} as IContractsProvider,
    })
  })

  afterEach(() => {
    TokensManagerFactory.providers = []
  })

  it('should initialize correctly', () => {
    expect(tokensManager).toBeDefined()
  })
})
