import { z } from 'zod'
import { IPoolId, PoolIdDataSchema } from '../../common/interfaces/IPoolId'
import { PoolType } from '../../common/enums/PoolType'
import { IProtocol, isProtocol } from '../../common/interfaces/IProtocol'
import { IAddress, isAddress, AddressDataSchema } from '../../common/interfaces/IAddress'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * ILiquidityPoolId
 * Represents a unique identifier for a liquidity pool.
 */
export interface ILiquidityPoolId extends IPoolId, ILiquidityPoolIdData {
  /** Signature to differentiate from similar interfaces */
  readonly [__signature__]: symbol
  /** The address of the liquidity pool */
  readonly address: IAddress
  /** The chain ID of the pool */
  readonly chainId: number

  // Re-declaring the properties to narrow the types
  readonly type: PoolType.Liquidity
}

/**
 * Zod schema for ILiquidityPoolId
 */
export const LiquidityPoolIdSchema = z.object({
  ...PoolIdDataSchema.shape,
  type: z.literal(PoolType.Liquidity),
  address: z.custom<IAddress>((val) => isAddress(val)),
  chainId: z.number(),
  protocol: z.custom<IProtocol>((val) => isProtocol(val)),
})

/**
 * Type for the data part of the ILiquidityPoolId interface
 */
export type ILiquidityPoolIdData = Readonly<z.infer<typeof LiquidityPoolIdSchema>>

/**
 * Type guard for ILiquidityPoolId
 * @param maybePoolId Object to be checked
 * @returns true if the object is an ILiquidityPoolId
 */
export function isLiquidityPoolId(maybePoolId: unknown): maybePoolId is ILiquidityPoolId {
  return LiquidityPoolIdSchema.safeParse(maybePoolId).success
}
