import { z } from 'zod'
import { IPercentage, isPercentage } from '../../common/interfaces/IPercentage'
import { IPrice, isPrice } from '../../common/interfaces/IPrice'
import { IToken, isToken } from '../../common/interfaces/IToken'
import { ITokenAmount, isTokenAmount } from '../../common/interfaces/ITokenAmount'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * @interface IDebtInfo
 * @description Contains information about a debt token of a lending pool
 *
 * Initially this is used for single pair lending pools, but it can be re-used in multi-token
 * lending pools
 */
export interface IDebtInfo extends IDebtInfoData {
  /** Signature to differentiate from similar interfaces */
  readonly [__signature__]: symbol
  /** The token that represents the debt */
  readonly token: IToken
  /** The price of the token in the protocol's default denomination */
  readonly price: IPrice
  /** The price of the token in USD */
  readonly priceUSD: IPrice
  /** The interest rate of the debt. TODO: which units?? */
  readonly interestRate: IPercentage
  /** The total amount of the token borrowed */
  readonly totalBorrowed: ITokenAmount
  /** The maximum amount of the token that can be borrowed */
  readonly debtCeiling: ITokenAmount
  /** The amount of the token that can still be borrowed */
  readonly debtAvailable: ITokenAmount
  /** The minimum amount of the token that can be borrowed */
  readonly dustLimit: ITokenAmount
  /** The fee that is charged for creating a new debt */
  readonly originationFee: IPercentage
}

/**
 * @description Zod schema for IDebtInfo
 */
export const DebtInfoDataSchema = z.object({
  token: z.custom<IToken>((val: any) => isToken(val)),
  price: z.custom<IPrice>((val: any) => isToken(val)),
  priceUSD: z.custom<IPrice>((val: any) => isPrice(val)),
  interestRate: z.custom<IPercentage>((val: any) => isPercentage(val)),
  totalBorrowed: z.custom<ITokenAmount>((val: any) => isTokenAmount(val)),
  debtCeiling: z.custom<ITokenAmount>((val: any) => isTokenAmount(val)),
  debtAvailable: z.custom<ITokenAmount>((val: any) => isTokenAmount(val)),
  dustLimit: z.custom<ITokenAmount>((val: any) => isTokenAmount(val)),
  originationFee: z.custom<IPercentage>((val: any) => isPercentage(val)),
})

/**
 * Type for the data part of the IDebtInfo interface
 */
export type IDebtInfoData = Readonly<z.infer<typeof DebtInfoDataSchema>>

/**
 * @description Type guard for IDebtInfo
 * @param maybeDebtInfo
 * @returns true if the object is an IDebtInfo
 */
export function isDebtInfo(maybeDebtInfo: unknown): maybeDebtInfo is IDebtInfoData {
  return DebtInfoDataSchema.safeParse(maybeDebtInfo).success
}
