import { IAddress, LendingPositionId, SerializationService } from '@thesolidchain/sdk-common'
import {
  ICompoundV3LendingPositionId,
  ICompoundV3LendingPositionIdData,
  __signature__,
} from '../interfaces/ICompoundV3LendingPositionId'
import { ICompoundV3LendingPoolId } from '../interfaces/ICompoundV3LendingPoolId'

export type CompoundV3LendingPositionIdParameters = Omit<ICompoundV3LendingPositionIdData, 'type'>

export class CompoundV3LendingPositionId extends LendingPositionId implements ICompoundV3LendingPositionId {
  readonly [__signature__] = __signature__

  readonly poolId: ICompoundV3LendingPoolId
  readonly walletAddress: IAddress

  static createFrom(params: CompoundV3LendingPositionIdParameters): CompoundV3LendingPositionId {
    return new CompoundV3LendingPositionId(params)
  }

  private constructor(params: CompoundV3LendingPositionIdParameters) {
    super(params)
    this.poolId = params.poolId
    this.walletAddress = params.walletAddress
  }
}

SerializationService.registerClass(CompoundV3LendingPositionId, { identifier: 'CompoundV3LendingPositionId' })
