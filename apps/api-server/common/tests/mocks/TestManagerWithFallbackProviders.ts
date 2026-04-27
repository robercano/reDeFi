import { TestManagerProvider, TestProviderType } from './TestManagerProvider'
import { ManagerWithFallbackProvidersBase } from '../../src'
import { IChainInfo } from '@thesolidchain/sdk-common'

export class TestManager extends ManagerWithFallbackProvidersBase<TestProviderType, TestManagerProvider> {
  constructor(params: { providers: TestManagerProvider[]; cacheTTLSeconds?: number }) {
    super(params)
  }

  getBestProvider(params: {
    chainInfo: IChainInfo
    forceUseProvider?: TestProviderType
  }): TestManagerProvider {
    return this._getBestProvider(params)
  }


}
