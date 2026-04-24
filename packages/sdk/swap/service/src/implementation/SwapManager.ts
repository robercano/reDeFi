import type {
  IAddress,
  IPercentage,
  IToken,
  ITokenAmount,
  QuoteData,
  SwapData,
  SwapProviderType,
} from '@thesolidchain/sdk-common'
import { ChainId } from '@thesolidchain/sdk-common'
import { ManagerWithFallbackProvidersBase } from '@thesolidchain/api-server-common'
import { ISwapManager, ISwapProvider } from '@thesolidchain/swap-common'

/**
 * @typedef SwapManagerProviderConfig
 * @property {ISwapProvider} Provider instance
 * @property {ChainId[]} Chain IDs supported by the provider
 */
export type SwapManagerProviderConfig = {
  provider: ISwapProvider
  chainIds: ChainId[]
}

/**
 * @class SwapManager
 * @see ISwapManager
 */
export class SwapManager
  extends ManagerWithFallbackProvidersBase<SwapProviderType, ISwapProvider>
  implements ISwapManager
{
  /** CONSTRUCTOR */
  constructor(params: { providers: ISwapProvider[] }) {
    super(params)
  }

  /** METHODS */

  /** @see ISwapManager.getSwapDataExactInput */
  async getSwapDataExactInput(params: {
    fromAmount: ITokenAmount
    toToken: IToken
    recipient: IAddress
    slippage: IPercentage
    forceUseProvider?: SwapProviderType
  }): Promise<SwapData> {
    return this._executeWithFallback({
      chainInfo: params.fromAmount.token.chainInfo,
      forceUseProvider: params.forceUseProvider,
      action: async (provider) => provider.getSwapDataExactInput(params),
    })
  }

  /** @see ISwapManager.getSwapQuoteExactInput */
  async getSwapQuoteExactInput(params: {
    fromAmount: ITokenAmount
    toToken: IToken
    forceUseProvider?: SwapProviderType
  }): Promise<QuoteData> {
    return this._executeWithFallback({
      chainInfo: params.fromAmount.token.chainInfo,
      forceUseProvider: params.forceUseProvider,
      action: async (provider) => provider.getSwapQuoteExactInput(params),
    })
  }
}
