import { IPool } from '../../common/interfaces/IPool'
import { Pool } from '../../common/implementation/Pool'
import { PoolType } from '../../common/enums/PoolType'
import { IStakingPoolId } from '../interfaces/IStakingPoolId'

export class StakingPool extends Pool implements IPool {
  public readonly type = PoolType.Staking

  constructor(public readonly id: IStakingPoolId) {
    super({})
  }
}
