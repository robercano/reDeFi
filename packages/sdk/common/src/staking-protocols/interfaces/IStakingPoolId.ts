import { z } from 'zod'
import { PoolType } from '../../common/enums/PoolType'
import { IPoolId, PoolIdDataSchema } from '../../common/interfaces/IPoolId'
import { IProtocol, isProtocol } from '../../common/interfaces/IProtocol'

export const __signature__: unique symbol = Symbol()

export interface IStakingPoolId extends IPoolId, IStakingPoolIdData {
  readonly [__signature__]: symbol
  readonly type: PoolType.Staking
}

export const StakingPoolIdDataSchema = z.object({
  ...PoolIdDataSchema.shape,
  type: z.literal(PoolType.Staking),
  protocol: z.custom<IProtocol>((val) => isProtocol(val)),
})

export type IStakingPoolIdData = Readonly<z.infer<typeof StakingPoolIdDataSchema>>

export function isStakingPoolId(maybeStakingPoolId: unknown): maybeStakingPoolId is IStakingPoolId {
  return StakingPoolIdDataSchema.safeParse(maybeStakingPoolId).success
}
