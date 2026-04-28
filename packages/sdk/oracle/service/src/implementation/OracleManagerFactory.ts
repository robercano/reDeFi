import { type IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { ICacheService } from '@thesolidchain/api-server-common'
import { OracleManager } from './OracleManager'
import { OneInchOracleProvider } from './oneinch/OneInchOracleProvider'
import { CoingeckoOracleProvider } from './coingecko/CoingeckoOracleProvider'

/**
 * OracleManagerFactory
 * This class is responsible for creating instances of the OracleManager
 */
export class OracleManagerFactory {
  public static newOracleManager(params: {
    configProvider: IConfigurationProvider
    cacheService?: ICacheService
    cacheTTLSeconds?: number
  }): OracleManager {
    return new OracleManager({
      providers: [new OneInchOracleProvider(params), new CoingeckoOracleProvider(params)],
      cacheService: params.cacheService,
      cacheTTLSeconds: params.cacheTTLSeconds,
    })
  }
}
