import { Position } from '../../common/implementation/Position'
import { IPool } from '../../common/interfaces/IPool'
import { PositionType } from '../../common/enums/PositionType'
import { ITokenAmount } from '../../common/interfaces/ITokenAmount'
import { IStakingPoolId } from '../interfaces/IStakingPoolId'
import { IStakingPositionId } from '../interfaces/IStakingPositionId'
import { IStakingPosition, IStakingPositionData, __signature__ } from '../interfaces/IStakingPosition'
import { StakingPool } from '../implementation/StakingPool'

export type StakingPositionParameters = Omit<IStakingPositionData, 'type' | 'pool'>

export class StakingPosition extends Position implements IStakingPosition {
  public readonly [__signature__] = __signature__

  public readonly type = PositionType.Staking
  public readonly pool: IPool

  private constructor(
    public readonly id: IStakingPositionId,
    public readonly poolId: IStakingPoolId,
    public readonly principalAmount: ITokenAmount,
    public readonly currentAmount: ITokenAmount,
    public readonly claimableRewards: ITokenAmount[],
  ) {
    const pool = new StakingPool(poolId)
    super({ pool })
    this.pool = pool
  }

  public static createFrom(data: StakingPositionParameters): StakingPosition {
    return new StakingPosition(
      data.id,
      data.poolId,
      data.principalAmount,
      data.currentAmount,
      data.claimableRewards,
    )
  }
}
