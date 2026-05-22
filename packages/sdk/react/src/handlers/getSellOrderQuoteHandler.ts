import type { ISDKManager } from '@thesolidchain/sdk-client'
import type { IToken, ITokenAmount, IntentQuoteData, IAddress } from '@thesolidchain/sdk-common'

export const getSellOrderQuoteHandler = (sdk: ISDKManager) => {
  return async (params: {
    fromAmount: ITokenAmount
    toToken: IToken
    sender: IAddress
    receiver?: IAddress
    partiallyFillable?: boolean
    limitPrice?: string
  }): Promise<IntentQuoteData> => {
    return sdk.intentSwaps.getSellOrderQuote(params)
  }
}
