import type {
  QuoteData,
  IToken,
  ITokenAmount,
  IPercentage,
  IAddress,
} from '@thesolidchain/sdk-common'

/**
 * ISwapManagerClient
 * Interface for the SwapManager client implementation.
 * @see ISwapManager
 */
export interface ISwapManagerClient {
  /**
   * getSwapQuoteExactInput
   * Retrieves a swap quote for a given input amount and token
   *
   * @param params.fromAmount The amount to swap
   * @param params.toToken The token to swap to
   * @param params.slippage The slippage for the swap
   *
   * @returns The swap quote for the given input amount and token
   */
  getSwapQuoteExactInput(params: {
    fromAmount: ITokenAmount
    toToken: IToken
    slippage: IPercentage
  }): Promise<QuoteData>

  /**
   * getSwapDataExactInput
   * Retrieves a swap data for a given input amount and token
   *
   * @param params.fromAmount The amount to swap
   * @param params.toToken The token to swap to
   * @param params.recipient The recipient of the swap
   * @param params.slippage The slippage for the swap
   *
   * @returns The swap data for the given input amount and token
   */
  getSwapDataExactInput(params: {
    fromAmount: ITokenAmount
    toToken: IToken
    recipient: IAddress
    slippage: IPercentage
  }): Promise<import('@thesolidchain/sdk-common').SwapData>
}
