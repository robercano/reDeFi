import { Config } from '@thesolidchain/deployment-types'
import { SystemConfiguration } from '../system'
import { DependenciesConfiguration } from './dependencies/dependencies'
import { ProtocolsConfiguration } from './protocols/protocols'

export const LocalhostConfig: Config = {
  system: SystemConfiguration,
  dependencies: DependenciesConfiguration,
  protocols: ProtocolsConfiguration,
}
