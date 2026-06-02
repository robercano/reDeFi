import { z } from 'zod'
import { PositionType } from '../../common/enums/PositionType'
import { IPositionId, PositionIdDataSchema } from '../../common/interfaces/IPositionId'
import { IWallet, isWallet } from '../../common/interfaces/IWallet'
import { IStakingPoolId, isStakingPoolId } from './IStakingPoolId'

export const __signature__: unique symbol = Symbol()

export interface IStakingPositionId extends IPositionId, IStakingPositionIdData {
  readonly [__signature__]: symbol
  readonly type: PositionType.Staking
}

export const StakingPositionIdDataSchema = z.object({
  ...PositionIdDataSchema.shape,
  type: z.literal(PositionType.Staking),
  poolId: z.custom<IStakingPoolId>((val) => isStakingPoolId(val)),
  wallet: z.custom<IWallet>((val) => isWallet(val)),
})

export type IStakingPositionIdData = Readonly<z.infer<typeof StakingPositionIdDataSchema>>

export function isStakingPositionId(maybeStakingPositionId: unknown): maybeStakingPositionId is IStakingPositionId {
  return StakingPositionIdDataSchema.safeParse(maybeStakingPositionId).success
}
