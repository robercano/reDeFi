import { IBlockchainClientProvider } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ContractsProvider } from './ContractsProvider'

/**
 * @name ContractsProviderFactory
 * @description This class is responsible for creating instances of the ContractsProvider
 */
export class ContractsProviderFactory {
  public static newContractsProvider(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainClientProvider
  }): ContractsProvider {
    return new ContractsProvider(params)
  }
}
