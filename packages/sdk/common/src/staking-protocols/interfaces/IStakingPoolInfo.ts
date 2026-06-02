import { z } from 'zod'
import { IPoolInfo, PoolInfoDataSchema } from '../../common/interfaces/IPoolInfo'
import { PoolType } from '../../common/enums/PoolType'
import { IToken, isToken } from '../../common/interfaces/IToken'
import { IPercentage, isPercentage } from '../../common/interfaces/IPercentage'
import { IStakingPoolId, isStakingPoolId } from './IStakingPoolId'
import { IFiatCurrencyAmount, isFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'

export const __signature__: unique symbol = Symbol()

export interface IStakingPoolInfo extends IPoolInfo, IStakingPoolInfoData {
  readonly [__signature__]: symbol
  readonly id: IStakingPoolId
  readonly underlyingToken: IToken
  readonly receiptToken: IToken
  readonly currentApy: IPercentage
  readonly totalValueLocked: IFiatCurrencyAmount

  readonly type: PoolType.Staking
}

export const StakingPoolInfoDataSchema = z.object({
  ...PoolInfoDataSchema.shape,
  type: z.literal(PoolType.Staking),
  id: z.custom<IStakingPoolId>((val) => isStakingPoolId(val)),
  underlyingToken: z.custom<IToken>((val) => isToken(val)),
  receiptToken: z.custom<IToken>((val) => isToken(val)),
  currentApy: z.custom<IPercentage>((val) => isPercentage(val)),
  totalValueLocked: z.custom<IFiatCurrencyAmount>((val) => isFiatCurrencyAmount(val)),
})

export type IStakingPoolInfoData = Readonly<z.infer<typeof StakingPoolInfoDataSchema>>

export function isStakingPoolInfo(maybePool: unknown): maybePool is IStakingPoolInfo {
  return StakingPoolInfoDataSchema.safeParse(maybePool).success
}
