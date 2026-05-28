import { z } from 'zod'
import { IPositionId, PositionIdDataSchema } from '../../common/interfaces/IPositionId'
import { PositionType } from '../../common/enums/PositionType'
import { ILiquidityPoolId, LiquidityPoolIdSchema } from './ILiquidityPoolId'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * ILiquidityPositionId
 * Represents a unique identifier for a liquidity position within a pool.
 * Note: AMM positions can be represented via an NFT tokenId or an address.
 */
export interface ILiquidityPositionId extends IPositionId, ILiquidityPositionIdData {
  /** Signature to differentiate from similar interfaces */
  readonly [__signature__]: symbol
  /** The pool ID associated with this position */
  readonly poolId: ILiquidityPoolId
  /** Optional tokenId for NFT-based positions (e.g. Uniswap V3) */
  readonly tokenId?: string

  // Re-declaring the properties to narrow the types
  readonly type: PositionType.Liquidity
}

/**
 * Zod schema for ILiquidityPositionId
 */
export const LiquidityPositionIdSchema = z.object({
  ...PositionIdDataSchema.shape,
  type: z.literal(PositionType.Liquidity),
  poolId: z.custom<ILiquidityPoolId>((val) => LiquidityPoolIdSchema.safeParse(val).success),
  tokenId: z.string().optional(),
})

/**
 * Type for the data part of the ILiquidityPositionId interface
 */
export type ILiquidityPositionIdData = Readonly<z.infer<typeof LiquidityPositionIdSchema>>

/**
 * Type guard for ILiquidityPositionId
 * @param maybePositionId Object to be checked
 * @returns true if the object is an ILiquidityPositionId
 */
export function isLiquidityPositionId(
  maybePositionId: unknown,
): maybePositionId is ILiquidityPositionId {
  return LiquidityPositionIdSchema.safeParse(maybePositionId).success
}
