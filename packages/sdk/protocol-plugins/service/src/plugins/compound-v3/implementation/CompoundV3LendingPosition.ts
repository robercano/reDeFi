import { LendingPosition, SerializationService, ILendingPositionData, ILendingPool } from '@thesolidchain/sdk-common'
import { ICompoundV3LendingPositionId } from '../interfaces/ICompoundV3LendingPositionId'

export type CompoundV3LendingPositionParameters = Omit<ILendingPositionData, 'type'>

export class CompoundV3LendingPosition extends LendingPosition {
  readonly pool: ILendingPool
  readonly id: ICompoundV3LendingPositionId

  static createFrom(params: CompoundV3LendingPositionParameters): CompoundV3LendingPosition {
    return new CompoundV3LendingPosition(params)
  }

  private constructor(params: CompoundV3LendingPositionParameters) {
    super(params)
    this.pool = params.pool as ILendingPool
    this.id = params.id as ICompoundV3LendingPositionId
  }
}

SerializationService.registerClass(CompoundV3LendingPosition, { identifier: 'CompoundV3LendingPosition' })
