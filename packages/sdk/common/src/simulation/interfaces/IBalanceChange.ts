import { z } from 'zod'
import { IFiatCurrencyAmount, isFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { IToken, isToken } from '../../common/interfaces/IToken'
import { ITokenAmount, isTokenAmount } from '../../common/interfaces/ITokenAmount'

export const __signature__: unique symbol = Symbol()

export interface IBalanceChange extends IBalanceChangeData {
  readonly [__signature__]: symbol
  readonly token: IToken
  readonly amount: ITokenAmount
  readonly fiatValue: IFiatCurrencyAmount
}

export const BalanceChangeDataSchema = z.object({
  token: z.custom<IToken>((val) => isToken(val)),
  amount: z.custom<ITokenAmount>((val) => isTokenAmount(val)),
  fiatValue: z.custom<IFiatCurrencyAmount>((val) => isFiatCurrencyAmount(val)),
})

export type IBalanceChangeData = Readonly<z.infer<typeof BalanceChangeDataSchema>>

export function isBalanceChange(maybeBalanceChange: unknown): maybeBalanceChange is IBalanceChange {
  return BalanceChangeDataSchema.safeParse(maybeBalanceChange).success
}
