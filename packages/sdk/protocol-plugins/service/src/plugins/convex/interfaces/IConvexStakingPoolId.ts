import { IStakingPoolId, StakingPoolIdDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IConvexProtocol, isConvexProtocol } from './IConvexProtocol'

/** Unique signature to identify Convex Staking Pool IDs */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining a Convex Staking Pool Identifier.
 * @public
 */
export interface IConvexStakingPoolId extends IStakingPoolId, IConvexStakingPoolIdData {
  readonly [__signature__]: symbol
  /** The Convex protocol definition */
  readonly protocol: IConvexProtocol
  /** The Convex reward pool address or token address (e.g., cvxCRV) */
  readonly tokenAddress: string
}

/**
 * Zod schema for validating Convex Staking Pool ID DTOs.
 * @public
 */
export const ConvexStakingPoolIdDataSchema = z.object({
  ...StakingPoolIdDataSchema.shape,
  protocol: z.custom<IConvexProtocol>((val) => isConvexProtocol(val)),
  tokenAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

/**
 * Type representing the serialized data of a Convex Staking Pool ID.
 * @public
 */
export type IConvexStakingPoolIdData = Readonly<z.infer<typeof ConvexStakingPoolIdDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `IConvexStakingPoolId`.
 *
 * @param maybeId - The object to test.
 * @returns True if the object matches the ConvexStakingPoolId schema.
 * @public
 */
export function isConvexStakingPoolId(maybeId: unknown): maybeId is IConvexStakingPoolId {
  return ConvexStakingPoolIdDataSchema.safeParse(maybeId).success
}
