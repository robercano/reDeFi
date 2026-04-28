import { IAddress, IPercentage, IToken, ITokenAmount } from '@thesolidchain/sdk-common'
import type { QuoteData, SwapData, SwapProviderType } from '@thesolidchain/sdk-common'
import { IManagerProvider } from '@thesolidchain/api-server-common'
/**
 * ISwapProvider
 * this is for implementing different swap provider plugins
 */
export interface ISwapProvider extends IManagerProvider<SwapProviderType> {
  /**
   * getSwapData
   * Returns the data needed to perform a swap between two tokens, by providing the
   *              exact amount of input tokens to swap
   * @param params.fromAmount The amount of tokens to swap
   * @param params.toToken The token to swap to
   * @param params.recipient The address that will receive the tokens
   * @param params.slippage The maximum slippage allowed
   */
  getSwapDataExactInput(params: {
    fromAmount: ITokenAmount
    toToken: IToken
    recipient: IAddress
    slippage: IPercentage
  }): Promise<SwapData>

  /**
   * getSwapQuote
   * Returns a quote for the swap between two tokens, by providing the exact amount
   *              of input tokens to swap. It does not return the data needed to perform the swap, only the quote
   * @param params.fromAmount The amount of tokens to swap
   * @param params.toToken The token to swap to
   */
  getSwapQuoteExactInput(params: { fromAmount: ITokenAmount; toToken: IToken }): Promise<QuoteData>
}
