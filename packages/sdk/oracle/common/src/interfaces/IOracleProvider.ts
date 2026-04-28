import type { SpotPricesInfo, FiatCurrency, IChainInfo } from '@thesolidchain/sdk-common'
import { Denomination, IToken, OracleProviderType, ISpotPriceInfo } from '@thesolidchain/sdk-common'
import { IManagerProvider } from '@thesolidchain/api-server-common'

/**
 * IOracleProvider
 * Interface for implementing different oracle provider plugins
 */
export interface IOracleProvider extends IManagerProvider<OracleProviderType> {
  /**
   * getSpotPrice
   * Returns the prevailing market price for a single token
   * @param params.baseToken requested base token
   * @param params.denomination optional denomination either fiat or token, defaults to USD
   */
  getSpotPrice(params: { baseToken: IToken; denomination?: Denomination }): Promise<ISpotPriceInfo>

  /**
   * getSpotPrices
   * Returns the prevailing market prices for multiple tokens
   * @param params.chainInfo The chain info for specific chain
   * @param params.baseTokens An array of requested base tokens
   * @param params.quote A quote currency, defaults to USD
   */
  getSpotPrices(params: {
    chainInfo: IChainInfo
    baseTokens: IToken[]
    quoteCurrency?: FiatCurrency
  }): Promise<SpotPricesInfo>
}
