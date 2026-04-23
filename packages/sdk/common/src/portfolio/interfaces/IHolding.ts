import { z } from 'zod'

import { ITokenAmount, isTokenAmount } from '../../common/interfaces/ITokenAmount'
import { IFiatCurrencyAmount, isFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { IPrintable } from '../../common/interfaces/IPrintable'

/**
 * Unique signature to provide branded types to the interface
 */
export const __signature__: unique symbol = Symbol()

/**
 * Zod schema for IHolding
 */
export const HoldingDataSchema = z.object({
  amount: z.custom<ITokenAmount>((val) => isTokenAmount(val)),
  fiatValue: z.custom<IFiatCurrencyAmount>((val) => isFiatCurrencyAmount(val)),
})

/**
 * Type for the data part of IHolding
 */
export type IHoldingData = Readonly<z.infer<typeof HoldingDataSchema>>

/**
 * @name IHolding
 * @description Represents a generic holding like a token balance in a wallet.
 */
export interface IHolding extends IHoldingData, IPrintable {
  readonly [__signature__]: symbol
  readonly amount: ITokenAmount
  readonly fiatValue: IFiatCurrencyAmount
}

/**
 * Type guard for IHolding
 * @param maybeHolding Object to be checked
 * @returns true if the object is an IHolding
 */
export function isHolding(maybeHolding: unknown): maybeHolding is IHolding {
  return HoldingDataSchema.safeParse(maybeHolding).success
}
