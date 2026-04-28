import { type IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import type { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import type { IContractsProvider } from '@thesolidchain/contracts-provider-common'
import { ICacheService } from '@thesolidchain/api-server-common'
import { ITokensManager, ITokensProvider } from '@thesolidchain/tokens-common'
import { TokensManager } from './TokensManager'
import { DatabaseTokensProvider } from './database/DatabaseTokensProvider'

/**
 * TokensManagerFactory
 * Factory class for the TokensManager. Takes care of generating the manager config and creates an instance
 */
export class TokensManagerFactory {
  /**
   * providersConfig
   * Configuration for the TokensManager. It includes the list of available providers
   */
  static providers: ITokensProvider[] = []

  /**
   * newTokensManager
   * @param params.configProvider The configuration provider used to get environment variables
   * @param params.blockchainClientProvider The blockchain client provider for blockchain interactions
   * @returns A new instance of the TokensManager
   */
  public static newTokensManager(params: {
    configProvider: IConfigurationProvider
    blockchainClientProvider: IBlockchainManager
    contractsProvider: IContractsProvider
    cacheService?: ICacheService
    cacheTTLSeconds?: number
  }): ITokensManager {
    this.initialize(params)

    return new TokensManager({
      providers: this.providers,
      cacheService: params.cacheService,
      cacheTTLSeconds: params.cacheTTLSeconds,
    })
  }

  /** PRIVATE */

  /**
   * initialize
   * Initializes the different providers
   * @param params.configProvider The configuration provider used to get environment variables
   * @param params.blockchainClientProvider The blockchain client provider for blockchain interactions
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
