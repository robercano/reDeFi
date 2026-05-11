import { SerializationService } from '../../services/SerializationService'
import { IToken } from '../../common/interfaces/IToken'
import { ITokenAmount } from '../../common/interfaces/ITokenAmount'
import { IFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { IBalanceChange, IBalanceChangeData, __signature__ } from '../interfaces/IBalanceChange'

export class BalanceChange implements IBalanceChange {
  readonly [__signature__] = __signature__

  public readonly token: IToken
  public readonly amount: ITokenAmount
  public readonly fiatValue: IFiatCurrencyAmount

  public constructor(params: IBalanceChangeData) {
    this.token = params.token
    this.amount = params.amount
    this.fiatValue = params.fiatValue
  }
}

SerializationService.registerClass(BalanceChange, { identifier: 'BalanceChange' })
