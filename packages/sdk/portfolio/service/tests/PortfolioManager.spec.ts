import { describe, it, expect, vi, beforeEach } from 'vitest'
import { PortfolioManager } from '../src/implementation/PortfolioManager'
import { PortfolioManagerFactory } from '../src/implementation/PortfolioManagerFactory'
import { ITokensManager } from '@thesolidchain/tokens-common'
import { IOracleManager } from '@thesolidchain/oracle-common'
import { ICacheService } from '@thesolidchain/api-server-common'
import {
  IUser,
  CommonTokenSymbols,
  FiatCurrency,
  FiatCurrencyAmount,
} from '@thesolidchain/sdk-common'

describe('PortfolioManager', () => {
  let mockTokensManager: import('vitest').Mocked<ITokensManager>
  let mockOracleManager: import('vitest').Mocked<IOracleManager>
  let mockCacheService: import('vitest').Mocked<ICacheService>
  let portfolioManager: PortfolioManager

  const mockUser = {
    wallet: { address: { value: '0x123' } },
    chainInfo: { chainId: 1, name: 'Ethereum' },
  } as unknown as IUser

  const mockToken = {
    symbol: CommonTokenSymbols.USDC,
    decimals: 6,
    address: { value: '0xusdc' },
    name: 'USD Coin',
  }

  const mockBalance = {
    amount: '1000000',
    token: mockToken,
    isZero: () => false,
    multiply: () => FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '1' }),
  }

  beforeEach(() => {
    mockTokensManager = {
      getTokenBalanceBySymbol: vi.fn(),
      getTokenBySymbol: vi.fn(),
      getTokenByAddress: vi.fn(),
      getTokenByName: vi.fn(),
      getTokenBalanceByAddress: vi.fn(),
      getTokenTotalSupply: vi.fn(),
    } as unknown as import('vitest').Mocked<ITokensManager>

    mockOracleManager = {
      getSpotPrice: vi.fn(),
      getSpotPrices: vi.fn(),
    } as unknown as import('vitest').Mocked<IOracleManager>

    mockCacheService = {
      get: vi.fn(),
      set: vi.fn(),
    } as unknown as import('vitest').Mocked<ICacheService>

    portfolioManager = PortfolioManagerFactory.newPortfolioManager({
      tokensManager: mockTokensManager,
      oracleManager: mockOracleManager,
      cacheService: mockCacheService,
      cacheTTLSeconds: 60,
    }) as PortfolioManager
  })

  describe('getWalletHoldings', () => {
    it('should aggregate non-zero balances and compute fiat values correctly', async () => {
      mockTokensManager.getTokenBalanceBySymbol.mockImplementation(
        async ({ symbol }: { symbol: string }) => {
          if (symbol === CommonTokenSymbols.USDC)
            return mockBalance as unknown as import('@thesolidchain/sdk-common').TokenAmount
          return undefined as any
        },
      )

      const mockFiatAmount = {
        price: FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '1' }),
      }
      mockOracleManager.getSpotPrice.mockResolvedValue(
        mockFiatAmount as unknown as import('@thesolidchain/sdk-common').ISpotPriceInfo,
      )

      const holdings = await portfolioManager.getWalletHoldings({ user: mockUser })

      expect(holdings).toHaveLength(1)
      expect(holdings[0].amount.amount).toBe('1000000')
      expect(holdings[0].fiatValue.amount).toBe('1') // 1 USDC * 1 USD = 1 USD value
    })

    it('should silently skip tokens that fail to fetch balance', async () => {
      mockTokensManager.getTokenBalanceBySymbol.mockRejectedValue(new Error('Network error'))

      const holdings = await portfolioManager.getWalletHoldings({ user: mockUser })

      expect(holdings).toHaveLength(0)
    })

    it('should silently skip fiat conversion if oracle fails', async () => {
      mockTokensManager.getTokenBalanceBySymbol.mockImplementation(
        async ({ symbol }: { symbol: string }) => {
          if (symbol === CommonTokenSymbols.USDC)
            return mockBalance as unknown as import('@thesolidchain/sdk-common').TokenAmount
          return undefined as any
        },
      )

      mockOracleManager.getSpotPrice.mockRejectedValue(new Error('Oracle error'))

      const holdings = await portfolioManager.getWalletHoldings({ user: mockUser })

      expect(holdings).toHaveLength(1)
      expect(holdings[0].fiatValue.amount).toBe('0') // Defaults to 0 USD
    })
  })

  describe('getUserPortfolio', () => {
    it('should return cached portfolio if available', async () => {
      const mockCachedPortfolio = {
        user: mockUser,
        walletHoldings: [],
        totalFiatValue: FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '0' }),
      }
      mockCacheService.get.mockResolvedValue(mockCachedPortfolio as any)

      const portfolio = await portfolioManager.getUserPortfolio({ user: mockUser })

      expect(portfolio).toBeDefined()
      expect(mockCacheService.get).toHaveBeenCalledWith(`PortfolioManager:getUserPortfolio:1:0x123`)
      expect(mockTokensManager.getTokenBalanceBySymbol).not.toHaveBeenCalled()
    })

    it('should compute and cache portfolio if not available in cache', async () => {
      mockCacheService.get.mockResolvedValue(undefined)

      mockTokensManager.getTokenBalanceBySymbol.mockImplementation(
        async ({ symbol }: { symbol: string }) => {
          if (symbol === CommonTokenSymbols.USDC)
            return mockBalance as unknown as import('@thesolidchain/sdk-common').TokenAmount
          return undefined as any
        },
      )

      const mockFiatAmount = {
        price: FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '1' }),
      }
      mockOracleManager.getSpotPrice.mockResolvedValue(
        mockFiatAmount as unknown as import('@thesolidchain/sdk-common').ISpotPriceInfo,
      )

      const portfolio = await portfolioManager.getUserPortfolio({ user: mockUser })

      expect(portfolio.walletHoldings).toHaveLength(1)
      expect(portfolio.totalFiatValue.amount).toBe('1') // Total is 1 USD
      expect(mockCacheService.set).toHaveBeenCalledWith(
        `PortfolioManager:getUserPortfolio:1:0x123`,
        portfolio,
        60,
      )
    })
  })
})
