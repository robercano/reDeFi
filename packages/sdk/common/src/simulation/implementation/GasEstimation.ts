import { SerializationService } from '../../services/SerializationService'
import { ITokenAmount } from '../../common/interfaces/ITokenAmount'
import { IFiatCurrencyAmount } from '../../common/interfaces/IFiatCurrencyAmount'
import { IGasEstimation, IGasEstimationData, __signature__ } from '../interfaces/IGasEstimation'

export class GasEstimation implements IGasEstimation {
  readonly [__signature__] = __signature__

  public readonly gasTokenAmount: ITokenAmount
  public readonly gasFiatValue: IFiatCurrencyAmount

  public constructor(params: IGasEstimationData) {
    this.gasTokenAmount = params.gasTokenAmount
    this.gasFiatValue = params.gasFiatValue
  }
}

SerializationService.registerClass(GasEstimation, { identifier: 'GasEstimation' })
