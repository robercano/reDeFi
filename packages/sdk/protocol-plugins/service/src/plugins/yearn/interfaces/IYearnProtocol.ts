import { IProtocol, ProtocolDataSchema, ProtocolName } from '@thesolidchain/sdk-common'
import { z } from 'zod'

/** Unique signature to identify the Yearn Protocol interface */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining the Yearn Protocol.
 * Extends the generic `IProtocol` to enforce the `Yearn` ProtocolName.
 * @public
 */
export interface IYearnProtocol extends IProtocol, IYearnProtocolData {
  readonly [__signature__]: symbol
  /** The specific ProtocolName discriminator for Yearn */
  readonly name: ProtocolName.Yearn
}

/**
 * Zod schema for validating Yearn Protocol DTOs.
 * @public
 */
export const YearnProtocolDataSchema = z.object({
  ...ProtocolDataSchema.shape,
  name: z.literal(ProtocolName.Yearn),
})

/**
 * Type representing the serialized data of the Yearn Protocol.
 * @public
 */
export type IYearnProtocolData = Readonly<z.infer<typeof YearnProtocolDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `IYearnProtocolData`.
 *
 * @param maybeProtocol - The object to test.
 * @returns True if the object matches the YearnProtocolData schema.
 * @public
 */
export function isYearnProtocol(maybeProtocol: unknown): maybeProtocol is IYearnProtocolData {
  return YearnProtocolDataSchema.safeParse(maybeProtocol).success
}
