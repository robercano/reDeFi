import { describe, it, expect } from 'vitest'
import { PortfolioManagerFactory } from '../src/implementation/PortfolioManagerFactory'
import { PortfolioManager } from '../src/implementation/PortfolioManager'
import { ITokensManager } from '@thesolidchain/tokens-common'
import { IOracleManager } from '@thesolidchain/oracle-common'

describe('PortfolioManagerFactory', () => {
  it('should construct a new PortfolioManager', () => {
    const mockTokensManager = {} as ITokensManager
    const mockOracleManager = {} as IOracleManager

    const manager = PortfolioManagerFactory.newPortfolioManager({
      tokensManager: mockTokensManager,
      oracleManager: mockOracleManager,
    })

    expect(manager).toBeInstanceOf(PortfolioManager)
  })
})
