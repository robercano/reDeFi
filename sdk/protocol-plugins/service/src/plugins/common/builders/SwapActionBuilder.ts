import {
  ActionBuilderParams,
  ActionBuilderUsedAction,
} from '@thesolidchain/protocol-plugins-common'
import { steps } from '@thesolidchain/sdk-common'
import { BaseActionBuilder } from '../../../implementation/BaseActionBuilder'
import { SwapAction } from '../actions/SwapAction'

export class SwapActionBuilder extends BaseActionBuilder<steps.SwapStep> {
  readonly actions: ActionBuilderUsedAction[] = [{ action: SwapAction }]

  async build(params: ActionBuilderParams<steps.SwapStep>): Promise<void> {
    const { context, user, swapManager, addressBookManager, step } = params

    const swapContractAddress = await this._getContractAddress({
      addressBookManager,
      chainInfo: user.chainInfo,
      contractName: 'Swap',
    })

    const swapData = await swapManager.getSwapDataExactInput({
      fromAmount: step.inputs.inputAmount,
      toToken: step.inputs.minimumReceivedAmount.token,
      recipient: swapContractAddress,
      slippage: step.inputs.slippage,
    })

    context.addActionCall({
      step: step,
      action: new SwapAction(),
      arguments: {
        fromAmount: step.inputs.inputAmount,
        toMinimumAmount: step.inputs.minimumReceivedAmount,
        withData: swapData.calldata,
        collectFeeInFromToken: true,
      },
      connectedInputs: {},
      connectedOutputs: {
        received: 'received',
      },
    })
  }
}
