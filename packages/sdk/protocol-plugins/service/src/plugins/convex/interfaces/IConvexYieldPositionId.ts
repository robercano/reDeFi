import { IYieldPositionId, YieldPositionIdDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IConvexProtocol, isConvexProtocol } from './IConvexProtocol'

/** Unique signature to identify Convex Yield Position IDs */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining a Convex Yield Position Identifier.
 * @public
 */
export interface IConvexYieldPositionId extends IYieldPositionId, IConvexYieldPositionIdData {
  readonly [__signature__]: symbol
  /** The Convex protocol definition */
  readonly protocol: IConvexProtocol
  /** The Convex Curve LP token address or PID */
  readonly tokenAddress: string
  /** The wallet address of the user */
  readonly walletAddress: string
}

/**
 * Zod schema for validating Convex Yield Position ID DTOs.
 * @public
 */
export const ConvexYieldPositionIdDataSchema = z.object({
  ...YieldPositionIdDataSchema.shape,
  protocol: z.custom<IConvexProtocol>((val) => isConvexProtocol(val)),
  tokenAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
  walletAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

/**
 * Type representing the serialized data of a Convex Yield Position ID.
 * @public
 */
export type IConvexYieldPositionIdData = Readonly<z.infer<typeof ConvexYieldPositionIdDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `IConvexYieldPositionId`.
 *
 * @param maybeId - The object to test.
 * @returns True if the object matches the ConvexYieldPositionId schema.
 * @public
 */
export function isConvexYieldPositionId(maybeId: unknown): maybeId is IConvexYieldPositionId {
  return ConvexYieldPositionIdDataSchema.safeParse(maybeId).success
}
