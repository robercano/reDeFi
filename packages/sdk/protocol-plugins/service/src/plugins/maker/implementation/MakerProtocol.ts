import { Protocol, ProtocolName, SerializationService } from '@thesolidchain/sdk-common'
import { IMakerProtocol, IMakerProtocolData, __signature__ } from '../interfaces/IMakerProtocol'

/**
 * Initialization parameters for the Maker Protocol.
 * @public
 */
export type MakerProtocolParameters = Omit<IMakerProtocolData, 'name'>

/**
 * Concrete implementation of the Maker Protocol entity.
 * Identifies Maker contexts within the SDK.
 * @public
 */
export class MakerProtocol extends Protocol implements IMakerProtocol {
  readonly [__signature__] = __signature__

  /** Discriminator for identifying the Maker Protocol */
  readonly name = ProtocolName.Maker

  /**
   * Factory method to create a MakerProtocol instance.
   *
   * @param params - Initialization parameters.
   * @returns A new MakerProtocol instance.
   */
  static createFrom(params: MakerProtocolParameters): MakerProtocol {
    return new MakerProtocol(params)
  }

  private constructor(params: MakerProtocolParameters) {
    super(params)
  }
}

SerializationService.registerClass(MakerProtocol, { identifier: 'MakerProtocol' })
