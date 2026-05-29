import { LendingPoolInfo, SerializationService, ILendingPoolInfoData } from '@thesolidchain/sdk-common'
import { ICompoundV3LendingPoolId } from '../interfaces/ICompoundV3LendingPoolId'

export type CompoundV3LendingPoolInfoParameters = Omit<ILendingPoolInfoData, 'type'>

export class CompoundV3LendingPoolInfo extends LendingPoolInfo {
  readonly id: ICompoundV3LendingPoolId

  static createFrom(params: CompoundV3LendingPoolInfoParameters): CompoundV3LendingPoolInfo {
    return new CompoundV3LendingPoolInfo(params)
  }

  private constructor(params: CompoundV3LendingPoolInfoParameters) {
    super(params)
    this.id = params.id as ICompoundV3LendingPoolId
  }
}

SerializationService.registerClass(CompoundV3LendingPoolInfo, { identifier: 'CompoundV3LendingPoolInfo' })
