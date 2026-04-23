import type { ISDKManager } from '@thesolidchain/sdk-client'
import { type FiatCurrency, type IChainInfo, type IToken } from '@thesolidchain/sdk-common'

export const getSpotPricesHandler =
  (sdk: ISDKManager) =>
  async ({
    chainInfo,
    baseTokens,
    quoteCurrency,
  }: {
    chainInfo: IChainInfo
    baseTokens: IToken[]
    quoteCurrency?: FiatCurrency
  }) => {
    const position = await sdk.oracle.getSpotPrices({
      chainInfo,
      baseTokens,
      quoteCurrency,
    })
    return position
  }
