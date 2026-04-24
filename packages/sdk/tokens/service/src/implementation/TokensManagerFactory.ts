import { type IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import type { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import type { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { ITokensManager, ITokensProvider } from '@thesolidchain/tokens-common'
import { TokensManager } from './TokensManager'
import { DatabaseTokensProvider } from './database/DatabaseTokensProvider'

/**
 * @name TokensManagerFactory
 * @description Factory class for the TokensManager. Takes care of generating the manager config and creates an instance
 */
export class TokensManagerFactory {
  /**
   * @name providersConfig
   * @description Configuration for the TokensManager. It includes the list of available providers
   */
  static providers: ITokensProvider[] = []

  /**
   * @method newTokensManager
   * @param configProvider The configuration provider used to get environment variables
   * @param blockchainClientProvider The blockchain client provider for blockchain interactions
   * @returns A new instance of the TokensManager
   */
  public static newTokensManager(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
    contractsProvider: IContractsProvider
  }): ITokensManager {
    this.initialize(params)

    return new TokensManager({ providers: this.providers })
  }

  /** PRIVATE */

  /**
   * @method initialize
   * @description Initializes the different providers
   * @param configProvider The configuration provider used to get environment variables
   * @param blockchainClientProvider The blockchain client provider for blockchain interactions
   */
  private static initialize(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
    contractsProvider: IContractsProvider
  }): void {
    if (this.providers.length != 0) {
      return
    }

    const { configProvider, blockchainClientProvider, contractsProvider } = params

    // Database provider
    const databaseProvider = new DatabaseTokensProvider({
      configProvider: configProvider,
      blockchainClientProvider: blockchainClientProvider,
      contractsProvider: contractsProvider,
    })

    this.providers = [databaseProvider]
  }
}
