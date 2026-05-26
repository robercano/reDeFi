import { Position } from '../../common/implementation/Position'
import { IPool } from '../../common/interfaces/IPool'
import { PositionType } from '../../common/enums/PositionType'
import { ITokenAmount } from '../../common/interfaces/ITokenAmount'
import { IYieldPoolId } from '../interfaces/IYieldPoolId'
import { IYieldPositionId } from '../interfaces/IYieldPositionId'
import { IYieldPosition, IYieldPositionData, __signature__ } from '../interfaces/IYieldPosition'
import { YieldPool } from './YieldPool'

export type YieldPositionParameters = Omit<IYieldPositionData, 'type' | 'pool'>

export class YieldPosition extends Position implements IYieldPosition {
  public readonly [__signature__] = __signature__

  public readonly type = PositionType.Yield
  public readonly pool: IPool

  private constructor(
    public readonly id: IYieldPositionId,
    public readonly poolId: IYieldPoolId,
    public readonly principalAmount: ITokenAmount,
    public readonly currentAmount: ITokenAmount,
    public readonly claimableRewards: ITokenAmount[],
  ) {
    const pool = new YieldPool(poolId)
    super({ pool })
    this.pool = pool
  }

  public static createFrom(data: YieldPositionParameters): YieldPosition {
    return new YieldPosition(
      data.id,
      data.poolId,
      data.principalAmount,
      data.currentAmount,
      data.claimableRewards,
    )
  }
}
