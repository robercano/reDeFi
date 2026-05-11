import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { PortfolioManager } from '../src/implementation/PortfolioManager'
import { ITokensManager } from '@thesolidchain/tokens-common'
import { IOracleManager } from '@thesolidchain/oracle-common'
import { ICacheService } from '@thesolidchain/api-server-common'
import { IUser, Holding, CommonTokenSymbols, FiatCurrency, FiatCurrencyAmount, ITokenAmount, IToken, IAddress, ChainIds } from '@thesolidchain/sdk-common'

describe('PortfolioManager', () => {
  let mockTokensManager: import('vitest').Mocked<ITokensManager>
  let mockOracleManager: import('vitest').Mocked<IOracleManager>
  let mockCacheService: import('vitest').Mocked<ICacheService>
  let manager: PortfolioManager

  const mockUser: IUser = {
    wallet: { address: { value: '0x123' as IAddress } as any },
    chainInfo: { chainId: ChainIds.Mainnet }
  } as IUser

  beforeEach(() => {
    mockTokensManager = {
      getTokenBalanceBySymbol: vi.fn(),
    } as unknown as import('vitest').Mocked<ITokensManager>

    mockOracleManager = {
      getSpotPrice: vi.fn(),
    } as unknown as import('vitest').Mocked<IOracleManager>

    mockCacheService = {
      get: vi.fn(),
      set: vi.fn(),
    } as unknown as import('vitest').Mocked<ICacheService>

    manager = new PortfolioManager({
      tokensManager: mockTokensManager,
      oracleManager: mockOracleManager,
      cacheService: mockCacheService,
    })
    
    vi.spyOn(console, 'log').mockImplementation(() => {})
    vi.spyOn(console, 'warn').mockImplementation(() => {})
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('getUserPortfolio should return cached portfolio if available', async () => {
    const cachedData = {
      user: mockUser,
      walletHoldings: [],
      totalFiatValue: FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '100' }),
    }
    mockCacheService.get.mockResolvedValue(cachedData)

    const portfolio = await manager.getUserPortfolio({ user: mockUser })

    expect(portfolio.totalFiatValue.amount).toBe('100')
    expect(mockCacheService.get).toHaveBeenCalledWith('PortfolioManager:getUserPortfolio:0x123')
    expect(mockTokensManager.getTokenBalanceBySymbol).not.toHaveBeenCalled()
  })

  it('getUserPortfolio should fetch holdings and compute portfolio if not cached', async () => {
    mockCacheService.get.mockResolvedValue(null)

    // Mock getTokenBalanceBySymbol to return valid balance for WETH, null/zero for others
    const mockToken = { chainInfo: { chainId: ChainIds.Mainnet } } as IToken
    const mockBalance = {
      token: mockToken,
      amount: '2',
      isZero: () => false,
      multiply: vi.fn().mockReturnValue(FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '4000' }))
    } as unknown as ITokenAmount

    mockTokensManager.getTokenBalanceBySymbol.mockImplementation(async ({ symbol }) => {
      if (symbol === CommonTokenSymbols.WETH) return mockBalance
      return null as any
    })

    const mockSpotPrice = { price: '2000' } as any
    mockOracleManager.getSpotPrice.mockResolvedValue(mockSpotPrice)

    const portfolio = await manager.getUserPortfolio({ user: mockUser })

    expect(mockTokensManager.getTokenBalanceBySymbol).toHaveBeenCalled()
    expect(mockOracleManager.getSpotPrice).toHaveBeenCalledWith({ baseToken: mockToken })
    expect(portfolio.totalFiatValue.amount).toBe('4000')
    expect(mockCacheService.set).toHaveBeenCalled()
  })

  it('getWalletHoldings should handle oracle manager errors gracefully', async () => {
    const mockToken = { chainInfo: { chainId: ChainIds.Mainnet } } as IToken
    const mockBalance = {
      token: mockToken,
      amount: '2',
      isZero: () => false,
      multiply: vi.fn()
    } as unknown as ITokenAmount

    mockTokensManager.getTokenBalanceBySymbol.mockImplementation(async ({ symbol }) => {
      if (symbol === CommonTokenSymbols.WETH) return mockBalance
      return null as any
    })

    mockOracleManager.getSpotPrice.mockRejectedValue(new Error('Oracle Error'))

    const holdings = await manager.getWalletHoldings({ user: mockUser })

    expect(holdings).toHaveLength(1)
    expect(holdings[0].fiatValue.amount).toBe('0') // Defaults to 0 when oracle fails
  })
})
