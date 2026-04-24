import { TestManagerProvider, TestProviderType } from './TestManagerProvider'
import { ManagerWithFallbackProvidersBase, ICacheService } from '../../src'
import { IChainInfo } from '@thesolidchain/sdk-common'

export class TestManager extends ManagerWithFallbackProvidersBase<TestProviderType, TestManagerProvider> {
  constructor(params: { providers: TestManagerProvider[]; cacheService?: ICacheService; cacheTTLSeconds?: number }) {
    super(params)
  }

  getBestProvider(params: {
    chainInfo: IChainInfo
    forceUseProvider?: TestProviderType
  }): TestManagerProvider {
    return this._getBestProvider(params)
  }

  execute(params: {
    cacheKey: string
    chainInfo: IChainInfo
    action: (provider: TestManagerProvider) => Promise<string>
    forceUseProvider?: TestProviderType
  }) {
    return this._executeWithCacheAndFallback({
      cacheKey: params.cacheKey,
      chainInfo: params.chainInfo,
      action: params.action,
      forceUseProvider: params.forceUseProvider,
    })
  }
}
