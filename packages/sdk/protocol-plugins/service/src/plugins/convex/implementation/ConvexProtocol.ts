import { Protocol, ProtocolName, SerializationService } from '@thesolidchain/sdk-common'
import { IConvexProtocol, IConvexProtocolData, __signature__ } from '../interfaces/IConvexProtocol'

export type ConvexProtocolParameters = Omit<IConvexProtocolData, 'name'>

export class ConvexProtocol extends Protocol implements IConvexProtocol {
  readonly [__signature__] = __signature__
  readonly name = ProtocolName.Convex

  static createFrom(params: ConvexProtocolParameters): ConvexProtocol {
    return new ConvexProtocol(params)
  }

  private constructor(params: ConvexProtocolParameters) {
    super(params)
  }
}

SerializationService.registerClass(ConvexProtocol, { identifier: 'ConvexProtocol' })
