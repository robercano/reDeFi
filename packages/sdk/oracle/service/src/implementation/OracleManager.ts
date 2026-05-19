import {
  isToken,
  OracleProviderType,
  Cache,
  VolatilityProfile,
  DataOrchestrator,
} from '@thesolidchain/sdk-common'
import { IOracleManager, IOracleProvider } from '@thesolidchain/oracle-common'
import { ManagerWithFallbackProvidersBase, ICacheService } from '@thesolidchain/api-server-common'

export type OracleManagerProviderConfig = {
  provider: IOracleProvider
}

/**
 * OracleManager
 * This class is the implementation of the IOracleManager interface. Takes care of choosing the best provider for a price consultation
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
    cacheOrchestrator?: DataOrchestrator
  }) {
    super(params)
  }

  /**
   * getSpotPrice
   * Retrieves the spot price for a specific base token, optionally denominated in another token.
   * @param params Parameters including the base token and optional denomination token.
   * @returns The spot price of the base token.
   */
  @Cache(VolatilityProfile.TIME_FAST)
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

    return this._executeWithFallback({
      chainInfo: params.baseToken.chainInfo,
      forceUseProvider: params.forceUseProvider,
      action: async (provider) => provider.getSpotPrice(params),
    })
  }

  /**
   * getSpotPrices
   * Retrieves the spot prices for an array of base tokens.
   * @param params Parameters including the array of base tokens.
   * @returns A map of spot prices for the provided base tokens.
   */
  @Cache(VolatilityProfile.TIME_FAST)
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

    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getSpotPrices(params),
    })
  }
}
