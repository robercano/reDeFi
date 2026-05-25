import { IYieldPoolId, YieldPoolIdDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { ILidoProtocol, isLidoProtocol } from './ILidoProtocol'

/** Unique signature to identify Lido Yield Pool IDs */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining a Lido Yield Pool Identifier.
 * Extends the generic `IYieldPoolId` to include Lido-specific protocol and address constraints.
 * @public
 */
export interface ILidoYieldPoolId extends IYieldPoolId, ILidoYieldPoolIdData {
  readonly [__signature__]: symbol
  /** The Lido protocol definition */
  readonly protocol: ILidoProtocol
  /** The contract address of the Lido receipt token (e.g., stETH or wstETH) */
  readonly tokenAddress: string
}

/**
 * Zod schema for validating Lido Yield Pool ID DTOs.
 * @public
 */
export const LidoYieldPoolIdDataSchema = z.object({
  ...YieldPoolIdDataSchema.shape,
  protocol: z.custom<ILidoProtocol>((val) => isLidoProtocol(val)),
  tokenAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

/**
 * Type representing the serialized data of a Lido Yield Pool ID.
 * @public
 */
export type ILidoYieldPoolIdData = Readonly<z.infer<typeof LidoYieldPoolIdDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `ILidoYieldPoolId`.
 *
 * @param maybeId - The object to test.
 * @returns True if the object matches the LidoYieldPoolId schema.
 * @public
 */
export function isLidoYieldPoolId(maybeId: unknown): maybeId is ILidoYieldPoolId {
  return LidoYieldPoolIdDataSchema.safeParse(maybeId).success
}
