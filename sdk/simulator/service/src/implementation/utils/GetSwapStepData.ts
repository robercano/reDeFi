import { IOracleManager } from '@thesolidchain/oracle-common'
import {
  IChainInfo,
  IPercentage,
  IToken,
  ITokenAmount,
  Price,
  steps,
} from '@thesolidchain/sdk-common'
import type { ISwapManager } from '@thesolidchain/swap-common'

export async function getSwapStepData(params: {
  chainInfo: IChainInfo
  fromAmount: ITokenAmount
  toToken: IToken
  slippage: IPercentage
  swapManager: ISwapManager
  oracleManager: IOracleManager
}): Promise<steps.SwapStep['inputs']> {
  const [quote, spotPrice] = await Promise.all([
    params.swapManager.getSwapQuoteExactInput({
      fromAmount: params.fromAmount,
      toToken: params.toToken,
    }),
    params.oracleManager.getSpotPrice({
      baseToken: params.toToken,
      denomination: params.fromAmount.token,
    }),
  ])

  // Actual price offered by the swap service
  const offerPrice = Price.createFrom({
    value: params.fromAmount.divide(quote.toTokenAmount.amount).amount,
    base: params.toToken,
    quote: params.fromAmount.token,
  })

  const minimumReceivedAmount = quote.toTokenAmount.multiply(params.slippage.toComplement())

  return {
    provider: quote.provider,
    routes: quote.routes,
    spotPrice: spotPrice.price,
    offerPrice: offerPrice,
    inputAmount: params.fromAmount,
    estimatedReceivedAmount: quote.toTokenAmount,
    minimumReceivedAmount: minimumReceivedAmount,
    slippage: params.slippage,
  }
}
