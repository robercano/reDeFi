import { Pool } from '../../common/implementation/Pool'
import { PoolType } from '../../common/enums/PoolType'
import { IYieldPoolId } from '../interfaces/IYieldPoolId'

/**
 * @class YieldPool
 * Represents a generic Yield pool to satisfy IPool requirements.
 */
export class YieldPool extends Pool {
  public readonly type = PoolType.Yield

  public constructor(public readonly id: IYieldPoolId) {
    super({ type: PoolType.Yield, id })
  }
}
