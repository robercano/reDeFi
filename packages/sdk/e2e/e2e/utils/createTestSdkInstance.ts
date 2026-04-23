import { makeSDK } from '@thesolidchain/sdk-client'
import { SDKApiUrl } from './testConfig'

/**
 * Creates a configured SDK instance for e2e tests
 * @returns Configured SDKManager instance
 */
export function createTestSdkInstance(): ReturnType<typeof makeSDK> {
  return makeSDK({
    apiDomainUrl: SDKApiUrl,
  })
}
