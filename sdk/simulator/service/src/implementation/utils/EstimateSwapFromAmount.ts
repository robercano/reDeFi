import { IOracleManager } from '@thesolidchain/oracle-common'
import {
  IPercentage,
  IToken,
  ITokenAmount,
  Price,
  TokenAmount,
  isTokenAmount,
} from '@thesolidchain/sdk-common'
import { ISwapManager } from '@thesolidchain/swap-common'
import assert from 'assert'

/**
 * EstimateTokenAmountAfterSwap
 * @description Estimates how much you will receive after swap.
 *    If target token is the same as source token, we return the same amount.
 *    When we perform a swap, we need to account for the slippage,
 *    and we assume maximum slippage.
 */
export async function estimateSwapFromAmount(params: {
  receiveAtLeast: ITokenAmount
  fromToken: IToken
  slippage: IPercentage
  swapManager: ISwapManager
  oracleManager: IOracleManager
}): Promise<ITokenAmount> {
  const { receiveAtLeast, slippage } = params

  if (receiveAtLeast.token.equals(params.fromToken)) {
    return receiveAtLeast
  }

  if (receiveAtLeast.isZero()) {
    return TokenAmount.createFrom({
      token: params.fromToken,
      amount: '0',
    })
  }

  const spotPriceSourceToken = (
    await params.oracleManager.getSpotPrice({
      baseToken: params.fromToken,
      denomination: receiveAtLeast.token,
    })
  ).price

  const swapQuoteTargetToSource = await params.swapManager.getSwapQuoteExactInput({
    fromAmount: receiveAtLeast,
    toToken: params.fromToken,
  })

  const offerPriceTargetToken = Price.createFromAmountsRatio({
    numerator: swapQuoteTargetToSource.toTokenAmount,
    denominator: swapQuoteTargetToSource.fromTokenAmount,
  })

  const estimatedSourceTokenAmount = receiveAtLeast.multiply(offerPriceTargetToken)
  assert(
    isTokenAmount(estimatedSourceTokenAmount),
    'Estimated token amount cannot be a fiat denomination',
  )

  const swapQuoteSourceToTarget = await params.swapManager.getSwapQuoteExactInput({
    fromAmount: estimatedSourceTokenAmount,
    toToken: params.receiveAtLeast.token,
  })

  const offerPriceSourceToken = Price.createFromAmountsRatio({
    numerator: swapQuoteSourceToTarget.toTokenAmount,
    denominator: swapQuoteSourceToTarget.fromTokenAmount,
  })

  const worstPriceSourceToken = spotPriceSourceToken.isLessThanOrEqual(offerPriceSourceToken)
    ? spotPriceSourceToken
    : offerPriceSourceToken

  /**
   * TargetAmount = SourceAmount * (1 - Slippage) / PriceTargetInSource
   * SourceAmount = TargetAmount * PriceTargetInSource / (1 - Slippage)
   */
  return receiveAtLeast.divide(worstPriceSourceToken).divide(slippage.toComplement())
}
