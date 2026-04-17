import {
  ActionBuilderParams,
  ActionBuilderUsedAction,
} from '@thesolidchain/protocol-plugins-common'
import { steps } from '@thesolidchain/sdk-common'
import { BaseActionBuilder } from '../../../implementation/BaseActionBuilder'

export class OpenPositionActionBuilder extends BaseActionBuilder<steps.OpenPosition> {
  readonly actions: ActionBuilderUsedAction[] = [{ action: 'DelegatedToProtocol' }]

  async build(params: ActionBuilderParams<steps.OpenPosition>): Promise<void> {
    const pool = params.step.inputs.pool

    await this._delegateToProtocol({
      protocolName: pool.id.protocol.name,
      actionBuilderParams: params,
    })
  }
}
