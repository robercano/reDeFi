import { ActionBuilderParams, ActionBuilderUsedAction } from '@thesolidchain/protocol-plugins-common'
import { steps } from '@thesolidchain/sdk-common'
import { BaseActionBuilder } from '../../../implementation/BaseActionBuilder'

export class PaybackWithdrawActionBuilder extends BaseActionBuilder<steps.PaybackWithdrawStep> {
  readonly actions: ActionBuilderUsedAction[] = [{ action: 'DelegatedToProtocol' }]

  async build(params: ActionBuilderParams<steps.PaybackWithdrawStep>): Promise<void> {
    return this._delegateToProtocol({
      protocolName: params.step.inputs.position.pool.id.protocol.name,
      actionBuilderParams: params,
    })
  }
}
