
import { isToken, OracleProviderType } from '@thesolidchain/sdk-common'
import { IOracleManager, IOracleProvider } from '@thesolidchain/oracle-common'
import { ManagerWithFallbackProvidersBase } from '@thesolidchain/api-server-common'

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

  constructor(params: { providers: IOracleProvider[] }) {
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

    return this._executeWithFallback({
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

    return this._executeWithFallback({
      chainInfo: params.chainInfo,
      action: async (provider) => provider.getSpotPrices(params),
    })
  }
}
