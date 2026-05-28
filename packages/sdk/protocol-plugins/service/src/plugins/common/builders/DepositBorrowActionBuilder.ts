import {
  ActionBuilderParams,
  ActionBuilderUsedAction,
} from '@thesolidchain/protocol-plugins-common'
import { steps } from '@thesolidchain/sdk-common'
import { BaseActionBuilder } from '../../../implementation/BaseActionBuilder'

export class DepositBorrowActionBuilder extends BaseActionBuilder<steps.DepositBorrowStep> {
  readonly actions: ActionBuilderUsedAction[] = [{ action: 'DelegatedToProtocol' }]

  async build(params: ActionBuilderParams<steps.DepositBorrowStep>): Promise<void> {
    if (!params.step.inputs.position) {
      throw new Error('Position is required for DepositBorrowActionBuilder')
    }
    return this._delegateToProtocol({
      protocolName: params.step.inputs.position.pool.id.protocol.name,
      actionBuilderParams: params,
    })
  }
}
