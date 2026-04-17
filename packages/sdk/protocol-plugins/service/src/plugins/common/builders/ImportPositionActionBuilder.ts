import {
  ActionBuilderParams,
  ActionBuilderUsedAction,
} from '@thesolidchain/protocol-plugins-common'
import { steps } from '@thesolidchain/sdk-common'
import { BaseActionBuilder } from '../../../implementation/BaseActionBuilder'

export class ImportPositionActionBuilder extends BaseActionBuilder<steps.ImportStep> {
  readonly actions: ActionBuilderUsedAction[] = [{ action: 'DelegatedToProtocol' }]

  async build(params: ActionBuilderParams<steps.ImportStep>): Promise<void> {
    const externalPosition = params.step.inputs.externalPosition

    return this._delegateToProtocol({
      protocolName: externalPosition.pool.id.protocol.name,
      actionBuilderParams: params,
    })
  }
}
