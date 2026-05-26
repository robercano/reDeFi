import { PoolInfo } from '../../common/implementation/PoolInfo'
import { PoolType } from '../../common/enums/PoolType'
import { IToken } from '../../common/interfaces/IToken'
import { IPercentage } from '../../common/interfaces/IPercentage'
import { IFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { YieldType } from '../types/YieldType'
import { IYieldPoolId } from '../interfaces/IYieldPoolId'
import { IYieldPoolInfo, IYieldPoolInfoData, __signature__ } from '../interfaces/IYieldPoolInfo'

export type YieldPoolInfoParameters = Omit<IYieldPoolInfoData, 'type'>

export class YieldPoolInfo extends PoolInfo implements IYieldPoolInfo {
  public readonly [__signature__] = __signature__

  public readonly type = PoolType.Yield

  private constructor(
    public readonly id: IYieldPoolId,
    public readonly underlyingToken: IToken,
    public readonly receiptToken: IToken,
    public readonly yieldType: YieldType,
    public readonly currentApy: IPercentage,
    public readonly totalValueLocked: IFiatCurrencyAmount,
  ) {
    super({})
  }

  public static createFrom(data: YieldPoolInfoParameters): YieldPoolInfo {
    return new YieldPoolInfo(
      data.id,
      data.underlyingToken,
      data.receiptToken,
      data.yieldType,
      data.currentApy,
      data.totalValueLocked,
    )
  }
}
