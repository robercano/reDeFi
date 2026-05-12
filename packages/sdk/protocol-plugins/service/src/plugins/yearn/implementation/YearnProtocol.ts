import { Protocol, ProtocolName, SerializationService } from '@thesolidchain/sdk-common'
import { IYearnProtocol, IYearnProtocolData, __signature__ } from '../interfaces/IYearnProtocol'

export type YearnProtocolParameters = Omit<IYearnProtocolData, 'name'>

export class YearnProtocol extends Protocol implements IYearnProtocol {
  readonly [__signature__] = __signature__

  readonly name = ProtocolName.Yearn

  static createFrom(params: YearnProtocolParameters): YearnProtocol {
    return new YearnProtocol(params)
  }

  private constructor(params: YearnProtocolParameters) {
    super(params)
  }
}

SerializationService.registerClass(YearnProtocol, { identifier: 'YearnProtocol' })
