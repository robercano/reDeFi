import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ContractsProvider } from './ContractsProvider'

/**
 * ContractsProviderFactory
 * This class is responsible for creating instances of the ContractsProvider
 */
export class ContractsProviderFactory {
  public static newContractsProvider(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
  }): ContractsProvider {
    return new ContractsProvider(params)
  }
}
