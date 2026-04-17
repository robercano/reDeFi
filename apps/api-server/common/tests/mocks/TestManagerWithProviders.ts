import { TestManagerProvider, TestProviderType } from './TestManagerProvider'
import { ManagerWithProvidersBase } from '../../src'
import { IChainInfo, Maybe } from '@thesolidchain/sdk-common'

export class TestManager extends ManagerWithProvidersBase<TestProviderType, TestManagerProvider> {
  constructor(params: { providers: TestManagerProvider[] }) {
    super(params)
  }

  getBestProvider(params: {
    chainInfo: IChainInfo
    forceUseProvider?: TestProviderType
  }): Maybe<TestManagerProvider> {
    return this._getBestProvider(params)
  }
}
