import { IYieldPositionId, YieldPositionIdDataSchema } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { ILidoProtocol, isLidoProtocol } from './ILidoProtocol'

/** Unique signature to identify Lido Yield Position IDs */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining a Lido Yield Position Identifier.
 * @public
 */
export interface ILidoYieldPositionId extends IYieldPositionId, ILidoYieldPositionIdData {
  readonly [__signature__]: symbol
  /** The Lido protocol definition */
  readonly protocol: ILidoProtocol
  /** The contract address of the Lido receipt token (e.g. stETH) */
  readonly tokenAddress: string
  /** The address of the wallet that owns the position */
  readonly walletAddress: string
}

/**
 * Zod schema for validating Lido Yield Position ID DTOs.
 * @public
 */
export const LidoYieldPositionIdDataSchema = z.object({
  ...YieldPositionIdDataSchema.shape,
  protocol: z.custom<ILidoProtocol>((val) => isLidoProtocol(val)),
  tokenAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
  walletAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

/**
 * Type representing the serialized data of a Lido Yield Position ID.
 * @public
 */
export type ILidoYieldPositionIdData = Readonly<z.infer<typeof LidoYieldPositionIdDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `ILidoYieldPositionId`.
 *
 * @param maybeId - The object to test.
 * @returns True if the object matches the LidoYieldPositionId schema.
 * @public
 */
export function isLidoYieldPositionId(maybeId: unknown): maybeId is ILidoYieldPositionId {
  return LidoYieldPositionIdDataSchema.safeParse(maybeId).success
}
