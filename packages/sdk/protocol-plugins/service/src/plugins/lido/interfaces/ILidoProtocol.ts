import { IProtocol, ProtocolDataSchema, ProtocolName } from '@thesolidchain/sdk-common'
import { z } from 'zod'

/** Unique signature to identify the Lido Protocol interface */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining the Lido Protocol.
 * Extends the generic `IProtocol` to enforce the `Lido` ProtocolName.
 * @public
 */
export interface ILidoProtocol extends IProtocol, ILidoProtocolData {
  readonly [__signature__]: symbol
  /** The specific ProtocolName discriminator for Lido */
  readonly name: ProtocolName.Lido
}

/**
 * Zod schema for validating Lido Protocol DTOs.
 * @public
 */
export const LidoProtocolDataSchema = z.object({
  ...ProtocolDataSchema.shape,
  name: z.literal(ProtocolName.Lido),
})

/**
 * Type representing the serialized data of the Lido Protocol.
 * @public
 */
export type ILidoProtocolData = Readonly<z.infer<typeof LidoProtocolDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `ILidoProtocolData`.
 *
 * @param maybeProtocol - The object to test.
 * @returns True if the object matches the LidoProtocolData schema.
 * @public
 */
export function isLidoProtocol(maybeProtocol: unknown): maybeProtocol is ILidoProtocolData {
  return LidoProtocolDataSchema.safeParse(maybeProtocol).success
}
