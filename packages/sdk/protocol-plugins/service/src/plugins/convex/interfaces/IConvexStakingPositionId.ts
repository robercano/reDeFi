import { IStakingPositionId, StakingPositionIdDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IConvexProtocol, isConvexProtocol } from './IConvexProtocol'
import { IConvexStakingPoolId, isConvexStakingPoolId } from './IConvexStakingPoolId'
import { IWallet, isWallet } from '@thesolidchain/sdk-common'

/** Unique signature to identify Convex Staking Position IDs */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining a Convex Staking Position Identifier.
 * @public
 */
export interface IConvexStakingPositionId extends IStakingPositionId, IConvexStakingPositionIdData {
  readonly [__signature__]: symbol
  /** The Convex protocol definition */
  readonly protocol: IConvexProtocol
  readonly poolId: IConvexStakingPoolId
  readonly wallet: IWallet
}

/**
 * Zod schema for validating Convex Staking Position ID DTOs.
 * @public
 */
export const ConvexStakingPositionIdDataSchema = z.object({
  ...StakingPositionIdDataSchema.shape,
  protocol: z.custom<IConvexProtocol>((val) => isConvexProtocol(val)),
  poolId: z.custom<IConvexStakingPoolId>((val) => isConvexStakingPoolId(val)),
  wallet: z.custom<IWallet>((val) => isWallet(val)),
})

/**
 * Type representing the serialized data of a Convex Staking Position ID.
 * @public
 */
export type IConvexStakingPositionIdData = Readonly<z.infer<typeof ConvexStakingPositionIdDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `IConvexStakingPositionId`.
 *
 * @param maybeId - The object to test.
 * @returns True if the object matches the ConvexStakingPositionId schema.
 * @public
 */
export function isConvexStakingPositionId(maybeId: unknown): maybeId is IConvexStakingPositionId {
  return ConvexStakingPositionIdDataSchema.safeParse(maybeId).success
}
