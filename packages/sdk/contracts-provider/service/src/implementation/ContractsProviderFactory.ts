import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ContractsProvider } from './ContractsProvider'

/**
 * ContractsProviderFactory
 * This class is responsible for creating instances of the ContractsProvider
 */
export class ContractsProviderFactory {
  /**
   * Instantiates a new ContractsProvider with the required configuration and client providers.
   * 
   * @param params.configProvider - Provider for accessing environment configurations
   * @param params.blockchainClientProvider - Manager for resolving correct RPC clients per chain
   * @returns A concrete instance of ContractsProvider
   */
  public static newContractsProvider(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
  }): ContractsProvider {
    return new ContractsProvider(params)
  }
}
