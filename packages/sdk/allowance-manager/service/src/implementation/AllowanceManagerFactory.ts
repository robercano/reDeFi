import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'

import { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { AllowanceManager } from './AllowanceManager'

/**
 * AllowanceManagerFactory
 * This class is responsible for creating instances of the AllowanceManager
 */
export class AllowanceManagerFactory {
  public static newAllowanceManager(params: {
    configProvider: IConfigurationProvider
    contractsProvider: IContractsProvider
  }): AllowanceManager {
    return new AllowanceManager(params)
  }
}
