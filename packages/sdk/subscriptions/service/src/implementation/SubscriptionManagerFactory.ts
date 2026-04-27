import { SubscriptionProviderType, ISubscriptionManager, ISubscriptionProvider } from '@thesolidchain/subscriptions-common'
import { IBlockchainManager } from '@thesolidchain/blockchain-client-common'
import { IConfigurationProvider } from '@thesolidchain/configuration-provider-common'
import { IEventBus } from '@thesolidchain/events-common'
import { SubscriptionManager } from './SubscriptionManager'
import { DefaultRpcSubscriptionProvider } from './providers/DefaultRpcSubscriptionProvider'

export class SubscriptionManagerFactory {
  /**
   * @name newSubscriptionManager
   * @description Creates a new instance of SubscriptionManager
   */
  public static newSubscriptionManager(params: {
    configProvider: IConfigurationProvider,
    blockchainClientProvider: IBlockchainManager,
    eventBus?: IEventBus
  }): ISubscriptionManager {
    const providers = new Map<SubscriptionProviderType, ISubscriptionProvider>()

    // Initialize Default RPC Provider
    const defaultRpcProvider = new DefaultRpcSubscriptionProvider({
      type: SubscriptionProviderType.DEFAULT_RPC,
      configProvider: params.configProvider,
      blockchainClientProvider: params.blockchainClientProvider
    })
    providers.set(SubscriptionProviderType.DEFAULT_RPC, defaultRpcProvider)

    // Future providers (Alchemy Websockets, etc) can be added here

    return new SubscriptionManager({ providers, eventBus: params.eventBus })
  }
}
