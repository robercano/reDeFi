import { z } from 'zod'
import { IPoolInfo, PoolInfoDataSchema } from '../../common/interfaces/IPoolInfo'
import { PoolType } from '../../common/enums/PoolType'
import { IToken, isToken } from '../../common/interfaces/IToken'
import { ILiquidityPoolId, isLiquidityPoolId } from './ILiquidityPoolId'
import {
  IFiatCurrencyAmount,
  isFiatCurrencyAmount,
} from '../../common/interfaces/IFiatCurrencyAmount'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * ILiquidityPoolInfo
 * Represents the extended information for an AMM Liquidity pool
 */
export interface ILiquidityPoolInfo extends IPoolInfo, ILiquidityPoolInfoData {
  /** Signature to differentiate from similar interfaces */
  readonly [__signature__]: symbol
  /** Pool ID of the liquidity pool */
  readonly id: ILiquidityPoolId
  /** The tokens that make up the liquidity pool */
  readonly tokens: IToken[]
  /** Total Value Locked in the pool */
  readonly totalValueLocked: IFiatCurrencyAmount

  // Re-declaring the properties to narrow the types
  readonly type: PoolType.Liquidity
}

/**
 * Zod schema for ILiquidityPoolInfo
 */
export const LiquidityPoolInfoDataSchema = z.object({
  ...PoolInfoDataSchema.shape,
  type: z.literal(PoolType.Liquidity),
  id: z.custom<ILiquidityPoolId>((val) => isLiquidityPoolId(val)),
  tokens: z.array(z.custom<IToken>((val) => isToken(val))),
  totalValueLocked: z.custom<IFiatCurrencyAmount>((val) => isFiatCurrencyAmount(val)),
})

/**
 * Type for the data part of the ILiquidityPoolInfo interface
 */
export type ILiquidityPoolInfoData = Readonly<z.infer<typeof LiquidityPoolInfoDataSchema>>

/**
 * Type guard for ILiquidityPoolInfo
 * @param maybePool Object to be checked
 * @returns true if the object is an ILiquidityPoolInfo
 */
export function isLiquidityPoolInfo(maybePool: unknown): maybePool is ILiquidityPoolInfo {
  return LiquidityPoolInfoDataSchema.safeParse(maybePool).success
}
