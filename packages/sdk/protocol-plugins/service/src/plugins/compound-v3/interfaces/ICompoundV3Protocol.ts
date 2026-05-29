import { IProtocol, ProtocolDataSchema, ProtocolName } from '@thesolidchain/sdk-common'

import { z } from 'zod'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * @interface ICompoundV3Protocol
 * Identifier of the Compound V3 protocol
 */
export interface ICompoundV3Protocol extends IProtocol, ICompoundV3ProtocolData {
  /** Interface signature used to differentiate it from similar interfaces */
  readonly [__signature__]: symbol

  // Re-declaring the properties to narrow the types
  readonly name: ProtocolName.CompoundV3
}

/**
 * Zod schema for ICompoundV3Protocol
 */
export const CompoundV3ProtocolDataSchema = z.object({
  ...ProtocolDataSchema.shape,
  name: z.literal(ProtocolName.CompoundV3),
})

/**
 * Type for the data part of ICompoundV3Protocol
 */
export type ICompoundV3ProtocolData = Readonly<z.infer<typeof CompoundV3ProtocolDataSchema>>

/**
 * Type guard for ICompoundV3Protocol
 * @param maybeProtocol
 * @returns true if the object is an ICompoundV3Protocol
 */
export function isCompoundV3Protocol(maybeProtocol: unknown): maybeProtocol is ICompoundV3ProtocolData {
  return CompoundV3ProtocolDataSchema.safeParse(maybeProtocol).success
}
