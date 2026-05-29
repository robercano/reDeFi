import { IAddress, IToken, LendingPoolId, SerializationService } from '@thesolidchain/sdk-common'
import {
  ICompoundV3LendingPoolId,
  ICompoundV3LendingPoolIdData,
  __signature__,
} from '../interfaces/ICompoundV3LendingPoolId'
import { ICompoundV3Protocol } from '../interfaces/ICompoundV3Protocol'

export type CompoundV3LendingPoolIdParameters = Omit<ICompoundV3LendingPoolIdData, 'type'>

export class CompoundV3LendingPoolId extends LendingPoolId implements ICompoundV3LendingPoolId {
  readonly [__signature__] = __signature__

  readonly id: string
  readonly protocol: ICompoundV3Protocol
  readonly collateralToken: IToken
  readonly debtToken: IToken
  readonly address: IAddress

  static createFrom(params: CompoundV3LendingPoolIdParameters): CompoundV3LendingPoolId {
    return new CompoundV3LendingPoolId(params)
  }

  private constructor(params: CompoundV3LendingPoolIdParameters) {
    super(params)
    this.id = (params as unknown as { id: string }).id || ''
    this.protocol = params.protocol
    this.collateralToken = params.collateralToken
    this.debtToken = params.debtToken
    this.address = params.address
  }
}

SerializationService.registerClass(CompoundV3LendingPoolId, { identifier: 'CompoundV3LendingPoolId' })
