import { Protocol, ProtocolName, SerializationService } from '@thesolidchain/sdk-common'
import { ICompoundV3Protocol, ICompoundV3ProtocolData, __signature__ } from '../interfaces/ICompoundV3Protocol'

/**
 * Type for the parameters of CompoundV3Protocol
 */
export type CompoundV3ProtocolParameters = Omit<ICompoundV3ProtocolData, 'name'>

/**
 * @class CompoundV3Protocol
 * @see ICompoundV3ProtocolData
 */
export class CompoundV3Protocol extends Protocol implements ICompoundV3Protocol {
  /** SIGNATURE */
  readonly [__signature__] = __signature__

  /** ATTRIBUTES */
  readonly name = ProtocolName.CompoundV3

  /** FACTORY */
  static createFrom(params: CompoundV3ProtocolParameters): CompoundV3Protocol {
    return new CompoundV3Protocol(params)
  }

  /** SEALED CONSTRUCTOR */
  private constructor(params: CompoundV3ProtocolParameters) {
    super(params)
  }
}

SerializationService.registerClass(CompoundV3Protocol, { identifier: 'CompoundV3Protocol' })
