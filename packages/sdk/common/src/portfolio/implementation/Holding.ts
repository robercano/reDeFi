import { SerializationService } from '../../services/SerializationService'

import { ITokenAmount } from '../../common/interfaces/ITokenAmount'
import { IFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { IHolding, IHoldingData, __signature__ } from '../interfaces/IHolding'
import { formatTokenAmountHumanReadable } from '../../common/utils/TokenAmountUtils'

/**
 * Type for the parameters of Holding
 */
export type HoldingParameters = IHoldingData

/**
 * @name Holding
 * @see IHolding
 */
export class Holding implements IHolding {
  /** SIGNATURE */
  readonly [__signature__] = __signature__

  /** ATTRIBUTES */
  readonly amount: ITokenAmount
  readonly fiatValue: IFiatCurrencyAmount

  private constructor(params: HoldingParameters) {
    this.amount = params.amount
    this.fiatValue = params.fiatValue
  }

  /** FACTORY */
  static createFrom(params: HoldingParameters): Holding {
    return new Holding(params)
  }

  /** toString */
  toString(): string {
    const formattedAmount = formatTokenAmountHumanReadable(this.amount)
    return `Holding: ${formattedAmount} ${this.amount.token.symbol} ($${this.fiatValue.toString()})`
  }
}

SerializationService.registerClass(Holding, { identifier: 'Holding' })
