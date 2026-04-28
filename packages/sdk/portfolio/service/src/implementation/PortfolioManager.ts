import { IPortfolioManager } from '@thesolidchain/portfolio-common'
import { ITokensManager } from '@thesolidchain/tokens-common'
import { IOracleManager } from '@thesolidchain/oracle-common'
import { ICacheService } from '@thesolidchain/api-server-common'
import { IUser, Holding, UserPortfolio, CommonTokenSymbols, FiatCurrency, FiatCurrencyAmount } from '@thesolidchain/sdk-common'

/**
 * PortfolioManager
 * Concrete implementation of IPortfolioManager. Handles the aggregation of a user's 
 * portfolio by communicating with the tokens manager for balances and the oracle manager for spot prices.
 * Native caching via ICacheService is automatically applied to `getUserPortfolio` calls.
 */
export class PortfolioManager implements IPortfolioManager {
  private readonly _tokensManager: ITokensManager
  private readonly _oracleManager: IOracleManager
  private readonly _cacheService?: ICacheService
  private readonly _cacheTTLSeconds: number

  /**
   * @constructor
   * @param params.tokensManager - Instance of the tokens manager used to resolve wallet balances
   * @param params.oracleManager - Instance of the oracle manager used to resolve spot prices for fiat conversion
   * @param params.cacheService - Optional cache service for temporarily storing computed portfolio aggregates
   * @param params.cacheTTLSeconds - Number of seconds to persist the cache entry. Defaults to 60.
   */
  constructor(params: {
    tokensManager: ITokensManager
    oracleManager: IOracleManager
    cacheService?: ICacheService
    cacheTTLSeconds?: number
  }) {
    this._tokensManager = params.tokensManager
    this._oracleManager = params.oracleManager
    this._cacheService = params.cacheService
    this._cacheTTLSeconds = params.cacheTTLSeconds ?? 60
  }

  /**
   * getWalletHoldings
   * Fetches the native and ERC20 token balances for a user and calculates their
   * respective USD fiat values. Failed queries or absent spot prices are silently skipped
   * so the remaining valid holdings can still be returned.
   * 
   * @param params.user - User entity containing wallet address and chain information
   * @returns Array of Holdings containing Token amounts and Fiat values
   */
  async getWalletHoldings(params: { user: IUser }): Promise<Holding[]> {
    const { user } = params
    const holdings: Holding[] = []

    for (const symbol of Object.values(CommonTokenSymbols)) {
      try {
        console.log(`[Portfolio] Fetching balance for ${symbol}...`)
        const balance = await this._tokensManager.getTokenBalanceBySymbol({
          chainInfo: user.chainInfo,
          symbol,
          walletAddress: user.wallet.address,
        })

        if (balance) {
          console.log(`[Portfolio] Balance for ${symbol}: ${balance.amount}`)
        }

        if (balance && !balance.isZero()) {
          let fiatValue = FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '0' })
          try {
            const spotPrice = await this._oracleManager.getSpotPrice({
              baseToken: balance.token,
            })
            fiatValue = balance.multiply(spotPrice.price) as FiatCurrencyAmount
          } catch (pricingError) {
            console.warn(`[Portfolio] Failed to fetch spot price for ${symbol}:`, pricingError)
            // Ignore pricing error for single token
          }

          holdings.push(
            Holding.createFrom({
              amount: balance,
              fiatValue,
            }),
          )
        }
      } catch (err) {
        console.warn(`[Portfolio] Failed to fetch token balance for ${symbol}:`, err)
      }
    }

    console.log(`[Portfolio] Total holdings found: ${holdings.length}`)
    return holdings
  }

  /**
   * getUserPortfolio
   * Calculates a completely hydrated UserPortfolio. It utilizes the injected 
   * `cacheService` (if available) to avoid expensive, repeating queries. The portfolio is 
   * keyed deterministically by the user's wallet address.
   * 
   * @param params.user - User entity whose portfolio is being built
   * @returns Fully assembled UserPortfolio object containing holdings and total net fiat value
   */
  async getUserPortfolio(params: { user: IUser }): Promise<UserPortfolio> {
    const { user } = params
    const cacheKey = `PortfolioManager:getUserPortfolio:${user.wallet.address.value}`

    if (this._cacheService) {
      const cachedPortfolio = await this._cacheService.get<Parameters<typeof UserPortfolio.createFrom>[0]>(cacheKey)
      if (cachedPortfolio) {
        return UserPortfolio.createFrom(cachedPortfolio)
      }
    }

    const walletHoldings = await this.getWalletHoldings({ user })

    let totalFiatValue = FiatCurrencyAmount.createFrom({ fiat: FiatCurrency.USD, amount: '0' })
    for (const holding of walletHoldings) {
      if (totalFiatValue.fiat === holding.fiatValue.fiat) {
        totalFiatValue = totalFiatValue.add(holding.fiatValue) as FiatCurrencyAmount
      }
    }

    const portfolio = UserPortfolio.createFrom({
      user,
      walletHoldings,
      totalFiatValue,
    })

    if (this._cacheService) {
      await this._cacheService.set(cacheKey, portfolio, this._cacheTTLSeconds)
    }

    return portfolio
  }
}
