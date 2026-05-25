import { Protocol, ProtocolName, SerializationService } from '@thesolidchain/sdk-common'
import { ILidoProtocol, ILidoProtocolData, __signature__ } from '../interfaces/ILidoProtocol'

export type LidoProtocolParameters = Omit<ILidoProtocolData, 'name'>

export class LidoProtocol extends Protocol implements ILidoProtocol {
  readonly [__signature__] = __signature__
  readonly name = ProtocolName.Lido

  static createFrom(params: LidoProtocolParameters): LidoProtocol {
    return new LidoProtocol(params)
  }

  private constructor(params: LidoProtocolParameters) {
    super(params)
  }
}

SerializationService.registerClass(LidoProtocol, { identifier: 'LidoProtocol' })
