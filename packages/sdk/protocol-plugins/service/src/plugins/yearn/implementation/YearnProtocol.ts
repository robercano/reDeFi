import { Protocol, ProtocolName, SerializationService } from '@thesolidchain/sdk-common'
import { IYearnProtocol, IYearnProtocolData, __signature__ } from '../interfaces/IYearnProtocol'

/**
 * Initialization parameters for the Yearn Protocol.
 * @public
 */
export type YearnProtocolParameters = Omit<IYearnProtocolData, 'name'>

/**
 * Concrete implementation of the Yearn Protocol entity.
 * Identifies Yearn Finance contexts within the SDK.
 * @public
 */
export class YearnProtocol extends Protocol implements IYearnProtocol {
  readonly [__signature__] = __signature__

  /** Discriminator for identifying the Yearn Protocol */
  readonly name = ProtocolName.Yearn

  /**
   * Factory method to create a YearnProtocol instance.
   *
   * @param params - Initialization parameters.
   * @returns A new YearnProtocol instance.
   */
  static createFrom(params: YearnProtocolParameters): YearnProtocol {
    return new YearnProtocol(params)
  }

  private constructor(params: YearnProtocolParameters) {
    super(params)
  }
}

SerializationService.registerClass(YearnProtocol, { identifier: 'YearnProtocol' })
