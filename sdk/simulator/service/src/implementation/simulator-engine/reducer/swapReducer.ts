import { Percentage, calculatePriceImpact, steps } from '@thesolidchain/sdk-common'
import { ISimulationState } from '../../../interfaces/simulation'
import { addBalance, subtractBalance } from '../../utils'

export function swapReducer(step: steps.SwapStep, state: ISimulationState): ISimulationState {
  const balanceWithoutFromToken = subtractBalance(step.inputs.inputAmount, state.balances)
  const balanceWithToToken = addBalance(step.outputs.received, balanceWithoutFromToken)

  return {
    ...state,
    steps: [...state.steps, step],
    swaps: [
      ...state.swaps,
      {
        provider: step.inputs.provider,
        fromTokenAmount: step.inputs.inputAmount,
        toTokenAmount: step.inputs.estimatedReceivedAmount,
        slippage: Percentage.createFrom({ value: step.inputs.slippage.value }),
        offerPrice: step.inputs.offerPrice,
        spotPrice: step.inputs.spotPrice,
        priceImpact: calculatePriceImpact(step.inputs.spotPrice, step.inputs.offerPrice),
      },
    ],
    balances: balanceWithToToken,
  }
}
