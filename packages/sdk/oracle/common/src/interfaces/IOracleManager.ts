import type {
  IToken,
  Denomination,
  IChainInfo,
  FiatCurrency,
  OracleProviderType,
  ISpotPriceInfo,
  SpotPricesInfo,
} from '@thesolidchain/sdk-common'
import { IOracleProvider } from './IOracleProvider'
import { IManagerWithProviders } from '@thesolidchain/api-server-common'
/**
 * IOracleManager
 * This is the highest level interface that will choose and call appropriate provider for a price consultation
 */
export interface IOracleManager extends IManagerWithProviders<OracleProviderType, IOracleProvider> {
  /**
   * getSpotPrice
   * Returns the prevailing market price for a given asset
   *              in terms of a base currency
   * @param params.baseToken Token for which the price is being requested
   * @param params.denomination Token in which the price is being requested, defaults to USD
   * @param params.forceUseProvider Optional provider to force the use of
   */
  getSpotPrice(params: {
    baseToken: IToken
    denomination?: Denomination
    forceUseProvider?: OracleProviderType
  }): Promise<ISpotPriceInfo>

  /**
   * getSpotPrices
   * Returns the prevailing market price for a given asset
   *              in terms of a base currency
   * @param params.baseToken A price request for baseToken
   * @param params.quoteTokens A price request for multiple quoteTokens
   * @param params.forceUseProvider Optional provider to force the use of
   */
  getSpotPrices(params: {
    chainInfo: IChainInfo
    baseTokens: IToken[]
    quoteCurrency?: FiatCurrency
    forceUseProvider?: OracleProviderType
  }): Promise<SpotPricesInfo>
}
