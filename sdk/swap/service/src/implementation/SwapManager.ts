import type {
  IAddress,
  IPercentage,
  IToken,
  ITokenAmount,
  Maybe,
  QuoteData,
  SwapData,
  SwapProviderType,
} from '@thesolidchain/sdk-common'
import { ChainId } from '@thesolidchain/sdk-common'
import { ManagerWithProvidersBase } from '@thesolidchain/sdk-server-common'
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
  extends ManagerWithProvidersBase<SwapProviderType, ISwapProvider>
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
    const provider: Maybe<ISwapProvider> = this._getBestProvider({
      chainInfo: params.fromAmount.token.chainInfo,
      forceUseProvider: params.forceUseProvider,
    })
    if (!provider) {
      throw new Error('No swap provider available')
    }

    return provider.getSwapDataExactInput(params)
  }

  /** @see ISwapManager.getSwapQuoteExactInput */
  async getSwapQuoteExactInput(params: {
    fromAmount: ITokenAmount
    toToken: IToken
    forceUseProvider?: SwapProviderType
  }): Promise<QuoteData> {
    const provider: Maybe<ISwapProvider> = this._getBestProvider({
      chainInfo: params.fromAmount.token.chainInfo,
      forceUseProvider: params.forceUseProvider,
    })
    if (!provider) {
      throw new Error('No swap provider available')
    }

    return provider.getSwapQuoteExactInput(params)
  }
}
