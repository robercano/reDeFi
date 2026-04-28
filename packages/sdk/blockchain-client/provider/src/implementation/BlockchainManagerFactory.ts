import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IBlockchainClientProvider, IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { LoggingService } from '@thesolidchain/sdk-common'

import { AlchemyBlockchainProvider } from './AlchemyBlockchainProvider'
import { InfuraBlockchainProvider } from './InfuraBlockchainProvider'
import { BlockchainManager } from './BlockchainManager'

export class BlockchainManagerFactory {
  /**
   * newBlockchainManager
   * Creates a new instance of BlockchainManager
   */
  public static newBlockchainManager(params: {
    configProvider: IConfigurationProvider
  }): IBlockchainManager {
    const providers: IBlockchainClientProvider[] = []

    try {
      const alchemyProvider = new AlchemyBlockchainProvider({ configProvider: params.configProvider })
      providers.push(alchemyProvider)
    } catch (e) {
      LoggingService.error('Failed to initialize AlchemyBlockchainProvider: ', e)
    }

    try {
      const infuraProvider = new InfuraBlockchainProvider({ configProvider: params.configProvider })
      providers.push(infuraProvider)
    } catch (e) {
      LoggingService.error('Failed to initialize InfuraBlockchainProvider: ', e)
    }

    if (providers.length === 0) {
      throw new Error('No BlockchainClientProviders successfully initialized')
    }

    return new BlockchainManager({ providers })
  }
}
