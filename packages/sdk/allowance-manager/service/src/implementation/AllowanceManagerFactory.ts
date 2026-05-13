import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'

import { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { AllowanceManager } from './AllowanceManager'

/**
 * AllowanceManagerFactory
 * Factory class responsible for securely instantiating the `AllowanceManager`.
 */
export class AllowanceManagerFactory {
  /**
   * newAllowanceManager
   * Constructs and returns a new instance of the AllowanceManager service.
   *
   * @param params.configProvider - Required configuration provider instance for network parameters.
   * @param params.contractsProvider - Required contracts provider for interacting with ERC-20 tokens.
   * @returns A concrete implementation of `IAllowanceManager`.
   */
  public static newAllowanceManager(params: {
    configProvider: IConfigurationProvider
    contractsProvider: IContractsProvider
  }): AllowanceManager {
    return new AllowanceManager(params)
  }
}
