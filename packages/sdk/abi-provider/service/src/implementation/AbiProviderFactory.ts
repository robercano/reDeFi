import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { AbiProvider } from './AbiProvider'

/**
 * AbiProviderFactory
 * This class is responsible for creating instances of the AbiProvider
 */
export class AbiProviderFactory {
  public static newAbiProvider(params: { configProvider: IConfigurationProvider }): AbiProvider {
    return new AbiProvider(params)
  }
}
