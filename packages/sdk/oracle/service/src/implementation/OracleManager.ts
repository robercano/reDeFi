
import { isToken, OracleProviderType } from '@thesolidchain/sdk-common'
import { IOracleManager, IOracleProvider } from '@thesolidchain/oracle-common'
import { ManagerWithFallbackProvidersBase, ICacheService } from '@thesolidchain/api-server-common'

export type OracleManagerProviderConfig = {
  provider: IOracleProvider
}

/**
 * @name OracleManager
 * @description This class is the implementation of the IOracleManager interface. Takes care of choosing the best provider for a price consultation
 */
export class OracleManager
  extends ManagerWithFallbackProvidersBase<OracleProviderType, IOracleProvider>
  implements IOracleManager
{
  /** CONSTRUCTOR */

  constructor(params: {
    providers: IOracleProvider[]
    cacheService?: ICacheService
    cacheTTLSeconds?: number
  }) {
    super(params)
  }

  /** @see IOracleManager.getSpotPrice */
  async getSpotPrice(
    params: Parameters<IOracleManager['getSpotPrice']>[0],
  ): ReturnType<IOracleManager['getSpotPrice']> {
    if (
      params.denomination &&
      isToken(params.denomination) &&
      !params.baseToken.chainInfo.equals(params.denomination.chainInfo)
    ) {
      throw new Error('Base token and quote token must be on the same chain')
    }

    const quoteAddress =
      params.denomination && isToken(params.denomination)
        ? params.denomination.address.value
        : 'native'

    const cacheKey = this._buildCacheKey('getSpotPrice', [
      params.baseToken.chainInfo.chainId,
      params.baseToken.address.value,
      quoteAddress,
    ])

    return this._executeWithCacheAndFallback({
      cacheKey,
      chainInfo: params.baseToken.chainInfo,
      forceUseProvider: params.forceUseProvider,
      action: async (provider) => provider.getSpotPrice(params),
    })
  }

  /** @see IOracleManager.getSpotPrices */
  async getSpotPrices(
    params: Parameters<IOracleManager['getSpotPrices']>[0],
  ): ReturnType<IOracleManager['getSpotPrices']> {
    if (params.baseTokens) {
      for (const baseToken of params.baseTokens) {
        if (!isToken(baseToken) || !params.chainInfo.equals(baseToken.chainInfo)) {
          throw new Error('All Base tokens must be on the same chain')
        }
      }
    }

    const baseAddresses = params.baseTokens
      ? params.baseTokens.map((t) => t.address.value).join(',')
      : 'all'
    const quoteAddress =
      params.quoteCurrency && isToken(params.quoteCurrency)
        ? params.quoteCurrency.address.value
        : 'native'

    const cacheKey = this._buildCacheKey('getSpotPrices', [
      params.chainInfo.chainId,
      baseAddresses,
      quoteAddress,
    ])

    return this._executeWithCacheAndFallback({
      cacheKey,
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getSpotPrices(params),
    })
  }
}
