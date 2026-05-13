import { IYieldPositionId, YieldPositionIdDataSchema, PoolType } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IYearnProtocol, isYearnProtocol } from './IYearnProtocol'

/** Unique signature to identify Yearn Yield Position IDs */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining a Yearn Yield Position Identifier.
 * Extends the generic `IYieldPositionId` to include Yearn-specific protocol and wallet address constraints.
 * @public
 */
export interface IYearnYieldPositionId extends IYieldPositionId, IYearnYieldPositionIdData {
  readonly [__signature__]: symbol
  /** The Yearn protocol definition */
  readonly protocol: IYearnProtocol
  /** The contract address of the Yearn vault */
  readonly vaultAddress: string
  /** The address of the wallet that owns the position */
  readonly walletAddress: string
}

/**
 * Zod schema for validating Yearn Yield Position ID DTOs.
 * @public
 */
export const YearnYieldPositionIdDataSchema = z.object({
  ...YieldPositionIdDataSchema.shape,
  protocol: z.custom<IYearnProtocol>((val) => isYearnProtocol(val)),
  vaultAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
  walletAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

/**
 * Type representing the serialized data of a Yearn Yield Position ID.
 * @public
 */
export type IYearnYieldPositionIdData = Readonly<z.infer<typeof YearnYieldPositionIdDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `IYearnYieldPositionId`.
 *
 * @param maybeId - The object to test.
 * @returns True if the object matches the YearnYieldPositionId schema.
 * @public
 */
export function isYearnYieldPositionId(maybeId: unknown): maybeId is IYearnYieldPositionId {
  return YearnYieldPositionIdDataSchema.safeParse(maybeId).success
}
