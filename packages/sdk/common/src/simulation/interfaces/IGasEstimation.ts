import { z } from 'zod'
import { IFiatCurrencyAmount, isFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { ITokenAmount, isTokenAmount } from '../../common/interfaces/ITokenAmount'

export const __signature__: unique symbol = Symbol()

export interface IGasEstimation extends IGasEstimationData {
  readonly [__signature__]: symbol
  readonly gasTokenAmount: ITokenAmount
  readonly gasFiatValue: IFiatCurrencyAmount
}

export const GasEstimationDataSchema = z.object({
  gasTokenAmount: z.custom<ITokenAmount>((val) => isTokenAmount(val)),
  gasFiatValue: z.custom<IFiatCurrencyAmount>((val) => isFiatCurrencyAmount(val)),
})

export type IGasEstimationData = Readonly<z.infer<typeof GasEstimationDataSchema>>

export function isGasEstimation(maybeGasEstimation: unknown): maybeGasEstimation is IGasEstimation {
  return GasEstimationDataSchema.safeParse(maybeGasEstimation).success
}
