import { z } from 'zod'
import { PoolType } from '../../common/enums/PoolType'
import { IPoolId, PoolIdDataSchema } from '../../common/interfaces/IPoolId'
import { IProtocol, isProtocol } from '../../common/interfaces/IProtocol'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * IYieldPoolId
 * Opaque type representing the unique identifier for a Yield pool.
 * Typically a combination of protocol name, and pool address.
 */
export interface IYieldPoolId extends IPoolId, IYieldPoolIdData {
  readonly [__signature__]: symbol
  readonly type: PoolType.Yield
}

/**
 * Zod schema for IYieldPoolId
 */
export const YieldPoolIdDataSchema = z.object({
  ...PoolIdDataSchema.shape,
  type: z.literal(PoolType.Yield),
  protocol: z.custom<IProtocol>((val) => isProtocol(val)),
})

export type IYieldPoolIdData = Readonly<z.infer<typeof YieldPoolIdDataSchema>>

/**
 * Type guard for IYieldPoolId
 * @param maybeYieldPoolId Object to be checked
 * @returns true if the object is an IYieldPoolId
 */
export function isYieldPoolId(maybeYieldPoolId: unknown): maybeYieldPoolId is IYieldPoolId {
  return YieldPoolIdDataSchema.safeParse(maybeYieldPoolId).success
}
