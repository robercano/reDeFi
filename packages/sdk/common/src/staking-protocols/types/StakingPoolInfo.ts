import { PoolInfo } from '../../common/implementation/PoolInfo'
import { PoolType } from '../../common/enums/PoolType'
import { IToken } from '../../common/interfaces/IToken'
import { IPercentage } from '../../common/interfaces/IPercentage'
import { IFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { IStakingPoolId } from '../interfaces/IStakingPoolId'
import { IStakingPoolInfo, IStakingPoolInfoData, __signature__ } from '../interfaces/IStakingPoolInfo'

export type StakingPoolInfoParameters = Omit<IStakingPoolInfoData, 'type'>

export class StakingPoolInfo extends PoolInfo implements IStakingPoolInfo {
  public readonly [__signature__] = __signature__

  public readonly type = PoolType.Staking

  private constructor(
    public readonly id: IStakingPoolId,
    public readonly underlyingToken: IToken,
    public readonly receiptToken: IToken,
    public readonly currentApy: IPercentage,
    public readonly totalValueLocked: IFiatCurrencyAmount,
  ) {
    super({})
  }

  public static createFrom(data: StakingPoolInfoParameters): StakingPoolInfo {
    return new StakingPoolInfo(
      data.id,
      data.underlyingToken,
      data.receiptToken,
      data.currentApy,
      data.totalValueLocked,
    )
  }
}
