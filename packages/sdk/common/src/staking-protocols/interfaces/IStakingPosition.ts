import { z } from 'zod'
import { IPosition, PositionDataSchema } from '../../common/interfaces/IPosition'
import { PositionType } from '../../common/enums/PositionType'
import { IStakingPositionId, isStakingPositionId } from './IStakingPositionId'
import { IStakingPoolId, isStakingPoolId } from './IStakingPoolId'
import { ITokenAmount, isTokenAmount } from '../../common/interfaces/ITokenAmount'

export const __signature__: unique symbol = Symbol()

export interface IStakingPosition extends IPosition, IStakingPositionData {
  readonly [__signature__]: symbol
  readonly id: IStakingPositionId
  readonly poolId: IStakingPoolId
  readonly principalAmount: ITokenAmount
  readonly currentAmount: ITokenAmount
  readonly claimableRewards: ITokenAmount[]

  readonly type: PositionType.Staking
}

export const StakingPositionDataSchema = z.object({
  ...PositionDataSchema.shape,
  type: z.literal(PositionType.Staking),
  id: z.custom<IStakingPositionId>((val) => isStakingPositionId(val)),
  poolId: z.custom<IStakingPoolId>((val) => isStakingPoolId(val)),
  principalAmount: z.custom<ITokenAmount>((val) => isTokenAmount(val)),
  currentAmount: z.custom<ITokenAmount>((val) => isTokenAmount(val)),
  claimableRewards: z.array(z.custom<ITokenAmount>((val) => isTokenAmount(val))),
})

export type IStakingPositionData = Readonly<z.infer<typeof StakingPositionDataSchema>>

export function isStakingPosition(maybePosition: unknown): maybePosition is IStakingPosition {
  return StakingPositionDataSchema.safeParse(maybePosition).success
}
