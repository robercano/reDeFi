import type { ISDKAdminManager, ISDKManager } from '@thesolidchain/sdk-client'
import { type IToken, Percentage, TokenAmount } from '@thesolidchain/sdk-common'

export const getSwapQuoteHandler =
  (sdk: ISDKManager | ISDKAdminManager) =>
  async ({
    fromAmount,
    fromToken,
    toToken,
    slippage,
  }: {
    fromAmount: string
    fromToken: IToken
    toToken: IToken
    slippage: number
  }) => {
    const position = await sdk.swaps.getSwapQuoteExactInput({
      fromAmount: TokenAmount.createFrom({ token: fromToken, amount: fromAmount }),
      toToken: toToken,
      slippage: Percentage.createFrom({ value: slippage }),
    })
    return position
  }
