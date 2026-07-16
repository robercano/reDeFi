import {
  ActionBuilderParams,
  ActionBuilderUsedAction,
} from '@thesolidchain/protocol-plugins-common'
import { getValueFromReference, steps } from '@thesolidchain/sdk-common'
import { BaseActionBuilder } from '../../../implementation/BaseActionBuilder'
import { SetApprovalAction } from '../../common/actions/SetApprovalAction'
import { getContractAddress } from '../../utils/GetContractAddress'
import { AaveV3BorrowAction } from '../actions/AaveV3BorrowAction'
import { AaveV3DepositAction } from '../actions/AaveV3DepositAction'
import { isAaveV3LendingPool } from '../interfaces/IAaveV3LendingPool'

export class AaveV3DepositBorrowActionBuilder extends BaseActionBuilder<steps.DepositBorrowStep> {
  readonly actions: ActionBuilderUsedAction[] = [
    { action: SetApprovalAction },
    { action: AaveV3DepositAction },
    { action: AaveV3BorrowAction, isOptionalTags: ['borrowAmount'] },
  ]

  async build(params: ActionBuilderParams<steps.DepositBorrowStep>): Promise<void> {
    const { context, step, addressBookManager, user } = params

    if (!step.inputs.position || !isAaveV3LendingPool(step.inputs.position.pool)) {
      throw new Error('Invalid AaveV3 lending pool')
    }

    const [aaveV3LendingPoolAddress, borrowTo] = await Promise.all([
      getContractAddress({
        addressBookManager,
        chainInfo: user.chainInfo,
        contractName: 'AavePool',
      }),
      params.positionsManager.address,
    ])

    context.addActionCall({
      step: step,
      action: new SetApprovalAction(),
      arguments: {
        approvalAmount: getValueFromReference(step.inputs.depositAmount),
        delegate: aaveV3LendingPoolAddress,
        sumAmounts: false,
      },
      connectedInputs: {
        depositAmount: 'approvalAmount',
      },
      connectedOutputs: {},
    })

    context.addActionCall({
      step: params.step,
      action: new AaveV3DepositAction(),
      arguments: {
        depositAmount: getValueFromReference(step.inputs.depositAmount),
        sumAmounts: false,
        setAsCollateral: true,
      },
      connectedInputs: {
        depositAmount: 'amountToDeposit',
      },
      connectedOutputs: {
        depositAmount: 'depositedAmount',
      },
    })

    const borrowAmount = getValueFromReference(step.inputs.borrowAmount)
    context.addActionCall({
      step: step,
      action: new AaveV3BorrowAction(),
      arguments: {
        borrowAmount,
        borrowTo,
      },
      connectedInputs: {},
      connectedOutputs: {
        borrowAmount: 'borrowedAmount',
      },
      skip: borrowAmount.isZero(),
    })
  }

}
