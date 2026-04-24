import { ITokensManager } from '@thesolidchain/tokens-common'
import { IOracleManager } from '@thesolidchain/oracle-common'
import { ICacheService } from '@thesolidchain/api-server-common'
import { IPortfolioManager } from '@thesolidchain/portfolio-common'
import { PortfolioManager } from './PortfolioManager'

/**
 * @name PortfolioManagerFactory
 * @description Factory class for safely instantiating a new `IPortfolioManager`.
 */
export class PortfolioManagerFactory {
  /**
   * @method newPortfolioManager
   * @description Constructs and returns a new instance of PortfolioManager.
   * 
   * @param params.tokensManager - Required tokens manager instance
   * @param params.oracleManager - Required oracle manager instance
   * @param params.cacheService - Optional cache service for caching aggregated portfolios
   * @param params.cacheTTLSeconds - Optional cache TTL, defaults to 60 seconds inside the implementation
   * @returns A concrete implementation of `IPortfolioManager`
   */
  public static newPortfolioManager(params: {
    tokensManager: ITokensManager
    oracleManager: IOracleManager
    cacheService?: ICacheService
    cacheTTLSeconds?: number
  }): IPortfolioManager {
    return new PortfolioManager(params)
  }
}
