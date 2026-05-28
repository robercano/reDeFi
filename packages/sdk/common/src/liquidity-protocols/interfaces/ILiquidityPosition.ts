import { z } from 'zod'
import { PositionType } from '../../common/enums/PositionType'
import { IPosition, PositionDataSchema } from '../../common/interfaces/IPosition'
import { ITokenAmount, isTokenAmount } from '../../common/interfaces/ITokenAmount'
import { ILiquidityPoolId, isLiquidityPoolId } from './ILiquidityPoolId'
import { ILiquidityPositionId, isLiquidityPositionId } from './ILiquidityPositionId'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * ILiquidityPosition
 * Represents a position in a Liquidity protocol (AMM)
 */
export interface ILiquidityPosition extends IPosition, ILiquidityPositionData {
  /** Signature to differentiate from similar interfaces */
  readonly [__signature__]: symbol
  /** Unique identifier for the position */
  readonly id: ILiquidityPositionId
  /** Pool ID where the position is located */
  readonly poolId: ILiquidityPoolId
  /** The amounts of tokens currently held in this liquidity position */
  readonly currentAmounts: ITokenAmount[]
  /** Any claimable secondary reward or fee tokens accumulated */
  readonly claimableRewards: ITokenAmount[]
  /** Optional lower tick boundary for concentrated liquidity positions (e.g. Uniswap V3) */
  readonly tickLower?: number
  /** Optional upper tick boundary for concentrated liquidity positions (e.g. Uniswap V3) */
  readonly tickUpper?: number

  // Re-declaring the properties to narrow the types
  readonly type: PositionType.Liquidity
}

/**
 * Zod schema for ILiquidityPosition
 */
export const LiquidityPositionDataSchema = z.object({
  ...PositionDataSchema.shape,
  id: z.custom<ILiquidityPositionId>((val) => isLiquidityPositionId(val)),
  poolId: z.custom<ILiquidityPoolId>((val) => isLiquidityPoolId(val)),
  currentAmounts: z.array(z.custom<ITokenAmount>((val) => isTokenAmount(val))),
  claimableRewards: z.array(z.custom<ITokenAmount>((val) => isTokenAmount(val))),
  tickLower: z.number().optional(),
  tickUpper: z.number().optional(),
  type: z.literal(PositionType.Liquidity),
})

/**
 * Type for the data part of the ILiquidityPosition interface
 */
export type ILiquidityPositionData = Readonly<z.infer<typeof LiquidityPositionDataSchema>>

/**
 * Type guard for ILiquidityPosition
 * @param maybeLiquidityPosition Object to be checked
 * @returns true if the object is an ILiquidityPosition
 */
export function isLiquidityPosition(
  maybeLiquidityPosition: unknown,
): maybeLiquidityPosition is ILiquidityPosition {
  return LiquidityPositionDataSchema.safeParse(maybeLiquidityPosition).success
}
