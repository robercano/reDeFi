import { IAddress, PositionId, PositionType, SerializationService, __YieldPositionIdSignature__ } from '@thesolidchain/sdk-common'
import {
  ICompoundV3YieldPositionId,
  ICompoundV3YieldPositionIdData,
  __signature__,
} from '../interfaces/ICompoundV3YieldPositionId'
import { ICompoundV3YieldPoolId } from '../interfaces/ICompoundV3YieldPoolId'

export type CompoundV3YieldPositionIdParameters = Omit<ICompoundV3YieldPositionIdData, 'type'>

export class CompoundV3YieldPositionId extends PositionId implements ICompoundV3YieldPositionId {
  readonly [__signature__] = __signature__
  readonly [__YieldPositionIdSignature__] = __YieldPositionIdSignature__
  readonly type = PositionType.Yield

  readonly poolId: ICompoundV3YieldPoolId
  readonly walletAddress: IAddress

  static createFrom(params: CompoundV3YieldPositionIdParameters): CompoundV3YieldPositionId {
    return new CompoundV3YieldPositionId(params)
  }

  private constructor(params: CompoundV3YieldPositionIdParameters) {
    super({ id: `cv3-yield-${params.poolId.underlyingToken.address.value}-${params.walletAddress.value}` })
    this.poolId = params.poolId
    this.walletAddress = params.walletAddress
  }
}

SerializationService.registerClass(CompoundV3YieldPositionId, { identifier: 'CompoundV3YieldPositionId' })
