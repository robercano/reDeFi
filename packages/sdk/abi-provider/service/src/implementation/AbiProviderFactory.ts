import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { AbiProvider } from './AbiProvider'

/**
 * AbiProviderFactory
 * This class is responsible for creating instances of the AbiProvider
 */
export class AbiProviderFactory {
  /**
   * Instantiates a new AbiProvider with the required configuration provider.
   *
   * @param params.configProvider - Provider for accessing environment configurations
   * @returns A concrete instance of AbiProvider
   */
  public static newAbiProvider(params: { configProvider: IConfigurationProvider }): AbiProvider {
    return new AbiProvider(params)
  }
}
