import type {
  IAddress,
  IPercentage,
  IToken,
  ITokenAmount,
  QuoteData,
  SwapData,
  SwapProviderType,
} from '@thesolidchain/sdk-common'
import { IManagerWithProviders } from '@thesolidchain/api-server-common'
import { ISwapProvider } from './ISwapProvider'

/**
 * ISwapManager
 * This is the highest level interface that will choose and call
 * appropriate provider for a swap
 */
export interface ISwapManager extends IManagerWithProviders<SwapProviderType, ISwapProvider> {
  /**
   * getSwapDataExactInput
   * Returns the data needed to perform a swap between two tokens, by providing the
   *              exact amount of input tokens to swap
   * @param params.fromAmount The amount of tokens to swap
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
   * getSwapQuoteExactInput
   * Returns a quote for the swap between two tokens, by providing the exact amount
   *              of input tokens to swap. It does not return the data needed to perform the swap, only the quote
   * @param params.fromAmount The amount of tokens to swap
   * @param params.toToken The token to swap to
   */
  getSwapQuoteExactInput(params: { fromAmount: ITokenAmount; toToken: IToken }): Promise<QuoteData>
}
