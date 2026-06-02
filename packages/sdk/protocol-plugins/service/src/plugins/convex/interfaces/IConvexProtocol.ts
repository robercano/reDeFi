import { IProtocol, ProtocolDataSchema, ProtocolName } from '@thesolidchain/sdk-common'
import { z } from 'zod'

/** Unique signature to identify the Convex Protocol interface */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining the Convex Protocol.
 * Extends the generic `IProtocol` to enforce the `Convex` ProtocolName.
 * @public
 */
export interface IConvexProtocol extends IProtocol, IConvexProtocolData {
  readonly [__signature__]: symbol
  /** The specific ProtocolName discriminator for Convex */
  readonly name: ProtocolName.Convex
}

/**
 * Zod schema for validating Convex Protocol DTOs.
 * @public
 */
export const ConvexProtocolDataSchema = z.object({
  ...ProtocolDataSchema.shape,
  name: z.literal(ProtocolName.Convex),
})

/**
 * Type representing the serialized data of the Convex Protocol.
 * @public
 */
export type IConvexProtocolData = Readonly<z.infer<typeof ConvexProtocolDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `IConvexProtocolData`.
 *
 * @param maybeProtocol - The object to test.
 * @returns True if the object matches the ConvexProtocolData schema.
 * @public
 */
export function isConvexProtocol(maybeProtocol: unknown): maybeProtocol is IConvexProtocolData {
  return ConvexProtocolDataSchema.safeParse(maybeProtocol).success
}
