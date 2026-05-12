import { z } from 'zod'
import { IPoolInfo, PoolInfoDataSchema } from '../../common/interfaces/IPoolInfo'
import { PoolType } from '../../common/enums/PoolType'
import { IToken, isToken } from '../../common/interfaces/IToken'
import { IPercentage, isPercentage } from '../../common/interfaces/IPercentage'
import { YieldType, YieldTypeSchema } from '../types/YieldType'
import { IYieldPoolId, isYieldPoolId } from './IYieldPoolId'
import {
  IFiatCurrencyAmount,
  isFiatCurrencyAmount,
} from '../../common/interfaces/IFiatCurrencyAmount'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * IYieldPoolInfo
 * Represents the extended information for a Yield pool
 */
export interface IYieldPoolInfo extends IPoolInfo, IYieldPoolInfoData {
  /** Signature to differentiate from similar interfaces */
  readonly [__signature__]: symbol
  /** Pool ID of the yield pool */
  readonly id: IYieldPoolId
  /** The underlying token that is deposited */
  readonly underlyingToken: IToken
  /** The receipt token that is minted/received */
  readonly receiptToken: IToken
  /** The yield type classification */
  readonly yieldType: YieldType
  /** The current APY of the pool */
  readonly currentApy: IPercentage
  /** Total Value Locked in the pool */
  readonly totalValueLocked: IFiatCurrencyAmount

  // Re-declaring the properties to narrow the types
  readonly type: PoolType.Yield
}

/**
 * Zod schema for IYieldPoolInfo
 */
export const YieldPoolInfoDataSchema = z.object({
  ...PoolInfoDataSchema.shape,
  type: z.literal(PoolType.Yield),
  id: z.custom<IYieldPoolId>((val) => isYieldPoolId(val)),
  underlyingToken: z.custom<IToken>((val) => isToken(val)),
  receiptToken: z.custom<IToken>((val) => isToken(val)),
  yieldType: YieldTypeSchema,
  currentApy: z.custom<IPercentage>((val) => isPercentage(val)),
  totalValueLocked: z.custom<IFiatCurrencyAmount>((val) => isFiatCurrencyAmount(val)),
})

/**
 * Type for the data part of the IYieldPoolInfo interface
 */
export type IYieldPoolInfoData = Readonly<z.infer<typeof YieldPoolInfoDataSchema>>

/**
 * Type guard for IYieldPoolInfo
 * @param maybePool Object to be checked
 * @returns true if the object is an IYieldPoolInfo
 */
export function isYieldPoolInfo(maybePool: unknown): maybePool is IYieldPoolInfo {
  return YieldPoolInfoDataSchema.safeParse(maybePool).success
}
