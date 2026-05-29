import { ProtocolConfigDependencyEntry } from './entries'

export type CompoundV3ContractNames = 'Comet' | 'CometExt' | 'CompoundV3Encoder'

/**
 * Compound V3 Protocol Config
 *
 * It maps the contract names to the dependency entries
 * in the configuration file.
 */
export type CompoundV3ProtocolConfig = Record<CompoundV3ContractNames, ProtocolConfigDependencyEntry>
