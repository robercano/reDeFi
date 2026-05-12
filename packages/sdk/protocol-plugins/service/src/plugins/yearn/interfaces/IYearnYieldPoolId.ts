import { IYieldPoolId, YieldPoolIdDataSchema, PoolType } from '@thesolidchain/sdk-common'
import { z } from 'zod'
import { IYearnProtocol, isYearnProtocol } from './IYearnProtocol'

/** Unique signature to identify Yearn Yield Pool IDs */
export const __signature__: unique symbol = Symbol()

/**
 * Interface defining a Yearn Yield Pool Identifier.
 * Extends the generic `IYieldPoolId` to include Yearn-specific protocol and address constraints.
 * @public
 */
export interface IYearnYieldPoolId extends IYieldPoolId, IYearnYieldPoolIdData {
  readonly [__signature__]: symbol
  /** The Yearn protocol definition */
  readonly protocol: IYearnProtocol
  /** The contract address of the Yearn vault */
  readonly vaultAddress: string
}

/** 
 * Zod schema for validating Yearn Yield Pool ID DTOs.
 * @public 
 */
export const YearnYieldPoolIdDataSchema = z.object({
  ...YieldPoolIdDataSchema.shape,
  protocol: z.custom<IYearnProtocol>((val) => isYearnProtocol(val)),
  vaultAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
})

/** 
 * Type representing the serialized data of a Yearn Yield Pool ID.
 * @public 
 */
export type IYearnYieldPoolIdData = Readonly<z.infer<typeof YearnYieldPoolIdDataSchema>>

/**
 * Type guard to check if an unknown object is a valid `IYearnYieldPoolId`.
 *
 * @param maybeId - The object to test.
 * @returns True if the object matches the YearnYieldPoolId schema.
 * @public
 */
export function isYearnYieldPoolId(maybeId: unknown): maybeId is IYearnYieldPoolId {
  return YearnYieldPoolIdDataSchema.safeParse(maybeId).success
}
