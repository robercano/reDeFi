import { IYieldPoolId, YieldPoolIdDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IConvexProtocol, isConvexProtocol } from './IConvexProtocol'

/** Unique signature to identify Convex Yield Pool IDs */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining a Convex Yield Pool Identifier.
 * @public
 */
export interface IConvexYieldPoolId extends IYieldPoolId, IConvexYieldPoolIdData {
  readonly [__signature__]: symbol
  /** The Convex protocol definition */
  readonly protocol: IConvexProtocol
  /** The Convex PID or Curve LP token address */
  readonly tokenAddress: string
}

/**
 * Zod schema for validating Convex Yield Pool ID DTOs.
 * @public
 */
export const ConvexYieldPoolIdDataSchema = z.object({
  ...YieldPoolIdDataSchema.shape,
  protocol: z.custom<IConvexProtocol>((val) => isConvexProtocol(val)),
  tokenAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

/**
 * Type representing the serialized data of a Convex Yield Pool ID.
 * @public
 */
export type IConvexYieldPoolIdData = Readonly<z.infer<typeof ConvexYieldPoolIdDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `IConvexYieldPoolId`.
 *
 * @param maybeId - The object to test.
 * @returns True if the object matches the ConvexYieldPoolId schema.
 * @public
 */
export function isConvexYieldPoolId(maybeId: unknown): maybeId is IConvexYieldPoolId {
  return ConvexYieldPoolIdDataSchema.safeParse(maybeId).success
}
