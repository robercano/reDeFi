import { IAddress, IToken, PoolId, PoolType, SerializationService, __YieldPoolIdSignature__ } from '@thesolidchain/sdk-common'
import {
  ICompoundV3YieldPoolId,
  ICompoundV3YieldPoolIdData,
  __signature__,
} from '../interfaces/ICompoundV3YieldPoolId'
import { ICompoundV3Protocol } from '../interfaces/ICompoundV3Protocol'

export type CompoundV3YieldPoolIdParameters = Omit<ICompoundV3YieldPoolIdData, 'type'>

export class CompoundV3YieldPoolId extends PoolId implements ICompoundV3YieldPoolId {
  readonly [__signature__] = __signature__
  readonly [__YieldPoolIdSignature__] = __YieldPoolIdSignature__
  readonly type = PoolType.Yield

  readonly id: string
  readonly protocol: ICompoundV3Protocol
  readonly underlyingToken: IToken
  readonly receiptToken: IToken
  readonly address: IAddress

  static createFrom(params: CompoundV3YieldPoolIdParameters): CompoundV3YieldPoolId {
    return new CompoundV3YieldPoolId(params)
  }

  private constructor(params: CompoundV3YieldPoolIdParameters) {
    super(params)
    this.id = (params as unknown as { id: string }).id || ''
    this.protocol = params.protocol
    this.underlyingToken = params.underlyingToken
    this.receiptToken = params.receiptToken
    this.address = params.address
  }
}

SerializationService.registerClass(CompoundV3YieldPoolId, { identifier: 'CompoundV3YieldPoolId' })
