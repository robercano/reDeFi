import { z } from 'zod'
import { IUser, isUser } from '../../user/interfaces/IUser'
import { isHolding, type IHolding } from './IHolding'
import { IFiatCurrencyAmount, isFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { IPrintable } from '../../common/interfaces/IPrintable'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * Zod schema for IUserPortfolio
 */
export const UserPortfolioDataSchema = z.object({
  user: z.custom<IUser>((val) => isUser(val)),
  walletHoldings: z.array(z.custom<IHolding>((val) => isHolding(val))),
  totalFiatValue: z.custom<IFiatCurrencyAmount>((val) => isFiatCurrencyAmount(val)),
})

/**
 * Type for the data part of IUserPortfolio
 */
export type IUserPortfolioData = Readonly<z.infer<typeof UserPortfolioDataSchema>>

/**
 * IUserPortfolio
 * Represents the portfolio holdings of a specific user.
 */
export interface IUserPortfolio extends IUserPortfolioData, IPrintable {
  readonly [__signature__]: symbol
  readonly user: IUser
  readonly walletHoldings: IHolding[]
  readonly totalFiatValue: IFiatCurrencyAmount
}

/**
 * Type guard for IUserPortfolio
 * @param maybePortfolio Object to be checked
 * @returns true if the object is an IUserPortfolio
 */
export function isUserPortfolio(maybePortfolio: unknown): maybePortfolio is IUserPortfolio {
  return UserPortfolioDataSchema.safeParse(maybePortfolio).success
}
